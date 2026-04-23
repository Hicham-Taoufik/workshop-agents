"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { StitchFooter, StitchNav } from "@/components/stitch/StitchChrome";
import { stitchMain, stitchPage, stitchSectionCard } from "@/lib/stitch-ui";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const confirmationNumber = searchParams.get("number");

  return (
    <div className={stitchPage}>
      <StitchNav highlight="neutral" />

      <main className={`${stitchMain} flex flex-col items-center pt-4 md:pt-8`}>
        <div className={`${stitchSectionCard} w-full max-w-2xl text-center`}>
          <div className="mb-6 flex justify-center">
            <span className="material-symbols-outlined text-6xl text-stitch-primary">
              verified
            </span>
          </div>

          <h1 className="mb-4 font-headline-xl text-headline-xl text-stitch-on-surface">
            Registration confirmed
          </h1>

          <p className="mb-2 font-body-lg text-body-lg text-stitch-on-surface-variant">
            Thank you for registering for the AGENTIC AI workshop.
          </p>
          {confirmationNumber && (
            <p className="mb-8 font-mono text-sm text-stitch-primary">
              Confirmation #: {confirmationNumber}
            </p>
          )}

          <div className="mb-8 space-y-3 text-left font-body-md text-body-md text-stitch-on-surface-variant">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-stitch-primary">
                mail
              </span>
              <span>
                You will receive a confirmation email shortly with all the details.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-stitch-primary">
                calendar_month
              </span>
              <span>Workshop date: 16 MAY 2026 — 8:00 AM</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-stitch-primary">
                location_on
              </span>
              <span>Location: Faculty of Science Tetouan</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-stitch-primary">
                person
              </span>
              <span>
                Speaker: TAOUFIK HICHAM — Artificial Intelligence Specialist
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-stitch-secondary">
                workspace_premium
              </span>
              <span>
                A certificate of participation will be delivered after you complete
                the activity.
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-stitch-secondary-container px-6 py-3 font-label-sm text-label-sm text-stitch-on-secondary-container shadow-[0_0_15px_rgba(238,152,0,0.2)] transition-all hover:shadow-[0_0_22px_rgba(238,152,0,0.35)]"
            >
              <FiArrowLeft />
              Back to home
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-stitch-primary bg-stitch-primary/5 px-6 py-3 font-label-sm text-label-sm text-stitch-primary transition-colors hover:bg-stitch-primary/10"
            >
              Workshop details
            </Link>
          </div>
        </div>
      </main>

      <StitchFooter />
    </div>
  );
}

function ConfirmationFallback() {
  return (
    <div className={stitchPage}>
      <StitchNav highlight="neutral" />
      <main className={`${stitchMain} flex flex-col items-center justify-center pt-24`}>
        <p className="text-stitch-on-surface-variant">Loading…</p>
      </main>
      <StitchFooter />
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<ConfirmationFallback />}>
      <ConfirmationContent />
    </Suspense>
  );
}
