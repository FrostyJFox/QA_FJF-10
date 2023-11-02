// Get the ul#categories element
const categoriesList = document.getElementById('categories');

// Find all the li.item elements within ul#categories
const categoryItems = categoriesList.querySelectorAll('li.item');

// Count and display the number of categories
console.log(`Number of categories: ${categoryItems.length}`);

// Iterate through each li.item element and display category title and number of elements
categoryItems.forEach((categoryItem) => {
  // Find the category title within the current li.item
  const categoryTitle = categoryItem.querySelector('h2').textContent;

  // Find all the li elements within the current category
  const categoryElements = categoryItem.querySelectorAll('ul li');

  // Count and display the number of elements within the current category
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements.length}`);
});

