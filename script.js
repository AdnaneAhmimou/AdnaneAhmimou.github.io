function toggleMenu() {
  var menuToggle = document.querySelector('.toggle');
  var menu = document.querySelector('.menu');
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
  var contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(event) {
      event.preventDefault();

      emailjs.sendForm('service_ba51ine', 'template_q6b3el5', this)
          .then(function(response) {
              console.log('SUCCESS!', response.status, response.text);
              alert('Your message has been sent successfully!');
          }, function(error) {
              console.log('FAILED...', error);
              alert('Failed to send the message, please try again.');
          });
  });
});
