import { createFileRoute } from "@tanstack/react-router";
import { ProfessionalModule } from "@/modules/professional";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Profesional — TUTORÍA Universitaria" },
      {
        name: "description",
        content:
          "Módulo profesional de la plataforma de tutoría: especializaciones en Ingeniería de Sistemas, convenios, prácticas y guía para tu hoja de vida.",
      },
      { property: "og:title", content: "Profesional — TUTORÍA Universitaria" },
      {
        property: "og:description",
        content:
          "Explora especializaciones, convenios, prácticas y aprende a construir tu hoja de vida profesional.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <ProfessionalModule />;
}
