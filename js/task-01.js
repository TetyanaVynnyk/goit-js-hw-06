const categories = document.querySelector('#categories').children;
console.log(`Number of categories: ${categories.length}`);

const countElementsOfCategories = (categories) => {

    for (const item of categories) {
        const categoryName = item.querySelector(`h2`);
        console.log(`Category: ${categoryName.textContent}`);
        console.log(`Elements: ${item.querySelector(`ul`).children.length}`)
    }
};

countElementsOfCategories(categories);