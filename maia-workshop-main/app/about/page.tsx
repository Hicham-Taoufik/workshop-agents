import Link from "next/link";
import Image from "next/image";
import { StitchFooter, StitchNav } from "@/components/stitch/StitchChrome";

/**
 * Stitch “Workshop Detail - Agentic AI” layout with AiA26 / AGENTIC AI copy.
 */
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stitch-background pt-[88px] font-body-md text-stitch-on-background antialiased selection:bg-stitch-primary/30 selection:text-stitch-primary">
      <StitchNav highlight="about" />

      <main className="mx-auto flex max-w-container-max flex-col gap-stack-lg px-margin-x pb-24 pt-8 md:pt-12">
        {/* Hero — Stitch detail hero */}
        <section className="relative flex flex-col items-center gap-8 overflow-hidden rounded-xl border border-stitch-outline-variant/30 bg-stitch-surface-container p-8 shadow-lg md:flex-row md:p-16">
          <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/3 rounded-full bg-stitch-primary/10 blur-[80px]" />
          <div className="relative z-10 flex flex-1 flex-col items-start gap-stack-sm">
            <div className="mb-2 flex flex-wrap gap-2">
              <span className="rounded-full border border-stitch-primary/20 bg-stitch-tertiary-container px-3 py-1 font-label-sm text-label-sm text-stitch-primary">
                AGENTIC AI
              </span>
              <span className="flex items-center gap-1 rounded-full border border-stitch-primary/20 bg-stitch-tertiary-container px-3 py-1 font-label-sm text-label-sm text-stitch-primary">
                <span className="material-symbols-outlined text-[14px]">
                  calendar_month
                </span>
                16 MAY 2026
              </span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-stitch-on-surface">
              Orchestrating the Agentic Shift
            </h1>
            <p className="mb-4 mt-2 max-w-2xl font-body-lg text-body-lg text-stitch-on-surface-variant">
              A focused workshop on <strong className="text-stitch-on-surface">AGENTIC AI</strong>{" "}
              — LLM selection, inference, and GPU-aware systems for teams building
              production-grade agents. Practical orchestration from chatbots toward
              robust agentic architectures, RAG, and open-source tooling.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Link
                href="/register"
                className="flex items-center gap-2 rounded-lg bg-stitch-secondary-container px-8 py-3.5 font-label-sm text-label-sm text-stitch-on-secondary-container shadow-[0_0_20px_rgba(238,152,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(238,152,0,0.4)]"
              >
                Register Now
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/conference"
                className="flex items-center gap-2 rounded-lg border border-stitch-primary bg-stitch-primary/5 px-8 py-3.5 font-label-sm text-label-sm text-stitch-primary transition-colors hover:bg-stitch-primary/10"
              >
                <span className="material-symbols-outlined text-[18px]">event</span>
                Main conference
              </Link>
            </div>
          </div>
          <div className="relative z-10 flex aspect-square w-full items-center justify-center rounded-lg border border-stitch-outline-variant/30 bg-stitch-surface-container-highest p-6 md:w-1/3">
            <Image
              src="/images/logoAIA26.png"
              alt="AiA26"
              width={220}
              height={220}
              className="object-contain opacity-90"
            />
          </div>
        </section>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
          <div className="flex flex-col gap-stack-lg md:col-span-8">
            {/* What You'll Learn */}
            <section className="rounded-xl border border-stitch-outline-variant/30 bg-stitch-surface-container-low p-8 shadow-md transition-transform duration-300 hover:-translate-y-1">
              <h2 className="mb-6 flex items-center gap-2 font-headline-md text-headline-md text-stitch-on-surface">
                <span className="material-symbols-outlined text-stitch-primary">
                  lightbulb
                </span>
                What You&apos;ll Learn
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {[
                  {
                    t: "Agentic proof-of-concept",
                    d: 'From chatbots to "agentic minds" — orchestration, LLM calls, retrieval, and action loops you can implement in practice.',
                  },
                  {
                    t: "RAG & retrieval design",
                    d: "Embeddings, vector stores, and robust retrieval patterns for real applications.",
                  },
                  {
                    t: "LLM selection & inference",
                    d: "Choosing models and stacks with latency, cost, and deployment constraints in mind.",
                  },
                  {
                    t: "GPU-aware systems",
                    d: "Mapping accelerated stacks to real hardware and sustainable serving practices.",
                  },
                ].map((item) => (
                  <div key={item.t} className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-1 text-stitch-secondary">
                      check_circle
                    </span>
                    <div>
                      <h3 className="mb-1 font-label-sm text-label-sm text-stitch-on-surface">
                        {item.t}
                      </h3>
                      <p className="font-body-md text-body-md text-stitch-on-surface-variant">
                        {item.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Schedule — Stitch timeline */}
            <section className="rounded-xl border border-stitch-outline-variant/30 bg-stitch-surface-container-low p-8 shadow-md">
              <h2 className="mb-8 flex items-center gap-2 font-headline-md text-headline-md text-stitch-on-surface">
                <span className="material-symbols-outlined text-stitch-primary">
                  schedule
                </span>
                Workshop day (8 hours)
              </h2>
              <div className="relative ml-4 flex flex-col gap-8 border-l border-stitch-outline-variant/50 pl-8">
                {[
                  {
                    tag: "Block 1",
                    title: "Foundations & generative AI",
                    body: "Generative and agentic AI foundations, guided low-code agent proof-of-concept, and orientation to tool-using agents.",
                    active: true,
                  },
                  {
                    tag: "Block 2",
                    title: "Orchestration & RAG",
                    body: "RAG patterns — embeddings and vector databases — plus lightweight automation (e.g. n8n-style flows) for agents.",
                    active: false,
                  },
                  {
                    tag: "Block 3",
                    title: "LLM selection, inference & GPU",
                    body: "Model choices, open-source trade-offs, inference stacks, and GPU-aware acceleration for deployment.",
                    active: false,
                  },
                  {
                    tag: "Block 4",
                    title: "Q&A, resources & certificate",
                    body: "Closing discussion, curated resources, and certificate of participation for attendees who complete the activity.",
                    active: false,
                  },
                ].map((row) => (
                  <div key={row.tag} className="relative">
                    <div
                      className={
                        row.active
                          ? "absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-stitch-surface bg-stitch-primary shadow-[0_0_12px_rgba(171,199,255,0.6)]"
                          : "absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-stitch-outline-variant bg-stitch-surface-variant"
                      }
                    />
                    <span
                      className={
                        row.active
                          ? "mb-1 block font-label-sm text-label-sm text-stitch-primary"
                          : "mb-1 block font-label-sm text-label-sm text-stitch-on-surface-variant"
                      }
                    >
                      {row.tag}
                    </span>
                    <h3 className="mb-2 font-headline-md text-[20px] text-stitch-on-surface">
                      {row.title}
                    </h3>
                    <p className="font-body-md text-body-md text-stitch-on-surface-variant">
                      {row.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-stack-md md:col-span-4">
            <div className="relative overflow-hidden rounded-xl border border-stitch-outline-variant/30 bg-stitch-surface-container p-6 shadow-md backdrop-blur-sm">
              <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-stitch-primary/5" />
              <h3 className="mb-6 font-headline-md text-[20px] text-stitch-on-surface">
                Workshop details
              </h3>
              <ul className="mb-8 flex flex-col gap-4 font-body-md text-body-md text-stitch-on-surface-variant">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-stitch-outline">
                    event
                  </span>
                  16 MAY 2026 — 8:00 AM
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-stitch-outline">
                    timer
                  </span>
                  8 hours (in person)
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-stitch-outline">
                    location_on
                  </span>
                  Faculty of Science, Tetouan, Morocco
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-stitch-outline">
                    groups
                  </span>
                  Free attendance — limited seats
                </li>
              </ul>
              <div className="border-t border-stitch-outline-variant/30 pt-6">
                <div className="mb-4 font-headline-md text-headline-md text-stitch-on-surface">
                  Free workshop
                  <span className="ml-2 font-body-md text-body-md text-stitch-on-surface-variant">
                    Certificate for completers
                  </span>
                </div>
                <Link
                  href="/register"
                  className="block w-full rounded-lg bg-stitch-secondary-container py-3 text-center font-label-sm text-label-sm text-stitch-on-secondary-container shadow-[0_0_15px_rgba(238,152,0,0.2)] transition-shadow hover:shadow-[0_0_20px_rgba(238,152,0,0.4)]"
                >
                  Secure your spot
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-stitch-outline-variant/30 bg-stitch-surface-container-low p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 sm:p-8">
              <h3 className="mb-5 text-center text-sm font-bold uppercase tracking-[0.2em] text-stitch-on-surface-variant sm:mb-6 sm:text-base sm:tracking-[0.22em]">
                Lead instructor
              </h3>
              <div className="flex flex-col items-center gap-5 text-center sm:gap-6">
                <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-full border-[3px] border-stitch-primary/35 bg-stitch-surface-container/50 shadow-[0_0_28px_rgba(171,199,255,0.16)] sm:h-48 sm:w-48">
                  <div className="pointer-events-none absolute inset-0 z-[1] rounded-full ring-1 ring-inset ring-white/5" />
                  <Image
                    src="/images/hicham-workshop-instagram-post.svg"
                    alt="Hicham Taoufik — lead instructor"
                    width={320}
                    height={320}
                    unoptimized
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold tracking-tight text-stitch-on-surface sm:text-3xl">
                    Hicham Taoufik
                  </h4>
                  <p className="mb-3 mt-1 font-label-sm text-label-sm text-stitch-primary">
                    Industry AI practitioner · IEEE Member · PhD student
                  </p>
                  <p className="text-sm leading-relaxed text-stitch-on-surface-variant">
                    Technical lead & instructor: workshop design, delivery,
                    hands-on exercises, slides and curated resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <StitchFooter />
    </div>
  );
}
