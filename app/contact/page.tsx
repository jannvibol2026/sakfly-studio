import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";
import { MarketingChrome } from "@/components/layout/MarketingChrome";
import { ContactForm } from "@/components/sections/ContactForm";
import { getInitials } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the SAKFLY Studio team.",
};

const team = [
  {
    name: "Chea Soksan",
    role: "Founder",
    bio: "Leads product vision and strategy for SAKFLY Studio, focused on making AI creation tools accessible to every creator.",
  },
  {
    name: "Yann Veha",
    role: "Frontend Developer",
    bio: "Builds and refines the SAKFLY Studio interface, focused on fast, accessible, and delightful user experiences.",
  },
  {
    name: "Kom Klang",
    role: "Backend Developer",
    bio: "Architects the platform's backend systems, integrations, and the infrastructure powering every AI generation.",
  },
];

export default function ContactPage() {
  return (
    <MarketingChrome>
      <section className="px-4 pt-20 pb-10 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Get in <span className="text-gradient">touch</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-slate-400">
          Questions, feedback, or partnership ideas? Send us a message and
          our team will respond soon.
        </p>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2">
          <ContactForm />

          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent-light">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Email support</p>
                  <p className="text-sm text-slate-400">Contact via form</p>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent-light">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Response time</p>
                  <p className="text-sm text-slate-400">Typically within 1-2 business days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-white">Meet the team</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-slate-400">
            The people building SAKFLY Studio.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="glass-card rounded-2xl p-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-lg font-semibold text-accent-light">
                  {getInitials(member.name)}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-accent-light">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{member.bio}</p>
                <p className="mt-3 text-xs text-slate-500">Contact via form</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MarketingChrome>
  );
}
