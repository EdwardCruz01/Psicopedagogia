const { conventions: conventionData, cvSteps: tutorialSteps, professionalSections: sectionData, profileByArea: profileData, specializations: specializationData } = window.professionalData;

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
      <div class="specialization-grid">${specializationData.map(item => `<article class="specialization-card color-${item.color}" data-specialization="${item.id}" tabindex="0"><div class="specialization-icon">${item.icon}</div><h3>${item.name}</h3><div class="tech-list">${item.technologies.map(technology => `<span>${technology}</span>`).join("")}</div><button class="text-button">Explorar área →</button></article>`).join("")}</div>
      <div class="future-note"><span>⌁</span><p>El detalle de cada área puede crecer posteriormente con tecnologías, roadmap, proyectos y un test de orientación.</p></div>
    </div>
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
    if (item) alert(`${item.name}\n\nTecnologías iniciales: ${item.technologies.join(", ")}\n\nAquí podrás agregar la ruta de aprendizaje, proyectos y test de orientación.`);
  }
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
