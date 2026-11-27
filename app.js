const en = {
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
