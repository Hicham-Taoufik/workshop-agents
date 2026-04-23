"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { FiLoader } from "react-icons/fi";
import Link from "next/link";
import { StitchFooter, StitchNav } from "@/components/stitch/StitchChrome";
import {
  stitchField as field,
  stitchLabel as label,
  stitchPage,
  stitchSectionCard as sectionCard,
} from "@/lib/stitch-ui";

export default function RegisterPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    jobTitleDegree: "",
    questions: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const fullName =
      `${formData.firstName} ${formData.lastName}`.trim() || formData.email;

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization,
          jobTitleDegree: formData.jobTitleDegree,
          questions: formData.questions,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Registration failed");
      }

      router.push("/confirmation");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`${stitchPage} items-center py-8 sm:py-10 md:py-12`}>
      <StitchNav highlight="register" />

      <main className="w-full max-w-3xl flex-grow px-4 sm:px-6 md:px-8">
        <header className="mb-8 text-left sm:mb-10 sm:text-center md:mb-12">
          <h1 className="mb-4 font-headline-xl text-headline-xl text-stitch-primary sm:mb-5">
            Workshop Registration
          </h1>
          <p className="max-w-2xl font-body-lg text-body-lg leading-relaxed text-stitch-on-surface-variant sm:mx-auto">
            Secure your spot for AGENTIC AI on{" "}
            <span className="text-stitch-on-surface">16 MAY 2026</span> at 8:00 AM
            at the Faculty of Science, Tetouan. A certificate of participation will
            be delivered to attendees who complete the activity.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
          {error && (
            <div
              className="rounded-xl border border-stitch-error/40 bg-stitch-error-container/20 px-4 py-3 text-sm text-stitch-error"
              role="alert"
            >
              {error}
            </div>
          )}

          {/* Personal Details — Stitch section */}
          <section className={`${sectionCard} p-5 sm:p-6 md:p-7`}>
            <div className="pointer-events-none absolute inset-0 bg-stitch-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
            <h2 className="mb-5 sm:mb-6 flex items-center gap-2 font-headline-md text-headline-md text-stitch-on-surface">
              <span className="material-symbols-outlined text-stitch-primary">
                person
              </span>
              Personal Details
            </h2>
            <div className="relative grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2.5">
                <label className={label} htmlFor="firstName">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className={field}
                  placeholder="First name"
                  autoComplete="given-name"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label className={label} htmlFor="lastName">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className={field}
                  placeholder="Last name"
                  autoComplete="family-name"
                />
              </div>
              <div className="flex flex-col gap-2.5 md:col-span-2">
                <label className={label} htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={field}
                  placeholder="your.email@example.com"
                  autoComplete="email"
                />
              </div>
              <div className="flex flex-col gap-2.5 md:col-span-2">
                <label className={label} htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={field}
                  placeholder="+212 697 068 234"
                  autoComplete="tel"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label className={label} htmlFor="jobTitleDegree">
                  Job Title / Role &amp; Degree
                </label>
                <input
                  id="jobTitleDegree"
                  name="jobTitleDegree"
                  type="text"
                  value={formData.jobTitleDegree}
                  onChange={handleChange}
                  className={field}
                  placeholder="Your role and degree"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label className={label} htmlFor="organization">
                  Organization / Company
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  value={formData.organization}
                  onChange={handleChange}
                  className={field}
                  placeholder="Organization (optional)"
                />
              </div>
            </div>
          </section>

          {/* Additional information (replaces Stitch payment block — free event) */}
          <section className={`${sectionCard} p-5 sm:p-6 md:p-7`}>
            <div className="pointer-events-none absolute inset-0 bg-stitch-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
            <h2 className="mb-5 sm:mb-6 flex items-center gap-2 font-headline-md text-headline-md text-stitch-on-surface">
              <span className="material-symbols-outlined text-stitch-primary">
                chat
              </span>
              Additional Information
            </h2>
            <div className="flex flex-col gap-2.5">
              <label className={label} htmlFor="questions">
                Questions or Comments
              </label>
              <textarea
                id="questions"
                name="questions"
                rows={4}
                value={formData.questions}
                onChange={handleChange}
                className={`${field} resize-none`}
                placeholder="Optional message for organizers…"
              />
            </div>
          </section>

          <div className="flex w-full flex-col items-stretch pt-4 sm:items-end sm:pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-stitch-secondary px-8 py-4 font-label-sm text-label-sm uppercase tracking-wider text-stitch-on-secondary transition-all duration-300 hover:bg-stitch-secondary-container hover:shadow-[0_0_15px_rgba(255,185,95,0.4)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <FiLoader className="animate-spin" />
                  Submitting…
                </>
              ) : (
                <>
                  Complete Registration
                  <span className="material-symbols-outlined">arrow_forward</span>
                </>
              )}
            </button>
          </div>

          <p className="pt-2 text-center text-sm text-stitch-on-surface-variant sm:pt-4">
            <Link
              href="/"
              className="inline-block font-body-md text-stitch-primary transition-colors hover:underline"
            >
              ← Back to workshop home
            </Link>
          </p>
        </form>
      </main>

      <StitchFooter />
    </div>
  );
}
