
const categoriesList = document.querySelector("#categories");

const categoryItems = categoriesList.querySelectorAll("li.item");
// вивід у консоль
console.log(`Number of categories: ${categoryItems.length}`);


categoryItems.forEach((categoryItem) => {
    const categoryTitle = categoryItem.querySelector("h2");
    const categoryElements = categoryItem.querySelectorAll("ul li");
// вивід у консоль
    console.log(`Category: ${categoryTitle.textContent}`);
    console.log(`Elements: ${categoryElements.length}`);
});




