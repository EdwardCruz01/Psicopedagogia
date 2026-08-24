/**
 * Componentes visuales reutilizables del módulo PROFESIONAL.
 * Todos se renderizan dentro de `.professional-module`, por lo que no afectan
 * al resto de la plataforma. Son fácilmente traducibles a funciones DOM en
 * HTML/CSS/JS puro.
 */
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ---------------- ProfessionalCard ---------------- */
export function ProfessionalCard({
  children,
  className,
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "prof-card rounded-3xl border border-prof-border bg-prof-surface p-6 shadow-prof-soft transition-all duration-200",
        interactive && "hover:-translate-y-1 hover:shadow-prof-hover",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ---------------- ProfessionalButton ---------------- */
type ButtonVariant = "primary" | "soft" | "outline" | "ghost";

export function ProfessionalButton({
  children,
  onClick,
  variant = "primary",
  className,
  type = "button",
  disabled,
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-prof-primary text-prof-on-primary hover:bg-prof-primary-hover",
    soft: "bg-prof-primary-soft text-prof-primary hover:bg-prof-primary-soft-hover",
    outline: "border border-prof-border bg-prof-surface text-prof-ink hover:bg-prof-bg",
    ghost: "text-prof-primary hover:bg-prof-primary-soft",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        className,
      )}
    >
      {children}
    </button>
  );
}

/* ---------------- Pill / chip ---------------- */
export function Pill({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: "neutral" | "primary" | "accent" | "warning";
  className?: string;
}) {
  const tones = {
    neutral: "bg-prof-bg text-prof-muted",
    primary: "bg-prof-primary-soft text-prof-primary",
    accent: "bg-prof-accent-soft text-prof-accent",
    warning: "bg-prof-warning-soft text-prof-warning",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ---------------- SectionHeader ---------------- */
export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <header className={cn("prof-animate-fade-up max-w-2xl", className)}>
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-prof-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-bold tracking-tight text-prof-ink sm:text-3xl">{title}</h2>
      {description ? <p className="mt-2 text-sm text-prof-muted sm:text-base">{description}</p> : null}
    </header>
  );
}

/* ---------------- LogoBadge (miniatura circular) ---------------- */
export function LogoBadge({ label, size = "md" }: { label: string; size?: "sm" | "md" }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full bg-prof-primary-soft font-bold text-prof-primary",
        size === "sm" ? "h-9 w-9 text-xs" : "h-12 w-12 text-sm",
      )}
    >
      {label}
    </span>
  );
}

/* ---------------- TechnologyBadge ---------------- */
export function TechnologyBadge({
  name,
  short,
  description,
}: {
  name: string;
  short: string;
  description?: string | undefined;
}) {
  return (
    <div
      title={description}
      className="flex items-center gap-2.5 rounded-full border border-prof-border bg-prof-surface py-1.5 pl-1.5 pr-4 transition-colors hover:border-prof-primary/40"
    >
      <LogoBadge label={short} size="sm" />
      <span className="text-sm font-medium text-prof-ink">{name}</span>
    </div>
  );
}

/* ---------------- ProgressIndicator ---------------- */
export function ProgressIndicator({
  value,
  label,
  tone = "primary",
}: {
  value: number;
  label?: string;
  tone?: "primary" | "accent";
}) {
  return (
    <div className="w-full">
      {label ? (
        <div className="mb-1.5 flex items-center justify-between text-xs text-prof-muted">
          <span>{label}</span>
          <span className="font-semibold text-prof-ink">{value}%</span>
        </div>
      ) : null}
      <div className="h-2 w-full overflow-hidden rounded-full bg-prof-bg">
        <div
          className={cn(
            "h-full rounded-full transition-[width] duration-700 ease-out",
            tone === "primary" ? "bg-prof-primary" : "bg-prof-accent",
          )}
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
    </div>
  );
}

/* ---------------- Roadmap ---------------- */
export function Roadmap({ steps }: { steps: { title: string; description?: string }[] }) {
  return (
    <ol className="relative space-y-4 md:grid md:grid-cols-4 md:gap-4 md:space-y-0">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="prof-animate-fade-up relative flex gap-4 rounded-3xl border border-prof-border bg-prof-surface p-4 md:flex-col md:gap-2"
          style={{ animationDelay: `${index * 60}ms` }}
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-prof-primary-soft text-sm font-bold text-prof-primary">
            {index + 1}
          </span>
          <div>
            <p className="text-sm font-semibold text-prof-ink">{step.title}</p>
            {step.description ? (
              <p className="mt-1 text-xs leading-relaxed text-prof-muted">{step.description}</p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ---------------- StepCard ---------------- */
export function StepCard({
  step,
  title,
  children,
  icon,
}: {
  step: number;
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <ProfessionalCard interactive className="prof-animate-fade-up h-full">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-prof-accent-soft text-prof-accent">
          {icon ?? <span className="text-sm font-bold">{step}</span>}
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-prof-muted">Paso {step}</p>
          <h3 className="text-base font-semibold text-prof-ink">{title}</h3>
        </div>
      </div>
      <div className="mt-4 space-y-2 text-sm text-prof-muted">{children}</div>
    </ProfessionalCard>
  );
}

/* ---------------- EmptyHint ---------------- */
export function EmptyHint({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-3xl border border-dashed border-prof-border bg-prof-bg p-8 text-center text-sm text-prof-muted">
      {children}
    </div>
  );
}
