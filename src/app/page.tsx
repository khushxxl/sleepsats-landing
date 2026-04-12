"use client";

import { useState } from "react";

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || "";

export default function Home() {
  const [showDialog, setShowDialog] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [dialogMsg, setDialogMsg] = useState<"success" | "duplicate">(
    "success",
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = new FormData(form).get("email") as string;

    setSubmitting(true);
    try {
      // Get approximate location from IP
      let city = "Unknown";
      let region = "Unknown";
      let country = "Unknown";
      try {
        const geo = await fetch("https://ipapi.co/json/");
        const geoData = await geo.json();
        city = geoData.city || "Unknown";
        region = geoData.region || "Unknown";
        country = geoData.country_name || "Unknown";
      } catch {
        // fallback to unknown
      }

      // Collect passive metadata
      const params = new URLSearchParams(window.location.search);
      const metadata = {
        email,
        city,
        region,
        country,
        device: navigator.userAgent,
        referrer: document.referrer || "Direct",
        utm_source: params.get("utm_source") || "",
        utm_medium: params.get("utm_medium") || "",
        utm_campaign: params.get("utm_campaign") || "",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        screen: `${window.innerWidth}x${window.innerHeight}`,
        language: navigator.language,
      };

      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(metadata),
      });
      const result = await res.json();
      setDialogMsg(result.status === "duplicate" ? "duplicate" : "success");
    } catch {
      setDialogMsg("success");
    }
    setSubmitting(false);
    setShowDialog(true);
    form.reset();
  }

  return (
    <>
      {/* Navbar */}
      <nav className="fixed inset-x-0 top-0 z-50 flex justify-center px-6 pt-4">
        <div className="flex h-14 w-full max-w-4xl items-center justify-between rounded-full border border-white/15 bg-white/5 px-6 backdrop-blur-xl">
          <span className="text-sm font-bold tracking-tight text-white">
            Sleepsats
          </span>
          <span className="text-sm text-white/50">Coming Soon</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-12 pt-24 text-white sm:px-6 sm:py-20">
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-20">
          {/* Left — Copy */}
          <div className="flex flex-1 max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Earn Bitcoin
              <br />
              <span className="text-orange-400">while you sleep.</span>
            </h1>

            <p className="mt-4 max-w-md text-base leading-relaxed text-white/70 sm:mt-6 sm:text-lg">
              Sleepsats rewards you with satoshis for healthy sleep habits.
              Track your sleep, maintain streaks, and stack sats every morning.
            </p>

            {/* Feature pills */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 sm:mt-8 sm:gap-3 lg:justify-start">
              {[
                "Sleep Tracking",
                "Daily Sat Rewards",
                "Streak Bonuses",
                "Lightning Withdrawals",
              ].map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Email input */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex w-full max-w-md items-center gap-2 rounded-full border border-white/15 bg-white/5 p-2 backdrop-blur-sm sm:mt-10"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="h-10 min-w-0 flex-1 bg-transparent px-4 text-sm text-white placeholder-white/40 outline-none sm:h-12 sm:px-5 sm:text-base"
              />
              <button
                type="submit"
                disabled={submitting}
                className="h-10 shrink-0 rounded-full bg-orange-500 px-5 text-sm font-semibold text-white transition-all hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/25 disabled:opacity-50 sm:h-12 sm:px-8 sm:text-base"
              >
                {submitting ? "Joining..." : "Join Waitlist"}
              </button>
            </form>

            <div className="mt-5 flex items-center gap-3">
              <span className="text-xs text-white/40 sm:text-sm">Works with</span>
              <img
                src="/apple-health.webp"
                alt="Apple Health"
                width={28}
                height={28}
                className="rounded-md"
              />
              <img
                src="/google-fit.png"
                alt="Google Fit"
                width={28}
                height={28}
                className="rounded-md"
              />
            </div>
          </div>

          {/* Right — Phone Mockup */}
          <div className="relative flex flex-1 items-center justify-center">
            <div className="absolute h-[300px] w-[300px] rounded-full bg-orange-500/20 blur-[80px] sm:h-[500px] sm:w-[500px] sm:blur-[100px]" />
            <img
              src="/mockup.png"
              alt="SleepSats app showing sleep score of 88 and 120 unclaimed sats"
              width={340}
              height={680}
              className="relative z-10 h-auto max-w-[240px] drop-shadow-2xl sm:max-w-[340px]"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />

        <footer className="relative z-10 mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/40 sm:text-sm">
          <span>&copy; {new Date().getFullYear()} Bula Media Ltd</span>
          <a href="/terms" className="transition-colors hover:text-white/80">
            Terms &amp; Conditions
          </a>
          <a href="/privacy" className="transition-colors hover:text-white/80">
            Privacy Policy
          </a>
          <a href="/contact" className="transition-colors hover:text-white/80">
            Contact
          </a>
        </footer>
      </section>

      {/* Dialog */}
      {showDialog && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowDialog(false)}
        >
          <div
            className="mx-6 w-full max-w-sm rounded-3xl border border-white/15 bg-zinc-900/90 p-8 text-center backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/20">
              <span className="text-2xl">&#10003;</span>
            </div>
            <h2 className="text-xl font-bold text-white">
              {dialogMsg === "duplicate"
                ? "You're already on the list!"
                : "You're on the list!"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {dialogMsg === "duplicate"
                ? "This email is already registered. We\u2019ll keep you updated!"
                : "We shall keep you updated. Stay tuned for the launch of SleepSats."}
            </p>
            <button
              onClick={() => setShowDialog(false)}
              className="mt-6 h-12 w-full rounded-full bg-orange-500 text-sm font-semibold text-white transition-all hover:bg-orange-400"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
