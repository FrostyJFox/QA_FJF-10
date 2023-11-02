const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Get the ul.gallery element
const galleryList = document.querySelector('.gallery');

// Create the HTML for the gallery using template strings
const galleryHTML = images.map((image) => `
 <li class="gallery-item">
   <img src="${image.url}" alt="${image.alt}" class="gallery-image">
 </li>
`).join('');

// Insert the gallery HTML into the ul.gallery element
galleryList.insertAdjacentHTML('beforeend', galleryHTML);
