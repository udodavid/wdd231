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

// Weather
// Select HTML elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// OpenWeatherMap API URL
const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=e0b53cf5024c5a759e4c0bc8f4251f86`;

// Fetch Weather Data
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // For testing
      displayResults(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

// Display Results
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;C`; // Current temperature
  const iconSrc = `https://openweathermap.org/img/wn/10d@2x.png`; // Weather icon URL
  const desc = data.weather[0].description; // Weather description

  // Set attributes and content
  weatherIcon.setAttribute('src', iconSrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1); // Capitalize description
}

// Call the function
apiFetch();

// Business Card
  // const url = 'data/Businesscard.json';
  const cards = document.querySelector('#cards');
  
  //Fetch data from the url
  async function getBusinesscardData() {
      const response = await fetch(url);
      const data = await response.json();
      console.table(data.businesscards); //check the data structure in the console
      displayBusinesscards(data.businesscards); // Pass only the "prophets" array to displayProphets
    }
    
    getBusinesscardData();
  
    //Take the prophets array and create a card for each prophet
    const displayProphets = (prophets) => {
      prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); // fill in the blank
        let portrait = document.createElement('img');
        let dob = document.createElement('p');
        let pob = document.createElement('p');
    
        // Full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank
  
        //Date of Birth and Place of birth
        dob.textContent = `Date of Birth: ${prophet.birthdate}`;
        pob.textContent = `Place of Birth: ${prophet.birthplace}`;
        
        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
    
        // Append the section(card) with the created elements
        card.appendChild(fullName);
        card.appendChild(dob);
        card.appendChild(pob);
        card.appendChild(portrait);
  
        //Append card to cards container
        cards.appendChild(card);
      }); 
    }
// fetch('data/chamber.json')
//   .then(response => response.json())
//   .then(data => {
//     const goldOrSilver = data.filter(member => member.membership === 'Gold' || member.membership === 'Silver');
//     const spotlightContainer = document.getElementById('spotlight-container');

//     goldOrSilver.sort(() => 0.5 - Math.random()).slice(0, 3).forEach(member => {
//       spotlightContainer.innerHTML += `
//         <div class="spotlight-card">
//           <img src="${member.logo}" alt="${member.name}">
//           <h3>${member.name}</h3>
//           <p>${member.phone}</p>
//           <p>${member.address}</p>
//           <a href="${member.website}" target="_blank">Visit Website</a>
//         </div>
//       `;
//     });
//   });

// Get the current year and update the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Get the last modified date of the document and update the footer
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;

