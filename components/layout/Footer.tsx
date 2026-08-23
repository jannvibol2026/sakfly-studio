import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Github, Twitter, Linkedin } from "lucide-react";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/app/dashboard", label: "Dashboard" },
    ],
  },
  {
    title: "AI Tools",
    links: [
      { href: "/app/assistant", label: "AI Assistant" },
      { href: "/app/image", label: "Image Generator" },
      { href: "/app/voice", label: "Voice Generator" },
      { href: "/app/music", label: "Music Generator" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-base/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Logo size={28} className="text-accent-light" />
              <span className="text-lg font-bold text-white">SAKFLY Studio</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-slate-400">
              Create, Generate, and Innovate with AI. Your complete AI creation
              platform powered by Google Vertex AI.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="rounded-full border border-white/10 p-2 text-slate-400 transition-colors hover:text-white hover:border-accent/40"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="rounded-full border border-white/10 p-2 text-slate-400 transition-colors hover:text-white hover:border-accent/40"
              >
                <Github size={16} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="rounded-full border border-white/10 p-2 text-slate-400 transition-colors hover:text-white hover:border-accent/40"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} SAKFLY Studio. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Built with Next.js · Powered by Google Vertex AI
          </p>
        </div>
      </div>
    </footer>
  );
}
