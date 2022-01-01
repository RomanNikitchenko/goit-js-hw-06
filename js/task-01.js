const menuItemsByClass = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${menuItemsByClass}`);


const menuItemsClass = document.querySelectorAll(".item");
for (const item of menuItemsClass) {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
}
