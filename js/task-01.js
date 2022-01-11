const allCategoriesRef = document.querySelectorAll('.item');
const countCategories = allCategoriesRef.length;
console.log('Number of categories:', countCategories);

allCategoriesRef.forEach(category => {
    const categoriesTitleRef = category.querySelector('h2');
    const categoryRef = categoriesTitleRef.textContent;
    console.log('Category:', categoryRef);

    const elementsRef = category.querySelectorAll('li');
    const countElementsRef = elementsRef.length;
    console.log('Elements:', countElementsRef);
}); 

