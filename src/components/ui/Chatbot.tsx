"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ id: string; role: string; content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    const userMessage = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        let displayError = "Sorry, I am currently experiencing technical difficulties.";
        if (errorText.includes("429")) {
          displayError = "Sorry, I am currently out of API capacity. Please check your Gemini API quota and billing details.";
        }
        setMessages(prev => [...prev, { id: 'bot-' + Date.now(), role: 'model', content: "⚠️ " + displayError }]);
        return;
      }

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let done = false;
      const botMessageId = 'bot-' + Date.now();
      
      setMessages(prev => [...prev, { id: botMessageId, role: 'model', content: '' }]);

      let buffer = '';
      while (reader && !done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() || '';
          
          let newText = "";
          for (const line of lines) {
            if (line.startsWith('0:')) {
              try {
                newText += JSON.parse(line.substring(2));
              } catch {}
            }
          }
          if (newText) {
            setMessages(prev => prev.map(m => m.id === botMessageId ? { ...m, content: m.content + newText } : m));
          }
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed z-40 flex items-center justify-center w-14 h-14 bg-[#d90429] rounded-full shadow-lg hover:bg-[#ef233c] text-white transition-colors duration-300 cursor-pointer
          bottom-6 left-6 
          md:bottom-24 md:left-auto md:right-6
          ${isOpen ? 'hidden md:flex md:opacity-0 md:pointer-events-none' : ''}
        `}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open Chat Assistant"
      >
        <MessageCircle size={28} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`fixed z-50 flex flex-col bg-white border border-gray-200 shadow-2xl rounded-2xl overflow-hidden
              inset-4 
              md:inset-auto md:bottom-24 md:right-24 md:w-96 md:h-[500px]
            `}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#d90429] text-white">
              <div className="flex items-center space-x-2">
                <Bot size={20} />
                <h3 className="font-semibold text-sm">Terzettoo Assistant</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-md transition-colors"
                aria-label="Close Chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#edf2f4]">
              {messages.length === 0 && (
                <div className="flex items-center justify-center h-full text-center text-sm text-gray-500">
                  <div className="max-w-[80%]">
                    <p className="font-medium text-gray-700">Hi there! 👋</p>
                    <p className="mt-1">I&apos;m the Terzettoo AI Assistant. How can I help accelerate your business growth today?</p>
                  </div>
                </div>
              )}
              
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-end space-x-2 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center ${m.role === 'user' ? 'bg-[#2b2d42] text-white' : 'bg-white border text-[#d90429]'}`}>
                      {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm whitespace-pre-wrap leading-relaxed ${
                      m.role === 'user' 
                        ? 'bg-[#2b2d42] text-white rounded-br-sm shadow-md' 
                        : 'bg-white text-gray-800 rounded-bl-sm shadow-sm border border-gray-100'
                    }`}>
                      {m.content}
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-end space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white border text-[#d90429] flex items-center justify-center">
                      <Bot size={16} />
                    </div>
                    <div className="p-4 rounded-2xl bg-white rounded-bl-sm border border-gray-100 shadow-sm">
                      <div className="flex space-x-1.5">
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-100">
              <form onSubmit={handleSubmit} className="flex relative items-center">
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Type your message..."
                  className="flex-1 w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#d90429]/50 focus:border-transparent text-sm transition-all text-gray-800"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-2 
                    bg-[#d90429] text-white rounded-full 
                    disabled:opacity-50 disabled:bg-gray-300 disabled:text-gray-500
                    hover:bg-[#ef233c] transition-colors"
                  aria-label="Send message"
                >
                  <Send size={16} className={isLoading ? 'opacity-50' : ''} />
                </button>
              </form>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
