import type { Metadata } from "next";
import { MarketingChrome } from "@/components/layout/MarketingChrome";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "SAKFLY Studio Terms of Service — the rules governing use of our platform.",
};

export default function TermsPage() {
  return (
    <MarketingChrome>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="glass-card mx-auto max-w-4xl rounded-3xl p-8 sm:p-12">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Terms of Service</h1>
          <p className="mt-2 text-sm text-slate-500">Last updated: August 23, 2026</p>

          <div className="mt-8 space-y-8 text-slate-300">
            <div>
              <h2 className="text-xl font-semibold text-white">1. Acceptance of Terms</h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                By accessing or using SAKFLY Studio (the &ldquo;Service&rdquo;), you
                agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If
                you do not agree to these Terms, do not use the Service.
                These Terms apply to all visitors, users, and others who
                access or use the Service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">2. Description of Service</h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                SAKFLY Studio provides an AI creation platform including an
                AI Assistant (powered by Vertex AI Gemini), AI Image
                Generator (Vertex AI Imagen), Voice Generator (Vertex AI
                TTS), and AI Music Generator (Vertex AI Lyria), along with
                supporting dashboard, billing, and account management
                features.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">3. Accounts and Eligibility</h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                You must create an account to access most features. You are
                responsible for maintaining the confidentiality of your
                login credentials and for all activity under your account.
                You must be at least 16 years old to use the Service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">4. Subscription Plans and Billing</h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                SAKFLY Studio offers Free, Pro, and Pro+ subscription plans.
                Paid plans are billed monthly or annually in advance via
                Stripe. Credits reset each billing cycle and do not carry
                over. You may upgrade, downgrade, or cancel your
                subscription at any time from the Billing page; cancellations
                take effect at the end of the current billing period unless
                otherwise stated.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">5. Acceptable Use</h2>
              <p className="mt-3 leading-relaxed text-slate-400">You agree not to use the Service to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-400">
                <li>Generate unlawful, hateful, defamatory, or infringing content.</li>
                <li>Generate content that impersonates real individuals without consent.</li>
                <li>Attempt to reverse-engineer, disrupt, or overload the Service or its underlying AI models.</li>
                <li>Resell or redistribute access to the Service without authorization.</li>
                <li>Upload malicious files or attempt unauthorized access to other accounts.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">6. Ownership of Generated Content</h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                Subject to your compliance with these Terms, you own the
                text, images, voice, and music you generate using SAKFLY
                Studio. You are responsible for ensuring your use of
                generated content complies with applicable laws and
                third-party rights. SAKFLY Studio retains no ownership claim
                over your generated content, but may retain copies for
                operational, backup, and safety purposes as described in our
                Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">7. Intellectual Property</h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                The SAKFLY Studio name, logo, interface, and underlying
                software are the property of SAKFLY Studio and its
                licensors. You may not copy, modify, or create derivative
                works of the platform itself without written permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">8. Third-Party Services</h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                The Service relies on third-party infrastructure, including
                Google Cloud / Vertex AI, Firebase, and Stripe. Availability
                and performance of AI generation features may be affected by
                the availability of these third-party services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">9. Disclaimers</h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
                warranties of any kind, express or implied. AI-generated
                content may occasionally be inaccurate, offensive, or
                unsuitable for a given purpose; you are responsible for
                reviewing content before use.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">10. Limitation of Liability</h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                To the maximum extent permitted by law, SAKFLY Studio shall
                not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising from your use of
                the Service, including any reliance on AI-generated content.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">11. Termination</h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                We may suspend or terminate your account for violation of
                these Terms, including abusive use of AI generation
                features. You may terminate your account at any time via
                Account Settings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">12. Changes to These Terms</h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                We may update these Terms from time to time. Continued use
                of the Service after changes take effect constitutes
                acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">13. Governing Law</h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                These Terms are governed by applicable laws in the
                jurisdiction in which SAKFLY Studio operates, without regard
                to conflict-of-law principles, except where local consumer
                protection laws require otherwise.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">14. Contact</h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                Questions about these Terms can be sent via our{" "}
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
