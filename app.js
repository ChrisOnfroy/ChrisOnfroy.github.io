const en = {
  'feedback.title':'Feedback.','feedback.lead':'Share your experience. Once submitted, it will be visible to everyone.','feedback.open':'Leave a comment','feedback.formTitle':'Leave your comment','feedback.close':'Close comment form','feedback.name':'Your name','feedback.role':'Context (optional)','feedback.msg':'Your feedback','feedback.public':'I understand my name and feedback will be published immediately.','feedback.submit':'Publish feedback','feedback.loading':'Loading feedback…','feedback.empty':'No feedback yet. Be the first to share your experience.','feedback.unavailable':'The public feedback board is not connected yet.','feedback.error':'Could not load feedback. Please try again later.','feedback.success':'Your feedback is now public.','feedback.submitError':'Could not publish your feedback. Please try again.',
  'nav.edu':'Education',
  'exp.title':'Where I have worked.',
  'exp.role':'Backend Developer (College Trainee)',
  'exp.place':'Corporate training environment, agile development · Barranquilla, Colombia',
  'x.1.t':'REST API development',
  'x.1':'Designed and built endpoints with Java and Spring Boot, reducing response times and decoupling business logic for client applications.',
  'x.2.t':'Databases and persistence',
  'x.2':'Modeled MySQL databases and wrote complex queries, stored procedures and ACID transactions to protect data integrity in critical operations.',
  'x.3.t':'Quality and maintainability',
  'x.3':'Applied Clean Code and took part in code reviews on GitHub, reducing technical debt and making test coverage easier.',
  'x.4.t':'Agile teamwork',
  'x.4':'Worked in Scrum (2-week sprints, dailies and retrospectives), delivering working increments on time.',
  'edu.title':'How I have trained.',
  'edu.d1':'2026 – Present',
  'edu.1d':'Clean Architecture, ASP.NET Core, enterprise APIs, Entity Framework, SOLID, unit testing and Azure (Entra ID, App Services).',
  'edu.1':'Backend Development specialization',
  'edu.d2':'2025 – Present',
  'edu.2':'Systems Engineering',
  'edu.3':'Software Analysis and Development Technologist (ADSO)',
  'cert.title':'Certifications',
  'cert.1':'Software Analysis and Development Technologist',
  'cert.2':'Java: OOP, data structures and best practices',
  'cert.3':'Collaborative workflow, enterprise repositories and advanced Git',
  'p.classtrack':'Academic management web system that assigns classrooms and schedules, preventing overbooking and course clashes with transactional validation.',
  'about.lang':'Native Spanish · Intermediate English',
  'nav.exp':'Career',
  'nav.recs':'Feedback',
  'show.eyebrow':'Featured projects','carousel.label':'Featured projects','carousel.choose':'Choose a project','carousel.prev':'Previous project','carousel.next':'Next project','carousel.project':'Project','skills.title':'What I can do.','skills.back':'Clear, well-structured APIs.','skills.how':'How I work','skills.front':'Interfaces people understand.','skills.data':'From data to deployment.','skills.now':'Now','skills.learn':'Learning Azure, testing and CI/CD.',
  'hero.title':'From the React button to the database.','toolbox.more':'Data and cloud',
  'projects.title2':'What I have built.','filter.hint':'Pick a technology to see where I used it.','filter.all':'All',
  'nav.hire':'Hire me',
  'nav.home':'Home','nav.skills':'Skills','nav.tech':'Technologies','hero.hi':"Hi, I'm",
  'fact.uni':'Systems Engineering','fact.riwi':'Backend specialization','fact.arch':'How I organize code','fact.azure':'What I am learning',
  'nav.projects':'Projects','nav.about':'About me','nav.contact':'Contact',
  'hero.lead':'I am Cristian, a Full Stack developer. I build .NET APIs and React interfaces.',
  'hero.projects':'View projects','hero.contact':'Contact me',
  'projects.title':'Featured projects','projects.more':'More projects','code':'View code',
  'p.firmeza':'Sales and inventory with a customer storefront: catalog, cart, stock control and email receipts. Includes tests and Docker.',
  'p.skillhub':'Enrollment for in-person workshops: capacity limits, schedule overlap checks, bulk Excel enrollment and PDF certificates.',
  'p.tasks':'Project and task management API where each user sees only their own work. It has unit and integration tests, plus deployment to Azure with GitHub Actions.',
  'p.canchero':'API to find sports fields, manage venues and handle bookings, with roles and location search.',
  'p.taskapi':'Task API designed for Azure App Service and Azure SQL with Managed Identity.',
  'p.emotians':'Real-time facial expression recognition from a webcam. Built with Juan Benavides.',
  'toolbox.title':'My toolbox','toolbox.data':'Data',
  'about.1':'I am a Full Stack developer and a Systems Engineering student at Unisalamanca, specializing in Backend at Riwi. I enjoy turning complex requirements into clear, well-structured software.',
  'about.2':'I work with Clean Architecture and SOLID principles. I am currently learning Azure, testing and CI/CD. Beyond code, I am a Marvel Cinematic Universe fan.',
  'contact.title':"Let's talk.",'contact.text':'Have a project or an opportunity? Send me a message.','contact.mail':'Send email'
};
const nodes = [...document.querySelectorAll('[data-i18n]')];
const es = Object.fromEntries(nodes.map(n => [n.dataset.i18n, n.textContent]));
const alts = [...document.querySelectorAll('[data-i18n-alt]')];
alts.forEach(n => { es[n.dataset.i18nAlt] = n.alt; });
Object.assign(es, {'carousel.label':'Proyectos destacados','carousel.choose':'Elegir proyecto','carousel.prev':'Proyecto anterior','carousel.next':'Proyecto siguiente','carousel.project':'Proyecto'});
Object.assign(en, {'alt.hola':"Cristian's memoji waving",'alt.laptop':"Cristian's memoji coding on a laptop",'alt.idea':"Cristian's memoji having an idea",'alt.sonrisa':"Cristian's memoji smiling",'alt.gesto':"Cristian's memoji making a finger heart",'alt.gracias':"Cristian's memoji making a heart with both hands"});
Object.assign(es, {
  'feedback.title':'Comentarios.',
  'feedback.open':'Dejar comentario',
  'feedback.formTitle':'Deja tu comentario',
  'feedback.close':'Cerrar formulario de comentarios',
  'feedback.loading':'Cargando feedback…',
  'feedback.empty':'Aún no hay feedback. Sé la primera persona en compartir su experiencia.',
  'feedback.unavailable':'El muro público de feedback aún no está conectado.',
  'feedback.error':'No se pudo cargar el feedback. Inténtalo más tarde.',
  'feedback.success':'Tu feedback ya es público.',
  'feedback.submitError':'No se pudo publicar tu feedback. Inténtalo de nuevo.'
});
const dict = { es, en };
const root = document.documentElement;
const langBtn = document.getElementById('lang');
const themeBtn = document.getElementById('theme');
const load = k => { try { return localStorage.getItem(k); } catch { return null; } };
const save = (k, v) => { try { localStorage.setItem(k, v); } catch {} };

let lang = load('lang');
if (!dict[lang]) lang = (navigator.language || '').toLowerCase().startsWith('es') ? 'es' : 'en';

function labels() {
  const dark = root.dataset.theme === 'dark';
  themeBtn.firstElementChild.textContent = dark ? '☀' : '☾';
  themeBtn.setAttribute('aria-label', lang === 'es'
    ? (dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro')
    : (dark ? 'Switch to light mode' : 'Switch to dark mode'));
}
function render() {
  root.lang = lang;
  nodes.forEach(n => { n.textContent = dict[lang][n.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(n => {
    n.setAttribute('aria-label', dict[lang][n.dataset.i18nAriaLabel]);
  });
  alts.forEach(n => { n.alt = dict[lang][n.dataset.i18nAlt]; });
  langBtn.textContent = lang === 'es' ? 'EN' : 'ES';
  langBtn.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a español');
  document.querySelector('meta[name="description"]').content = lang === 'es'
    ? 'Portafolio de Cristian Morales, desarrollador Full Stack: APIs en .NET e interfaces en React.'
    : 'Portfolio of Cristian Morales, Full Stack Developer: .NET APIs and React interfaces.';
  labels();
}
langBtn.addEventListener('click', () => { lang = lang === 'es' ? 'en' : 'es'; save('lang', lang); render(); });
themeBtn.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  save('theme', root.dataset.theme); labels();
});
render();

const featureViewport = document.getElementById('feature-viewport');
const featureSlides = [...featureViewport.querySelectorAll('.feature')];
const carouselStatus = document.getElementById('carousel-status');
const carouselDots = [...document.querySelectorAll('[data-carousel-dot]')];
let carouselTimer;
function updateCarousel() {
  const index = Math.min(featureSlides.length - 1, Math.max(0, Math.round(featureViewport.scrollLeft / featureViewport.clientWidth)));
  carouselStatus.textContent = `${dict[lang]['carousel.project']} ${index + 1} ${lang === 'es' ? 'de' : 'of'} ${featureSlides.length}`;
  carouselDots.forEach((dot, dotIndex) => {
    dot.classList.toggle('is-active', dotIndex === index);
    dot.classList.toggle('is-past', dotIndex < index);
    dot.toggleAttribute('aria-current', dotIndex === index);
    dot.setAttribute('aria-label', `${dict[lang]['carousel.project']} ${dotIndex + 1}`);
  });
  featureSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle('is-active', slideIndex === index);
    slide.inert = slideIndex !== index;
    slide.setAttribute('aria-hidden', String(slideIndex !== index));
  });
}
function moveCarouselTo(index) {
  const target = (index + featureSlides.length) % featureSlides.length;
  featureViewport.scrollTo({ left: target * featureViewport.clientWidth, behavior: 'smooth' });
}
function stopCarousel() {
  clearInterval(carouselTimer);
}
function startCarousel() {
  stopCarousel();
  if (document.hidden) return;
  carouselTimer = setInterval(() => {
  const index = Math.min(featureSlides.length - 1, Math.max(0, Math.round(featureViewport.scrollLeft / featureViewport.clientWidth)));
    moveCarouselTo(index + 1);
  }, 6000);
}
carouselDots.forEach(dot => dot.addEventListener('click', () => {
  moveCarouselTo(Number(dot.dataset.carouselDot));
  startCarousel();
}));
const carouselControls = document.querySelector('.carousel-controls');
carouselControls.addEventListener('pointerenter', stopCarousel);
carouselControls.addEventListener('pointerleave', startCarousel);
carouselControls.addEventListener('focusin', stopCarousel);
carouselControls.addEventListener('focusout', event => {
  if (!carouselControls.contains(event.relatedTarget)) startCarousel();
});
document.addEventListener('visibilitychange', () => document.hidden ? stopCarousel() : startCarousel());
featureViewport.addEventListener('scroll', updateCarousel, { passive: true });
addEventListener('resize', updateCarousel);
updateCarousel();
startCarousel();

const filterBtns = [...document.querySelectorAll('[data-filter]')];
filterBtns.forEach(b => b.addEventListener('click', () => {
  const f = b.dataset.filter;
  filterBtns.forEach(x => x.setAttribute('aria-pressed', String(x === b)));
  let n = 0;
  document.querySelectorAll('.project').forEach(p => {
    const show = f === 'all' || p.dataset.tech.split(' ').includes(f);
    p.hidden = !show; if (show) n++;
  });
  document.getElementById('count').textContent = (lang === 'es' ? 'Proyectos visibles: ' : 'Visible projects: ') + n;
}));

// Una sola sección a la vez: Inicio muestra solo la presentación
const views = [...document.querySelectorAll('[data-view]')];
const navLinks = [...document.querySelectorAll('nav a')];
function showView() {
  const id = location.hash.slice(1);
  const view = views.some(s => s.dataset.view === id) ? id : 'top';
  views.forEach(s => { s.hidden = s.dataset.view !== view; });
  navLinks.forEach(a => {
    if (a.hash === '#' + view) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
  const navigate = () => {
    if (id === 'contact') document.getElementById('contact').scrollIntoView({ block: 'start', behavior: 'instant' });
    else window.scrollTo({ top: 0, behavior: 'instant' });
  };
  navigate(); requestAnimationFrame(navigate);
}
addEventListener('hashchange', showView);
addEventListener('load', showView);
showView();

// Feedback público: requiere URL y clave publishable configuradas en feedback-config.js.
const feedbackForm = document.getElementById('feedback-form');
const feedbackList = document.getElementById('feedback-list');
const feedbackStatus = document.getElementById('feedback-status');
const feedbackDialog = document.getElementById('feedback-dialog');
document.getElementById('feedback-open').addEventListener('click', () => feedbackDialog.showModal());
feedbackDialog.querySelector('.feedback-close').addEventListener('click', () => feedbackDialog.close());
feedbackDialog.addEventListener('click', event => {
  if (event.target === feedbackDialog) feedbackDialog.close();
});
const feedbackConfig = window.FEEDBACK_CONFIG || {};
const feedbackReady = Boolean(feedbackConfig.url && feedbackConfig.publishableKey);
let feedbackStatusKey = '';
let feedbackItems = [];
const feedbackEndpoint = feedbackReady
  ? feedbackConfig.url.replace(/\/$/, '') + '/rest/v1/portfolio_feedback'
  : '';

function feedbackMessage(key) {
  return dict[lang][key] || dict.es[key];
}

function setFeedbackStatus(key) {
  feedbackStatusKey = key;
  feedbackStatus.textContent = key ? feedbackMessage(key) : '';
}

function renderFeedback(items) {
  feedbackItems = items;
  feedbackList.replaceChildren();
  if (!items.length) {
    const empty = document.createElement('p');
    empty.className = 'hint';
    empty.textContent = feedbackMessage('feedback.empty');
    feedbackList.append(empty);
    return;
  }

  items.forEach(item => {
    const card = document.createElement('article');
    card.className = 'tile feedback-card';
    const quote = document.createElement('blockquote');
    quote.textContent = item.message;
    const caption = document.createElement('p');
    caption.className = 'feedback-author';
    const name = document.createElement('strong');
    name.textContent = item.name;
    caption.append(name);
    if (item.relationship) {
      const relation = document.createElement('span');
      relation.textContent = ' · ' + item.relationship;
      caption.append(relation);
    }
    card.append(quote, caption);
    feedbackList.append(card);
  });
}

async function loadFeedback() {
  if (!feedbackReady) {
    setFeedbackStatus('feedback.unavailable');
    feedbackForm.querySelector('[type="submit"]').disabled = true;
    return;
  }

  setFeedbackStatus('feedback.loading');
  try {
    const response = await fetch(feedbackEndpoint + '?select=id,name,relationship,message,created_at&order=created_at.desc&limit=50', {
      headers: { apikey: feedbackConfig.publishableKey }
    });
    if (!response.ok) throw new Error('Feedback request failed');
    renderFeedback(await response.json());
    setFeedbackStatus('');
  } catch {
    setFeedbackStatus('feedback.error');
  }
}

feedbackForm.addEventListener('submit', async event => {
  event.preventDefault();
  if (!feedbackReady || !feedbackForm.reportValidity()) return;

  const submitButton = feedbackForm.querySelector('[type="submit"]');
  const values = new FormData(feedbackForm);
  const payload = {
    name: String(values.get('name') || '').trim(),
    relationship: String(values.get('relationship') || '').trim() || null,
    message: String(values.get('message') || '').trim()
  };
  if (!payload.name || !payload.message) return;

  submitButton.disabled = true;
  setFeedbackStatus('feedback.loading');
  try {
    const response = await fetch(feedbackEndpoint, {
      method: 'POST',
      headers: {
        apikey: feedbackConfig.publishableKey,
        'Content-Type': 'application/json',
        Prefer: 'return=representation'
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error('Feedback submission failed');
    const inserted = await response.json();
    feedbackForm.reset();
    renderFeedback([...inserted, ...feedbackItems].slice(0, 50));
    setFeedbackStatus('feedback.success');
  } catch {
    setFeedbackStatus('feedback.submitError');
  } finally {
    submitButton.disabled = false;
  }
});

langBtn.addEventListener('click', () => {
  if (feedbackStatusKey) feedbackStatus.textContent = feedbackMessage(feedbackStatusKey);
  if (feedbackList.querySelector('.hint')) {
    feedbackList.querySelector('.hint').textContent = feedbackMessage('feedback.empty');
  }
});
loadFeedback();
