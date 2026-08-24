import { useState } from "react";
import {
  User,
  FileText,
  GraduationCap,
  Briefcase,
  Sparkles,
  FolderGit2,
  Award,
  Languages,
  Link2,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Lightbulb,
  UploadCloud,
  ClipboardCheck,
  type LucideIcon,
} from "lucide-react";
import { cvTutorialSteps, mockEvaluation } from "../data/cv";
import {
  ProfessionalCard,
  ProfessionalButton,
  Pill,
  SectionHeader,
} from "../components/ui-kit";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  User,
  FileText,
  GraduationCap,
  Briefcase,
  Sparkles,
  FolderGit2,
  Award,
  Languages,
  Link2,
};

const statusIcon = {
  ok: { icon: CheckCircle2, className: "text-prof-accent" },
  warning: { icon: AlertTriangle, className: "text-prof-warning" },
  missing: { icon: XCircle, className: "text-prof-primary" },
};

export function CvSection() {
  const [showEvaluation, setShowEvaluation] = useState(false);
  const { score, indicators, recommendations } = mockEvaluation;

  return (
    <div className="space-y-10">
      <SectionHeader
        eyebrow="Hoja de vida"
        title="Construye una hoja de vida que destaque"
        description="Sigue el tutorial paso a paso y conoce los criterios con los que se evaluará tu hoja de vida. La evaluación automática estará disponible próximamente."
      />

      {/* Tutorial */}
      <ol className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {cvTutorialSteps.map((step, i) => {
          const Icon = iconMap[step.icon] ?? FileText;
          return (
            <li key={step.step}>
              <ProfessionalCard
                interactive
                className="prof-animate-fade-up h-full"
              >
                <div style={{ animationDelay: `${i * 40}ms` }}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-prof-primary-soft text-prof-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-prof-muted">
                        Paso {step.step}
                      </p>
                      <h3 className="text-base font-semibold text-prof-ink">{step.title}</h3>
                    </div>
                  </div>
                  <dl className="mt-4 space-y-2.5 text-sm leading-relaxed">
                    <div>
                      <dt className="font-semibold text-prof-ink">Qué incluir</dt>
                      <dd className="text-prof-muted">{step.what}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-prof-ink">Qué evitar</dt>
                      <dd className="text-prof-muted">{step.avoid}</dd>
                    </div>
                  </dl>
                  <p className="mt-4 flex items-start gap-2 rounded-2xl bg-prof-accent-soft px-3 py-2 text-xs font-medium text-prof-accent">
                    <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {step.tip}
                  </p>
                </div>
              </ProfessionalCard>
            </li>
          );
        })}
      </ol>

      {/* Evaluación */}
      <ProfessionalCard className="prof-animate-fade-up">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-prof-primary-soft text-prof-primary">
              <ClipboardCheck className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-prof-ink">Evaluación de tu hoja de vida</h3>
              <p className="text-sm text-prof-muted">
                Criterios de revisión con puntaje, indicadores y recomendaciones.
              </p>
            </div>
          </div>
          {!showEvaluation ? (
            <ProfessionalButton onClick={() => setShowEvaluation(true)}>
              <UploadCloud className="h-4 w-4" /> Simular evaluación
            </ProfessionalButton>
          ) : null}
        </div>

        {!showEvaluation ? (
          <div className="mt-6 rounded-3xl border border-dashed border-prof-border bg-prof-bg p-8 text-center">
            <UploadCloud className="mx-auto h-8 w-8 text-prof-muted" />
            <p className="mt-3 text-sm font-medium text-prof-ink">Carga de archivo disponible próximamente</p>
            <p className="mt-1 text-xs text-prof-muted">
              Mientras tanto, puedes simular una evaluación con datos de demostración.
            </p>
          </div>
        ) : (
          <div className="prof-animate-fade-up mt-6 grid gap-8 lg:grid-cols-[auto_1fr]">
            {/* Puntaje */}
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="relative h-36 w-36">
                <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    strokeWidth="10"
                    className="stroke-prof-bg"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${(score / 100) * 2 * Math.PI * 52} ${2 * Math.PI * 52}`}
                    className="stroke-prof-primary transition-all duration-700"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-extrabold text-prof-ink">{score}</span>
                  <span className="text-xs font-medium text-prof-muted">/ 100</span>
                </div>
              </div>
              <Pill tone="primary">Puntaje general</Pill>
            </div>

            {/* Indicadores y recomendaciones */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-prof-muted">
                  Indicadores
                </p>
                <ul className="mt-3 space-y-2.5">
                  {indicators.map((ind) => {
                    const { icon: Icon, className } = statusIcon[ind.status];
                    return (
                      <li
                        key={ind.id}
                        className="flex items-start gap-2.5 rounded-2xl border border-prof-border bg-prof-bg px-3 py-2.5"
                      >
                        <Icon className={cn("mt-0.5 h-4 w-4 shrink-0", className)} />
                        <div>
                          <p className="text-sm font-semibold text-prof-ink">{ind.label}</p>
                          <p className="text-xs text-prof-muted">{ind.comment}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-prof-muted">
                  Recomendaciones
                </p>
                <ul className="mt-3 space-y-2.5">
                  {recommendations.map((rec) => (
                    <li
                      key={rec.title}
                      className="rounded-2xl border border-prof-border bg-prof-primary-soft/50 px-3 py-2.5"
                    >
                      <p className="text-sm font-semibold text-prof-ink">{rec.title}</p>
                      <p className="text-xs text-prof-muted">{rec.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </ProfessionalCard>
    </div>
  );
}
