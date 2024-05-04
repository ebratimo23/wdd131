
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