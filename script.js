document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  const tabContents = document.querySelectorAll('.tab-content');

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      navLinks.forEach(navLink => navLink.classList.remove('active'));
      tabContents.forEach(content => content.style.display = 'none');

      this.classList.add('active');
      const tabId = this.dataset.tab;
      document.getElementById(tabId).style.display = 'block';
    });
  });
});


/* download cvc ode*/
document.addEventListener('DOMContentLoaded', function() {
  const downloadButton = document.getElementById('downloadCvButton');

  downloadButton.addEventListener('click', function() {
      const link = document.createElement('a');
      link.href = '/images/CV/my-cv.pdf'; // Corrected route
      link.download = 'my-cv.pdf';

      link.click();
  });
});


/*whatsapp Me*/

        document.addEventListener('DOMContentLoaded', function() {
            const hireButton = document.getElementById('hire');

            hireButton.addEventListener('click', function() {
                const phoneNumber = 'YOUR_PHONE_NUMBER'; // Replace with your phone number (e.g., 15551234567)
                const whatsappUrl = `https://wa.me/${+23288887850}`;
                window.location.href = whatsappUrl;
            });
        });