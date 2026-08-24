/**
 * MÓDULO PROFESIONAL — Plataforma de Tutoría Universitaria
 *
 * Módulo aislado e integrable: todo su alcance visual vive bajo la clase
 * `.professional-module` y sus datos mock están en `./data/`, listos para
 * reemplazarse por llamadas a una API. No modifica el resto de la plataforma.
 */
import { Compass, GraduationCap, ChevronRight, Rocket, Building2, FileText } from "lucide-react";
import { SpecializationsSection } from "./sections/SpecializationsSection";
import { ConventionsSection } from "./sections/ConventionsSection";
import { CvSection } from "./sections/CvSection";
import { specializations } from "./data/specializations";
import { internships, universityConventions } from "./data/conventions";
import { ProfessionalButton } from "./components/ui-kit";

const navItems = [
  { id: "especializaciones", label: "Especializaciones" },
  { id: "convenios", label: "Convenios y prácticas" },
  { id: "hoja-de-vida", label: "Hoja de vida" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function ProfessionalModule() {
  return (
    <div className="professional-module min-h-screen bg-prof-bg text-prof-ink antialiased">
      {/* Barra institucional del módulo */}
      <header className="sticky top-0 z-20 border-b border-prof-border bg-prof-surface/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <nav aria-label="Ruta de navegación" className="flex min-w-0 items-center gap-2 text-sm">
            <span className="flex shrink-0 items-center gap-2 font-bold tracking-tight text-prof-primary">
              <GraduationCap className="h-5 w-5" /> TUTORÍA
            </span>
            <ChevronRight className="h-4 w-4 shrink-0 text-prof-muted" />
            <span className="truncate font-semibold text-prof-ink">Profesional</span>
          </nav>
          <nav aria-label="Secciones del módulo" className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-prof-muted transition-colors hover:bg-prof-primary-soft hover:text-prof-primary"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(600px 280px at 15% 0%, var(--prof-primary-soft), transparent), radial-gradient(520px 260px at 90% 20%, var(--prof-accent-soft), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-20">
          <p className="prof-animate-fade-up flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-prof-primary">
            <Compass className="h-4 w-4" /> Orientación profesional · Ingeniería de Sistemas
          </p>
          <h1 className="prof-animate-fade-up mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-prof-ink sm:text-5xl">
            Descubre hacia dónde puede llevarte tu carrera
          </h1>
          <p
            className="prof-animate-fade-up mt-4 max-w-2xl text-base leading-relaxed text-prof-muted sm:text-lg"
            style={{ animationDelay: "60ms" }}
          >
            Explora las ramas de especialización, conoce los convenios y oportunidades de práctica,
            y aprende a construir una hoja de vida que destaque. Un acompañamiento pensado para tu
            proyecto de vida profesional.
          </p>
          <div
            className="prof-animate-fade-up mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "120ms" }}
          >
            <ProfessionalButton onClick={() => scrollTo("especializaciones")}>
              <Rocket className="h-4 w-4" /> Explorar especializaciones
            </ProfessionalButton>
            <ProfessionalButton variant="outline" onClick={() => scrollTo("hoja-de-vida")}>
              <FileText className="h-4 w-4" /> Mejorar mi hoja de vida
            </ProfessionalButton>
          </div>

          {/* Indicadores del módulo */}
          <dl
            className="prof-animate-fade-up mt-12 grid max-w-2xl grid-cols-3 gap-4"
            style={{ animationDelay: "180ms" }}
          >
            {[
              { value: `${specializations.length}`, label: "Especializaciones" },
              { value: `${internships.length}`, label: "Prácticas activas" },
              { value: `${universityConventions.length}`, label: "Convenios vigentes" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-prof-border bg-prof-surface px-4 py-5 text-center shadow-prof-soft"
              >
                <dd className="text-2xl font-extrabold text-prof-primary sm:text-3xl">{stat.value}</dd>
                <dt className="mt-1 text-xs font-medium text-prof-muted sm:text-sm">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Contenido del módulo */}
      <main className="mx-auto max-w-7xl space-y-20 px-4 pb-20 sm:px-6">
        <section id="especializaciones" aria-label="Especializaciones" className="scroll-mt-24">
          <SpecializationsSection />
        </section>
        <section id="convenios" aria-label="Convenios y prácticas" className="scroll-mt-24">
          <ConventionsSection />
        </section>
        <section id="hoja-de-vida" aria-label="Hoja de vida" className="scroll-mt-24">
          <CvSection />
        </section>
      </main>

      {/* Pie del módulo */}
      <footer className="border-t border-prof-border bg-prof-surface">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-6 text-xs text-prof-muted sm:px-6">
          <p className="flex items-center gap-2">
            <Building2 className="h-4 w-4" /> Módulo Profesional · Plataforma de Tutoría Universitaria
          </p>
          <p>Versión con datos de demostración — preparada para integración con API.</p>
        </div>
      </footer>
    </div>
  );
}
