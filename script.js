document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Contact form: simple client-side validation + friendly submit state.
  // The form posts to FormSubmit (formsubmit.co) which emails submissions
  // to nexwavemedia1@gmail.com without needing a backend.
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      var name = form.querySelector('#name');
      var email = form.querySelector('#email');
      var message = form.querySelector('#message');
      var valid = true;

      [name, email, message].forEach(function (field) {
        field.nextElementSibling.textContent = '';
        if (!field.value.trim()) {
          field.nextElementSibling.textContent = 'This field is required.';
          valid = false;
        }
      });

      if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.nextElementSibling.textContent = 'Enter a valid email address.';
        valid = false;
      }

      if (!valid) {
        e.preventDefault();
      }
    });
  }
});
