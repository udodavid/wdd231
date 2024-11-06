const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

//Fetch data from the url
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets); //check the data structure in the console
    displayProphets(data.prophets); // Pass only the "prophets" array to displayProphets
  }
  
  getProphetData();

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