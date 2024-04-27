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