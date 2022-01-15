const menuItemsByClass = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${menuItemsByClass}`);


const menuItemsClass = document.querySelectorAll(".item");

for (const item of menuItemsClass) {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
}


// //V2
// const list = document.querySelector('#categories');
// const items = list.querySelectorAll('.item');

// console.log(`В списке ${items.length} категории:`);

// items.forEach(node => {
// const h2 = node.querySelector('h2');
// const nodeItems = node.querySelectorAll('li');
// console.log(` - категория: ${h2.textContent} (количество элементов: ${nodeItems.length})`);
// });
