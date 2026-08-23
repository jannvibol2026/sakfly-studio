"use client";

import { useRef, useState, type FormEvent } from "react";
import {
  Send,
  Paperclip,
  Copy,
  Download,
  Plus,
  MessageSquare,
  Bot,
  User as UserIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/Input";
import { MarkdownLite } from "@/components/app/MarkdownLite";
import { cn, generateId, sleep } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface Session {
  id: string;
  title: string;
  messages: Message[];
}

const initialSessions: Session[] = [
  {
    id: "s1",
    title: "Marketing plan summary",
    messages: [
      { id: "m1", role: "user", content: "Summarize this quarter's marketing plan in 3 bullet points." },
      {
        id: "m2",
        role: "assistant",
        content:
          "Here's a quick summary:\n\n- Focus on short-form video across social channels\n- Launch a referral program with in-app credits\n- Increase content cadence for the AI Assistant and Image Generator tools",
      },
    ],
  },
  {
    id: "s2",
    title: "Landing page copy ideas",
    messages: [
      { id: "m3", role: "user", content: "Give me 3 headline ideas for an AI SaaS landing page." },
    ],
  },
];

// TODO: Replace this mock response generator with a real call to
// Vertex AI Gemini, e.g. POST /api/assistant -> Vertex AI generateContent().
function mockAssistantReply(prompt: string): string {
  return `Here's a response to: **"${prompt}"**\n\nThis is a simulated reply from the AI Assistant demo. In production, this message would come from **Vertex AI Gemini** via the \`/api/assistant\` route.\n\n### Suggested next steps\n- Refine your prompt with more context\n- Try uploading a reference file\n- Export this response using the button above\n\n\`\`\`\nExample code block rendering\nconst response = await gemini.generate(prompt);\n\`\`\``;
}

export default function AssistantPage() {
  const [sessions, setSessions] = useState<Session[]>(initialSessions);
  const [activeId, setActiveId] = useState(initialSessions[0].id);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const activeSession = sessions.find((s) => s.id === activeId)!;

  function updateMessages(sessionId: string, updater: (msgs: Message[]) => Message[]) {
    setSessions((prev) =>
      prev.map((s) => (s.id === sessionId ? { ...s, messages: updater(s.messages) } : s))
    );
  }

  function newChat() {
    const session: Session = { id: generateId("s"), title: "New chat", messages: [] };
    setSessions((prev) => [session, ...prev]);
    setActiveId(session.id);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!input.trim() || loading) return;
    const userMsg: Message = { id: generateId("m"), role: "user", content: input.trim() };
    updateMessages(activeId, (msgs) => [...msgs, userMsg]);
    setInput("");
    setLoading(true);

    // Simulated network + generation delay for demo purposes.
    await sleep(1200);

    // TODO: Replace with real fetch("/api/assistant", { method: "POST", body: ... })
    const reply: Message = {
      id: generateId("m"),
      role: "assistant",
      content: mockAssistantReply(userMsg.content),
    };
    updateMessages(activeId, (msgs) => [...msgs, reply]);
    setLoading(false);
  }

  function copyMessage(content: string) {
    navigator.clipboard?.writeText(content);
  }

  function exportMessage(content: string) {
    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sakfly-response.md";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="flex h-[calc(100vh-6rem)] gap-6">
      {/* Chat history sidebar */}
      <div className="hidden w-64 shrink-0 flex-col gap-2 lg:flex">
        <Button variant="secondary" onClick={newChat} className="mb-2 w-full">
          <Plus size={16} /> New chat
        </Button>
        <div className="flex-1 space-y-1 overflow-y-auto">
          {sessions.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={cn(
                "flex w-full items-center gap-2 truncate rounded-xl px-3 py-2.5 text-left text-sm transition-colors",
                s.id === activeId
                  ? "bg-accent/15 text-white border border-accent/30"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              )}
            >
              <MessageSquare size={14} className="shrink-0" />
              <span className="truncate">{s.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat window */}
      <div className="glass-card flex flex-1 flex-col rounded-2xl">
        <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
          <div>
            <h1 className="text-base font-semibold text-white">AI Assistant</h1>
            <p className="text-xs text-slate-500">Powered by Vertex AI Gemini · Demo mode</p>
          </div>
        </div>

        <div className="flex-1 space-y-6 overflow-y-auto px-6 py-6">
          {activeSession.messages.length === 0 && (
            <div className="flex h-full flex-col items-center justify-center text-center text-slate-500">
              <Bot size={32} className="mb-3 text-accent-light" />
              <p className="text-sm">Start a conversation with the AI Assistant.</p>
            </div>
          )}
          {activeSession.messages.map((msg) => (
            <div key={msg.id} className="flex items-start gap-3">
              <div
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                  msg.role === "user" ? "bg-white/10 text-white" : "bg-accent/20 text-accent-light"
                )}
              >
                {msg.role === "user" ? <UserIcon size={15} /> : <Bot size={15} />}
              </div>
              <div className="min-w-0 flex-1">
                <p className="mb-1 text-xs font-medium text-slate-500">
                  {msg.role === "user" ? "You" : "SAKFLY Assistant"}
                </p>
                <div className="glass rounded-xl px-4 py-3">
                  <MarkdownLite content={msg.content} />
                </div>
                {msg.role === "assistant" && (
                  <div className="mt-2 flex gap-2">
                    <button
                      onClick={() => copyMessage(msg.content)}
                      className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs text-slate-500 hover:bg-white/5 hover:text-white"
                    >
                      <Copy size={12} /> Copy
                    </button>
                    <button
                      onClick={() => exportMessage(msg.content)}
                      className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs text-slate-500 hover:bg-white/5 hover:text-white"
                    >
                      <Download size={12} /> Export
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/20 text-accent-light">
                <Bot size={15} />
              </div>
              <div className="glass flex items-center gap-1.5 rounded-xl px-4 py-3">
                <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-accent-light" />
                <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-accent-light [animation-delay:0.2s]" />
                <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-accent-light [animation-delay:0.4s]" />
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="border-t border-white/5 p-4">
          <div className="flex items-end gap-2">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-slate-400 hover:text-white"
              aria-label="Upload file"
            >
              <Paperclip size={16} />
            </button>
            <input ref={fileInputRef} type="file" className="hidden" />
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e as unknown as FormEvent);
                }
              }}
              rows={1}
              placeholder="Ask the AI Assistant anything..."
              className="max-h-32 flex-1 resize-none"
            />
            <Button type="submit" disabled={loading || !input.trim()} className="shrink-0">
              <Send size={16} />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
