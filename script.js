// Année courante dans le footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile toggle
const toggle = document.querySelector('.menu-toggle');
const nav    = document.querySelector('.main-nav');

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen);
});

// Fermer le menu quand on clique sur un lien
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  });
});

// Message de confirmation après envoi du formulaire Formspree
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        form.innerHTML = '<p style="color: #4CAF50; font-size: 1.1rem; text-align: center;">✅ Demande envoyée ! On vous recontacte sous 6 à 12h.</p>';
      } else {
        alert('Erreur lors de l\'envoi. Veuillez réessayer.');
      }
    } catch {
      alert('Erreur réseau. Veuillez réessayer.');
    }
  });
}

// Logo géant du hero : plus visible (et plus rouge) au fil du scroll
// (pas de garde prefers-reduced-motion ici : l'effet suit directement le scroll
// de l'utilisateur, ce n'est pas une animation automatique)
const heroLogoBg = document.querySelector('.hero-logo-bg');

if (heroLogoBg) {
  const maxScroll = 450; // px de scroll pour atteindre l'intensité max
  const headlights = heroLogoBg.querySelectorAll('.headlight');
  const updateHeroLogo = () => {
    const raw = Math.min(window.scrollY / maxScroll, 1);
    const progress = raw * raw * (3 - 2 * raw); // easing smoothstep — apparition plus douce
    heroLogoBg.style.opacity = 0.09 + progress * 0.6;
    // Effet de profondeur : le logo grossit légèrement et projette une ombre plus
    // marquée en scrollant, comme s'il se rapprochait du visiteur.
    const scale = 1 + progress * 0.12;
    heroLogoBg.style.transform = `translate(-50%, -50%) scale(${scale})`;
    heroLogoBg.style.filter = `drop-shadow(0 ${10 + progress * 20}px ${20 + progress * 30}px rgba(0,0,0,${0.3 + progress * 0.4}))`;
    headlights.forEach(h => { h.style.opacity = progress; });
    heroLogoBg.classList.toggle('leds-on', progress > 0.5);
  };
  window.addEventListener('scroll', updateHeroLogo, { passive: true });
  updateHeroLogo();
}

// Scroll reveal
const sectionsToReveal = document.querySelectorAll('.services, .a-propos, .galerie, .contact');

const scrollObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      scrollObserver.unobserve(entry.target);
    };
  });
});

sectionsToReveal.forEach(function(section) {
  scrollObserver.observe(section);
});