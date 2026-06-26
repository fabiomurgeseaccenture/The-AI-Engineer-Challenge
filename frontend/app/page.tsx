"use client";

import { useState, useRef, useEffect } from "react";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

type Message = {
  role: "user" | "assistant";
  content: string;
};

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi, I'm your mental coach. I'm here to listen and support you. How are you feeling today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail || "Server error");
      }

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Unknown error";
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `⚠️ ${msg}` },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="flex flex-col h-screen" style={{ background: "#faf7f2", color: "#3d2c1e" }}>

      {/* Header */}
      <header
        className="flex items-center gap-4 px-6 py-4 border-b"
        style={{
          background: "linear-gradient(135deg, #fdf9f4 0%, #f0e6d8 100%)",
          borderColor: "#e8e0d5",
        }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0"
          style={{ background: "#e8d8c8" }}
        >
          🧘
        </div>
        <div>
          <h1
            className="font-medium text-base leading-tight tracking-wide"
            style={{ color: "#3d2c1e" }}
          >
            Mental Coach AI
          </h1>
          <p
            className="text-xs tracking-widest uppercase mt-0.5"
            style={{ color: "#8a7060" }}
          >
            Always here for you
          </p>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto py-8 px-4">
        <div className="max-w-2xl mx-auto space-y-5">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[75%] px-5 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "rounded-br-sm text-white"
                    : "rounded-bl-sm shadow-sm"
                }`}
                style={
                  msg.role === "user"
                    ? { background: "#c4714a" }
                    : {
                        background: "#ffffff",
                        border: "1px solid #e8e0d5",
                        color: "#3d2c1e",
                      }
                }
              >
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div
                className="px-5 py-3 rounded-2xl rounded-bl-sm shadow-sm"
                style={{ background: "#ffffff", border: "1px solid #e8e0d5" }}
              >
                <span className="flex gap-1.5 items-center">
                  <span className="animate-bounce text-base" style={{ color: "#c4714a", opacity: 0.7 }}>•</span>
                  <span className="animate-bounce text-base [animation-delay:150ms]" style={{ color: "#c4714a", opacity: 0.7 }}>•</span>
                  <span className="animate-bounce text-base [animation-delay:300ms]" style={{ color: "#c4714a", opacity: 0.7 }}>•</span>
                </span>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </main>

      {/* Input */}
      <footer
        className="px-4 py-5 border-t"
        style={{ background: "#ffffff", borderColor: "#e8e0d5" }}
      >
        <div
          className="flex items-end gap-2 max-w-2xl mx-auto rounded-full px-4 py-2 shadow-md"
          style={{ background: "#f5f0e8", border: "1px solid #e8e0d5" }}
        >
          <textarea
            className="flex-1 resize-none bg-transparent text-sm leading-relaxed focus:outline-none py-1.5 max-h-32"
            style={{ color: "#3d2c1e" }}
            rows={1}
            placeholder="Share what's on your mind…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
          />
          <button
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{
              background: loading || !input.trim() ? "#e8d8c8" : "#c4714a",
              color: "#ffffff",
            }}
            onMouseEnter={(e) => {
              if (!loading && input.trim())
                (e.currentTarget as HTMLButtonElement).style.background = "#a85c38";
            }}
            onMouseLeave={(e) => {
              if (!loading && input.trim())
                (e.currentTarget as HTMLButtonElement).style.background = "#c4714a";
            }}
          >
            <SendIcon />
          </button>
        </div>
        <p
          className="text-center text-xs mt-2 tracking-wide"
          style={{ color: "#b8a898" }}
        >
          Press Enter to send · Shift+Enter for new line
        </p>
      </footer>
    </div>
  );
}
