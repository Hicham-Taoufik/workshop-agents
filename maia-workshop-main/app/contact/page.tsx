import Image from "next/image";
import Link from "next/link";
import { StitchFooter, StitchNav } from "@/components/stitch/StitchChrome";
import { stitchMain, stitchPage } from "@/lib/stitch-ui";

export default function ContactPage() {
  return (
    <div className={stitchPage}>
      <StitchNav highlight="contact" />

      <main className={`${stitchMain} flex flex-col gap-stack-lg pt-4 md:pt-6`}>
        <header className="text-left sm:text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-stitch-on-surface-variant">
            <span className="material-symbols-outlined text-stitch-secondary text-[20px]">
              forum
            </span>
            Get in touch
          </div>
          <h1 className="font-headline-xl text-headline-xl text-stitch-on-surface">
            Contact us
          </h1>
          <p className="mt-3 max-w-2xl font-body-lg text-body-lg text-stitch-on-surface-variant sm:mx-auto">
            Have questions about AGENTIC AI? We&apos;re here to help.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="mailto:t.hicham@aphelionxinnovations.com"
            className="rounded-xl border border-white/10 bg-stitch-surface-container p-6 shadow-md transition-all hover:-translate-y-1 hover:border-stitch-primary/30"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-stitch-primary-container/30 text-stitch-primary">
              <span className="material-symbols-outlined text-3xl">mail</span>
            </div>
            <h2 className="mb-2 font-headline-md text-headline-md text-stitch-on-surface">
              Email us
            </h2>
            <p className="break-all text-sm font-medium text-stitch-primary hover:underline">
              t.hicham@aphelionxinnovations.com
            </p>
          </a>
          <a
            href="tel:+212697068234"
            className="rounded-xl border border-white/10 bg-stitch-surface-container p-6 shadow-md transition-all hover:-translate-y-1 hover:border-stitch-primary/30"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-stitch-primary-container/30 text-stitch-primary">
              <span className="material-symbols-outlined text-3xl">call</span>
            </div>
            <h2 className="mb-2 font-headline-md text-headline-md text-stitch-on-surface">
              Call us
            </h2>
            <p className="text-sm font-medium text-stitch-primary">+212 697 068 234</p>
          </a>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-stitch-outline-variant/30 bg-stitch-surface-container p-5 shadow-lg sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-stitch-primary-container/20 to-transparent" />
          <div className="relative flex items-center gap-3">
            <Image
              src="/images/logoAIA26.png"
              alt="AiA26"
              width={56}
              height={56}
              className="rounded-lg"
            />
            <div>
              <h2 className="font-headline-md text-headline-md text-stitch-on-surface">
                AGENTIC AI
              </h2>
              <p className="text-sm text-stitch-on-surface-variant">
                Workshop information
              </p>
            </div>
          </div>
          <ul className="relative mt-6 space-y-4 font-body-md text-stitch-on-surface-variant">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-stitch-secondary">
                calendar_month
              </span>
              <span>
                <span className="font-semibold text-stitch-on-surface">Workshop</span>
                <br />
                16 MAY 2026 — 8:00 AM
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-stitch-secondary">
                location_on
              </span>
              <span>
                Faculty of Science Tetouan
                <br />
                Morocco
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-stitch-secondary">
                celebration
              </span>
              <span>Conference: June 12–13, 2026 — Martil / Tetouan</span>
            </li>
          </ul>
          <p className="relative mt-6 border-t border-white/10 pt-6 text-sm text-stitch-on-surface-variant">
            Speaker:{" "}
            <span className="font-semibold text-stitch-on-surface">TAOUFIK HICHAM</span>{" "}
            — Artificial Intelligence Specialist
          </p>
          <Link
            href="/register"
            className="relative mt-6 inline-flex rounded-lg border border-stitch-primary bg-stitch-primary/10 px-6 py-3 font-label-sm text-label-sm text-stitch-primary transition-colors hover:bg-stitch-primary/20"
          >
            Register for workshop
          </Link>
        </div>
      </main>

      <StitchFooter />
    </div>
  );
}
