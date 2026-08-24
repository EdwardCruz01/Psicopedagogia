/**
 * DATOS MOCK — CV (tutorial y criterios de evaluación)
 * La lógica de evaluación real se implementará posteriormente.
 */

export type TutorialStep = {
  step: number;
  title: string;
  icon: string;
  what: string;
  avoid: string;
  tip: string;
};

export const cvTutorialSteps: TutorialStep[] = [
  {
    step: 1,
    title: "Datos personales",
    icon: "User",
    what: "Nombre completo, correo profesional, teléfono y ciudad.",
    avoid: "Evita fotos informales, documento de identidad o datos innecesarios.",
    tip: "Usa un correo sencillo con tu nombre.",
  },
  {
    step: 2,
    title: "Perfil profesional",
    icon: "FileText",
    what: "Tres o cuatro líneas sobre quién eres y hacia dónde vas.",
    avoid: "Evita frases genéricas como “persona proactiva y responsable”.",
    tip: "Menciona tu área de interés y una fortaleza concreta.",
  },
  {
    step: 3,
    title: "Formación académica",
    icon: "GraduationCap",
    what: "Programa, institución, periodo y semestre actual.",
    avoid: "Evita incluir toda la formación básica del colegio.",
    tip: "Agrega materias o proyectos relevantes al cargo.",
  },
  {
    step: 4,
    title: "Experiencia",
    icon: "Briefcase",
    what: "Empresa, cargo, periodo y logros medibles.",
    avoid: "Evita describir funciones sin resultados.",
    tip: "Si no tienes experiencia laboral, incluye proyectos académicos.",
  },
  {
    step: 5,
    title: "Habilidades",
    icon: "Sparkles",
    what: "Habilidades técnicas y blandas relacionadas con el cargo.",
    avoid: "Evita listas interminables o barras de porcentaje inventadas.",
    tip: "Prioriza entre 6 y 10 habilidades reales.",
  },
  {
    step: 6,
    title: "Proyectos",
    icon: "FolderGit2",
    what: "Nombre, objetivo, tecnologías y enlace al repositorio.",
    avoid: "Evita proyectos sin explicación o sin enlace.",
    tip: "Dos o tres proyectos bien explicados valen más que diez.",
  },
  {
    step: 7,
    title: "Certificaciones",
    icon: "Award",
    what: "Cursos y certificaciones vigentes con entidad y año.",
    avoid: "Evita certificados irrelevantes para el área.",
    tip: "Destaca certificaciones oficiales de tecnología.",
  },
  {
    step: 8,
    title: "Idiomas",
    icon: "Languages",
    what: "Idioma y nivel según el marco común europeo.",
    avoid: "Evita exagerar tu nivel real.",
    tip: "El inglés técnico suma mucho en tecnología.",
  },
  {
    step: 9,
    title: "Portafolio / LinkedIn",
    icon: "Link2",
    what: "Enlaces a GitHub, LinkedIn y portafolio personal.",
    avoid: "Evita perfiles vacíos o desactualizados.",
    tip: "Revisa que los enlaces funcionen antes de postular.",
  },
];

export type EvaluationIndicator = {
  id: string;
  label: string;
  status: "ok" | "warning" | "missing";
  comment: string;
};

export type CvEvaluation = {
  score: number;
  indicators: EvaluationIndicator[];
  recommendations: { title: string; description: string }[];
};

/**
 * Evaluación simulada. Posteriormente:
 *   POST /api/cv/evaluate  ->  { score, indicators, recommendations }
 */
export const mockEvaluation: CvEvaluation = {
  score: 78,
  indicators: [
    { id: "perfil", label: "Perfil profesional", status: "ok", comment: "Claro y orientado a tu área." },
    { id: "experiencia", label: "Experiencia", status: "ok", comment: "Bien estructurada y en orden cronológico." },
    { id: "habilidades", label: "Habilidades", status: "ok", comment: "Relacionadas con el perfil buscado." },
    { id: "proyectos", label: "Proyectos", status: "warning", comment: "Faltan tecnologías y enlaces." },
    { id: "diseno", label: "Diseño y legibilidad", status: "ok", comment: "Formato limpio y de una sola columna." },
    { id: "contacto", label: "Información de contacto", status: "ok", comment: "Completa y profesional." },
    { id: "enlaces", label: "Portafolio y enlaces", status: "warning", comment: "No se encontró GitHub ni portafolio." },
  ],
  recommendations: [
    { title: "Agrega proyectos relevantes", description: "Incluye dos o tres proyectos con objetivo y resultado." },
    { title: "Especifica las tecnologías", description: "Indica el stack usado en cada proyecto o experiencia." },
    { title: "Mejora tu perfil profesional", description: "Menciona la especialización hacia la que te orientas." },
    { title: "Agrega enlaces", description: "Suma tu GitHub, LinkedIn y portafolio personal." },
  ],
};
