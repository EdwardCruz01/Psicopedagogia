const { conventions: conventionData, cvSteps: tutorialSteps, professionalSections: sectionData, profileByArea: profileData, specializations: specializationData, networkSpecialization: networkData } = window.professionalData;
let networkProgress = 2;

const app = document.querySelector("#app");
const moduleRoot = document.querySelector("#professional-module");

function iconButton(label, icon = "→") {
  return `<span class="button-icon" aria-hidden="true">${icon}</span>${label}`;
}

function renderHome() {
  app.innerHTML = `
    <section class="home-view view-enter">
      <div class="home-heading">
        <p class="eyebrow">TUTORÍA UNIVERSITARIA</p>
        <h1>Bienvenido a Psicopedagogía FIISMEC</h1>
        <p class="home-subtitle">BIENESTAR INTEGRAL</p>
      </div>

      <div class="home-cards">
        <article class="home-card home-card-lilac">
          <div class="home-card-copy">
            <h2>Importancia del Tamizaje Psicopedagógico</h2>
            <p>El tamizaje psicopedagógico permite identificar tempranamente las necesidades académicas, cognitivas, socioemocionales y de salud mental de los estudiantes, facilitando intervenciones oportunas y efectivas.</p>
          </div>
          <div class="home-art art-brain" aria-label="Ilustración sobre acompañamiento psicopedagógico">
            <span class="art-cloud cloud-one"></span><span class="art-cloud cloud-two"></span>
            <span class="art-brain-shape">◒</span><span class="art-person">♟</span><span class="art-flower">✿</span>
          </div>
        </article>

        <article class="home-card home-card-blue">
          <div class="home-card-copy">
            <h2>¿A quién acudir?</h2>
            <p>Si atraviesas una situación complicada, recuerda que no estás solo(a). Puedes acudir a tu docente tutor, al psicopedagogo o al psicólogo clínico. Cada uno de ellos está preparado para orientarte según tus necesidades y ofrecerte el apoyo que requieres.</p>
          </div>
          <div class="home-art art-support" aria-label="Ilustración sobre redes de apoyo">
            <span class="gear gear-one">⚙</span><span class="gear gear-two">⚙</span><span class="art-hands">⌒⌒</span><span class="art-student">♟</span><span class="art-leaf">⌁</span>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderEmptyView(title, description) {
  app.innerHTML = `
    <section class="empty-view view-enter">
      <div class="empty-icon">✦</div>
      <p class="eyebrow">PLATAFORMA DE TUTORÍA</p>
      <h1>${title}</h1>
      <p>${description}</p>
      <span class="status-chip">Módulo en preparación</span>
    </section>
  `;
}

function sectionCard(section) {
  return `
    <article class="module-card module-card-${section.theme}" data-section="${section.id}" tabindex="0" role="button" aria-label="Abrir ${section.title}">
      <div class="module-illustration illustration-${section.theme}"><span>${section.icon}</span></div>
      <h3>${section.title}</h3>
      <p>${section.description}</p>
      <button class="primary-button small" data-open-section="${section.id}">${iconButton("Explorar", "→")}</button>
    </article>
  `;
}

function renderProfessional() {
  app.innerHTML = `
    <section class="professional-view view-enter">
      <div class="professional-heading">
        <div>
          <p class="breadcrumb"><span>Tutoría</span><b>›</b> Profesional</p>
          <h1>Formación Profesional</h1>
          <p>Explora los módulos diseñados para fortalecer tu aprendizaje, orientación académica y desarrollo profesional dentro de tu trayectoria universitaria.</p>
        </div>
        <div class="heading-note"><span>✦</span><strong>Tu camino profesional<br />empieza aquí</strong></div>
      </div>

      <div class="module-grid" aria-label="Subdivisiones del módulo profesional">
        ${sectionData.map(sectionCard).join("")}
      </div>

      <div class="professional-intro">
        <div class="intro-mark">U</div>
        <div><strong>Un espacio para descubrir tu próximo paso</strong><p>Selecciona una tarjeta para conocer oportunidades, áreas de especialización, perfiles profesionales o recomendaciones para tu CV.</p></div>
      </div>
    </section>
  `;
}

function renderConventions() {
  return `
    <div class="detail-content">
      <div class="detail-lead"><span class="detail-icon blue">🤝</span><div><p class="eyebrow">OPORTUNIDADES</p><h2>Convenios</h2><p>Conecta tu formación universitaria con instituciones, comunidades y experiencias de práctica.</p></div></div>
      <div class="filter-row"><button class="filter active">Todos</button><button class="filter">Universidad</button><button class="filter">Prácticas</button><button class="filter">Modalidad</button></div>
      <div class="opportunity-grid">${conventionData.map(item => `<article class="opportunity-card"><div class="opportunity-top"><span class="opportunity-logo">${item.icon}</span><span class="tag">${item.type}</span></div><h3>${item.name}</h3><p>${item.description}</p><div class="opportunity-meta"><span>⌖ ${item.place}</span><button class="text-button">Ver oportunidad ↗</button></div></article>`).join("")}</div>
      <div class="future-note"><span>✦</span><p>Esta estructura queda preparada para recibir convenios desde un archivo JSON o una API.</p></div>
    </div>
  `;
}

function renderSpecializations() {
  return `
    <div class="detail-content">
      <div class="detail-lead"><span class="detail-icon yellow">💻</span><div><p class="eyebrow">ÁREAS DE INGENIERÍA DE SISTEMAS</p><h2>Especializaciones</h2><p>Explora las ramas que pueden conectar con tus intereses y descubre qué tecnologías comenzar a aprender.</p></div></div>
      <div class="specialization-grid">${specializationData.map(item => `<article class="specialization-card color-${item.color}" data-specialization="${item.id}" tabindex="0"><div class="specialization-icon${item.image ? " has-image" : ""}">${item.image ? `<img src="${item.image}" alt="Logo de ${item.name}" />` : item.icon}</div><h3>${item.name}</h3><div class="tech-list">${item.technologies.map(technology => `<span>${technology}</span>`).join("")}</div><button class="text-button">Explorar área →</button></article>`).join("")}</div>
      <div class="future-note"><span>⌁</span><p>El detalle de cada área puede crecer posteriormente con tecnologías, roadmap, proyectos y un test de orientación.</p></div>
    </div>
  `;
}

function renderNetworkSpecialization() {
  const currentProgress = networkData.progress.map((step, index) => ({ step, index, completed: index < networkProgress }));
  app.innerHTML = `
    <section class="professional-detail view-enter">
      <button class="back-button" data-back-specializations>← Volver a Especializaciones</button>
      <div class="network-detail-shell">
        <div class="network-hero">
          <div class="network-hero-copy"><p class="eyebrow">RUTA DE APRENDIZAJE · INGENIERÍA DE SISTEMAS</p><h1>Redes y<br /><span>Telecomunicaciones</span></h1><p>${networkData.summary}</p><div class="network-tags"><span>Conectividad</span><span>Infraestructura</span><span>Seguridad</span></div></div>
          <div class="network-hero-visual"><div class="network-image-wrap"><img src="src/modules/professional/assets/hero-professional.jpg" alt="Estudiantes aprendiendo tecnología" /></div><div class="network-orbit orbit-one"></div><div class="network-orbit orbit-two"></div><div class="network-node node-one">⌁</div><div class="network-node node-two">↔</div><div class="network-node node-three">◉</div></div>
        </div>

        <section class="network-section"><div class="network-section-heading"><div><p class="eyebrow">¿QUÉ APRENDERÁS?</p><h2>Conecta la teoría con problemas reales</h2></div><span class="section-counter">01 / 05</span></div><div class="focus-grid">${networkData.focus.map((item, index) => `<article class="focus-card"><span>0${index + 1}</span><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join("")}</div></section>

        <section class="network-section theory-section"><div class="network-section-heading"><div><p class="eyebrow">BASES PARA ENTENDER LA ESPECIALIDAD</p><h2>La teoría detrás de cada conexión</h2></div><span class="section-counter">02 / 05</span></div><div class="theory-layout"><div class="theory-copy"><p>${networkData.theory.introduction}</p><p>${networkData.theory.operation}</p><p>${networkData.theory.professional}</p></div><div class="theory-map"><div class="map-line"></div><div class="map-node"><span>01</span><strong>Dispositivo</strong><small>genera datos</small></div><div class="map-node"><span>02</span><strong>Red local</strong><small>conecta equipos</small></div><div class="map-node"><span>03</span><strong>Router</strong><small>elige la ruta</small></div><div class="map-node"><span>04</span><strong>Servicio</strong><small>responde al usuario</small></div><p>De la señal al servicio</p></div></div></section>

        <section class="network-section technology-section"><div class="network-section-heading"><div><p class="eyebrow">HERRAMIENTAS DE LA RUTA</p><h2>Tecnologías para practicar</h2><p class="section-description">Empieza con conceptos sólidos y usa estas herramientas para construir laboratorios, observar el tráfico y automatizar tareas.</p></div><span class="section-counter">03 / 05</span></div><div class="network-tech-grid">${networkData.technologies.map(tech => `<article class="network-tech-card"><div class="tech-image-frame"><img src="${tech.image}" alt="Logotipo de ${tech.name}" /></div><div class="network-tech-copy"><h3>${tech.name}</h3><p>${tech.description}</p><span class="tech-label">Practicar</span></div></article>`).join("")}</div></section>

        <section class="network-section progress-section"><div class="network-section-heading"><div><p class="eyebrow">TU PROGRESO</p><h2>Avanza como en un camino de misiones</h2><p class="section-description">Completa cada nivel cuando puedas explicar el concepto y aplicarlo en un laboratorio. Tu avance queda listo para conectarse después a una cuenta de estudiante.</p></div><span class="section-counter">04 / 05</span></div><div class="progress-summary"><div><strong>Nivel ${networkProgress} de ${networkData.progress.length}</strong><span>Ruta iniciada</span></div><div class="progress-bar"><i style="width: ${(networkProgress / networkData.progress.length) * 100}%"></i></div><b>${Math.round((networkProgress / networkData.progress.length) * 100)}%</b></div><div class="learning-path">${currentProgress.map(({ step, index, completed }) => `<button class="path-step ${completed ? "completed" : "locked"}" data-network-progress="${index + 1}"><span class="path-bubble">${completed ? "✓" : index + 1}</span><strong>${step[0]}</strong><small>${step[1]}</small>${index < networkData.progress.length - 1 ? "<i class=path-line></i>" : ""}</button>`).join("")}</div><p class="progress-hint">Haz clic en un nivel para marcarlo como alcanzado y explorar el siguiente reto.</p></section>

        <section class="network-section explore-section"><div class="network-section-heading"><div><p class="eyebrow">EXPLORA MÁS</p><h2>¿En qué se enfoca esta especialidad?</h2></div><span class="section-counter">05 / 05</span></div><div class="explore-grid"><article class="explore-panel"><span class="panel-icon">⌘</span><h3>¿Dónde puedes trabajar?</h3><p>En centros de datos, proveedores de Internet, empresas de telecomunicaciones, áreas de TI, instituciones públicas, universidades y equipos que administran servicios en la nube.</p><ul>${networkData.jobs.slice(0, 4).map(job => `<li>${job}</li>`).join("")}</ul></article><article class="explore-panel"><span class="panel-icon">⌁</span><h3>¿Qué problemas resuelves?</h3><p>Interrupciones de conectividad, lentitud, mala segmentación, pérdida de paquetes, accesos no autorizados y configuraciones difíciles de mantener.</p><div class="mini-metrics"><span><b>Disponibilidad</b><small>redes confiables</small></span><span><b>Seguridad</b><small>tráfico protegido</small></span></div></article><article class="explore-panel"><span class="panel-icon">↗</span><h3>¿Qué perfil construyes?</h3><p>Una persona analítica, ordenada y curiosa, capaz de documentar una red, comunicarse con usuarios y tomar decisiones técnicas responsables.</p><div class="skill-pills"><span>Diagnóstico</span><span>Documentación</span><span>Trabajo en equipo</span></div></article></div></section>

        <section class="network-companies"><div><p class="eyebrow">CAMPO PROFESIONAL</p><h2>Empresas y entornos donde puedes crecer</h2><p>Conoce organizaciones reales de Perú y del exterior. Sus sitios oficiales te ayudan a investigar servicios, oportunidades y perfiles profesionales.</p></div><div class="company-grid">${networkData.companies.map(company => `<article class="company-card"><span class="company-logo">${company[0].slice(0, 2).toUpperCase()}</span><div><h3>${company[0]}</h3><small>${company[1]}</small><p>${company[2]}</p><a href="${company[3]}" target="_blank" rel="noopener">Visitar sitio oficial ↗</a></div></article>`).join("")}</div></section>

        <section class="network-figures"><div class="network-section-heading"><div><p class="eyebrow">REFERENTES PARA INSPIRARTE</p><h2>Personajes relevantes</h2><p class="section-description">Conocer la historia de quienes ayudaron a construir Internet permite entender que una red también es colaboración, estándares y curiosidad.</p></div><span class="section-counter">EXTRA</span></div><div class="figure-grid">${networkData.characters.map((person, index) => `<article class="figure-card"><span class="figure-number">0${index + 1}</span><h3>${person[0]}</h3><small>${person[1]}</small><p>${person[2]}</p><a href="${person[3]}" target="_blank" rel="noopener">Conocer su historia ↗</a></article>`).join("")}</div></section>

        <section class="network-test-cta"><div><p class="eyebrow">ORIENTACIÓN</p><h2>¿Esta especialidad es para ti?</h2><p>Responde un test breve para reconocer si disfrutas resolver problemas de conectividad, analizar sistemas y aprender de forma práctica.</p></div><button class="primary-button" data-network-test>Realizar test <span class="button-icon">→</span></button></section>
        <div class="network-test-panel" id="network-test-panel" aria-live="polite"><div><span class="test-mark">✦</span><div><strong>Test preparado</strong><p>Próximamente podrás responder preguntas y recibir una recomendación personalizada sobre tu ruta profesional.</p></div></div><button class="text-button" data-close-network-test>Cerrar</button></div>
      </div>
    </section>
  `;
}

function renderProfile() {
  const profile = profileData.software;
  return `
    <div class="detail-content">
      <div class="detail-lead"><span class="detail-icon lilac">🎓</span><div><p class="eyebrow">PROYECTA TU FUTURO</p><h2>Perfil de egreso</h2><p>Descubre qué profesional quieres llegar a ser y qué pasos pueden ayudarte a construir ese perfil.</p></div></div>
      <div class="profile-layout">
        <div class="profile-selector"><label for="area-select">¿Qué área profesional te interesa?</label><select id="area-select"><option value="software">Desarrollo de Software</option><option value="security">Ciberseguridad</option><option value="ai">Inteligencia Artificial</option><option value="data">Ciencia de Datos</option></select><div class="profile-steps"><span class="done">1</span><i></i><span>2</span><i></i><span>3</span><i></i><span>4</span></div><div class="step-labels"><span>Fundamentos</span><span>Formación</span><span>Proyectos</span><span>Experiencia</span></div></div>
        <div class="profile-result" id="profile-result"><p class="eyebrow">TU PERFIL EN CONSTRUCCIÓN</p><h3>${profile.name}</h3><p>${profile.description}</p><div class="skill-pills">${profile.skills.map(skill => `<span>${skill}</span>`).join("")}</div><div class="roles"><small>POSIBLES PUESTOS</small><strong>${profile.roles}</strong></div><button class="primary-button small" data-open-section="cv">${iconButton("Preparar mi CV", "↗")}</button></div>
      </div>
    </div>
  `;
}

function renderCv() {
  return `
    <div class="detail-content">
      <div class="detail-lead"><span class="detail-icon mint">📄</span><div><p class="eyebrow">PRESENTA LO QUE SABES HACER</p><h2>Curriculum Vitae</h2><p>Construye un CV claro y orientado a la especialización que quieres desarrollar.</p></div></div>
      <div class="cv-options"><article class="cv-option cv-option-primary"><span class="option-number">01</span><h3>Construye tu CV</h3><p>Sigue una guía paso a paso para organizar tu perfil, formación, proyectos y habilidades.</p><button class="primary-button small" data-cv-action="create">${iconButton("Crear mi CV", "＋")}</button></article><article class="cv-option"><span class="option-number">02</span><h3>Ya tengo un CV</h3><p>Revisa visualmente qué elementos puedes mejorar antes de postular a una oportunidad.</p><button class="secondary-button small" data-cv-action="evaluate">Evaluar mi CV →</button></article></div>
      <div class="cv-tutorial"><div class="section-title"><div><p class="eyebrow">MINI TUTORIAL</p><h3>Construye un CV profesional</h3></div><span class="progress-label">6 pasos esenciales</span></div><div class="cv-step-grid">${tutorialSteps.map(step => `<div class="cv-step"><span>${step[0]}</span><div><strong>${step[1]}</strong><p>${step[2]}</p></div></div>`).join("")}</div></div>
      <div class="future-note"><span>✓</span><p>La generación, descarga y evaluación real quedan preparadas para conectarse posteriormente con JavaScript o un servicio externo.</p></div>
    </div>
  `;
}

function renderDetail(sectionId) {
  const section = sectionData.find(item => item.id === sectionId);
  if (!section) return renderProfessional();
  const content = { convenios: renderConventions, specializations: renderSpecializations, profile: renderProfile, cv: renderCv }[sectionId]();
  app.innerHTML = `<section class="professional-detail view-enter"><button class="back-button" data-back-professional>← Volver a Formación Profesional</button><div class="detail-shell">${content}</div></section>`;
}

function navigate(view) {
  document.querySelectorAll(".nav-link").forEach(button => button.classList.toggle("active", button.dataset.view === view));
  if (view === "home") renderHome();
  else if (view === "professional") renderProfessional();
  else if (view === "wellbeing") renderEmptyView("Bienestar", "Este espacio continuará conectado con el acompañamiento integral de la plataforma.");
  else if (view === "chatbot") renderEmptyView("Chatbot", "El asistente virtual estará disponible en una próxima etapa.");
  else renderEmptyView("Nosotros", "La información institucional se mantendrá en el proyecto principal.");
  window.history.replaceState({}, "", view === "home" ? "#inicio" : `#${view}`);
  app.focus({ preventScroll: true });
}

function updateProfile(area) {
  const profile = profileData[area] || profileData.software;
  const result = document.querySelector("#profile-result");
  if (!result) return;
  result.innerHTML = `<p class="eyebrow">TU PERFIL EN CONSTRUCCIÓN</p><h3>${profile.name}</h3><p>${profile.description}</p><div class="skill-pills">${profile.skills.map(skill => `<span>${skill}</span>`).join("")}</div><div class="roles"><small>POSIBLES PUESTOS</small><strong>${profile.roles}</strong></div><button class="primary-button small" data-open-section="cv">${iconButton("Preparar mi CV", "↗")}</button>`;
}

document.addEventListener("click", event => {
  const nav = event.target.closest("[data-view]");
  if (nav) return navigate(nav.dataset.view);
  const sectionButton = event.target.closest("[data-open-section]");
  if (sectionButton) return renderDetail(sectionButton.dataset.openSection);
  const card = event.target.closest(".module-card[data-section]");
  if (card) return renderDetail(card.dataset.section);
  const back = event.target.closest("[data-back-professional]");
  if (back) return navigate("professional");
  const specialization = event.target.closest("[data-specialization]");
  if (specialization) {
    const item = specializationData.find(entry => entry.id === specialization.dataset.specialization);
    if (item?.id === "networks") return renderNetworkSpecialization();
    if (item) alert(`${item.name}\n\nTecnologías iniciales: ${item.technologies.join(", ")}\n\nAquí podrás agregar la ruta de aprendizaje, proyectos y test de orientación.`);
  }
  if (event.target.closest("[data-back-specializations]")) return renderDetail("specializations");
  const progress = event.target.closest("[data-network-progress]");
  if (progress) { networkProgress = Number(progress.dataset.networkProgress); return renderNetworkSpecialization(); }
  if (event.target.closest("[data-network-test]")) { document.querySelector("#network-test-panel")?.classList.add("is-open"); return; }
  if (event.target.closest("[data-close-network-test]")) { document.querySelector("#network-test-panel")?.classList.remove("is-open"); return; }
  if (event.target.closest("[data-cv-action]")) alert("Esta acción está preparada para conectarse con el formulario de CV.");
});

document.addEventListener("keydown", event => {
  const card = event.target.closest(".module-card[data-section], .specialization-card[data-specialization]");
  if (card && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); card.click(); }
});

document.addEventListener("change", event => {
  if (event.target.matches("#area-select")) updateProfile(event.target.value);
});

const initialView = window.location.hash.replace("#", "") || "inicio";
navigate(initialView === "profesional" ? "professional" : initialView === "inicio" ? "home" : initialView);
