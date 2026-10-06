"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Loader2 } from "lucide-react";


export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Set welcome message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "init",
          role: "assistant",
          content: "Hello! I am the MECH SPACE AI Solution Advisor. I can help you with Gantry Automation, Robotic Solutions, Conveyors, and Custom Machines. How can I assist you today?"
        }
      ]);
    }
  }, [isOpen, messages.length]);

  const QUICK_REPLIES = [
    "🤖 Gantry Systems",
    "🔄 Conveyor Automation",
    "⚡ Robotic Solutions",
    "📞 Book a Call"
  ];

  const handleQuickReply = (text: string) => {
    if (text === "📞 Book a Call") {
      window.location.href = "/contact";
      return;
    }
    setInput(text);
    // Use a timeout to allow state to update before submitting
    setTimeout(() => {
      const form = document.getElementById('chat-form') as HTMLFormElement;
      if (form) form.requestSubmit();
    }, 50);
  };

  const formatMessage = (content: string) => {
    // Basic markdown parsing: **bold**, newlines, and bullets
    return content.split('\n').map((line, i) => {
      // Handle bullets
      const isBullet = line.trim().startsWith('- ') || line.trim().startsWith('* ');
      let formattedLine = isBullet ? line.trim().substring(2) : line;
      
      // Handle bold text (**text**)
      const parts = formattedLine.split(/(\*\*.*?\*\*)/g);
      const lineContent = parts.map((part, j) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={j} className="font-bold text-accent-primary">{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      if (isBullet) {
        return (
          <div key={i} className="flex gap-2 mt-1">
            <span className="text-accent-primary mt-1">•</span>
            <span>{lineContent}</span>
          </div>
        );
      }

      return (
        <span key={i} className={i > 0 && !isBullet ? "block mt-2" : ""}>
          {lineContent}
        </span>
      );
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = { id: Date.now().toString(), role: "user", content: input };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      console.log('[ChatWidget] Sending messages to /api/chat:', newMessages);
      
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages })
      });

      console.log('[ChatWidget] Response status:', res.status, res.statusText);
      
      if (!res.ok) {
        // Try to parse error details
        let errorDetail = 'Unknown error';
        const bodyText = await res.text();
        try {
          const errorData = JSON.parse(bodyText);
          errorDetail = errorData.error || errorData.reply || JSON.stringify(errorData);
          console.error('[ChatWidget] Server error:', {
            status: res.status,
            statusText: res.statusText,
            errorDetail,
            fullResponse: errorData
          });
        } catch (parseErr) {
          console.error('[ChatWidget] Server error (non-JSON response):', {
            status: res.status,
            statusText: res.statusText,
            body: bodyText
          });
          errorDetail = `HTTP ${res.status}: ${res.statusText}`;
        }
        
        const errorMessage = res.status === 500 
          ? `Server Error (500): ${errorDetail}`
          : res.status === 429
          ? 'Rate limit exceeded. Please try again later.'
          : `Error: ${errorDetail}`;
        
        setMessages(prev => [...prev, { 
          id: Date.now().toString(), 
          role: "assistant", 
          content: `❌ ${errorMessage}` 
        }]);
        setIsLoading(false);
        return;
      }

      const data = await res.json();
      console.log('[ChatWidget] Response data:', data);
      
      if (data.reply) {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          role: "assistant",
          content: data.reply
        }]);
      } else if (data.error) {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          role: "assistant",
          content: `⚠️ ${data.error}`
        }]);
      }
    } catch (err: any) {
      console.error('[ChatWidget] Network error:', {
        message: err?.message,
        name: err?.name,
        stack: err?.stack?.split('\n')[0]
      });
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: "assistant", 
        content: `🌐 Connection failed: ${err?.message || 'Network error'}` 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-scroll to latest message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 right-8 z-[100] bg-accent-primary hover:bg-accent-hover text-bg-primary p-4 rounded-full shadow-2xl flex items-center justify-center transition-colors group"
          >
            <span className="absolute inset-0 rounded-full bg-accent-primary animate-ping opacity-20"></span>
            <MessageSquare size={28} className="relative z-10 group-hover:scale-110 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-8 z-[100] w-full max-w-[380px] bg-bg-surface border border-border-light rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px] font-barlow"
          >
            {/* Chat Header */}
            <div className="bg-accent-primary p-4 flex items-center justify-between text-bg-primary shrink-0">
              <div className="flex items-center gap-3">
                <div className="bg-bg-primary/20 p-2 rounded-lg">
                  <Bot size={20} className="text-bg-primary" />
                </div>
                <div>
                  <h3 className="font-barlow-condensed font-bold uppercase tracking-wider leading-none">MECH SPACE</h3>
                  <p className="text-xs text-bg-primary/80 font-medium">Technical Assistant</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-bg-primary/80 hover:text-bg-primary transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-bg-primary">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex items-start gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-bg-surface-alt border border-border-light text-text-medium" : "bg-accent-primary/10 text-accent-primary"}`}>
                    {msg.role === "user" ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  
                  {/* Message Content */}
                  <div className="max-w-[80%] flex flex-col gap-2">
                    {msg.content && (
                      <div 
                        className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                          msg.role === "user" 
                            ? "bg-bg-surface border border-border-light text-text-high rounded-tr-none" 
                            : "bg-bg-surface-alt border border-border-light text-text-high rounded-tl-none"
                        }`}
                      >
                        {msg.role === "assistant" ? formatMessage(msg.content) : msg.content}
                      </div>
                    )}
                    
                    {/* Add Book Call CTA if recommended */}
                    {msg.role === 'assistant' && msg.content.toLowerCase().includes('book a call') && (
                      <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-accent-primary text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-accent-hover transition-colors shadow-sm self-start mt-1">
                        Book Consultation
                      </a>
                    )}
                    
                    {/* Render Tool Invocations if Agent is calling saveLead */}
                    {msg.toolInvocations?.map((toolInvocation: any) => {
                      const { toolName, toolCallId, state } = toolInvocation;
                      if (state === 'result' && toolName === 'saveLead') {
                        return (
                          <div key={toolCallId} className="p-3 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] text-xs rounded-tl-none shadow-sm">
                            ✅ <b>Lead Captured:</b> Our engineering team has received your information.
                          </div>
                        );
                      }
                      if (state === 'call' && toolName === 'saveLead') {
                        return (
                          <div key={toolCallId} className="p-3 rounded-2xl bg-accent-secondary/10 border border-accent-secondary/20 text-accent-secondary text-xs rounded-tl-none animate-pulse shadow-sm">
                            ⏳ <b>Saving Details...</b> Processing contact info...
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              ))}
              {isLoading && messages.length > 0 && messages[messages.length - 1].role === 'user' && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent-primary/10 text-accent-primary flex items-center justify-center shrink-0">
                    <Bot size={16} />
                  </div>
                  <div className="p-4 rounded-2xl bg-bg-surface-alt border border-border-light rounded-tl-none">
                    <Loader2 size={16} className="text-accent-primary animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form id="chat-form" onSubmit={handleSubmit} className="p-4 bg-bg-surface border-t border-border-light shrink-0">
              {/* Quick Replies */}
              {messages.length === 1 && (
                <div className="flex gap-2 overflow-x-auto pb-3 mb-1 no-scrollbar whitespace-nowrap">
                  {QUICK_REPLIES.map((reply) => (
                    <button
                      key={reply}
                      type="button"
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs border border-accent-primary/30 bg-accent-primary/5 hover:bg-accent-primary/10 text-accent-primary px-3 py-1.5 rounded-full transition-colors shrink-0 font-medium"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input || ""}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about our automation systems..."
                  className="w-full bg-bg-primary border border-border-light text-text-high text-sm rounded-full py-3 pl-4 pr-12 focus:outline-none focus:border-accent-primary transition-colors placeholder:text-text-medium/50"
                  disabled={isLoading}
                />
                <button 
                  type="submit"
                  disabled={!(input || '').trim() || isLoading}
                  className="absolute right-2 bg-accent-primary hover:bg-accent-hover disabled:bg-bg-surface-alt disabled:text-text-medium text-white p-2 rounded-full transition-colors"
                >
                  <Send size={16} className="relative ml-[2px]" />
                </button>
              </div>
              <p className="text-[11px] text-text-medium/70 mt-3 text-center">
                By messaging, you agree to our <a href="/privacy-policy" className="underline hover:text-accent-primary transition-colors">Privacy Policy</a>.
              </p>
              <div className="text-[10px] text-center text-text-medium mt-2 font-rajdhani uppercase tracking-widest">
                MECH SPACE AI — POWERED BY GROQ
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
