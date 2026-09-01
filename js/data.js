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
  { id: "networks", name: "Redes y Telecomunicaciones", icon: "⌘", image: "assets/networks-logo.png", color: "blue", technologies: ["Cisco", "TCP/IP", "Linux"] },
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

const networkSpecialization = {
  summary: "Aprende a diseñar, configurar, monitorear y proteger redes que conectan personas, aplicaciones y servicios. Esta ruta une fundamentos de Internet, infraestructura, nube y telecomunicaciones con práctica guiada.",
  theory: {
    introduction: "Las redes y telecomunicaciones son la base que permite que una universidad, una empresa o una ciudad intercambie información. Una red no es solamente conectar cables: implica planificar direcciones IP, elegir medios de transmisión, segmentar usuarios, enrutar paquetes, publicar servicios y observar el comportamiento del tráfico.",
    operation: "Cuando envías un mensaje, visitas una página o accedes a una plataforma educativa, la información se divide en paquetes. Switches y puntos de acceso conectan los dispositivos dentro de una red; routers eligen caminos entre redes; DNS traduce nombres a direcciones; DHCP facilita la configuración; y los controles de seguridad ayudan a que solo las personas y servicios autorizados puedan comunicarse.",
    professional: "El profesional de esta área diseña soluciones que deben ser disponibles, seguras y escalables. Puede trabajar desde el cableado y la configuración de equipos hasta redes definidas por software, nubes híbridas, monitoreo, automatización y soporte de servicios críticos.",
  },
  focus: [
    ["Conectividad", "Comprende cómo viajan los datos desde una red local hasta Internet y cómo se relacionan los dispositivos."],
    ["Diseño y operación", "Planifica topologías, direccionamiento, VLAN, routing y servicios para redes confiables."],
    ["Seguridad y soporte", "Detecta fallas, analiza tráfico y aplica controles para mantener la disponibilidad y proteger la información."],
  ],
  technologies: [
    { name: "Cisco", mark: "C", tone: "cisco", image: "assets/technologies/cisco.png", description: "Switching, routing y certificación." },
    { name: "Packet Tracer", mark: "PT", tone: "packet", image: "assets/technologies/packet-tracer.png", description: "Simulación de topologías y prácticas." },
    { name: "Linux", mark: "L", tone: "linux", image: "assets/technologies/linux.png", description: "Servicios, terminal y administración." },
    { name: "Wireshark", mark: "W", tone: "wireshark", image: "assets/technologies/wireshark.png", description: "Captura y análisis de paquetes." },
    { name: "Python", mark: "Py", tone: "python", image: "assets/technologies/python.png", description: "Automatización y scripts de red." },
    { name: "AWS VPC", mark: "AWS", tone: "aws", image: "assets/technologies/aws-vpc.png", description: "Redes virtuales y nube." },
    { name: "Docker", mark: "◈", tone: "docker", image: "assets/technologies/docker.png", description: "Servicios y laboratorios reproducibles." },
    { name: "Ansible", mark: "A", tone: "ansible", image: "assets/technologies/ansible.png", description: "Configuración automatizada." },
  ],
  progress: [
    ["Fundamentos", "OSI, TCP/IP, Ethernet y direccionamiento IP"],
    ["Switching", "VLAN, trunking, STP y redes locales"],
    ["Routing", "Rutas estáticas, OSPF y diseño entre redes"],
    ["Servicios", "DNS, DHCP, NAT y alta disponibilidad"],
    ["Seguridad", "Firewalls, VPN, monitoreo y respuesta"],
    ["Proyecto final", "Diseña, documenta y presenta una red funcional"],
  ],
  jobs: ["Administrador de redes", "Ingeniero NOC", "Soporte de infraestructura", "Especialista de telecomunicaciones", "Cloud network associate"],
  companies: [
    ["Entel Perú", "Perú · Telecomunicaciones", "Conectividad móvil y fija, fibra, servicios TI y operación de red.", "https://www.entel.pe/contacto/informacion-corporativa"],
    ["Movistar Perú", "Perú · Telecomunicaciones", "Red móvil, fibra óptica, servicios empresariales y soporte de conectividad.", "https://www.movistar.com.pe/"],
    ["Claro Perú", "Perú · Telecomunicaciones", "Telefonía móvil, Internet, redes empresariales y despliegue de infraestructura.", "https://www.claro.com.pe/"],
    ["Cisco", "Global · Networking", "Diseño, soporte, seguridad, automatización y operación de infraestructura.", "https://www.cisco.com/"],
    ["Amazon Web Services", "Global · Cloud", "VPC, subredes, routing, conectividad híbrida y arquitectura de nube.", "https://aws.amazon.com/"],
    ["Cloudflare", "Global · Red y seguridad", "Rendimiento web, DNS, CDN, edge networking y seguridad de aplicaciones.", "https://www.cloudflare.com/"],
  ],
  characters: [
    ["Vint Cerf", "Arquitectura de Internet", "Co-diseñó TCP/IP y ayudó a establecer la arquitectura que permite interconectar redes a escala mundial.", "https://www.internetsociety.org/author/cerf/"],
    ["Radia Perlman", "Switching y protocolos", "Su trabajo sobre Spanning Tree permitió construir redes Ethernet más estables y tolerantes a bucles.", "https://news.internetsociety.org/the-magic-box-and-the-spanning-tree-radia-perlman-profiled-in-hidden-heroes-series/"],
    ["Tim Berners-Lee", "Web y estándares", "Inventó la World Wide Web y definió tecnologías que usan las redes para publicar y compartir información.", "https://www.w3.org/People/Berners-Lee/"],
  ],
};

window.professionalData = { professionalSections, specializations, conventions, profileByArea, cvSteps, networkSpecialization };
