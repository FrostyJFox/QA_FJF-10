const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

// Get the ul#ingredients element
const ingredientsList = document.getElementById('ingredients');

// Create a document fragment to hold the new elements
const fragment = document.createDocumentFragment();

// Loop through the ingredients array and create <li> elements
ingredients.forEach((ingredient) => {
 const listItem = document.createElement('li');
 listItem.textContent = ingredient;
 listItem.classList.add('item');
 fragment.appendChild(listItem); // Append each <li> to the fragment
});

// Append all the <li> elements in one operation to the ul#ingredients list
ingredientsList.appendChild(fragment);
