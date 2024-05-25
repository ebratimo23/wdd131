// Matriz de objetos de productos
const products = [
    {
      id: 'fc-1888',
      name: "flux capacitor",
      avgRating: 4.5
    },
    {
      id: 'fc-2050',
      name: "power laces",
      avgRating: 4.7
    },
    {
      id: 'fs-1987',
      name: "time circuits",
      avgRating: 3.5
    },
    {
      id: 'ac-2000',
      name: "low voltage reactor",
      avgRating: 3.9
    },
    {
      id: 'jj-1969',
      name: "warp equalizer",
      avgRating: 5.0
    }
  ];
  
  // Función para llenar las opciones del campo de selección de nombre de producto
  function fillProductOptions() {
    const selectElement = document.getElementById('producto');
    products.forEach(product => {
      const option = document.createElement('option');
      option.textContent = product.name;
      option.value = product.id;
      selectElement.appendChild(option);
    });
  }
  
  // Función para actualizar el contador de revisiones completadas en localStorage
  function updateReviewCounter() {
    let reviewCount = localStorage.getItem('reviewCount');
    if (!reviewCount) {
      reviewCount = 1;
    } else {
      reviewCount = parseInt(reviewCount) + 1;
    }
    localStorage.setItem('reviewCount', reviewCount);
  }
  
  // Evento que se dispara al enviar el formulario desde review.html
  window.onload = function() {
    updateReviewCounter();
  };
  
  // Llenar las opciones del campo de selección de nombre de producto al cargar la página
  fillProductOptions();




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