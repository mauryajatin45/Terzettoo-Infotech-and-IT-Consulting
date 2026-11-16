import OpenAI from 'openai';

export const maxDuration = 60; // Allow sufficient time for AI processing

const MAX_MESSAGES = 20;
const MAX_CHARS_PER_MESSAGE = 2000;
const encoder = new TextEncoder();

// Reuse one client per server process instead of creating one per request.
let openaiClient: OpenAI | null = null;
function getClient(apiKey: string) {
  if (!openaiClient) openaiClient = new OpenAI({ apiKey });
  return openaiClient;
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const messages = Array.isArray(body?.messages) ? body.messages : null;
    if (!messages || messages.length === 0) {
      return new Response(JSON.stringify({ error: "Invalid request." }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const apiKey = process.env.Chat_GPT_key;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "API Key is missing." }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }

    const openai = getClient(apiKey);

    const systemInstruction = `
You are the official Terzettoo AI Support Assistant.
Terzettoo (based in Ahmedabad, Gujarat, India) is an Infotech and IT consulting company delivering innovative software solutions, digital transformation, and expert consulting.

Key Services:
- Mobile Development: iOS, Android, Flutter, React Native, iPad App Development
- Web Development: React, Shopify, Frontend, WordPress, E-commerce Portal, Shopping Cart, UI/UX, Graphic Design
- Backend: Java, PHP, .NET, Python, AWS
- AI & Tech: AI/ML, Data Analytics, Computer Vision, Chatbot Development
- Marketing: SEO, Digital Marketing, PPC, Social Media, Content Marketing & Strategy
- Consulting & Strategy: IT Roadmaps, Technical Product Roadmaps, MVP Planning, SaaS Strategy & Advisory, Tech Stack Recommendations, Project Oversight & Quality Monitoring, ERP Implementation & Customization, Client Vendor Matching

Contact: admin@terzettoo.com | WhatsApp/Phone: +91 7016569676 | Web: www.terzettoo.com
Office Address: Office No. 809, Plot No.-146/2, MOUNT BIZPARK, Vaishnodevi Circle, Sardar Patel Ring Rd, near Malabar Exotica, opp. Dwarkesh Opulence, Tragad, Gujarat 382470

CRITICAL INSTRUCTIONS - OUT OF SCOPE TOPICS:
You are strictly limited to answering questions related to Terzettoo, our IT consulting services, software development, and our company. 
Under NO CIRCUMSTANCES should you answer questions that are unrelated to Terzettoo's business.
- If a user asks for general programming help (e.g., "give me a java program", "write a python script"), politely decline and state that you are here to discuss Terzettoo's services. Do NOT write code for them.
- If a user asks general knowledge, math questions (e.g., "what is 1+1"), historical facts, or anything not related to IT services offered by Terzettoo, politely decline.
Example of refusal: "I'm the Terzettoo AI Assistant, focused on our IT services and solutions. I cannot help with general programming or math questions, but I'd be happy to tell you how our team of experts can assist with your project!"

Tone: Professional, expert, helpful, and concise. Your goal is to help visitors understand Terzettoo's capabilities and encourage them to contact us for projects. Keep responses formatted in Markdown.
`;


    // Map internal messages array to openai contents
    const formattedMessages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      { role: 'system', content: systemInstruction },
      // Only keep the latest messages and cap their size so a client can't
      // send huge payloads that sit in server memory (and burn API credits).
      ...messages.slice(-MAX_MESSAGES).map((m: { role: string; content: unknown }) => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: String(m.content ?? '').slice(0, MAX_CHARS_PER_MESSAGE),
      })),
    ];

    const responseStream = await openai.chat.completions.create(
      {
        model: 'gpt-4o-mini',
        messages: formattedMessages,
        stream: true,
        temperature: 1, // Adjusted for more focused, factual bot responses
      },
      { signal: req.signal } // stop the upstream call if the visitor disconnects
    );

    // We manually stream chunks using the Vercel AI SDK text protocol (0:"text"\n) 
    // so it perfectly interfaces with the useChat hook on the client.
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of responseStream) {
            const content = chunk.choices[0]?.delta?.content;
            if (content) {
              const textChunk = JSON.stringify(content);
              controller.enqueue(encoder.encode(`0:${textChunk}\n`));
            }
          }
          controller.close();
        } catch (error) {
          console.error("Stream error:", error);
          controller.error(error);
        }
      },
      cancel() {
        // Client went away: abort the OpenAI stream so it doesn't keep running.
        responseStream.controller.abort();
      },
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
