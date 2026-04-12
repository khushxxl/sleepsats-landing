import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions — SleepSats",
  description:
    "Terms & Conditions governing your use of the SleepSats mobile application and services.",
};

export default function TermsPage() {
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
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-sm text-white/60">Last Updated: 11/04/2026</p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed text-white/80 sm:text-base">
          <section>
            <p>
              These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use
              of the SleepSats mobile application and services
              (&ldquo;SleepSats&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
              &ldquo;our&rdquo;), operated by:
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
            <p className="mt-3">By using SleepSats, you agree to these Terms.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              1. Eligibility
            </h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>You must be 18 years or older to use SleepSats.</li>
              <li>By using the app, you confirm you meet this requirement.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              2. Description of Service
            </h2>
            <p>SleepSats is a mobile application that:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Tracks sleep data (via Apple Health / Health Connect)</li>
              <li>Rewards users with Bitcoin (sats) for qualifying activity</li>
              <li>Provides optional premium features via subscription</li>
            </ul>
            <p className="mt-3">
              SleepSats is not a financial product, investment service, or bank.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              3. Rewards
            </h2>

            <h3 className="mt-4 text-base font-semibold text-white">
              3.1 Earning Rewards
            </h3>
            <p className="mt-1">Users may earn rewards by:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Meeting sleep criteria</li>
              <li>Logging into the app</li>
              <li>Claiming rewards</li>
              <li>Completing required actions (such as viewing rewarded ads)</li>
            </ul>
            <p className="mt-3">Rewards are:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Variable</li>
              <li>Not guaranteed</li>
              <li>Subject to change at any time</li>
            </ul>

            <h3 className="mt-5 text-base font-semibold text-white">
              3.2 Reward Values
            </h3>
            <p className="mt-1">Reward amounts may vary based on:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>sleep activity</li>
              <li>streaks</li>
              <li>app engagement</li>
              <li>monetisation performance</li>
            </ul>
            <p className="mt-3">
              We reserve the right to adjust reward calculations at any time.
            </p>

            <h3 className="mt-5 text-base font-semibold text-white">
              3.3 No Monetary Guarantee
            </h3>
            <p className="mt-1">Rewards:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Have no guaranteed cash value</li>
              <li>Are not wages, income, or financial returns</li>
              <li>Should not be relied upon as a source of income</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              4. Reward Balance and Withdrawals
            </h2>

            <h3 className="mt-4 text-base font-semibold text-white">
              4.1 In-App Balance
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Rewards accumulate in an in-app balance.</li>
              <li>
                This balance is not a bank account or custodial wallet.
              </li>
            </ul>

            <h3 className="mt-5 text-base font-semibold text-white">
              4.2 Withdrawals
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Withdrawals are subject to minimum thresholds.</li>
              <li>Users must provide a valid Lightning wallet address.</li>
              <li>
                Transactions may be subject to delays or processing limitations.
              </li>
            </ul>
            <p className="mt-3">We do not guarantee:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>instant withdrawals</li>
              <li>uninterrupted access to withdrawal functionality</li>
            </ul>

            <h3 className="mt-5 text-base font-semibold text-white">
              4.3 User Responsibility
            </h3>
            <p className="mt-1">You are responsible for:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>providing a correct wallet address</li>
              <li>ensuring compatibility with Lightning payments</li>
            </ul>
            <p className="mt-3">SleepSats is not responsible for:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>incorrect wallet details</li>
              <li>lost or misdirected payments</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              5. Expiry and Forfeiture
            </h2>
            <p>We reserve the right to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>expire rewards after a period of inactivity</li>
              <li>
                remove rewards in cases of suspected abuse or fraud
              </li>
            </ul>
            <p className="mt-3">Inactivity may include:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>failure to log in</li>
              <li>failure to claim rewards over a defined period</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              6. Premium Subscription
            </h2>

            <h3 className="mt-4 text-base font-semibold text-white">
              6.1 Pricing
            </h3>
            <p className="mt-1">Premium features are available via subscription:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>$9.99 per month</li>
              <li>or a discounted annual plan</li>
            </ul>
            <p className="mt-3">Prices may vary by region.</p>

            <h3 className="mt-5 text-base font-semibold text-white">
              6.2 Billing
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Subscriptions are processed via Apple App Store / Google Play.</li>
              <li>Billing is handled by the respective platform.</li>
            </ul>

            <h3 className="mt-5 text-base font-semibold text-white">
              6.3 Cancellation
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>You may cancel your subscription at any time via your app store account.</li>
              <li>No refunds are provided except where required by law.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              7. Acceptable Use
            </h2>
            <p>You agree not to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>manipulate or falsify sleep data</li>
              <li>use automated tools or bots</li>
              <li>create multiple accounts</li>
              <li>exploit the reward system</li>
            </ul>
            <p className="mt-3">We reserve the right to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>suspend or terminate accounts</li>
              <li>remove rewards</li>
              <li>restrict access</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              8. Advertising
            </h2>
            <p>SleepSats includes:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>rewarded advertisements</li>
              <li>third-party advertising content</li>
            </ul>
            <p className="mt-3">We are not responsible for:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>the content of third-party ads</li>
              <li>external services or products</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              9. Third-Party Services
            </h2>
            <p>SleepSats integrates with:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Apple Health</li>
              <li>Google Health Connect</li>
              <li>advertising networks</li>
              <li>payment providers</li>
            </ul>
            <p className="mt-3">
              Your use of these services is subject to their own terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              10. Limitation of Liability
            </h2>
            <p>To the fullest extent permitted by law:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>SleepSats is provided &ldquo;as is&rdquo;.</li>
              <li>
                We make no guarantees regarding rewards, earnings, or availability.
              </li>
            </ul>
            <p className="mt-3">We are not liable for:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>financial losses</li>
              <li>loss of rewards</li>
              <li>technical issues</li>
              <li>third-party failures</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              11. Termination
            </h2>
            <p>We may suspend or terminate your account if:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>you breach these Terms</li>
              <li>we detect fraud or abuse</li>
              <li>required by law or operational reasons</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              12. Changes to the Service
            </h2>
            <p>We reserve the right to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>modify or discontinue features</li>
              <li>change reward structures</li>
              <li>update pricing</li>
            </ul>
            <p className="mt-3">At any time, without prior notice.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              13. Governing Law
            </h2>
            <p>These Terms are governed by the laws of England and Wales.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              14. Contact
            </h2>
            <p>
              For support or legal queries:{" "}
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
        <Link href="/privacy" className="hover:text-white/80">
          Privacy Policy
        </Link>
      </footer>
    </main>
  );
}
