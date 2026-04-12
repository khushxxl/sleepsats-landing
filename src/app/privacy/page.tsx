import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — SleepSats",
  description:
    "How SleepSats collects, uses, and protects your personal and health data.",
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen px-5 pb-20 pt-24 text-white sm:px-6">
      {/* Navbar */}
      <nav className="fixed inset-x-0 top-0 z-50 flex justify-center px-6 pt-4">
        <div className="flex h-14 w-full max-w-4xl items-center justify-between rounded-full border border-white/15 bg-white/5 px-6 backdrop-blur-xl">
          <Link
            href="/"
            className="text-sm font-bold tracking-tight text-white"
          >
            Sleepsats
          </Link>
          <Link
            href="/"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            &larr; Back
          </Link>
        </div>
      </nav>

      <article className="mx-auto w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-10">
        <header className="mb-8 border-b border-white/10 pb-6">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-white/60">Last Updated: 11/04/2026</p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed text-white/80 sm:text-base">
          <section>
            <p>
              This Privacy Policy explains how Bula Media Ltd (&ldquo;SleepSats&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects,
              uses, discloses, and protects your information when you use the
              SleepSats mobile application, website, and related services (the
              &ldquo;Service&rdquo;).
            </p>
            <p className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/90">
              Bula Media Ltd
              <br />
              20-22 Wenlock Road
              <br />
              London, N1 7GU
              <br />
              United Kingdom
            </p>
            <p className="mt-3">
              By using SleepSats, you agree to the practices described in this
              Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              1. Information We Collect
            </h2>

            <h3 className="mt-4 text-base font-semibold text-white">
              1.1 Information You Provide
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Email address (account creation, waitlist signup)</li>
              <li>Account credentials and profile details</li>
              <li>Lightning wallet address for withdrawals</li>
              <li>
                Support requests and any content you send to us directly
              </li>
            </ul>

            <h3 className="mt-5 text-base font-semibold text-white">
              1.2 Health &amp; Sleep Data
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Sleep sessions, duration, and quality metrics retrieved through
                Apple Health or Google Health Connect with your explicit
                permission
              </li>
              <li>
                Streaks, reward history, and other activity generated inside the
                app
              </li>
            </ul>
            <p className="mt-3">
              Health data is only accessed when you grant permission, and you
              can revoke access at any time through your device settings.
            </p>

            <h3 className="mt-5 text-base font-semibold text-white">
              1.3 Device &amp; Usage Data
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Device model, operating system, and app version</li>
              <li>Approximate location derived from IP address</li>
              <li>Language, timezone, and screen size</li>
              <li>Referrer and UTM campaign parameters</li>
              <li>In-app events, crash logs, and diagnostic data</li>
            </ul>

            <h3 className="mt-5 text-base font-semibold text-white">
              1.4 Payment &amp; Subscription Data
            </h3>
            <p className="mt-1">
              Subscription purchases are processed by Apple App Store or Google
              Play. We do not receive or store your payment card details. We
              receive confirmation of subscription status from these platforms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              2. How We Use Your Information
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Provide, operate, and maintain the Service</li>
              <li>Calculate and distribute Bitcoin (sats) rewards</li>
              <li>Process Lightning withdrawals</li>
              <li>Manage subscriptions and premium features</li>
              <li>
                Detect, prevent, and investigate fraud, abuse, or reward
                manipulation
              </li>
              <li>Communicate updates, waitlist status, and support replies</li>
              <li>Improve app performance, stability, and user experience</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              3. Legal Bases (UK / EEA Users)
            </h2>
            <p>We rely on the following legal bases under UK GDPR / GDPR:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong>Contract:</strong> to provide the Service you signed up
                for
              </li>
              <li>
                <strong>Consent:</strong> for health data access and marketing
                communications
              </li>
              <li>
                <strong>Legitimate interests:</strong> for fraud prevention,
                analytics, and service improvement
              </li>
              <li>
                <strong>Legal obligation:</strong> to comply with applicable
                laws
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              4. Sharing of Information
            </h2>
            <p>
              We do not sell your personal data. We may share information with:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong>Service providers:</strong> hosting, analytics, crash
                reporting, email delivery, customer support
              </li>
              <li>
                <strong>Advertising partners:</strong> for rewarded ads and
                measurement (subject to your consent where required)
              </li>
              <li>
                <strong>Payment platforms:</strong> Apple App Store and Google
                Play for subscription processing
              </li>
              <li>
                <strong>Lightning payment providers:</strong> to facilitate
                Bitcoin withdrawals
              </li>
              <li>
                <strong>Legal authorities:</strong> where required by law, court
                order, or to protect rights and safety
              </li>
              <li>
                <strong>Successors:</strong> in connection with a merger,
                acquisition, or asset sale
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              5. Advertising &amp; Analytics
            </h2>
            <p>
              SleepSats displays rewarded advertisements provided by third-party
              ad networks. These networks may collect identifiers and usage
              data to deliver and measure ads. We also use analytics tools to
              understand how the app is used. Where required, we will request
              your consent before enabling non-essential tracking.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              6. Data Retention
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Account data is retained for as long as your account is active.
              </li>
              <li>
                Reward and transaction records may be retained for up to 7
                years for accounting and compliance.
              </li>
              <li>
                Diagnostic and analytics data is retained for a shorter period
                appropriate to its purpose.
              </li>
              <li>
                You may request deletion of your account and associated personal
                data at any time.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              7. Your Rights
            </h2>
            <p>
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request deletion of your data</li>
              <li>Restrict or object to certain processing</li>
              <li>Withdraw consent at any time</li>
              <li>Request data portability</li>
              <li>
                Lodge a complaint with your local data protection authority
                (for UK residents, the ICO)
              </li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:sleepsatsapp@gmail.com"
                className="text-orange-400 underline-offset-2 hover:underline"
              >
                sleepsatsapp@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              8. Data Security
            </h2>
            <p>
              We implement reasonable technical and organisational measures to
              protect your information against unauthorised access, loss, or
              misuse. However, no system is completely secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              9. International Transfers
            </h2>
            <p>
              Your data may be processed in countries outside of your own,
              including the United Kingdom, European Economic Area, and United
              States. Where required, we use appropriate safeguards such as
              Standard Contractual Clauses to protect transferred data.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              10. Children&rsquo;s Privacy
            </h2>
            <p>
              SleepSats is not intended for users under the age of 18. We do
              not knowingly collect data from children. If you believe a child
              has provided us with personal data, please contact us so we can
              remove it.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              11. Health Data Specifics
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Health data is accessed only with your explicit permission
                through Apple HealthKit or Google Health Connect.
              </li>
              <li>
                Health data is never sold, used for advertising, or shared with
                third parties for marketing.
              </li>
              <li>
                Health data is used solely to calculate rewards and provide the
                core functionality of SleepSats.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              12. Third-Party Links
            </h2>
            <p>
              SleepSats may link to third-party websites or services. We are
              not responsible for their privacy practices. Please review their
              privacy policies before providing personal data.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              13. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted here with an updated &ldquo;Last Updated&rdquo; date.
              Your continued use of the Service after changes take effect
              constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              14. Contact
            </h2>
            <p>
              For privacy questions or requests, contact us at:{" "}
              <a
                href="mailto:sleepsatsapp@gmail.com"
                className="text-orange-400 underline-offset-2 hover:underline"
              >
                sleepsatsapp@gmail.com
              </a>
            </p>
          </section>
        </div>
      </article>

      <footer className="mx-auto mt-10 flex w-full max-w-3xl items-center justify-between text-xs text-white/40">
        <Link href="/" className="hover:text-white/80">
          &larr; Home
        </Link>
        <Link href="/terms" className="hover:text-white/80">
          Terms &amp; Conditions
        </Link>
      </footer>
    </main>
  );
}
