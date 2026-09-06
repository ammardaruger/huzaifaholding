const siteHeader = document.getElementById('navbarMain');
const setHeaderState = () => {
  if (siteHeader) siteHeader.classList.toggle('scrolled', window.scrollY > 18);
};
window.addEventListener('scroll', setHeaderState, { passive: true });
setHeaderState();

const nav2El = document.getElementById('nav2');
if (nav2El) {
  nav2El.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const collapse = bootstrap.Collapse.getInstance(nav2El);
      if (collapse) collapse.hide();
    });
  });
}

const revealEls = document.querySelectorAll('.reveal, .reveal-zoom');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12, rootMargin: '0px 0px -45px 0px' });
  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('active'));
}

/* Homepage image presentation */
const slides = Array.from(document.querySelectorAll('.hero-slide'));
const dots = Array.from(document.querySelectorAll('.hero-dot'));
if (slides.length > 1) {
  let current = 0;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion) {
    window.setInterval(() => {
      slides[current].classList.remove('active');
      if (dots[current]) dots[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');
    }, 5200);
  }
}

/* Brand presentation lives only on the homepage. */
const logoTickerTrack = document.getElementById('logoTickerTrack');
if (logoTickerTrack) {
  const brandLogos = [
    { file: 'huzaifa-construction-light.png', name: 'Huzaifa Construction' },
    { file: 'huzaifa-distributions-light.png', name: 'Huzaifa Distributions' },
    { file: 'huzaifa-manpower-light.png', name: 'Huzaifa Manpower' },
    { file: 'huzaifa-transportation-light.png', name: 'Huzaifa Transportation' },
    { file: 'huzaifa-consultants-light.png', name: 'Huzaifa Consultants' },
    { file: 'huzaifa-print-light.png', name: 'Huzaifa Print' },
    { file: 'huzaifa-plastics-light.png', name: 'Huzaifa Plastics' },
    { file: 'huzaifa-catering-light.png', name: 'Huzaifa Catering' },
    { file: 'falcon-international-light.png', name: 'Falcon International' }
  ];
  const base = document.body.dataset.staticImages || '/static/images/';
  const logoHtml = brandLogos.map(l => `<span class="logo-item"><img src="${base}${l.file}" alt="${l.name}" loading="lazy"></span>`).join('');
  logoTickerTrack.innerHTML = logoHtml + logoHtml;
}
