import { useState } from "react";
import {
  Code2,
  ShieldCheck,
  BarChart3,
  BrainCircuit,
  Cloud,
  Repeat,
  Globe,
  Smartphone,
  Network,
  Server,
  TrendingUp,
  CheckCircle2,
  BookOpen,
  Wrench,
  FolderGit2,
  Briefcase,
  GraduationCap,
  HeartHandshake,
  ListChecks,
  Target,
  type LucideIcon,
} from "lucide-react";
import { specializations } from "../data/specializations";
import { getCompaniesByIds } from "../data/companies";
import {
  ProfessionalCard,
  Pill,
  SectionHeader,
  LogoBadge,
  TechnologyBadge,
  ProgressIndicator,
  Roadmap,
} from "../components/ui-kit";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  ShieldCheck,
  BarChart3,
  BrainCircuit,
  Cloud,
  Repeat,
  Globe,
  Smartphone,
  Network,
  Server,
};

export function SpecializationsSection() {
  const [activeId, setActiveId] = useState<string>(specializations[0]?.id ?? "");
  const active = specializations.find((s) => s.id === activeId) ?? specializations[0];
  if (!active) return null; // los datos mock siempre incluyen especializaciones
  const ActiveIcon = iconMap[active.icon] ?? Code2;
  const relatedCompanies = getCompaniesByIds(active.companyIds);

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Especializaciones"
        title="Ramas de especialización en Ingeniería de Sistemas"
        description="Explora las principales áreas en las que puedes orientar tu carrera: qué hacen, qué tecnologías usan y cómo empezar desde la universidad."
      />

      {/* Selector de ramas */}
      <div
        role="tablist"
        aria-label="Ramas de especialización"
        className="flex gap-2 overflow-x-auto pb-1 lg:grid lg:grid-cols-5 lg:overflow-visible"
      >
        {specializations.map((s) => {
          const Icon = iconMap[s.icon] ?? Code2;
          const isActive = s.id === activeId;
          return (
            <button
              key={s.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(s.id)}
              className={cn(
                "flex shrink-0 items-center gap-2.5 rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-all duration-200",
                isActive
                  ? "border-prof-primary bg-prof-primary text-prof-on-primary shadow-prof-soft"
                  : "border-prof-border bg-prof-surface text-prof-ink hover:-translate-y-0.5 hover:border-prof-primary/40",
              )}
            >
              <Icon className={cn("h-4 w-4 shrink-0", isActive ? "text-prof-on-primary" : "text-prof-primary")} />
              <span className="leading-tight">{s.name}</span>
            </button>
          );
        })}
      </div>

      {/* Detalle de la rama activa */}
      <div key={active.id} className="grid gap-6 lg:grid-cols-3">
        {/* Columna principal */}
        <div className="space-y-6 lg:col-span-2">
          <ProfessionalCard className="prof-animate-fade-up">
            <div className="flex flex-wrap items-start gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-prof-primary-soft text-prof-primary">
                <ActiveIcon className="h-7 w-7" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-bold tracking-tight text-prof-ink">{active.name}</h3>
                <p className="mt-1 text-sm text-prof-muted">{active.summary}</p>
              </div>
              <Pill tone="primary">
                <TrendingUp className="h-3.5 w-3.5" /> Demanda {active.demand}%
              </Pill>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-prof-muted sm:text-base">
              {active.description}
            </p>

            <div className="mt-6">
              <ProgressIndicator label="Demanda laboral estimada" value={active.demand} />
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-prof-muted">
                ¿Qué hace un profesional de esta área?
              </p>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {active.whatTheyDo.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-prof-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-prof-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ProfessionalCard>

          <ProfessionalCard className="prof-animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-wider text-prof-muted">
              Tecnologías principales
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {active.technologies.map((t) => (
                <TechnologyBadge key={t.name} name={t.name} short={t.short} description={t.description} />
              ))}
            </div>
          </ProfessionalCard>

          <div className="prof-animate-fade-up">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-prof-muted">
              Ruta de aprendizaje sugerida
            </p>
            <Roadmap
              steps={active.roadmap.map((r) => ({ title: r.title, description: r.description }))}
            />
          </div>
        </div>

        {/* Columna lateral */}
        <div className="space-y-6">
          <ProfessionalCard className="prof-animate-fade-up">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-prof-muted">
              <GraduationCap className="h-4 w-4 text-prof-primary" /> ¿Cómo empezar?
            </p>
            <dl className="mt-4 space-y-4">
              {(
                [
                  { label: "Conocimientos base", items: active.howToStart.knowledge, icon: BookOpen },
                  { label: "Tecnologías iniciales", items: active.howToStart.technologies, icon: Wrench },
                  { label: "Proyectos sugeridos", items: active.howToStart.projects, icon: FolderGit2 },
                  { label: "Experiencia recomendada", items: active.howToStart.experience, icon: Briefcase },
                ] as const
              ).map(({ label, items, icon: Icon }) => (
                <div key={label}>
                  <dt className="flex items-center gap-1.5 text-sm font-semibold text-prof-ink">
                    <Icon className="h-3.5 w-3.5 text-prof-accent" /> {label}
                  </dt>
                  <dd className="mt-1.5 flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </ProfessionalCard>

          <ProfessionalCard className="prof-animate-fade-up">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-prof-muted">
              <Target className="h-4 w-4 text-prof-primary" /> Perfil profesional
            </p>
            <p className="mt-3 text-sm leading-relaxed text-prof-muted">{active.profile.description}</p>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="flex items-center gap-1.5 font-semibold text-prof-ink">
                  <BookOpen className="h-3.5 w-3.5 text-prof-accent" /> Conocimientos
                </dt>
                <dd className="mt-1 flex flex-wrap gap-1.5">
                  {active.profile.knowledge.map((k) => (
                    <Pill key={k}>{k}</Pill>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-1.5 font-semibold text-prof-ink">
                  <Wrench className="h-3.5 w-3.5 text-prof-accent" /> Habilidades técnicas
                </dt>
                <dd className="mt-1 flex flex-wrap gap-1.5">
                  {active.profile.technicalSkills.map((k) => (
                    <Pill key={k}>{k}</Pill>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-1.5 font-semibold text-prof-ink">
                  <HeartHandshake className="h-3.5 w-3.5 text-prof-accent" /> Habilidades blandas
                </dt>
                <dd className="mt-1 flex flex-wrap gap-1.5">
                  {active.profile.softSkills.map((k) => (
                    <Pill key={k}>{k}</Pill>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-1.5 font-semibold text-prof-ink">
                  <ListChecks className="h-3.5 w-3.5 text-prof-accent" /> Responsabilidades
                </dt>
                <dd className="mt-1 flex flex-wrap gap-1.5">
                  {active.profile.responsibilities.map((k) => (
                    <Pill key={k}>{k}</Pill>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-prof-ink">Roles posibles</dt>
                <dd className="mt-1 flex flex-wrap gap-1.5">
                  {active.profile.roles.map((r) => (
                    <Pill key={r} tone="primary">
                      {r}
                    </Pill>
                  ))}
                </dd>
              </div>
            </dl>
          </ProfessionalCard>

          <ProfessionalCard className="prof-animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-wider text-prof-muted">
              Empresas relacionadas
            </p>
            <ul className="mt-4 space-y-3">
              {relatedCompanies.map((c) => (
                <li key={c.id} className="flex items-center gap-3">
                  <LogoBadge label={c.logo} size="sm" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-prof-ink">{c.name}</p>
                    <p className="truncate text-xs text-prof-muted">
                      {c.sector} · {c.area}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </ProfessionalCard>
        </div>
      </div>
    </div>
  );
}
