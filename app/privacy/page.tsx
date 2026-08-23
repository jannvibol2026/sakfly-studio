import type { Metadata } from "next";
import { MarketingChrome } from "@/components/layout/MarketingChrome";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SAKFLY Studio Privacy Policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <MarketingChrome>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="glass-card mx-auto max-w-4xl rounded-3xl p-8 sm:p-12">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Privacy Policy</h1>
          <p className="mt-2 text-sm text-slate-500">Last updated: August 23, 2026</p>

          <div className="prose-invert mt-8 space-y-8 text-slate-300">
            <div>
              <h2 className="text-xl font-semibold text-white">1. Introduction</h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                SAKFLY Studio (&ldquo;SAKFLY,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your
                privacy and is committed to protecting your personal data.
                This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information when you use our website and
                AI creation platform (the &ldquo;Service&rdquo;), and describes your
                rights under applicable data protection laws, including the
                EU General Data Protection Regulation (&ldquo;GDPR&rdquo;) and other
                regional privacy laws.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">2. Information We Collect</h2>
              <p className="mt-3 leading-relaxed text-slate-400">We collect the following categories of information:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-400">
                <li>
                  <span className="font-medium text-slate-300">Account information:</span> name, email address, password (hashed), and profile details you provide when registering.
                </li>
                <li>
                  <span className="font-medium text-slate-300">Content data:</span> prompts, text, images, audio, and music you generate or upload using our AI tools (AI Assistant, Image Generator, Voice Generator, Music Generator).
                </li>
                <li>
                  <span className="font-medium text-slate-300">Billing information:</span> subscription plan, invoices, and payment metadata processed via Stripe (we do not store full card numbers).
                </li>
                <li>
                  <span className="font-medium text-slate-300">Usage data:</span> pages visited, features used, generation counts, and device/browser information collected automatically.
                </li>
                <li>
                  <span className="font-medium text-slate-300">Communications:</span> messages you send us through the contact form or support channels.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">3. How We Use Your Information</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-400">
                <li>To provide, operate, and maintain the Service, including generating content via Google Vertex AI models.</li>
                <li>To process payments and manage subscriptions through Stripe.</li>
                <li>To authenticate users and secure accounts via Firebase Authentication.</li>
                <li>To respond to support requests and contact form submissions.</li>
                <li>To improve platform performance, reliability, and user experience.</li>
                <li>To send important account, billing, and security notifications.</li>
                <li>To comply with legal obligations and enforce our Terms of Service.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">4. Legal Basis for Processing (GDPR)</h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                Where GDPR applies, we process personal data under one or
                more of the following legal bases: performance of a
                contract (providing the Service you signed up for),
                legitimate interests (improving and securing the Service),
                consent (e.g. marketing communications), and compliance with
                legal obligations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">5. Data Sharing and Third Parties</h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                We do not sell your personal data. We share data only with
                service providers necessary to operate SAKFLY Studio,
                including:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-400">
                <li>Google Cloud / Vertex AI — for AI content generation (Gemini, Imagen, TTS, Lyria).</li>
                <li>Firebase — for authentication and data storage.</li>
                <li>Stripe — for payment processing and subscription billing.</li>
                <li>Analytics and infrastructure providers — to monitor performance and reliability.</li>
              </ul>
              <p className="mt-3 leading-relaxed text-slate-400">
                Each provider is bound by contractual obligations to protect your data and use it only for the purposes we specify.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">6. Data Retention</h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                We retain account and content data for as long as your
                account is active or as needed to provide the Service. You
                may request deletion of your account and associated data at
                any time, subject to legal retention requirements (e.g. billing records).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">7. Your Rights (GDPR and beyond)</h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                Depending on your location, you may have the right to:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-400">
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate data.</li>
                <li>Request deletion (&ldquo;right to be forgotten&rdquo;).</li>
                <li>Request a portable copy of your data.</li>
                <li>Object to or restrict certain processing.</li>
                <li>Withdraw consent at any time where processing is based on consent.</li>
              </ul>
              <p className="mt-3 leading-relaxed text-slate-400">
                To exercise these rights, contact us through the contact
                form at{" "}
                <a href="/contact" className="text-accent-light underline">
                  /contact
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">8. Data Security</h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                We use industry-standard safeguards, including encrypted
                storage, secure authentication via Firebase, and restricted
                internal access, to protect your data from unauthorized
                access, alteration, or disclosure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">9. International Data Transfers</h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                Your data may be processed on servers located outside your
                country of residence, including in the United States, via
                our infrastructure providers (Google Cloud, Firebase,
                Stripe). We rely on appropriate safeguards, such as standard
                contractual clauses, where required.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">10. Cookies and Tracking</h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                We use essential cookies to keep you signed in and remember
                your preferences (such as dark mode). We may use analytics
                cookies to understand aggregate usage patterns; you can
                control cookie preferences through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">11. Children&apos;s Privacy</h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                SAKFLY Studio is not directed at children under 16, and we
                do not knowingly collect personal data from children.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">12. Changes to This Policy</h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                We may update this Privacy Policy from time to time. We will
                notify users of material changes via email or an in-app
                notice, and the &ldquo;Last updated&rdquo; date above will reflect the
                latest revision.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">13. Contact Us</h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                If you have questions about this Privacy Policy or how we
                handle your data, please reach out via our{" "}
                <a href="/contact" className="text-accent-light underline">
                  contact form
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </MarketingChrome>
  );
}
