import { useMemo, useState } from "react";
import { Building2, GraduationCap, MapPin, Laptop, ArrowUpRight, Filter } from "lucide-react";
import {
  universityConventions,
  internships,
  internshipFilters,
} from "../data/conventions";
import {
  ProfessionalCard,
  ProfessionalButton,
  Pill,
  SectionHeader,
  LogoBadge,
  EmptyHint,
} from "../components/ui-kit";
import { cn } from "@/lib/utils";

type Tab = "universidad" | "practicas";

export function ConventionsSection() {
  const [tab, setTab] = useState<Tab>("universidad");

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Convenios"
        title="Convenios y oportunidades de práctica"
        description="Conoce los convenios institucionales de la universidad y las oportunidades de práctica profesional disponibles para estudiantes de Ingeniería de Sistemas."
      />

      <div className="flex w-full gap-2 overflow-x-auto rounded-full border border-prof-border bg-prof-surface p-1.5 sm:w-fit">
        {(
          [
            { id: "universidad", label: "Universidad", icon: GraduationCap },
            { id: "practicas", label: "Prácticas", icon: Building2 },
          ] as const
        ).map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={cn(
              "inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors",
              tab === id
                ? "bg-prof-primary text-prof-on-primary"
                : "text-prof-muted hover:bg-prof-bg",
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>

      {tab === "universidad" ? <UniversityConventions /> : <Internships />}
    </div>
  );
}

function UniversityConventions() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {universityConventions.map((c, i) => (
        <ProfessionalCard
          key={c.id}
          interactive
          className="prof-animate-fade-up flex h-full flex-col"
          // eslint-disable-next-line react/no-unknown-property
        >
          <div style={{ animationDelay: `${i * 50}ms` }} className="flex h-full flex-col">
            <div className="flex items-start gap-3">
              <LogoBadge label={c.logo} />
              <div className="min-w-0">
                <h3 className="text-base font-semibold leading-snug text-prof-ink">{c.name}</h3>
                <p className="mt-0.5 flex items-center gap-1 text-xs text-prof-muted">
                  <MapPin className="h-3.5 w-3.5" /> {c.location}
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-prof-muted">{c.description}</p>

            <div className="mt-4">
              <Pill tone="primary">{c.type}</Pill>
            </div>

            <ul className="mt-4 space-y-1.5 text-sm text-prof-muted">
              {c.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-prof-accent" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-2">
              <ProfessionalButton variant="soft" className="w-full">
                Ver convenio <ArrowUpRight className="h-4 w-4" />
              </ProfessionalButton>
            </div>
          </div>
        </ProfessionalCard>
      ))}
    </div>
  );
}

function Internships() {
  const [area, setArea] = useState("todas");
  const [modality, setModality] = useState("todas");
  const [location, setLocation] = useState("todas");
  const [specialization, setSpecialization] = useState("todas");

  const results = useMemo(
    () =>
      internships.filter(
        (o) =>
          (area === "todas" || o.area === area) &&
          (modality === "todas" || o.modality === modality) &&
          (location === "todas" || o.location === location) &&
          (specialization === "todas" || o.specialization === specialization),
      ),
    [area, modality, location, specialization],
  );

  const selects = [
    { label: "Área", value: area, set: setArea, options: internshipFilters.areas },
    { label: "Modalidad", value: modality, set: setModality, options: internshipFilters.modalities },
    { label: "Ubicación", value: location, set: setLocation, options: internshipFilters.locations },
    {
      label: "Especialización",
      value: specialization,
      set: setSpecialization,
      options: internshipFilters.specializations,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-prof-border bg-prof-surface p-5">
        <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-prof-ink">
          <Filter className="h-4 w-4 text-prof-primary" /> Filtrar oportunidades
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {selects.map((s) => (
            <label key={s.label} className="block">
              <span className="mb-1 block text-xs font-medium text-prof-muted">{s.label}</span>
              <select
                value={s.value}
                onChange={(e) => s.set(e.target.value)}
                className="w-full rounded-full border border-prof-border bg-prof-bg px-4 py-2 text-sm text-prof-ink outline-none transition-colors focus:border-prof-primary"
              >
                <option value="todas">Todas</option>
                {s.options.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
      </div>

      {results.length === 0 ? (
        <EmptyHint>No hay oportunidades con esos filtros. Prueba con otra combinación.</EmptyHint>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {results.map((o) => (
            <ProfessionalCard key={o.id} interactive className="prof-animate-fade-up flex h-full flex-col">
              <div className="flex items-start gap-3">
                <LogoBadge label={o.logo} />
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-prof-ink">{o.company}</h3>
                  <p className="text-xs text-prof-muted">{o.area}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Pill tone="primary">{o.specialization}</Pill>
                <Pill tone="accent">
                  <Laptop className="h-3.5 w-3.5" /> {o.modality}
                </Pill>
                <Pill>
                  <MapPin className="h-3.5 w-3.5" /> {o.location}
                </Pill>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-prof-muted">{o.description}</p>

              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-prof-muted">Requisitos</p>
                <ul className="mt-2 space-y-1.5 text-sm text-prof-muted">
                  {o.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-prof-primary" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-2">
                <ProfessionalButton variant="soft" className="w-full">
                  Ver oportunidad <ArrowUpRight className="h-4 w-4" />
                </ProfessionalButton>
              </div>
            </ProfessionalCard>
          ))}
        </div>
      )}
    </div>
  );
}
