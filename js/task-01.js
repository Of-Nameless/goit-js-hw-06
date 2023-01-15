const item = document.querySelectorAll('.item');
console.log(`Number of categories: ${item.length}`);

for (const element of item) {
    const title = element.querySelector('h2');
    const numberOfElements = element.querySelectorAll('li');
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${numberOfElements.length}`);
};
