const translations = {
  zh: {
    navExperience: '经历', navSkill: '能力', navEducation: '教育', navProjects: '项目', navDirection: '方向', navContact: '联系',
    langZh: '中', langEn: 'EN'
  },
  en: {
    navExperience: 'Experience', navSkill: 'Skillkit', navEducation: 'Education', navProjects: 'Projects', navDirection: 'Direction', navContact: 'Contact',
    langZh: '中', langEn: 'EN'
  }
};

function applyLang(lang) {
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
  document.querySelectorAll('[data-zh]').forEach((el) => {
    const value = el.getAttribute(`data-${lang}`) || el.getAttribute('data-zh');
    if (el.dataset.html === 'true') el.innerHTML = value;
    else el.textContent = value;
  });
  document.querySelectorAll('[data-lang-option]').forEach((el) => {
    el.classList.toggle('active', el.dataset.langOption === lang);
  });
  localStorage.setItem('siteLang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('siteLang') || 'zh';
  applyLang(saved);
  document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const next = (localStorage.getItem('siteLang') || 'zh') === 'zh' ? 'en' : 'zh';
      applyLang(next);
    });
  });

  const cards = document.querySelectorAll('[data-snapshot-card]');
  if (cards.length > 1) {
    let active = 0;
    setInterval(() => {
      cards.forEach((card, idx) => card.style.opacity = idx === active ? '1' : '.45');
      active = (active + 1) % cards.length;
    }, 2200);
  }
});
