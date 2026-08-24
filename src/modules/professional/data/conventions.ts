/**
 * DATOS MOCK — CONVENIOS
 * Posteriormente estos arreglos se reemplazan por respuestas de API/JSON.
 */

export type UniversityConvention = {
  id: string;
  name: string;
  logo: string; // iniciales mientras no haya logo real
  description: string;
  type: string;
  benefits: string[];
  location: string;
  url: string;
};

export type InternshipOffer = {
  id: string;
  company: string;
  logo: string;
  area: string;
  specializationId: string;
  specialization: string;
  location: string;
  modality: "Presencial" | "Híbrida" | "Remota";
  description: string;
  requirements: string[];
  url: string;
};

export const universityConventions: UniversityConvention[] = [
  {
    id: "uni-1",
    name: "Universidad Politécnica de Madrid",
    logo: "PM",
    description: "Movilidad académica semestral para estudiantes de Ingeniería de Sistemas.",
    type: "Intercambio académico",
    benefits: ["Homologación de créditos", "Descuento en matrícula", "Acompañamiento académico"],
    location: "Madrid, España",
    url: "#",
  },
  {
    id: "uni-2",
    name: "Tecnológico de Monterrey",
    logo: "TM",
    description: "Cursos cortos y semestre académico en áreas de tecnología e innovación.",
    type: "Movilidad estudiantil",
    benefits: ["Cursos de verano", "Red de egresados", "Certificaciones"],
    location: "Monterrey, México",
    url: "#",
  },
  {
    id: "uni-3",
    name: "Cisco Networking Academy",
    logo: "CN",
    description: "Formación complementaria en redes, ciberseguridad y fundamentos de infraestructura.",
    type: "Convenio de formación",
    benefits: ["Cursos gratuitos", "Certificación oficial", "Laboratorios virtuales"],
    location: "Modalidad virtual",
    url: "#",
  },
  {
    id: "uni-4",
    name: "AWS Academy",
    logo: "AA",
    description: "Programa académico para formación en computación en la nube.",
    type: "Convenio tecnológico",
    benefits: ["Créditos en la nube", "Rutas de certificación", "Material oficial"],
    location: "Modalidad virtual",
    url: "#",
  },
  {
    id: "uni-5",
    name: "Universidad de Chile — FCFM",
    logo: "UC",
    description: "Cooperación en investigación aplicada y semilleros conjuntos.",
    type: "Investigación",
    benefits: ["Semilleros conjuntos", "Publicaciones", "Estancias cortas"],
    location: "Santiago, Chile",
    url: "#",
  },
  {
    id: "uni-6",
    name: "Cámara de Comercio — Nodo TI",
    logo: "CC",
    description: "Vinculación con el ecosistema empresarial de tecnología de la región.",
    type: "Convenio institucional",
    benefits: ["Ferias de empleo", "Mentorías", "Talleres de empleabilidad"],
    location: "Bogotá, Colombia",
    url: "#",
  },
];

export const internships: InternshipOffer[] = [
  {
    id: "prac-1",
    company: "Globant",
    logo: "GL",
    area: "Desarrollo",
    specializationId: "desarrollo-software",
    specialization: "Desarrollo de Software",
    location: "Bogotá, Colombia",
    modality: "Híbrida",
    description: "Práctica en equipos ágiles de desarrollo backend con acompañamiento de un mentor.",
    requirements: ["Cursar 8° semestre o superior", "Java o Python", "Inglés B1"],
    url: "#",
  },
  {
    id: "prac-2",
    company: "Bancolombia",
    logo: "BC",
    area: "Seguridad de la información",
    specializationId: "ciberseguridad",
    specialization: "Ciberseguridad",
    location: "Medellín, Colombia",
    modality: "Presencial",
    description: "Apoyo al centro de operaciones de seguridad en monitoreo y análisis de eventos.",
    requirements: ["Fundamentos de redes", "Linux básico", "Disponibilidad tiempo completo"],
    url: "#",
  },
  {
    id: "prac-3",
    company: "Rappi",
    logo: "RP",
    area: "Analítica",
    specializationId: "ciencia-datos",
    specialization: "Ciencia de Datos",
    location: "Remoto",
    modality: "Remota",
    description: "Práctica en analítica de negocio: construcción de tableros e indicadores.",
    requirements: ["SQL intermedio", "Python", "Estadística básica"],
    url: "#",
  },
  {
    id: "prac-4",
    company: "IBM",
    logo: "IB",
    area: "Nube e infraestructura",
    specializationId: "cloud-computing",
    specialization: "Cloud Computing",
    location: "Bogotá, Colombia",
    modality: "Híbrida",
    description: "Acompañamiento en proyectos de migración e infraestructura en la nube.",
    requirements: ["Fundamentos cloud", "Linux", "Trabajo en equipo"],
    url: "#",
  },
  {
    id: "prac-5",
    company: "Sofka Technologies",
    logo: "SF",
    area: "Frontend",
    specializationId: "desarrollo-web",
    specialization: "Desarrollo Web",
    location: "Manizales, Colombia",
    modality: "Remota",
    description: "Desarrollo de interfaces web con React dentro de células ágiles.",
    requirements: ["JavaScript", "HTML y CSS", "Git"],
    url: "#",
  },
  {
    id: "prac-6",
    company: "Claro",
    logo: "CL",
    area: "Redes",
    specializationId: "redes-telecomunicaciones",
    specialization: "Redes y Telecomunicaciones",
    location: "Cali, Colombia",
    modality: "Presencial",
    description: "Soporte en la operación y monitoreo de la red de datos corporativa.",
    requirements: ["Modelo OSI", "Direccionamiento IP", "CCNA en curso (deseable)"],
    url: "#",
  },
  {
    id: "prac-7",
    company: "Endava",
    logo: "EN",
    area: "Plataforma",
    specializationId: "devops",
    specialization: "DevOps",
    location: "Remoto",
    modality: "Remota",
    description: "Automatización de pipelines de despliegue y monitoreo de servicios.",
    requirements: ["Docker", "Git", "Inglés B2"],
    url: "#",
  },
  {
    id: "prac-8",
    company: "Microsoft Partner Lab",
    logo: "MS",
    area: "Inteligencia Artificial",
    specializationId: "inteligencia-artificial",
    specialization: "Inteligencia Artificial",
    location: "Bogotá, Colombia",
    modality: "Híbrida",
    description: "Prototipado de soluciones con modelos de lenguaje y visión por computador.",
    requirements: ["Python", "Fundamentos de ML", "Inglés B1"],
    url: "#",
  },
];

export const internshipFilters = {
  areas: Array.from(new Set(internships.map((i) => i.area))),
  modalities: Array.from(new Set(internships.map((i) => i.modality))),
  locations: Array.from(new Set(internships.map((i) => i.location))),
  specializations: Array.from(new Set(internships.map((i) => i.specialization))),
};
