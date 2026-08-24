/**
 * DATOS MOCK — ESPECIALIZACIONES
 * Separado de la lógica. Posteriormente puede reemplazarse por una API/JSON:
 *   export const getSpecializations = () => fetch('/api/specializations').then(r => r.json())
 */

export type Technology = {
  name: string;
  short: string; // iniciales para la miniatura
  description?: string;
};

export type RoadmapStep = {
  title: string;
  description: string;
};

export type Specialization = {
  id: string;
  name: string;
  icon: string; // nombre de icono lucide
  summary: string;
  description: string;
  whatTheyDo: string[];
  demand: number; // 0-100, indicador visual
  mainTech: string[];
  technologies: Technology[];
  roadmap: RoadmapStep[];
  howToStart: {
    knowledge: string[];
    technologies: string[];
    projects: string[];
    experience: string[];
  };
  profile: {
    description: string;
    knowledge: string[];
    technicalSkills: string[];
    softSkills: string[];
    tools: string[];
    responsibilities: string[];
    roles: string[];
  };
  companyIds: string[];
};

const baseRoadmap = (specific: string, projects: string): RoadmapStep[] => [
  { title: "Fundamentos", description: "Lógica, matemáticas discretas y algoritmos." },
  { title: "Programación", description: "Un lenguaje base, estructuras de datos y control de versiones." },
  { title: "Tecnologías específicas", description: specific },
  { title: "Proyectos", description: projects },
  { title: "Especialización", description: "Profundiza en un dominio y certifícate si aplica." },
  { title: "Portafolio", description: "Documenta tus proyectos en GitHub y una web personal." },
  { title: "Prácticas", description: "Aplica a prácticas o semilleros para ganar experiencia real." },
  { title: "Primer empleo", description: "Postula a posiciones junior con un CV orientado al área." },
];

export const specializations: Specialization[] = [
  {
    id: "desarrollo-software",
    name: "Desarrollo de Software",
    icon: "Code2",
    summary: "Diseño y construcción de aplicaciones y sistemas a la medida.",
    description:
      "El desarrollo de software abarca el análisis, diseño, construcción y mantenimiento de aplicaciones que resuelven necesidades de personas y organizaciones.",
    whatTheyDo: [
      "Traduce necesidades del negocio en soluciones de software mantenibles.",
      "Trabaja en empresas de producto, consultoras, startups o áreas de TI.",
      "Resuelve problemas de automatización, integración y escalabilidad.",
      "Programa, revisa código, escribe pruebas y participa en ceremonias ágiles.",
    ],
    demand: 95,
    mainTech: ["Java", "Python", "Git", "SQL"],
    technologies: [
      { name: "Java", short: "Jv", description: "Lenguaje empresarial ampliamente usado en backend." },
      { name: "Python", short: "Py", description: "Versátil, ideal para automatización y servicios." },
      { name: "Git", short: "Gt", description: "Control de versiones y trabajo colaborativo." },
      { name: "SQL", short: "SQ", description: "Consulta y modelado de bases de datos relacionales." },
      { name: "Docker", short: "Dk", description: "Empaquetado y despliegue de aplicaciones." },
    ],
    roadmap: baseRoadmap(
      "Frameworks backend, bases de datos y pruebas automatizadas.",
      "Construye un sistema completo con autenticación y base de datos.",
    ),
    howToStart: {
      knowledge: ["Lógica de programación", "POO", "Bases de datos relacionales"],
      technologies: ["Java o Python", "Git y GitHub", "PostgreSQL"],
      projects: ["API REST de inventario", "Aplicación de gestión académica"],
      experience: ["Semilleros de investigación", "Proyectos freelance pequeños"],
    },
    profile: {
      description:
        "Un profesional capaz de construir soluciones de software completas, con criterio de calidad, pruebas y trabajo en equipo.",
      knowledge: ["Arquitectura de software", "Patrones de diseño", "Bases de datos"],
      technicalSkills: ["Programación backend", "Pruebas unitarias", "Integración continua"],
      softSkills: ["Trabajo en equipo", "Comunicación técnica", "Pensamiento analítico"],
      tools: ["IntelliJ / VS Code", "Git", "Jira", "Docker"],
      responsibilities: ["Desarrollar funcionalidades", "Revisar código", "Documentar soluciones"],
      roles: ["Desarrollador Backend", "Ingeniero de Software Junior", "Full Stack Developer"],
    },
    companyIds: ["globant", "sofka", "endava", "bancolombia"],
  },
  {
    id: "ciberseguridad",
    name: "Ciberseguridad",
    icon: "ShieldCheck",
    summary: "Protección de sistemas, datos e infraestructura frente a amenazas.",
    description:
      "La ciberseguridad protege la información y los sistemas de una organización, identificando vulnerabilidades y respondiendo a incidentes.",
    whatTheyDo: [
      "Evalúa riesgos y vulnerabilidades en sistemas y redes.",
      "Trabaja en bancos, entidades públicas, telecomunicaciones y consultoras.",
      "Previene fugas de información, fraudes y ataques.",
      "Realiza pruebas de intrusión, monitoreo y respuesta a incidentes.",
    ],
    demand: 92,
    mainTech: ["Linux", "Redes", "Python", "SIEM"],
    technologies: [
      { name: "Linux", short: "Lx", description: "Sistema base para herramientas de seguridad." },
      { name: "Python", short: "Py", description: "Automatización de análisis y scripts ofensivos." },
      { name: "Wireshark", short: "Ws", description: "Análisis de tráfico de red." },
      { name: "Nmap", short: "Nm", description: "Descubrimiento de servicios y puertos." },
      { name: "SIEM", short: "SI", description: "Monitoreo y correlación de eventos." },
    ],
    roadmap: baseRoadmap(
      "Redes, sistemas operativos, criptografía y herramientas de pentesting.",
      "Monta un laboratorio de seguridad y documenta hallazgos.",
    ),
    howToStart: {
      knowledge: ["Redes TCP/IP", "Sistemas operativos", "Criptografía básica"],
      technologies: ["Linux", "Wireshark", "Burp Suite"],
      projects: ["Laboratorio de pentesting en máquinas virtuales", "Hardening de un servidor"],
      experience: ["Retos CTF", "Prácticas en áreas de seguridad TI"],
    },
    profile: {
      description:
        "Un profesional que anticipa riesgos, protege activos digitales y responde con criterio ante incidentes.",
      knowledge: ["Gestión de riesgos", "Normativa ISO 27001", "Análisis forense"],
      technicalSkills: ["Pentesting", "Monitoreo SIEM", "Hardening de sistemas"],
      softSkills: ["Ética profesional", "Atención al detalle", "Comunicación de riesgos"],
      tools: ["Kali Linux", "Nessus", "Splunk"],
      responsibilities: ["Auditar sistemas", "Responder incidentes", "Elaborar informes"],
      roles: ["Analista SOC", "Pentester Junior", "Analista de Riesgos TI"],
    },
    companyIds: ["bancolombia", "etek", "ibm", "claro"],
  },
  {
    id: "ciencia-datos",
    name: "Ciencia de Datos",
    icon: "BarChart3",
    summary: "Análisis de datos para apoyar decisiones con evidencia.",
    description:
      "La ciencia de datos convierte datos en información útil mediante estadística, visualización y modelos predictivos.",
    whatTheyDo: [
      "Explora, limpia y modela grandes volúmenes de datos.",
      "Trabaja en retail, banca, salud, logística y sector público.",
      "Resuelve problemas de predicción, segmentación y optimización.",
      "Construye tableros, reportes y modelos estadísticos.",
    ],
    demand: 90,
    mainTech: ["Python", "SQL", "Pandas", "Power BI"],
    technologies: [
      { name: "Python", short: "Py", description: "Lenguaje principal del análisis de datos." },
      { name: "SQL", short: "SQ", description: "Extracción de datos desde bases relacionales." },
      { name: "Pandas", short: "Pd", description: "Manipulación y limpieza de datos." },
      { name: "Power BI", short: "BI", description: "Visualización y tableros ejecutivos." },
      { name: "Scikit-learn", short: "Sk", description: "Modelos estadísticos y de aprendizaje." },
    ],
    roadmap: baseRoadmap(
      "Estadística aplicada, SQL avanzado y librerías de análisis.",
      "Analiza un dataset público y publica tus conclusiones.",
    ),
    howToStart: {
      knowledge: ["Estadística descriptiva", "Probabilidad", "Álgebra lineal"],
      technologies: ["Python", "SQL", "Jupyter Notebook"],
      projects: ["Análisis de datos abiertos de tu ciudad", "Tablero de indicadores"],
      experience: ["Proyectos de aula con datos reales", "Prácticas en áreas de analítica"],
    },
    profile: {
      description:
        "Un profesional que traduce datos en decisiones, con rigor estadístico y capacidad de comunicación.",
      knowledge: ["Estadística", "Modelado predictivo", "Bases de datos"],
      technicalSkills: ["Limpieza de datos", "Visualización", "Modelos supervisados"],
      softSkills: ["Curiosidad", "Storytelling con datos", "Pensamiento crítico"],
      tools: ["Jupyter", "Power BI", "BigQuery"],
      responsibilities: ["Construir modelos", "Documentar hallazgos", "Presentar resultados"],
      roles: ["Analista de Datos", "Data Scientist Junior", "Analista BI"],
    },
    companyIds: ["rappi", "bancolombia", "globant", "ibm"],
  },
  {
    id: "inteligencia-artificial",
    name: "Inteligencia Artificial",
    icon: "BrainCircuit",
    summary: "Sistemas capaces de aprender, predecir y automatizar tareas.",
    description:
      "La inteligencia artificial diseña modelos que aprenden de los datos para resolver tareas complejas como visión, lenguaje o recomendación.",
    whatTheyDo: [
      "Diseña y entrena modelos de aprendizaje automático.",
      "Trabaja en centros de investigación, empresas de producto y consultoras.",
      "Resuelve problemas de clasificación, predicción y automatización.",
      "Prepara datos, entrena modelos y los lleva a producción.",
    ],
    demand: 94,
    mainTech: ["Python", "PyTorch", "TensorFlow", "MLOps"],
    technologies: [
      { name: "Python", short: "Py", description: "Base del ecosistema de IA." },
      { name: "PyTorch", short: "Pt", description: "Framework de redes neuronales." },
      { name: "TensorFlow", short: "Tf", description: "Entrenamiento y despliegue de modelos." },
      { name: "Hugging Face", short: "Hf", description: "Modelos preentrenados de lenguaje." },
      { name: "MLflow", short: "Ml", description: "Seguimiento de experimentos." },
    ],
    roadmap: baseRoadmap(
      "Machine learning, deep learning y despliegue de modelos.",
      "Entrena un modelo propio y publícalo con una interfaz sencilla.",
    ),
    howToStart: {
      knowledge: ["Álgebra lineal", "Cálculo", "Estadística"],
      technologies: ["Python", "NumPy", "PyTorch"],
      projects: ["Clasificador de imágenes", "Asistente con modelos de lenguaje"],
      experience: ["Semilleros de IA", "Competencias tipo Kaggle"],
    },
    profile: {
      description:
        "Un profesional que combina matemáticas, programación y criterio ético para crear sistemas inteligentes.",
      knowledge: ["Aprendizaje automático", "Redes neuronales", "Ética de la IA"],
      technicalSkills: ["Entrenamiento de modelos", "Ingeniería de características", "Evaluación de modelos"],
      softSkills: ["Rigor", "Aprendizaje continuo", "Comunicación de resultados"],
      tools: ["Jupyter", "PyTorch", "Weights & Biases"],
      responsibilities: ["Preparar datos", "Entrenar y validar modelos", "Monitorear desempeño"],
      roles: ["ML Engineer Junior", "Investigador en IA", "Ingeniero de Datos/IA"],
    },
    companyIds: ["globant", "ibm", "rappi", "microsoft"],
  },
  {
    id: "cloud-computing",
    name: "Cloud Computing",
    icon: "Cloud",
    summary: "Diseño y operación de soluciones en la nube.",
    description:
      "El cómputo en la nube permite desplegar aplicaciones escalables y seguras sobre infraestructura administrada por proveedores.",
    whatTheyDo: [
      "Diseña arquitecturas escalables y costo-eficientes.",
      "Trabaja en empresas con operación digital y proveedores de servicios.",
      "Resuelve problemas de disponibilidad, costos y escalabilidad.",
      "Configura servicios, automatiza infraestructura y monitorea.",
    ],
    demand: 88,
    mainTech: ["AWS", "Azure", "Terraform", "Linux"],
    technologies: [
      { name: "AWS", short: "AW", description: "Principal proveedor de servicios en la nube." },
      { name: "Azure", short: "Az", description: "Nube de Microsoft, común en el sector corporativo." },
      { name: "Terraform", short: "Tf", description: "Infraestructura como código." },
      { name: "Kubernetes", short: "K8", description: "Orquestación de contenedores." },
      { name: "Linux", short: "Lx", description: "Sistema base de los servidores." },
    ],
    roadmap: baseRoadmap(
      "Servicios de nube, redes virtuales y automatización de infraestructura.",
      "Despliega una aplicación completa en la nube con dominio propio.",
    ),
    howToStart: {
      knowledge: ["Redes", "Sistemas operativos", "Virtualización"],
      technologies: ["AWS o Azure", "Docker", "Terraform"],
      projects: ["Despliegue de una API en la nube", "Automatización con IaC"],
      experience: ["Certificación Cloud Practitioner", "Prácticas en infraestructura"],
    },
    profile: {
      description:
        "Un profesional que diseña y opera infraestructura moderna, equilibrando desempeño, seguridad y costos.",
      knowledge: ["Arquitectura cloud", "Redes", "Seguridad en la nube"],
      technicalSkills: ["IaC", "Contenedores", "Monitoreo"],
      softSkills: ["Resolución de problemas", "Documentación", "Colaboración"],
      tools: ["AWS Console", "Terraform", "Grafana"],
      responsibilities: ["Diseñar arquitecturas", "Optimizar costos", "Garantizar disponibilidad"],
      roles: ["Cloud Engineer Junior", "Arquitecto Cloud", "Ingeniero de Infraestructura"],
    },
    companyIds: ["microsoft", "ibm", "endava", "claro"],
  },
  {
    id: "devops",
    name: "DevOps",
    icon: "Repeat",
    summary: "Automatización del ciclo de vida del software.",
    description:
      "DevOps integra desarrollo y operaciones para entregar software de forma continua, confiable y automatizada.",
    whatTheyDo: [
      "Automatiza compilación, pruebas y despliegue.",
      "Trabaja en equipos de plataforma y en empresas de producto.",
      "Reduce errores manuales y tiempos de entrega.",
      "Construye pipelines, monitorea y mejora procesos.",
    ],
    demand: 87,
    mainTech: ["Docker", "Kubernetes", "CI/CD", "Git"],
    technologies: [
      { name: "Docker", short: "Dk", description: "Contenedores para entornos consistentes." },
      { name: "Kubernetes", short: "K8", description: "Orquestación y escalado." },
      { name: "GitHub Actions", short: "GA", description: "Pipelines de integración continua." },
      { name: "Ansible", short: "An", description: "Automatización de configuración." },
      { name: "Prometheus", short: "Pr", description: "Monitoreo y métricas." },
    ],
    roadmap: baseRoadmap(
      "Contenedores, pipelines CI/CD y observabilidad.",
      "Automatiza el despliegue de un proyecto propio de punta a punta.",
    ),
    howToStart: {
      knowledge: ["Linux", "Redes", "Control de versiones"],
      technologies: ["Docker", "GitHub Actions", "Kubernetes"],
      projects: ["Pipeline CI/CD para un proyecto académico", "Monitoreo con Grafana"],
      experience: ["Colaborar en proyectos open source", "Prácticas en equipos de plataforma"],
    },
    profile: {
      description:
        "Un profesional que mejora la forma en que los equipos construyen y entregan software.",
      knowledge: ["Integración continua", "Infraestructura", "Observabilidad"],
      technicalSkills: ["Scripting", "Contenedores", "Automatización"],
      softSkills: ["Mejora continua", "Colaboración", "Comunicación"],
      tools: ["Jenkins", "Docker", "Grafana"],
      responsibilities: ["Mantener pipelines", "Automatizar despliegues", "Vigilar la salud del sistema"],
      roles: ["DevOps Engineer Junior", "SRE", "Ingeniero de Plataforma"],
    },
    companyIds: ["endava", "globant", "sofka", "microsoft"],
  },
  {
    id: "desarrollo-web",
    name: "Desarrollo Web",
    icon: "Globe",
    summary: "Construcción de sitios y aplicaciones para la web.",
    description:
      "El desarrollo web crea interfaces y servicios accesibles desde el navegador, cuidando la experiencia del usuario y el rendimiento.",
    whatTheyDo: [
      "Construye interfaces accesibles y responsivas.",
      "Trabaja en agencias, startups, medios y áreas digitales.",
      "Resuelve problemas de usabilidad, rendimiento y accesibilidad.",
      "Maqueta, programa y conecta servicios con APIs.",
    ],
    demand: 89,
    mainTech: ["HTML", "CSS", "JavaScript", "React"],
    technologies: [
      { name: "HTML", short: "Ht", description: "Estructura semántica de las páginas." },
      { name: "CSS", short: "Cs", description: "Estilos, diseño responsivo y animaciones." },
      { name: "JavaScript", short: "Js", description: "Interactividad en el navegador." },
      { name: "React", short: "Re", description: "Librería para interfaces por componentes." },
      { name: "Node.js", short: "Nd", description: "JavaScript en el servidor." },
    ],
    roadmap: baseRoadmap(
      "HTML semántico, CSS moderno, JavaScript y un framework de UI.",
      "Publica una aplicación web propia con datos reales.",
    ),
    howToStart: {
      knowledge: ["HTML semántico", "CSS responsivo", "Fundamentos de UX"],
      technologies: ["JavaScript", "React", "Git"],
      projects: ["Portafolio personal", "Aplicación de tareas conectada a una API"],
      experience: ["Proyectos para grupos estudiantiles", "Prácticas en agencias digitales"],
    },
    profile: {
      description:
        "Un profesional que construye experiencias web claras, rápidas y accesibles.",
      knowledge: ["Accesibilidad", "Rendimiento web", "Consumo de APIs"],
      technicalSkills: ["Maquetación responsiva", "Componentes reutilizables", "Manejo de estado"],
      softSkills: ["Sensibilidad al detalle", "Empatía con el usuario", "Trabajo en equipo"],
      tools: ["VS Code", "Figma", "Chrome DevTools"],
      responsibilities: ["Implementar interfaces", "Integrar servicios", "Optimizar carga"],
      roles: ["Desarrollador Frontend", "Full Stack Junior", "Ingeniero Web"],
    },
    companyIds: ["rappi", "globant", "sofka", "endava"],
  },
  {
    id: "aplicaciones-moviles",
    name: "Aplicaciones Móviles",
    icon: "Smartphone",
    summary: "Desarrollo de apps para Android e iOS.",
    description:
      "El desarrollo móvil crea aplicaciones nativas o multiplataforma pensadas para el uso cotidiano desde el teléfono.",
    whatTheyDo: [
      "Diseña e implementa aplicaciones móviles.",
      "Trabaja en fintech, retail, salud y empresas de producto.",
      "Resuelve problemas de accesibilidad, conectividad y experiencia móvil.",
      "Programa, publica en tiendas y da mantenimiento.",
    ],
    demand: 84,
    mainTech: ["Kotlin", "Swift", "Flutter", "React Native"],
    technologies: [
      { name: "Kotlin", short: "Kt", description: "Lenguaje oficial para Android." },
      { name: "Swift", short: "Sw", description: "Lenguaje para aplicaciones iOS." },
      { name: "Flutter", short: "Fl", description: "Multiplataforma con un solo código." },
      { name: "React Native", short: "RN", description: "Apps móviles con JavaScript." },
      { name: "Firebase", short: "Fb", description: "Backend rápido para apps móviles." },
    ],
    roadmap: baseRoadmap(
      "Un stack móvil (nativo o multiplataforma) y consumo de APIs.",
      "Publica una app funcional y documenta su proceso.",
    ),
    howToStart: {
      knowledge: ["POO", "Ciclo de vida móvil", "Diseño de interfaces"],
      technologies: ["Kotlin o Flutter", "Firebase", "Git"],
      projects: ["App de hábitos", "App con mapa y geolocalización"],
      experience: ["Proyectos para la universidad", "Prácticas en equipos móviles"],
    },
    profile: {
      description:
        "Un profesional que crea aplicaciones móviles útiles, fluidas y bien publicadas.",
      knowledge: ["Arquitectura móvil", "Publicación en tiendas", "UX móvil"],
      technicalSkills: ["Desarrollo nativo o híbrido", "Consumo de APIs", "Pruebas en dispositivos"],
      softSkills: ["Orientación al usuario", "Autonomía", "Organización"],
      tools: ["Android Studio", "Xcode", "Figma"],
      responsibilities: ["Desarrollar funcionalidades", "Publicar versiones", "Corregir errores"],
      roles: ["Desarrollador Android", "Desarrollador iOS", "Mobile Developer"],
    },
    companyIds: ["rappi", "bancolombia", "globant", "claro"],
  },
  {
    id: "redes-telecomunicaciones",
    name: "Redes y Telecomunicaciones",
    icon: "Network",
    summary: "Diseño y administración de redes de comunicación.",
    description:
      "Esta rama se ocupa del diseño, implementación y mantenimiento de las redes que conectan personas, dispositivos y servicios.",
    whatTheyDo: [
      "Diseña, configura y supervisa redes de datos.",
      "Trabaja en operadores, ISP, universidades y grandes empresas.",
      "Resuelve problemas de conectividad, latencia y seguridad de red.",
      "Configura equipos, documenta topologías y atiende incidentes.",
    ],
    demand: 78,
    mainTech: ["TCP/IP", "Cisco", "Linux", "VLAN"],
    technologies: [
      { name: "TCP/IP", short: "IP", description: "Modelo base de comunicación en red." },
      { name: "Cisco IOS", short: "Ci", description: "Configuración de routers y switches." },
      { name: "Packet Tracer", short: "PT", description: "Simulación de topologías." },
      { name: "Linux", short: "Lx", description: "Servicios de red y servidores." },
      { name: "Zabbix", short: "Zb", description: "Monitoreo de infraestructura." },
    ],
    roadmap: baseRoadmap(
      "Protocolos, enrutamiento, conmutación y seguridad perimetral.",
      "Diseña una red completa simulada para una organización.",
    ),
    howToStart: {
      knowledge: ["Modelo OSI", "Direccionamiento IP", "Enrutamiento"],
      technologies: ["Packet Tracer", "Cisco IOS", "Linux"],
      projects: ["Topología de red para un campus", "Servidor de servicios de red"],
      experience: ["Certificación CCNA", "Prácticas en áreas de infraestructura"],
    },
    profile: {
      description:
        "Un profesional que garantiza conectividad estable y segura para toda la organización.",
      knowledge: ["Enrutamiento y conmutación", "Seguridad de red", "Telefonía IP"],
      technicalSkills: ["Configuración de equipos", "Diagnóstico de fallas", "Monitoreo"],
      softSkills: ["Método", "Servicio al usuario", "Trabajo bajo presión"],
      tools: ["Cisco Packet Tracer", "Wireshark", "Zabbix"],
      responsibilities: ["Mantener la red", "Documentar cambios", "Atender incidentes"],
      roles: ["Administrador de Redes", "Ingeniero NOC", "Especialista en Telecomunicaciones"],
    },
    companyIds: ["claro", "etek", "ibm", "microsoft"],
  },
  {
    id: "arquitectura-sistemas",
    name: "Administración y Arquitectura de Sistemas",
    icon: "Server",
    summary: "Gestión de servidores y diseño de sistemas empresariales.",
    description:
      "Esta rama define cómo se estructuran, integran y administran los sistemas que soportan la operación de una organización.",
    whatTheyDo: [
      "Administra servidores y define arquitecturas de sistemas.",
      "Trabaja en áreas de TI de medianas y grandes organizaciones.",
      "Resuelve problemas de integración, continuidad y desempeño.",
      "Planea, documenta, configura y supervisa la operación.",
    ],
    demand: 80,
    mainTech: ["Linux", "Windows Server", "SQL", "Virtualización"],
    technologies: [
      { name: "Linux", short: "Lx", description: "Administración de servidores." },
      { name: "Windows Server", short: "WS", description: "Servicios de directorio y dominio." },
      { name: "VMware", short: "Vm", description: "Virtualización de infraestructura." },
      { name: "SQL Server", short: "SQ", description: "Gestión de bases de datos corporativas." },
      { name: "Zabbix", short: "Zb", description: "Monitoreo de servicios." },
    ],
    roadmap: baseRoadmap(
      "Administración de servidores, virtualización y arquitectura de integración.",
      "Diseña la arquitectura de un sistema empresarial completo.",
    ),
    howToStart: {
      knowledge: ["Sistemas operativos", "Bases de datos", "Arquitectura de software"],
      technologies: ["Linux", "Windows Server", "VMware"],
      projects: ["Laboratorio de servidores virtualizados", "Plan de continuidad de un sistema"],
      experience: ["Apoyo en la mesa de servicios TI", "Prácticas en infraestructura"],
    },
    profile: {
      description:
        "Un profesional con visión integral de los sistemas y su operación en el tiempo.",
      knowledge: ["Arquitectura de sistemas", "Alta disponibilidad", "Gobierno de TI"],
      technicalSkills: ["Administración de servidores", "Virtualización", "Respaldos"],
      softSkills: ["Planeación", "Responsabilidad", "Comunicación con áreas usuarias"],
      tools: ["VMware", "Active Directory", "Zabbix"],
      responsibilities: ["Garantizar operación", "Definir estándares", "Documentar arquitectura"],
      roles: ["Administrador de Sistemas", "Arquitecto de Soluciones", "Analista de Infraestructura"],
    },
    companyIds: ["ibm", "bancolombia", "endava", "etek"],
  },
];

export const getSpecializationById = (id: string) =>
  specializations.find((s) => s.id === id);
