const numberofCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberofCategories.length}`);

const categoriesArray = [...numberofCategories]
    .map(categories => `Category: ${categories.firstElementChild.textContent}
Elements: ${categories.lastElementChild.children.length}`
)
    .join(" ");
console.log(categoriesArray);