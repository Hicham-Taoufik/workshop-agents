import Link from "next/link";
import type { ReactNode } from "react";

type Base = {
  href: string;
  children: ReactNode;
  className?: string;
};

/** Primary CTA — neon orange (Stitch primary action) */
export function PrimaryCtaLink({ href, children, className = "" }: Base) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-ds-cta to-ds-cta-strong px-8 py-4 text-lg font-semibold text-ds-bg shadow-glow-cta transition-all duration-300 hover:scale-[1.02] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-cta ${className}`}
    >
      {children}
    </Link>
  );
}

/** Secondary — outlined electric blue */
export function SecondaryCtaLink({ href, children, className = "" }: Base) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg border border-ds-primary/40 bg-ds-primary/5 px-8 py-4 text-lg font-semibold text-ds-on backdrop-blur-sm transition-colors hover:border-ds-primary hover:bg-ds-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-primary ${className}`}
    >
      {children}
    </Link>
  );
}
