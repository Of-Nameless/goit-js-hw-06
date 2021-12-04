const getElementItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${getElementItem.length}`);

// getElementItem.forEach(element => {
//     const getElementTitle = element.querySelector('h2');
//     const getElementList = element.querySelectorAll('li');
//     console.log(`Category: ${getElementTitle.textContent}`);
//     console.log(`Category: ${getElementList.length}`);
// })

for (const element of getElementItem) {
    const getElementTitle = element.querySelector('h2');
    const getElementList = element.querySelectorAll('li')
    console.log(`Category: ${getElementTitle.textContent}`);
    console.log(`Category: ${getElementList.length}`); 
}
