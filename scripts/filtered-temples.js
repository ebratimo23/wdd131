let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

// Dark Node 

let darkmode = document.querySelector('#darkmode')

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: " Columbia River, Washington",
        location: " Columbia River, Washington",
        dedicated: "2001, November , 18",
        area: 16880,
        imageUrl: 
        "https://churchofjesuschrist.org/imgs/a4b69ff6daf25c70235e2823612a01872a7b2abc/full/320%2C/0/default"
    },
    {
        templeName: "Asunción, Paraguay, Paraguay",
        location: "Asunción, Paraguay, Paraguay",
        dedicated: "2002, May, 19",
        area: 10900,
        imageUrl:
        "https://churchofjesuschrist.org/imgs/68dfd881f93cb86e99828aa547eac056189c55ff/full/320%2C/0/default"
    },
    {
        templeName: "Apia, Pesega, Samoa",
        location: "Apia, Pesega, Samoa",
        dedicated: "1983, August , 5",
        area: 18691,
        imageUrl:
        "https://churchofjesuschrist.org/imgs/6007b20e832459d2d8540c15a8f5fa80d7dcff0f/full/320%2C/0/default"
    },
  ];

// Function to generate a temple card
function generateTempleCard(temple){
    return ` 
    <div class="temple-card">
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong>${temple.location}</p>
        <p><strong>Dedicated:</strong>${temple.dedicated}</p>
        <p><strong>Area:</strong>${temple.area.toLocaleString()} squere feet</p>
        <img src="${temple.imageUrl}" alt="{temple.templeName}" loading="lazy">
    </div>`
}
// Function to display the temples based on the provided filter
function displayFilteredTemples(filter){
    const templeContainer = document.getElementById('temple-container');

// Filter the temples based on the provided filter
    const filteredTemples = temples.filter(temple => {
        switch (filter){
            case 'Old':
                return parseInt(temple.dedicated.split(',')[0]) < 1900;
            case 'New':
                return parseInt(temple.dedicated.split(',')[0]) > 2000;
            case 'Large':
                return temple.area > 90000;
            case 'Small':
                return temple.area < 10000;
            default:
                return true;
        }
    })
   // Generate and display the HTML cards of the filtered temples
    templeContainer.innerHTML = filteredTemples.map(temple => generateTempleCard(temple)).join('');

}
// Call the function to show all temples at startup
displayFilteredTemples('Home');



let footerCopy = document.querySelector('.copy');

// Get the current year
let currentYear = new Date().getFullYear();

// Create the copyright year text
let copyrightText = '© ' + currentYear + ' Luis Ebrahim Herrera Rengel -- Venezuela'

footerCopy.textContent = copyrightText;

let secondCopy = document.querySelector('.copy2');

// Get the date of the last modification of the document
var lastModifiedDate = new Date(document.lastModified);

// Create the last modified date text
var lastModifiedText = 'Last modification: ' + lastModifiedDate.toLocaleString();

// Assign the text to the second paragraph of the footer
secondCopy.textContent = lastModifiedText;