import type { ReactNode } from "react";

type ChipProps = {
  children: ReactNode;
  className?: string;
};

/** Technical / topic tag — tertiary surface + primary text (Stitch chips) */
export function Chip({ children, className = "" }: ChipProps) {
  return (
    <span
      className={`inline-flex items-center rounded-lg border border-ds-primary/25 bg-ds-surface-high/80 px-3 py-1.5 text-xs font-semibold tracking-wide text-ds-primary ${className}`}
    >
      {children}
    </span>
  );
}
