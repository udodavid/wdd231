// Get current page URL
const currentPage = window.location.pathname;

//All navigation links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    if (currentPage === '/' || currentPage.endsWith('index.html')){
        if (link.getAttribute('href').includes('index.html')){
            link.classList.add('active');
        }
    }
    else if (link.href.includes(currentPage)) {
        link.classList.add('active');
    }
});

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show')
});

// Details
const params = new URLSearchParams(window.location.search);
    document.getElementById('form-data').innerHTML = `
      <li>First Name: ${params.get('first_name')}</li>
      <li>Last Name: ${params.get('last_name')}</li>
      <li>Organizational Title: ${params.get('organization_title')}</li>
      <li>Email: ${params.get('email')}</li>
      <li>Phone: ${params.get('phone')}</li>
      <li>Business Name: ${params.get('organization')}</li>
      <li>Membership Level: ${params.get('membership_level')}</li>
      <li>Date Submitted: ${params.get('timestamp')}</li>
    `;

    // Get the current year and update the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Get the last modified date of the document and update the footer
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;