import Link from "next/link";

/** Which nav item is underlined; Register CTA ring when `register`. */
export type StitchNavHighlight =
  | "home"
  | "about"
  | "register"
  | "conference"
  | "faq"
  | "contact"
  | "neutral";

type StitchNavProps = {
  highlight?: StitchNavHighlight;
};

const deskActive =
  "font-manrope border-b-2 border-blue-500 pb-1 text-sm font-semibold tracking-tight text-blue-400 transition-all duration-300 hover:bg-white/5 active:scale-95";
const deskIdle =
  "font-manrope text-sm font-semibold tracking-tight text-gray-400 transition-colors hover:bg-white/5 hover:text-blue-300 active:scale-95";

export function StitchNav({ highlight = "neutral" }: StitchNavProps) {
  const homeActive = highlight === "home";
  const eventActive = highlight === "about";
  const registerCtaClass =
    highlight === "register"
      ? "font-manrope rounded-lg bg-stitch-secondary px-4 py-2 text-sm font-semibold tracking-tight text-stitch-on-secondary shadow-[0_0_12px_rgba(238,152,0,0.35)] ring-2 ring-stitch-secondary/60 transition-all hover:shadow-[0_0_15px_rgba(238,152,0,0.3)]"
      : "font-manrope rounded-lg bg-stitch-secondary px-4 py-2 text-sm font-semibold tracking-tight text-stitch-on-secondary transition-all hover:shadow-[0_0_15px_rgba(238,152,0,0.3)]";

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#111827]/80 shadow-[0_0_20px_rgba(3,72,148,0.1)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tighter text-blue-500"
        >
          AiA26
        </Link>
        <div className="hidden items-center gap-4 md:flex md:gap-6">
          <Link href="/" className={homeActive ? deskActive : deskIdle}>
            Home
          </Link>
          <Link href="/about" className={eventActive ? deskActive : deskIdle}>
            Event
          </Link>
          <Link
            href="/conference"
            className={highlight === "conference" ? deskActive : deskIdle}
          >
            Conference
          </Link>
          <Link href="/faq" className={highlight === "faq" ? deskActive : deskIdle}>
            FAQ
          </Link>
          <Link
            href="/contact"
            className={highlight === "contact" ? deskActive : deskIdle}
          >
            Contact
          </Link>
        </div>
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-white/15 px-3 py-2 font-manrope text-sm font-semibold text-blue-400 [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute right-0 z-50 mt-2 min-w-[12rem] rounded-lg border border-white/10 bg-[#111827] py-2 shadow-lg">
            <Link
              href="/"
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-blue-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-blue-300"
            >
              Event
            </Link>
            <Link
              href="/conference"
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-blue-300"
            >
              Conference
            </Link>
            <Link
              href="/faq"
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-blue-300"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-blue-300"
            >
              Contact
            </Link>
          </div>
        </details>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/contact"
            className="flex items-center justify-center rounded-full p-2 text-blue-400 transition-all hover:bg-white/5 active:scale-95"
            aria-label="Contact"
          >
            <span
              className="material-symbols-outlined text-[24px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              mail
            </span>
          </Link>
          <Link
            href="/about"
            className="flex items-center justify-center rounded-full p-2 text-blue-400 transition-all hover:bg-white/5 active:scale-95"
            aria-label="About"
          >
            <span
              className="material-symbols-outlined text-[24px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              info
            </span>
          </Link>
          <Link href="/register" className={registerCtaClass}>
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export function StitchFooter() {
  return (
    <footer className="mt-auto w-full border-t border-white/5 bg-[#0b0f1a] px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-lg font-bold text-white">AiA26</div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/about"
            className="font-manrope text-xs text-gray-400 underline-offset-4 transition-opacity hover:text-blue-500 hover:underline hover:opacity-80"
          >
            About the event
          </Link>
          <Link
            href="/register"
            className="font-manrope text-xs text-gray-400 underline-offset-4 transition-opacity hover:text-blue-500 hover:underline hover:opacity-80"
          >
            Register
          </Link>
          <Link
            href="/contact"
            className="font-manrope text-xs text-gray-400 underline-offset-4 transition-opacity hover:text-blue-500 hover:underline hover:opacity-80"
          >
            Contact
          </Link>
          <Link
            href="/faq"
            className="font-manrope text-xs text-gray-400 underline-offset-4 transition-opacity hover:text-blue-500 hover:underline hover:opacity-80"
          >
            FAQ
          </Link>
          <Link
            href="/conference"
            className="font-manrope text-xs text-gray-400 underline-offset-4 transition-opacity hover:text-blue-500 hover:underline hover:opacity-80"
          >
            Conference
          </Link>
        </div>
        <div className="text-center font-manrope text-xs text-gray-400 md:text-right">
          © {new Date().getFullYear()} AiA26 — AGENTIC AI workshop • Tetouan,
          Morocco
        </div>
      </div>
    </footer>
  );
}
