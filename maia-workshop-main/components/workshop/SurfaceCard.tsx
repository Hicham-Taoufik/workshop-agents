import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

/** Card vessel — 1px subtle border, optional hover lift (Stitch cards) */
export function SurfaceCard({ children, className = "", hover = true }: Props) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.08] bg-ds-surface/90 shadow-glow-primary backdrop-blur-sm ${
        hover ? "transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow-primary" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
