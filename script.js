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
        form.innerHTML = '<p style="color: #4CAF50; font-size: 1.1rem; text-align: center;">✅ Message envoyé ! On vous répond rapidement.</p>';
      } else {
        alert('Erreur lors de l\'envoi. Veuillez réessayer.');
      }
    } catch {
      alert('Erreur réseau. Veuillez réessayer.');
    }
  });
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