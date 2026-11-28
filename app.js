const en = {
  'rec.name':'Your name','rec.role':'How do we know each other? (optional)','rec.msg':'Your recommendation','rec.gmail':'Continue in Gmail','rec.copy':'Copy message',
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
  'rec.title':'Recommendations.',
  'rec.lead':'Have we worked or studied together? Share how it went.',
  'rec.note':'I will only publish your comment and name with your permission.',
  'p.classtrack':'Academic management web system that assigns classrooms and schedules, preventing overbooking and course clashes with transactional validation.',
  'about.lang':'Native Spanish · Intermediate English',
  'nav.exp':'Experience',
  'nav.recs':'Recommendations',
  'show.eyebrow':'Featured project','skills.title':'What I can do.','skills.back':'Clear, well-structured APIs.','skills.how':'How I work','skills.front':'Interfaces people understand.','skills.data':'From data to deployment.','skills.now':'Now','skills.learn':'Learning Azure, testing and CI/CD.',
  'hero.title':'From the React button to the database.','toolbox.more':'Data and cloud',
  'projects.title2':'What I have built.','filter.hint':'Pick a technology to see where I used it.','filter.all':'All',
  'nav.hire':'Hire me',
  'nav.home':'Home','nav.skills':'Skills','hero.hi':"Hi, I'm",
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
Object.assign(en, {'alt.hola':"Cristian's memoji waving",'alt.laptop':"Cristian's memoji coding on a laptop",'alt.idea':"Cristian's memoji having an idea",'alt.sonrisa':"Cristian's memoji smiling",'alt.gesto':"Cristian's memoji making a finger heart",'alt.gracias':"Cristian's memoji making a heart with both hands"});
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
  const toTop = () => window.scrollTo({ top: 0, behavior: 'instant' });
  toTop(); requestAnimationFrame(toTop);
}
addEventListener('hashchange', showView);
addEventListener('load', showView);
showView();

// Recomendaciones: el sitio es estático, así que el visitante envía el mensaje desde su correo
const recForm = document.getElementById('rec-form');
const recStatus = document.getElementById('rec-status');
const recEmail = 'cmoralesavendano6@gmail.com';
function recText() {
  const d = new FormData(recForm);
  const get = k => String(d.get(k) || '').trim();
  const es = lang === 'es';
  return [(es ? 'Nombre: ' : 'Name: ') + get('name'),
    get('role') && (es ? 'Relación: ' : 'Relationship: ') + get('role'),
    '', get('message')].filter(x => x !== '').join('\n');
}
function recValid() {
  [...recForm.elements].forEach(f => { if (f.required && !f.value.trim()) f.value = ''; });
  return recForm.reportValidity();
}
recForm.addEventListener('submit', e => {
  e.preventDefault();
  if (!recValid()) return;
  const q = new URLSearchParams({ view: 'cm', fs: '1', to: recEmail,
    su: lang === 'es' ? 'Recomendación para tu portafolio' : 'Recommendation for your portfolio', body: recText() });
  window.open('https://mail.google.com/mail/?' + q, '_blank', 'noopener,noreferrer');
  recStatus.textContent = lang === 'es'
    ? 'Para terminar, pulsa Enviar en Gmail. Si no usas Gmail, copia el mensaje y envíalo a ' + recEmail + '.'
    : 'To finish, press Send in Gmail. If you do not use Gmail, copy the message and send it to ' + recEmail + '.';
});
document.getElementById('rec-copy').addEventListener('click', async () => {
  if (!recValid()) return;
  try {
    await navigator.clipboard.writeText(recText());
    recStatus.textContent = (lang === 'es' ? 'Mensaje copiado. Envíalo a ' : 'Message copied. Send it to ') + recEmail + '.';
  } catch {
    recStatus.textContent = lang === 'es' ? 'No se pudo copiar el mensaje.' : 'The message could not be copied.';
  }
});
langBtn.addEventListener('click', () => { recStatus.textContent = ''; });
