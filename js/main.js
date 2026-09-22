document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.js-nav-toggle');
  const navList = document.querySelector('.js-nav-list');

  function closeNav() {
    if (!navList) return;
    navList.classList.add('hidden');
    navList.classList.remove('flex');
  }

  function openNav() {
    if (!navList) return;
    navList.classList.remove('hidden');
    navList.classList.add('flex');
  }

  if (toggle && navList) {
    toggle.addEventListener('click', function () {
      if (navList.classList.contains('hidden')) {
        openNav();
      } else {
        closeNav();
      }
    });

    navList.querySelectorAll('.js-nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        closeNav();
      });
    });
  }

  const contactForm = document.querySelector('.js-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.js-nav-link');

  window.addEventListener('scroll', function () {
    let current = '';
    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    if (!current) {
      current = 'home';
    }

    navLinks.forEach(function (link) {
      link.classList.remove('is-active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('is-active');
      }
    });
  });
});
