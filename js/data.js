const professionalSections = [
  {
    id: "convenios",
    title: "Convenios",
    shortTitle: "Convenios",
    description: "Conoce instituciones y oportunidades que pueden acercarte al mundo profesional.",
    detail: "Explora convenios universitarios y opciones de prácticas preparadas para tu carrera.",
    icon: "🤝",
    theme: "blue",
  },
  {
    id: "specializations",
    title: "Especializaciones",
    shortTitle: "Especializaciones",
    description: "Descubre las áreas de Ingeniería de Sistemas que conectan con tus intereses.",
    detail: "Elige una rama, conoce sus tecnologías y visualiza una ruta para comenzar.",
    icon: "💻",
    theme: "yellow",
  },
  {
    id: "profile",
    title: "Perfil de egreso",
    shortTitle: "Perfil de egreso",
    description: "Imagina el profesional que quieres llegar a ser y los pasos para construirlo.",
    detail: "Relaciona tus intereses con habilidades, puestos y empresas del sector tecnológico.",
    icon: "🎓",
    theme: "lilac",
  },
  {
    id: "cv",
    title: "CV",
    shortTitle: "Curriculum Vitae",
    description: "Aprende a presentar tus habilidades, proyectos y experiencia con claridad.",
    detail: "Construye un CV orientado a tu perfil y revisa qué elementos puedes mejorar.",
    icon: "📄",
    theme: "mint",
  },
];

const specializations = [
  { id: "software", name: "Desarrollo de Software", icon: "{ }", color: "blue", technologies: ["JavaScript", "Java", "Git"] },
  { id: "security", name: "Ciberseguridad", icon: "⌁", color: "lilac", technologies: ["Linux", "Python", "Redes"] },
  { id: "data", name: "Ciencia de Datos", icon: "◒", color: "mint", technologies: ["Python", "SQL", "Power BI"] },
  { id: "ai", name: "Inteligencia Artificial", icon: "✦", color: "yellow", technologies: ["Python", "TensorFlow", "Jupyter"] },
  { id: "cloud", name: "Cloud Computing", icon: "☁", color: "blue", technologies: ["AWS", "Azure", "Docker"] },
  { id: "devops", name: "DevOps", icon: "↗", color: "mint", technologies: ["GitHub", "Docker", "CI/CD"] },
  { id: "web", name: "Desarrollo Web", icon: "◫", color: "yellow", technologies: ["HTML", "CSS", "React"] },
  { id: "mobile", name: "Aplicaciones Móviles", icon: "▯", color: "lilac", technologies: ["Kotlin", "Flutter", "Firebase"] },
  { id: "networks", name: "Redes y Telecomunicaciones", icon: "⌘", color: "blue", technologies: ["Cisco", "TCP/IP", "Linux"] },
  { id: "systems", name: "Arquitectura de Sistemas", icon: "▦", color: "mint", technologies: ["UML", "SQL", "Cloud"] },
];

const conventions = [
  { name: "Convenios universitarios", type: "Universidad", description: "Alianzas que amplían tus oportunidades de formación y vinculación.", place: "Huánuco · Perú", icon: "🏛️" },
  { name: "Prácticas profesionales", type: "Prácticas", description: "Oportunidades para aplicar lo aprendido y sumar experiencia a tu perfil.", place: "Modalidad híbrida", icon: "💼" },
  { name: "Comunidad tecnológica", type: "Universidad", description: "Espacios de colaboración, mentoría y proyectos con otros estudiantes.", place: "Campus universitario", icon: "🌱" },
];

const profileByArea = {
  software: {
    name: "Desarrollo de Software",
    description: "Profesional capaz de analizar necesidades, diseñar soluciones y construir aplicaciones útiles, mantenibles y centradas en las personas.",
    skills: ["Lógica y programación", "Trabajo colaborativo", "Diseño de soluciones", "Aprendizaje continuo"],
    roles: "Desarrollador web · Analista programador · Ingeniero de software",
  },
  security: {
    name: "Ciberseguridad",
    description: "Profesional que protege información, sistemas y redes identificando riesgos y creando respuestas responsables ante amenazas digitales.",
    skills: ["Redes y sistemas", "Pensamiento analítico", "Gestión de riesgos", "Ética profesional"],
    roles: "Analista SOC · Especialista en seguridad · Auditor de sistemas",
  },
  ai: {
    name: "Inteligencia Artificial",
    description: "Profesional que transforma datos en soluciones inteligentes para apoyar decisiones y resolver problemas reales con tecnología.",
    skills: ["Programación", "Matemática aplicada", "Análisis de datos", "Comunicación de resultados"],
    roles: "Analista de datos · Ingeniero ML · Especialista en automatización",
  },
  data: {
    name: "Ciencia de Datos",
    description: "Profesional que organiza, interpreta y comunica información para encontrar patrones y generar mejores decisiones.",
    skills: ["Estadística", "Visualización", "SQL y programación", "Curiosidad profesional"],
    roles: "Analista de datos · BI developer · Consultor de información",
  },
};

const cvSteps = [
  ["01", "Datos personales", "Incluye información de contacto clara y profesional."],
  ["02", "Perfil profesional", "Resume qué sabes hacer y hacia dónde quieres crecer."],
  ["03", "Formación", "Ordena tus estudios y cursos más relevantes."],
  ["04", "Experiencia", "Describe aportes concretos, incluso en proyectos académicos."],
  ["05", "Habilidades", "Prioriza tecnologías y habilidades que puedas demostrar."],
  ["06", "Proyectos", "Muestra qué construiste, con qué herramientas y qué aprendiste."],
];

window.professionalData = { professionalSections, specializations, conventions, profileByArea, cvSteps };
