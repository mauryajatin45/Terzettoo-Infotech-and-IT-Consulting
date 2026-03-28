import { GoogleGenAI } from '@google/genai';

export const maxDuration = 60; // Allow sufficient time for AI processing

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "API Key is missing." }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }

    const ai = new GoogleGenAI({
      apiKey,
    });

    const tools = [
      {
        googleSearch: {}
      },
    ];

    const systemInstruction = `
You are the official Terzettoo AI Support Assistant.
Terzettoo (based in Ahmedabad, Gujarat, India) is an Infotech and IT consulting company delivering innovative software solutions, digital transformation, and expert consulting.
Key Services:
- Mobile Development: iOS, Android, Flutter, React Native
- Web Development: React, Shopify, Frontend, WordPress, E-commerce
- Backend: Java, PHP, .NET, Python, AWS
- AI & Tech: AI/ML, Data Analytics, Computer Vision, Chatbot Development
- Marketing: SEO, Digital Marketing, PPC, Social Media
- Consulting: IT Roadmaps, MVP Planning, SaaS Strategy

Contact: admin@terzettoo.com | WhatsApp/Phone: +91 7016569676 | Web: www.terzettoo.com
Tone: Professional, expert, helpful, and concise. Your goal is to help visitors understand Terzettoo's capabilities and encourage them to contact us for projects. Keep responses formatted in Markdown.

Use your Google Search tool if the user asks broad current events, but prioritize Terzettoo info.
`;

    // Map internal 'ai' messages array to genai contents
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }],
    }));

    // Optionally inject system instruction context as the first message or inside config
    // We add it to config as systemInstruction Parts
    const config = {
      temperature: 1, // Adjusted from 2 to 1 for more focused, factual bot responses
      // The snippet used thinkingConfig but preview models might restrict it conditionally, commenting out to avoid errors just in case, or using a fallback text.
      // thinkingConfig: { thinkingLevel: 'MEDIUM' }, 
      systemInstruction: { parts: [{ text: systemInstruction }] },
      tools,
    };

    const response = await ai.models.generateContentStream({
      model: 'gemini-3.1-flash-lite-preview',
      config,
      contents,
    });

    // We manually stream chunks using the Vercel AI SDK text protocol (0:"text"\n) 
    // so it perfectly interfaces with the useChat hook on the client.
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of response) {
            if (chunk.text) {
              const textChunk = JSON.stringify(chunk.text);
              controller.enqueue(new TextEncoder().encode(`0:${textChunk}\n`));
            }
          }
          controller.close();
        } catch (error) {
          console.error("Stream error:", error);
          controller.error(error);
        }
      }
    });

    return new Response(stream, { 
      headers: { 'Content-Type': 'text/plain; charset=utf-8' } 
    });
  } catch (error: unknown) {
    console.error("Chat API Error:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(JSON.stringify({ error: errorMessage }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
