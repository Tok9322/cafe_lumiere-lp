// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#nav-menu');
if (toggle && menu){
  toggle.addEventListener('click', ()=>{
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Smooth scroll for anchor links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    if (id === '#top'){
      e.preventDefault();
      window.scrollTo({top:0, behavior:'smooth'});
      return;
    }
    const el = document.querySelector(id);
    if (el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl){
  yearEl.textContent = new Date().getFullYear();
}

// Theme toggle (Nordic)
(function(){
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const KEY = 'theme';
  const apply = (val)=>{
    const isNordic = val === 'nordic';
    document.body.classList.toggle('theme-nordic', isNordic);
    btn.textContent = isNordic ? 'Default' : 'Nordic';
    btn.setAttribute('aria-pressed', String(isNordic));
  };
  // init
  const saved = localStorage.getItem(KEY);
  if (saved) apply(saved);
  btn.addEventListener('click', ()=>{
    const isNordic = document.body.classList.toggle('theme-nordic');
    const val = isNordic ? 'nordic' : 'default';
    localStorage.setItem(KEY, val);
    apply(val);
  });
})();

// Menu card enlarge modal
(function(){
  const overlay = document.getElementById('overlay');
  if (!overlay) return;
  const content = overlay.querySelector('.content');
  const closeBtn = overlay.querySelector('.close');
  const cards = document.querySelectorAll('.card.clickable');
  let lastFocus = null;

  function open(card){
    if (!card) return;
    lastFocus = document.activeElement;
    document.body.classList.add('modal-open');
    // clone relevant content
    const cloned = card.cloneNode(true);
    cloned.classList.remove('clickable');
    cloned.classList.add('is-enlarged');
    content.innerHTML = '';
    content.appendChild(cloned);
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    closeBtn.focus();
  }

  function close(){
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    content.innerHTML = '';
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }

  cards.forEach(card=>{
    card.addEventListener('click', ()=>open(card));
    card.addEventListener('keydown', (e)=>{
      if (e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        open(card);
      }
    });
  });

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (e)=>{
    if (e.target === overlay) close();
  });
  window.addEventListener('keydown', (e)=>{
    if (e.key === 'Escape' && overlay.classList.contains('open')) close();
  });
})();
