// SiteSonar Main Script - Optimized for Performance
/* global localStorage, fetch, IntersectionObserver, performance, requestAnimationFrame */

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

const SCORE_TEXT_CLASSES = ['text-red-400', 'text-yellow-400', 'text-green-400', 'neon-text'];
const BAR_FILL_CLASSES = ['progress-fill-red', 'progress-fill-yellow', 'progress-fill-blue', 'progress-fill-green'];
let currentLang = 'en';
let lastAuditState = null;
let auditInFlight = false;

const heroVariants = [
  {
    tag: { en: '⚡ Fast Websites. Fair Prices.', bg: '⚡ Бързи сайтове. Честни цени.' },
    lineOne: { en: 'Launch Your Website', bg: 'Пусни сайта си' },
    lineTwo: { en: 'In Days, Not Months.', bg: 'за дни, не за месеци.' },
    sub: {
      en: 'Modern landing pages and business websites with strong UI/UX, clean performance, and quick turnaround. Ready in 3-10 days, from €200.',
      bg: 'Модерни сайтове с добре обмислен дизайн, бързо зареждане и кратък срок. Готови за 3–10 дни, от €200.'
    }
  },
  {
    tag: { en: '⚡ Built Fast. Built Clean.', bg: '⚡ Бързо. Модерно. На ниво.' },
    lineOne: { en: 'Websites That Look Sharp', bg: 'Сайтове, които правят впечатление' },
    lineTwo: { en: 'And Load Even Faster.', bg: 'и се зареждат мигновено.' },
    sub: {
      en: 'Landing pages and business websites designed to feel modern, move fast, and stay affordable from the first idea to launch.',
      bg: 'Уеб страници, които изглеждат модерно, работят бързо и не те разоряват — от идеята до пускането.'
    }
  },
  {
    tag: { en: '⚡ From Idea to Launch', bg: '⚡ От идея до готов сайт' },
    lineOne: { en: 'Your Next Website', bg: 'Следващият ти сайт' },
    lineTwo: { en: 'Starts Here.', bg: 'започва оттук.' },
    sub: {
      en: 'Smart UI/UX, strong visual direction, and quick execution for businesses that want results without months of waiting.',
      bg: 'Добре обмислен UX, силна визия и бързо изпълнение — за бизнеси, които не искат да чакат с месеци.'
    }
  },
  {
    tag: { en: '⚡ Small Budget. Strong Impact.', bg: '⚡ Нормален бюджет. Силен резултат.' },
    lineOne: { en: 'Modern Websites', bg: 'Модерни сайтове' },
    lineTwo: { en: 'Without The Waiting Game.', bg: 'без безкрайно чакане.' },
    sub: {
      en: 'Affordable websites for brands that want to look professional, launch quickly, and stop losing time on slow processes.',
      bg: 'Достъпни сайтове за хора и бизнеси, които искат да изглеждат добре онлайн, без да хвърлят месеци в процеса.'
    }
  }
];

const currentHeroVariantIndex = (() => {
  try {
    const storageKey = 'sitesonar-hero-variant';
    const storedValue = localStorage.getItem(storageKey);
    const previous = storedValue === null ? null : Number(storedValue);
    let next = Math.floor(Math.random() * heroVariants.length);
    if (heroVariants.length > 1 && previous !== null && Number.isInteger(previous) && previous >= 0) {
      while (next === previous) next = Math.floor(Math.random() * heroVariants.length);
    }
    localStorage.setItem(storageKey, String(next));
    return next;
  } catch {
    return Math.floor(Math.random() * heroVariants.length);
  }
})();

const copy = {
  en: {
    statuses: { excellent: 'Excellent', good: 'Good', average: 'Average', needsWork: 'Needs Work', poor: 'Poor', critical: 'Critical' },
    mode: {
      live: 'Live PageSpeed data • mobile-first audit',
      estimate: 'Smart estimate • public crawl and content signals',
      baseline: 'Smart estimate • URL and domain signals only'
    },
    barTitles: {
      live: { load: 'Page Load Time', vitals: 'Core Web Vitals', mobile: 'Mobile Responsiveness', seo: 'SEO Optimization' },
      estimate: { load: 'Page Response Time', vitals: 'UX & Structure Signals', mobile: 'Mobile Readiness', seo: 'Search Visibility Signals' }
    },
    headlines: {
      excellent: 'Your website is in strong shape',
      good: 'Solid foundation, with room to grow',
      average: 'There is clear upside in this site',
      poor: 'Your website is holding back conversions'
    },
    insights: {
      speed: {
        title: 'Speed is the biggest opportunity right now.',
        bodyLive: time => `The current load pattern is around ${time}, which is enough friction to lose people early. Tightening this up usually pays off fast in both trust and conversion.`,
        bodyEstimate: 'The public crawl suggests the site does not feel as fast as it could. Lighter pages, cleaner assets, and better front-end hygiene would likely have the biggest impact.'
      },
      mobile: {
        title: 'Mobile UX still needs some care.',
        bodyLive: 'A big share of traffic usually arrives from phones first. If that experience feels cramped or slow, visitors drop before they ever reach the offer.',
        bodyEstimate: 'The structure signals point to room for a cleaner, more mobile-friendly experience, especially around readability, hierarchy, and responsiveness.'
      },
      seo: {
        title: 'SEO has room for meaningful gains.',
        bodyLive: 'Better metadata, stronger content structure, and clearer search signals would make this site easier to discover and easier for Google to understand.',
        bodyEstimate: 'From the title, description, and content structure alone, there is room to strengthen search visibility and make the page easier to index well.'
      },
      security: {
        title: 'Trust and technical hygiene can be tighter.',
        bodyLive: 'Best-practice fixes, cleaner technical setup, and stronger trust signals help both rankings and customer confidence.',
        bodyEstimate: 'The public signals suggest there is still room to strengthen technical trust, consistency, and perceived reliability.'
      }
    },
    cta: {
      polish: {
        title: 'A focused polish pass could push this site much higher.',
        body: 'I would tighten speed, clean up the mobile UX, and sharpen the SEO without turning the project into months of overwork.'
      },
      rebuild: {
        title: 'I can turn this into a much stronger site quickly.',
        body: 'A focused refresh or full rebuild can lift speed, clarity, and conversion in days, not months.'
      }
    },
    buttonRunning: 'Auditing…',
    formSending: 'Sending…',
    formSent: 'Sent!',
    formSuccess: 'Message sent successfully. I will get back to you soon.',
    formError: 'Something went wrong while sending. Please try again or email me directly.'
  },
  bg: {
    statuses: { excellent: 'Отлично', good: 'Добре', average: 'Средно', needsWork: 'Може по-добре', poor: 'Слабо', critical: 'Критично' },
    mode: {
      live: 'Реални данни от PageSpeed • мобилен одит',
      estimate: 'Бърза оценка • по публични сигнали и съдържание',
      baseline: 'Бърза оценка • само по URL и домейн'
    },
    barTitles: {
      live: { load: 'Колко бързо зарежда', vitals: 'Core Web Vitals', mobile: 'Как работи на телефон', seo: 'SEO представяне' },
      estimate: { load: 'Колко бързо отговаря', vitals: 'UX и структура', mobile: 'Мобилна готовност', seo: 'Видимост в Google' }
    },
    headlines: {
      excellent: 'Сайтът ти е в отлична форма',
      good: 'Основата е добра — има място за още няколко подобрения',
      average: 'Потенциалът е налице, но има и ясни слаби места',
      poor: 'Сайтът ти реално те спира — губиш клиенти'
    },
    insights: {
      speed: {
        title: 'Скоростта е основният проблем тук.',
        bodyLive: time => `Зарежда се за около ${time} — това е достатъчно, за да отпаднат хората, преди да видят каквото и да е. Ако оправим само скоростта, разликата ще се усети веднага.`,
        bodyEstimate: 'По сигналите личи, че сайтът не се усеща бърз. Олекотяване на страниците и почистване на ресурсите ще дадат най-бърз ефект.'
      },
      mobile: {
        title: 'Мобилното усещане може да е много по-добро.',
        bodyLive: 'Повечето хора влизат от телефон. Ако на мобилен не е удобно — тях ги губиш, преди въобще да стигнат до офертата ти.',
        bodyEstimate: 'Изглежда, че мобилната четимост, подредбата и адаптивността имат накъде да растат.'
      },
      seo: {
        title: 'SEO-то може да донесе доста повече трафик.',
        bodyLive: 'По-добри мета тагове, по-ясна структура и по-силни сигнали ще помогнат Google да те намери по-лесно.',
        bodyEstimate: 'По заглавието, описанието и структурата личи, че видимостта в търсачките може да се вдигне доста.'
      },
      security: {
        title: 'Доверието и техническата хигиена могат да се подобрят.',
        bodyLive: 'HTTPS, чисти практики и по-стегнат технически setup помагат и за класирането, и за доверието на хората.',
        bodyEstimate: 'Публичните сигнали подсказват, че има какво да се подобри по надеждността и техническата изрядност.'
      }
    },
    cta: {
      polish: {
        title: 'С няколко прецизни промени този сайт ще заработи много по-силно.',
        body: 'Ще оправя скоростта, мобилния UX и SEO-то — без да превръщам проекта в нещо огромно.'
      },
      rebuild: {
        title: 'Мога да го направя много по-добър за кратко време.',
        body: 'Фокусиран ремонт или чисто нов сайт — скоростта, яснотата и конверсиите ще се усетят за дни.'
      }
    },
    buttonRunning: 'Работя по одита…',
    formSending: 'Изпращам…',
    formSent: 'Готово!',
    formSuccess: 'Съобщението е изпратено. Ще се чуем скоро.',
    formError: 'Нещо се обърка. Опитай пак или ми пиши на имейл директно.'
  }
};

/* ── Persist theme & lang across reloads ── */
(function () {
  const savedTheme = localStorage.getItem('ss-theme');
  const savedLang = localStorage.getItem('ss-lang');
  const html = document.documentElement;
  if (savedTheme === 'light') {
    html.classList.remove('dark');
  }
  if (savedLang && savedLang !== 'en') {
    currentLang = savedLang;
  }
})();

/* Theme */
function toggleTheme() {
  const html = document.documentElement;
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.setItem('ss-theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('ss-theme', 'dark');
  }
}

function getCopy() {
  return copy[currentLang];
}

function renderHeroVariant() {
  const variant = heroVariants[currentHeroVariantIndex];
  if (!variant) return;
  setText('heroTagline', variant.tag[currentLang]);
  setText('heroLineOne', variant.lineOne[currentLang]);
  setText('heroLineTwo', variant.lineTwo[currentLang]);
  setText('heroSubcopy', variant.sub[currentLang]);
}

function applyLocalizedPlaceholders() {
  document.querySelectorAll('[data-placeholder-en]').forEach(el => {
    const value = el.getAttribute(`data-placeholder-${currentLang}`);
    if (value) el.placeholder = value;
  });
}

function applyLanguage() {
  document.getElementById('langLabel').textContent = currentLang.toUpperCase();
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-en]').forEach(el => {
    const value = el.getAttribute(`data-${currentLang}`);
    if (value !== null) el.textContent = value;
  });
  applyLocalizedPlaceholders();
  renderHeroVariant();
  if (auditInFlight) {
    const auditLabel = document.getElementById('auditButtonLabel');
    if (auditLabel) auditLabel.textContent = getCopy().buttonRunning;
  }
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'bg' : 'en';
  localStorage.setItem('ss-lang', currentLang);
  applyLanguage();
  if (lastAuditState) renderAudit(lastAuditState);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function average(values, fallback = 50) {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : fallback;
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function normalizeUrl(raw) {
  const candidate = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  const url = new URL(candidate);
  if (!url.hostname) throw new Error('Invalid URL');
  return url.toString();
}

function cleanDisplayUrl(url) {
  return url.replace(/\/$/, '');
}

function pulseInput(input) {
  input.classList.add('animate-pulse');
  setTimeout(() => input.classList.remove('animate-pulse'), 1200);
  input.focus();
}

async function fetchJson(url, options = {}, timeoutMs = 12000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    if (!response.ok) throw new Error(`Request failed with ${response.status}`);
    return await response.json();
  } finally {
    clearTimeout(timeoutId);
  }
}

function statusKey(score) {
  if (score >= 90) return 'excellent';
  if (score >= 75) return 'good';
  if (score >= 60) return 'average';
  if (score >= 45) return 'needsWork';
  if (score >= 30) return 'poor';
  return 'critical';
}

function labelForScore(score) {
  return getCopy().statuses[statusKey(score)];
}

function toneForScore(score) {
  if (score >= 85) return { stroke: '#10B981', textClass: 'text-green-400', barClass: 'progress-fill-green' };
  if (score >= 70) return { stroke: '#00D4FF', textClass: 'neon-text', barClass: 'progress-fill-blue' };
  if (score >= 50) return { stroke: '#F59E0B', textClass: 'text-yellow-400', barClass: 'progress-fill-yellow' };
  return { stroke: '#EF4444', textClass: 'text-red-400', barClass: 'progress-fill-red' };
}

function setToneClass(element, className) {
  if (!element) return;
  element.classList.remove(...SCORE_TEXT_CLASSES);
  element.classList.add(className);
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function setFormStatus(message = '', tone = 'muted') {
  const status = document.getElementById('formStatus');
  if (!status) return;
  status.classList.remove('hidden', 'text-red-400', 'text-green-400', 'muted');
  if (!message) {
    status.textContent = '';
    status.classList.add('hidden');
    return;
  }
  status.textContent = message;
  status.classList.add(tone === 'error' ? 'text-red-400' : tone === 'success' ? 'text-green-400' : 'muted');
}

function animateRing(id, score, stroke) {
  const ring = document.getElementById(id);
  if (!ring) return;
  ring.style.stroke = stroke;
  ring.style.strokeDashoffset = '100';
  requestAnimationFrame(() => {
    ring.style.strokeDashoffset = String(100 - score);
  });
}

function setBar(prefix, score, labelText) {
  const fill = document.getElementById(`bar-${prefix}`);
  const label = document.getElementById(`bar-${prefix}-label`);
  const tone = toneForScore(score);

  if (label) {
    label.textContent = labelText;
    setToneClass(label, tone.textClass);
  }

  if (fill) {
    fill.style.width = '0%';
    fill.classList.remove(...BAR_FILL_CLASSES);
    fill.classList.add(tone.barClass);
    requestAnimationFrame(() => {
      fill.style.width = `${score}%`;
    });
  }
}

function setAuditBusy(isBusy) {
  auditInFlight = isBusy;
  const button = document.getElementById('auditButton');
  const label = document.getElementById('auditButtonLabel');
  if (!button || !label) return;
  button.disabled = isBusy;
  button.classList.toggle('opacity-70', isBusy);
  button.classList.toggle('pointer-events-none', isBusy);
  label.textContent = isBusy ? getCopy().buttonRunning : label.getAttribute(`data-${currentLang}`);
}

function scoreFromCategory(value) {
  if (typeof value !== 'number' || Number.isNaN(value)) return 50;
  return clamp(Math.round(value * 100), 0, 100);
}

function booleanAuditScore(audit, fallback = 50) {
  if (!audit) return fallback;
  if (typeof audit.score === 'number') {
    return audit.score <= 1 ? clamp(Math.round(audit.score * 100), 0, 100) : clamp(Math.round(audit.score), 0, 100);
  }
  return fallback;
}

function metricCategoryToScore(category) {
  const value = String(category || '').toUpperCase();
  if (value === 'FAST' || value === 'GOOD') return 92;
  if (value === 'AVERAGE' || value === 'NEEDS_IMPROVEMENT') return 64;
  if (value === 'SLOW' || value === 'POOR') return 30;
  return null;
}

function thresholdScore(value, good, okay) {
  if (!Number.isFinite(value)) return null;
  if (value <= good) return 92;
  if (value <= okay) return 64;
  return 30;
}

function getLoadSeconds(audits) {
  const candidate = audits['interactive']?.numericValue
    || audits['largest-contentful-paint']?.numericValue
    || audits['speed-index']?.numericValue
    || audits['first-contentful-paint']?.numericValue;
  if (!Number.isFinite(candidate)) return 3.4;
  return Math.max(0.1, candidate / 1000);
}

function mapLoadTimeToScore(seconds) {
  if (seconds <= 1.8) return 95;
  if (seconds <= 2.5) return 85;
  if (seconds <= 4) return 70;
  if (seconds <= 6) return 52;
  if (seconds <= 8) return 36;
  return 22;
}

function formatSeconds(seconds) {
  return `${seconds.toFixed(1)}s`;
}

function hashString(input) {
  let hash = 0;
  for (const char of input) {
    hash = ((hash << 5) - hash) + char.charCodeAt(0);
    hash |= 0;
  }
  return Math.abs(hash);
}

function seededOffset(input, range) {
  const spread = (range * 2) + 1;
  return (hashString(input) % spread) - range;
}

function estimatedSecondsFromScore(score) {
  return Number((7.8 - (clamp(score, 0, 100) * 0.062)).toFixed(1));
}

function getWeakestCategory(categories) {
  return Object.entries(categories).sort((a, b) => a[1] - b[1])[0][0];
}

function buildHeadline(score) {
  const headlines = getCopy().headlines;
  if (score >= 88) return headlines.excellent;
  if (score >= 72) return headlines.good;
  if (score >= 55) return headlines.average;
  return headlines.poor;
}

function getInsight(audit) {
  const insight = getCopy().insights[audit.weakest];
  const body = audit.source === 'live'
    ? insight.bodyLive(formatSeconds(audit.metrics.loadSeconds))
    : insight.bodyEstimate;
  return { title: insight.title, body };
}

function getCtaCopy(audit) {
  return audit.overall >= 80 ? getCopy().cta.polish : getCopy().cta.rebuild;
}

/* Mobile menu */
const mmbtn = document.getElementById('mobileMenuBtn');
const mmenu = document.getElementById('mobileMenu');
function toggleMobileMenu() { mmenu.classList.toggle('hidden'); }
function closeMobileMenu() { mmenu.classList.add('hidden'); }
document.addEventListener('click', e => {
  if (!mmbtn.contains(e.target) && !mmenu.contains(e.target)) closeMobileMenu();
});
mmenu.querySelectorAll('a').forEach(l => l.addEventListener('click', closeMobileMenu));

/* Scroll reveal */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.section-fade').forEach(el => obs.observe(el));

function buildLiveAudit(url, payload) {
  const lighthouse = payload?.lighthouseResult || {};
  const categories = lighthouse.categories || {};
  const audits = lighthouse.audits || {};
  const finalUrl = lighthouse.finalDisplayedUrl || lighthouse.finalUrl || url;

  const speed = scoreFromCategory(categories.performance?.score);
  const accessibility = scoreFromCategory(categories.accessibility?.score);
  const seo = scoreFromCategory(categories.seo?.score);
  const bestPractices = scoreFromCategory(categories['best-practices']?.score);
  const viewport = booleanAuditScore(audits.viewport, 60);
  const tapTargets = booleanAuditScore(audits['tap-targets'], 60);
  const mobile = clamp(Math.round((accessibility * 0.55) + (speed * 0.25) + (viewport * 0.1) + (tapTargets * 0.1)), 0, 100);
  const security = clamp(Math.round((bestPractices * 0.82) + (finalUrl.startsWith('https://') ? 18 : 0)), 0, 100);

  const vitalsFieldScores = [
    metricCategoryToScore(payload?.loadingExperience?.metrics?.LARGEST_CONTENTFUL_PAINT_MS?.category),
    metricCategoryToScore(payload?.loadingExperience?.metrics?.INTERACTION_TO_NEXT_PAINT?.category),
    metricCategoryToScore(payload?.loadingExperience?.metrics?.CUMULATIVE_LAYOUT_SHIFT_SCORE?.category)
  ].filter(Number.isFinite);

  const vitalsLabScores = [
    thresholdScore(audits['largest-contentful-paint']?.numericValue, 2500, 4000),
    thresholdScore(audits['interaction-to-next-paint']?.numericValue, 200, 500),
    thresholdScore(audits['cumulative-layout-shift']?.numericValue, 0.1, 0.25)
  ].filter(Number.isFinite);

  const vitalsScore = clamp(Math.round(average(vitalsFieldScores.length ? vitalsFieldScores : vitalsLabScores, 58)), 0, 100);
  const loadSeconds = getLoadSeconds(audits);
  const loadScore = clamp(Math.round((speed * 0.7) + (mapLoadTimeToScore(loadSeconds) * 0.3)), 0, 100);
  const overall = clamp(Math.round((speed * 0.34) + (mobile * 0.26) + (seo * 0.2) + (security * 0.2)), 0, 100);
  const scoreSet = { speed, mobile, seo, security };

  return {
    source: 'live',
    displayUrl: cleanDisplayUrl(finalUrl),
    overall,
    categories: scoreSet,
    weakest: getWeakestCategory(scoreSet),
    metrics: { loadSeconds, loadScore, vitalsScore, mobileScore: mobile, seoScore: seo }
  };
}

function buildEstimatedAudit(url, snapshot, durationMs) {
  const parsed = new URL(url);
  const host = parsed.hostname.replace(/^www\./i, '');
  const rawContent = snapshot?.content || '';
  const textContent = rawContent.replace(/[#>*_`[\]()]/g, ' ');
  const words = textContent.split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const headingCount = (rawContent.match(/^#{1,6}\s/gm) || []).length;
  const linkCount = (rawContent.match(/\[[^\]]+\]\([^)]+\)/g) || []).length;
  const titleLength = (snapshot?.title || '').trim().length;
  const descriptionLength = (snapshot?.description || '').trim().length;
  const hasViewport = /width=device-width/i.test(snapshot?.metadata?.viewport || '');
  const hasLang = Boolean(snapshot?.metadata?.lang);
  const hasError = /error|not found|blocked/i.test(snapshot?.warning || '');
  const isIp = /^\d{1,3}(\.\d{1,3}){3}$/.test(parsed.hostname);
  const crawlSeconds = Math.max(0.3, durationMs / 1000);

  const speed = clamp(mapLoadTimeToScore(crawlSeconds) + seededOffset(`${host}:speed:${wordCount}`, 6) - (hasError ? 8 : 0), 24, 92);
  const mobile = clamp(
    35 + (hasViewport ? 28 : 0) + (headingCount >= 2 ? 12 : 0) + (wordCount >= 150 ? 10 : wordCount >= 60 ? 5 : 0)
    + (linkCount >= 2 ? 8 : 0) + seededOffset(`${host}:mobile:${headingCount}`, 5) - (hasError ? 6 : 0),
    24,
    94
  );
  const seo = clamp(
    25 + (titleLength >= 20 && titleLength <= 60 ? 22 : titleLength ? 10 : 0)
    + (descriptionLength >= 70 && descriptionLength <= 160 ? 22 : descriptionLength ? 10 : 0)
    + (hasLang ? 8 : 0) + (headingCount >= 2 ? 8 : 0)
    + (wordCount >= 200 ? 10 : wordCount >= 80 ? 5 : 0) + (linkCount >= 2 ? 5 : 0)
    + seededOffset(`${host}:seo:${titleLength}`, 6) - (hasError ? 10 : 0),
    20,
    95
  );
  const security = clamp(
    (parsed.protocol === 'https:' ? 70 : 36) + (!isIp ? 8 : -12) + (!parsed.username && !parsed.password ? 4 : -8)
    + (!snapshot?.warning ? 6 : 0) + seededOffset(`${host}:security`, 4),
    20,
    92
  );

  const vitalsScore = clamp(Math.round((speed * 0.55) + (mobile * 0.45) + seededOffset(`${host}:vitals`, 4)), 24, 90);
  const overall = clamp(Math.round((speed * 0.3) + (mobile * 0.27) + (seo * 0.23) + (security * 0.2)), 0, 100);
  const scoreSet = { speed, mobile, seo, security };

  return {
    source: 'estimate',
    displayUrl: cleanDisplayUrl(snapshot?.url || url),
    overall,
    categories: scoreSet,
    weakest: getWeakestCategory(scoreSet),
    metrics: { loadSeconds: crawlSeconds, loadScore: speed, vitalsScore, mobileScore: mobile, seoScore: seo }
  };
}

function buildBaselineAudit(url) {
  const parsed = new URL(url);
  const host = parsed.hostname.replace(/^www\./i, '');
  const hostLength = host.length;
  const pathDepth = parsed.pathname.split('/').filter(Boolean).length;
  const hasQuery = Boolean(parsed.search);
  const hasHyphens = (host.match(/-/g) || []).length;
  const isIp = /^\d{1,3}(\.\d{1,3}){3}$/.test(parsed.hostname);

  const speed = clamp(55 + (parsed.protocol === 'https:' ? 8 : -6) - (pathDepth * 4) - (hasQuery ? 6 : 0) - (hostLength > 22 ? 6 : 0) + seededOffset(`${host}:baseline-speed`, 10), 24, 84);
  const mobile = clamp(58 + (pathDepth === 0 ? 8 : 0) - (pathDepth * 3) - (hasQuery ? 4 : 0) + seededOffset(`${host}:baseline-mobile`, 8), 26, 86);
  const seo = clamp(54 + (pathDepth === 0 ? 10 : 0) + (hasHyphens === 0 ? 6 : -6) - (hostLength > 22 ? 8 : 0) - (hasQuery ? 4 : 0) + seededOffset(`${host}:baseline-seo`, 9), 24, 86);
  const security = clamp((parsed.protocol === 'https:' ? 78 : 42) - (isIp ? 16 : 0) - (hasQuery ? 5 : 0) + seededOffset(`${host}:baseline-security`, 6), 22, 92);
  const overall = clamp(Math.round((speed * 0.3) + (mobile * 0.25) + (seo * 0.23) + (security * 0.22)), 0, 100);
  const scoreSet = { speed, mobile, seo, security };

  return {
    source: 'baseline',
    displayUrl: cleanDisplayUrl(url),
    overall,
    categories: scoreSet,
    weakest: getWeakestCategory(scoreSet),
    metrics: {
      loadSeconds: estimatedSecondsFromScore(speed),
      loadScore: speed,
      vitalsScore: clamp(Math.round((mobile * 0.55) + (speed * 0.45)), 24, 88),
      mobileScore: mobile,
      seoScore: seo
    }
  };
}

async function buildAudit(url) {
  try {
    const endpoint = new URL('https://www.googleapis.com/pagespeedonline/v5/runPagespeed');
    endpoint.searchParams.set('url', url);
    endpoint.searchParams.set('strategy', 'mobile');
    ['performance', 'accessibility', 'best-practices', 'seo'].forEach(category => endpoint.searchParams.append('category', category));
    const livePayload = await fetchJson(endpoint.toString(), {}, 12000);
    if (livePayload?.lighthouseResult?.categories) return buildLiveAudit(url, livePayload);
  } catch (error) {
    console.info('Live PageSpeed audit unavailable, falling back to estimate.', error);
  }

  try {
    const started = performance.now();
    const proxyUrl = `https://r.jina.ai/http://${encodeURIComponent(url)}`;
    const crawlPayload = await fetchJson(proxyUrl, { headers: { Accept: 'application/json' } }, 12000);
    if (crawlPayload?.data) return buildEstimatedAudit(url, crawlPayload.data, performance.now() - started);
  } catch (error) {
    console.info('Public crawl fallback unavailable, using baseline estimate.', error);
  }

  return buildBaselineAudit(url);
}

function renderAudit(audit) {
  const scoreSet = audit.categories;
  const overallTone = toneForScore(audit.overall);
  const sourceKey = audit.source === 'live' ? 'live' : audit.source === 'estimate' ? 'estimate' : 'baseline';
  const barTitles = getCopy().barTitles[audit.source === 'live' ? 'live' : 'estimate'];
  const insight = getInsight(audit);
  const cta = getCtaCopy(audit);

  setText('resultsHeadline', buildHeadline(audit.overall));
  setText('auditUrl', audit.displayUrl);
  setText('auditMeta', getCopy().mode[sourceKey]);
  setText('overallScore', String(audit.overall));
  setToneClass(document.getElementById('overallScore'), overallTone.textClass);

  ['speed', 'mobile', 'seo', 'security'].forEach(key => {
    const score = scoreSet[key];
    const tone = toneForScore(score);
    setText(`score-${key}`, String(score));
    setText(`status-${key}`, labelForScore(score));
    setToneClass(document.getElementById(`score-${key}`), tone.textClass);
    setToneClass(document.getElementById(`status-${key}`), tone.textClass);
    animateRing(`ring-${key}`, score, tone.stroke);
  });

  setText('bar-load-title', barTitles.load);
  setText('bar-vitals-title', barTitles.vitals);
  setText('bar-mobile-title', barTitles.mobile);
  setText('bar-seo-title', barTitles.seo);

  setBar('load', audit.metrics.loadScore, `${formatSeconds(audit.metrics.loadSeconds)} — ${labelForScore(audit.metrics.loadScore)}`);
  setBar('vitals', audit.metrics.vitalsScore, labelForScore(audit.metrics.vitalsScore));
  setBar('mobile', audit.metrics.mobileScore, labelForScore(audit.metrics.mobileScore));
  setBar('seo', audit.metrics.seoScore, labelForScore(audit.metrics.seoScore));

  setText('insightTitle', insight.title);
  setText('insightBody', insight.body);
  setText('ctaTitle', cta.title);
  setText('ctaBody', cta.body);

  const insightBox = document.getElementById('insightBox');
  if (insightBox) {
    insightBox.classList.remove('warn-bg', 'info-bg');
    insightBox.classList.add(scoreSet[audit.weakest] < 60 || audit.overall < 70 ? 'warn-bg' : 'info-bg');
  }

  document.getElementById('scanningState').classList.add('hidden');
  document.getElementById('resultsState').classList.remove('hidden');
}

async function runAudit() {
  if (auditInFlight) return;

  const input = document.getElementById('urlInput');
  const raw = input.value.trim();
  if (!raw) {
    pulseInput(input);
    return;
  }

  let url;
  try {
    url = normalizeUrl(raw);
  } catch {
    pulseInput(input);
    return;
  }

  const panel = document.getElementById('auditPanel');
  const scan = document.getElementById('scanningState');
  const result = document.getElementById('resultsState');

  panel.classList.remove('hidden');
  scan.classList.remove('hidden');
  result.classList.add('hidden');
  panel.scrollIntoView({ behavior: 'smooth', block: 'center' });

  setAuditBusy(true);
  const started = performance.now();

  try {
    const audit = await buildAudit(url);
    lastAuditState = audit;
    const elapsed = performance.now() - started;
    if (elapsed < 1200) await wait(1200 - elapsed);
    renderAudit(audit);
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } finally {
    setAuditBusy(false);
  }
}

/* Navbar blur */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.backdropFilter = window.scrollY > 20 ? 'blur(24px)' : 'blur(18px)';
}, { passive: true });

/* Smooth anchors */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});

document.getElementById('urlInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    runAudit();
  }
});

const formNextUrl = document.getElementById('formNextUrl');
const formOriginUrl = document.getElementById('formOriginUrl');
if (formNextUrl) formNextUrl.value = `${window.location.href.split('#')[0]}#contact`;
if (formOriginUrl) formOriginUrl.value = window.location.href.split('#')[0];

/* Form submit feedback */
document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const form = this;
  const btn = form.querySelector('button[type="submit"]');
  const orig = btn.innerHTML;
  const endpoint = form.dataset.ajaxEndpoint;

  setFormStatus();
  btn.innerHTML = `<span class="inline-block animate-spin">⏳</span>&nbsp;${getCopy().formSending}`;
  btn.disabled = true;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form)
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok || result.success === false || result.success === 'false') {
      throw new Error(result.message || 'Form submission failed');
    }

    btn.innerHTML = `✓&nbsp;${getCopy().formSent}`;
    btn.style.background = '#10B981';
    setFormStatus(getCopy().formSuccess, 'success');
    form.reset();
    if (formNextUrl) formNextUrl.value = `${window.location.href.split('#')[0]}#contact`;
    if (formOriginUrl) formOriginUrl.value = window.location.href.split('#')[0];
  } catch (error) {
    console.error('Contact form submission failed.', error);
    btn.style.background = '#EF4444';
    setFormStatus(getCopy().formError, 'error');
  } finally {
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.disabled = false;
      btn.style.background = '';
    }, 2500);
  }
});

applyLanguage();

// Make functions globally available
window.toggleTheme = toggleTheme;
window.toggleLang = toggleLang;
window.toggleMobileMenu = toggleMobileMenu;
window.runAudit = runAudit;
