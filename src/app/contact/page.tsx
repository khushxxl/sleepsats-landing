import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — SleepSats",
  description: "Get in touch with the SleepSats team for support or enquiries.",
};

export default function ContactPage() {
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
            Contact Us
          </h1>
          <p className="mt-3 text-sm text-white/60">
            We&rsquo;d love to hear from you.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed text-white/80 sm:text-base">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              Get in Touch
            </h2>
            <p>
              For support, feedback, partnerships, or legal enquiries, reach out
              to us at:
            </p>
            <a
              href="mailto:sleepsatsapp@gmail.com"
              className="mt-4 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base font-medium text-orange-400 transition-colors hover:border-orange-400/30 hover:bg-orange-500/5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              sleepsatsapp@gmail.com
            </a>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              Registered Office
            </h2>
            <p className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/90">
              Bula Media Ltd
              <br />
              20-22 Wenlock Road
              <br />
              London, N1 7GU
              <br />
              United Kingdom
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-xl">
              Response Time
            </h2>
            <p>
              We aim to respond to all enquiries within 48 hours. For urgent
              matters, please include &ldquo;Urgent&rdquo; in your subject line.
            </p>
          </section>
        </div>
      </article>

      <footer className="mx-auto mt-10 flex w-full max-w-3xl items-center justify-between text-xs text-white/40">
        <Link href="/" className="hover:text-white/80">
          &larr; Home
        </Link>
        <div className="flex gap-4">
          <Link href="/terms" className="hover:text-white/80">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-white/80">
            Privacy
          </Link>
        </div>
      </footer>
    </main>
  );
}
