import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

export function InfoStat({ icon, title, children }: Props) {
  return (
    <div className="group flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-ds-surface/80 p-5 transition-all duration-300 hover:border-ds-primary/30 hover:shadow-glow-primary">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ds-primary-deep/50 text-ds-primary ring-1 ring-ds-primary/20">
        {icon}
      </div>
      <div className="min-w-0">
        <h3 className="font-display text-lg font-bold text-ds-on">{title}</h3>
        <div className="mt-1 text-sm font-medium text-ds-muted">{children}</div>
      </div>
    </div>
  );
}
