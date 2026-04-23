import Link from "next/link";
import { StitchFooter, StitchNav } from "@/components/stitch/StitchChrome";
import { stitchMain, stitchPage, stitchSectionCard } from "@/lib/stitch-ui";

export default function FAQPage() {
  const faqs = [
    {
      question: "What is the AGENTIC AI workshop about?",
      answer:
        "The workshop focuses on LLM selection, inference, and GPU-aware systems, with practical guidance to build an agentic proof-of-concept.",
    },
    {
      question: "Do I need prior programming experience?",
      answer:
        "A technical background helps, but the content is structured to support both intermediate practitioners and advanced teams transitioning to agentic architectures.",
    },
    {
      question: "Is the workshop free?",
      answer:
        "Yes, this workshop is completely free to attend. Just register to secure your spot!",
    },
    {
      question: "Where is the workshop located?",
      answer: "The workshop will be held at Faculty of Science Tetouan, Morocco.",
    },
    {
      question: "Will I receive materials after the workshop?",
      answer:
        "Yes, all registered attendees will receive workshop materials, code examples, and resources via email after the event.",
    },
    {
      question: "What is the duration of the workshop?",
      answer:
        "The workshop starts at 8:00 AM on 16 May 2026. Detailed agenda and timing updates will be shared with registered participants.",
    },
  ];

  return (
    <div className={stitchPage}>
      <StitchNav highlight="faq" />

      <main className={`${stitchMain} flex flex-col gap-stack-lg pt-4 md:pt-6`}>
        <header className="mb-4 text-left sm:mb-6 sm:text-center">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-stitch-primary/30 bg-stitch-primary-container/20 text-stitch-primary sm:mx-auto sm:mb-6">
            <span className="material-symbols-outlined text-4xl">help</span>
          </div>
          <h1 className="font-headline-xl text-headline-xl text-stitch-on-surface">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl font-body-lg text-body-lg leading-relaxed text-stitch-on-surface-variant sm:mx-auto sm:mt-5">
            Registration, logistics, and the workshop day—clear answers in one
            place, so you know what to expect before you arrive.
          </p>
        </header>

        <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 sm:gap-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${stitchSectionCard} p-6 sm:p-8`}
            >
              <h2 className="mb-4 font-headline-md text-headline-md text-stitch-on-surface sm:mb-5">
                {faq.question}
              </h2>
              <p className="font-body-md text-body-md leading-relaxed text-stitch-on-surface-variant">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-6 w-full max-w-3xl rounded-xl border border-stitch-primary/25 bg-stitch-primary-container/15 p-8 text-center sm:mt-10 sm:p-10">
          <h3 className="mb-3 font-headline-md text-headline-md text-stitch-on-surface">
            Still have questions?
          </h3>
          <p className="mb-6 font-body-md text-body-md text-stitch-on-surface-variant">
            Don&apos;t hesitate to reach out — we&apos;re here to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-lg bg-stitch-secondary-container px-6 py-3 font-label-sm text-label-sm text-stitch-on-secondary-container shadow-[0_0_15px_rgba(238,152,0,0.2)] transition-shadow hover:shadow-[0_0_22px_rgba(238,152,0,0.35)]"
          >
            Contact us
          </Link>
        </div>
      </main>

      <StitchFooter />
    </div>
  );
}
