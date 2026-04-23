import Link from "next/link";
import Image from "next/image";
import { StitchFooter, StitchNav } from "@/components/stitch/StitchChrome";

/**
 * Pixel-faithful Stitch “Workshop.AI - Home” layout (exported HTML),
 * with AiA26 / AGENTIC AI workshop content, links, and local assets only.
 */
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-stitch-background pt-[88px] font-body-md text-stitch-on-background">
      <StitchNav highlight="home" />

      <main className="mx-auto flex w-full max-w-container-max flex-grow flex-col gap-stack-lg px-margin-x pb-stack-lg">
        {/* Hero — Stitch hero section */}
        <section className="relative mt-stack-lg flex min-h-[500px] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-stitch-surface-container-low p-8 text-center">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-stitch-primary-container/20 to-transparent" />
          <div className="relative z-10 flex max-w-3xl flex-col items-center gap-stack-md">
            <p className="font-label-sm text-label-sm text-stitch-primary">
              ORCHESTRATING THE AGENTIC SHIFT • 16 MAY 2026 • FACULTY OF SCIENCE
              TETOUAN
            </p>
            <h1 className="font-headline-xl text-headline-xl text-stitch-on-surface">
              AGENTIC AI
              <span className="mt-2 block text-stitch-primary">
                LLM Selection, Inference and GPU-Aware Systems
              </span>
            </h1>
            <p className="max-w-2xl font-body-lg text-body-lg text-stitch-on-surface-variant">
              Build your own agentic proof-of-concept and move from chatbots to
              agentic minds through advanced RAG pipelines and open-source
              power.
            </p>
            <Link
              href="/register"
              className="transform rounded-lg bg-stitch-secondary px-6 py-3 font-label-sm text-label-sm text-stitch-on-secondary transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(238,152,0,0.4)]"
            >
              Register Now
            </Link>
          </div>
        </section>

        {/* Featured Workshops — same 3-card grid; your workshop story */}
        <section className="flex flex-col gap-stack-md">
          <h2 className="font-headline-lg text-headline-lg text-stitch-on-surface">
            Featured Workshops
          </h2>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            <article className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-stitch-surface-container transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(3,72,148,0.15)]">
              <div className="relative h-52 w-full overflow-hidden bg-stitch-surface-variant sm:h-56">
                <Image
                  src="/images/0x0.webp"
                  alt="Build your own agentic proof-of-concept — hands-on agent workflow"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stitch-surface-container/40 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-stitch-surface/80 px-3 py-1 backdrop-blur-md">
                  <span className="font-label-sm text-label-sm text-stitch-primary">
                    Workshop
                  </span>
                </div>
              </div>
              <div className="flex flex-grow flex-col gap-stack-sm p-6">
                <h3 className="font-headline-md text-headline-md text-stitch-on-surface">
                  BUILD YOUR OWN AGENTIC PROOF-OF-CONCEPT
                </h3>
                <div className="flex flex-col gap-2 text-sm text-stitch-on-surface-variant sm:flex-row sm:flex-wrap sm:items-center">
                  <span className="inline-flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">
                      calendar_month
                    </span>
                    16 MAY 2026 • 8:00 AM
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">
                      location_on
                    </span>
                    FACULTY OF SCIENCE TETOUAN, Morocco
                  </span>
                </div>
                <p className="mt-2 line-clamp-3 font-body-md text-body-md text-stitch-on-surface-variant">
                  Hands-on architecture and implementation — learn to design and
                  deploy a practical agentic workflow that combines orchestration,
                  LLM calls, retrieval, and action loops.
                </p>
                <div className="mt-auto pt-4">
                  <Link
                    href="/about"
                    className="block w-full rounded-lg border border-stitch-primary py-2 text-center font-label-sm text-label-sm text-stitch-primary transition-colors hover:bg-stitch-primary/10"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </article>

            <article className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-stitch-surface-container transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(3,72,148,0.15)]">
              <div className="relative h-52 w-full overflow-hidden bg-stitch-surface-variant sm:h-56">
                <Image
                  src="/images/top-10-applications-of-ai-agents-in-business.jpg"
                  alt="Orchestrating the agentic shift — AI agents in business and systems"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stitch-surface-container/45 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-stitch-surface/80 px-3 py-1 backdrop-blur-md">
                  <span className="font-label-sm text-label-sm text-stitch-primary">
                    Focus
                  </span>
                </div>
              </div>
              <div className="flex flex-grow flex-col gap-stack-sm p-6">
                <h3 className="font-headline-md text-headline-md text-stitch-on-surface">
                  ORCHESTRATING THE AGENTIC SHIFT
                </h3>
                <div className="flex items-center gap-2 text-sm text-stitch-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">
                    calendar_month
                  </span>
                  <span>16 MAY 2026</span>
                  <span className="material-symbols-outlined ml-2 text-[18px]">
                    school
                  </span>
                  <span>In-person</span>
                </div>
                <p className="mt-2 line-clamp-3 font-body-md text-body-md text-stitch-on-surface-variant">
                  Strategy, system design, and implementation readiness —
                  selecting the right models, building efficient inference stacks,
                  and aligning architecture with available GPU resources.
                </p>
                <div className="mt-auto pt-4">
                  <Link
                    href="/about"
                    className="block w-full rounded-lg border border-stitch-primary py-2 text-center font-label-sm text-label-sm text-stitch-primary transition-colors hover:bg-stitch-primary/10"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </article>

            <article className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-stitch-surface-container transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(3,72,148,0.15)]">
              <div className="flex flex-col items-center gap-6 bg-stitch-surface-variant px-6 pb-6 pt-8 sm:gap-7">
                <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-full border-[3px] border-stitch-primary/35 bg-stitch-surface-container shadow-[0_0_28px_rgba(171,199,255,0.2)] sm:h-48 sm:w-48">
                  <div className="pointer-events-none absolute inset-0 z-[1] rounded-full ring-1 ring-inset ring-white/5" />
                  <Image
                    src="/images/hicham-workshop-instagram-post.svg"
                    alt="TAOUFIK HICHAM — lead instructor"
                    width={320}
                    height={320}
                    unoptimized
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="w-full max-w-sm rounded-xl border border-white/10 bg-stitch-surface-container/60 px-6 py-6 text-left shadow-sm sm:px-7 sm:py-7">
                  <p className="mb-2 text-base font-bold uppercase tracking-[0.12em] text-stitch-primary sm:text-lg">
                    Expert
                  </p>
                  <h3 className="text-2xl font-extrabold tracking-tight text-stitch-on-surface sm:text-3xl">
                    TAOUFIK HICHAM
                  </h3>
                  <div className="mt-3 flex items-start gap-2 text-sm text-stitch-on-surface-variant sm:text-base">
                    <span className="material-symbols-outlined mt-0.5 text-[22px] text-stitch-primary sm:text-[24px]">
                      verified
                    </span>
                    <span className="leading-relaxed">
                      Artificial Intelligence Specialist
                    </span>
                  </div>
                  <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-stitch-on-surface-variant sm:text-base">
                    <span className="font-semibold text-stitch-on-surface">
                      Topics:
                    </span>{" "}
                    LLM selection, inference, GPU-aware systems, and RAG — from
                    chatbots to agentic minds with advanced RAG pipelines
                    (including open-source tooling where relevant).
                  </p>
                </div>
              </div>
              <div className="flex flex-grow flex-col p-6 pt-2">
                <div className="mt-auto pt-2">
                  <Link
                    href="/register"
                    className="block w-full rounded-lg border border-stitch-primary py-2 text-center font-label-sm text-label-sm text-stitch-primary transition-colors hover:bg-stitch-primary/10"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Why Join Us — same 3-column layout */}
        <section className="flex flex-col gap-stack-md border-t border-white/10 py-stack-lg">
          <h2 className="text-center font-headline-lg text-headline-lg text-stitch-on-surface">
            Why Join Us
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-gutter md:grid-cols-3">
            <div className="flex flex-col items-center gap-4 rounded-xl border border-white/5 bg-stitch-surface-container-low p-6 text-center transition-colors hover:border-stitch-primary/30">
              <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-stitch-primary-container/20 text-stitch-primary">
                <span className="material-symbols-outlined text-[32px]">
                  calendar_month
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-stitch-on-surface">
                Date &amp; access
              </h3>
              <p className="font-body-md text-body-md text-stitch-on-surface-variant">
                16 MAY 2026 • 8:00 AM — free attendance, practical and strategic
                sessions at the Faculty of Science, Tetouan.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-xl border border-white/5 bg-stitch-surface-container-low p-6 text-center transition-colors hover:border-stitch-primary/30">
              <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-stitch-primary-container/20 text-stitch-primary">
                <span className="material-symbols-outlined text-[32px]">
                  location_on
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-stitch-on-surface">
                Venue
              </h3>
              <p className="font-body-md text-body-md text-stitch-on-surface-variant">
                FACULTY OF SCIENCE TETOUAN — Tetouan, Morocco. In-person
                workshop format.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-xl border border-white/5 bg-stitch-surface-container-low p-6 text-center transition-colors hover:border-stitch-primary/30">
              <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-stitch-primary-container/20 text-stitch-primary">
                <span className="material-symbols-outlined text-[32px]">
                  groups
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-stitch-on-surface">
                What you&apos;ll learn
              </h3>
              <p className="font-body-md text-body-md text-stitch-on-surface-variant">
                From chatbots to agentic minds; advanced RAG pipelines; open-source
                tooling for experimentation and scale.
              </p>
            </div>
          </div>
        </section>
      </main>

      <StitchFooter />
    </div>
  );
}
