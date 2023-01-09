const list = document.querySelector(".list");
const items = document.querySelectorAll("li");

list.addEventListener("click", (e) => {
  if (e.target.tagName !== 'LI') return;
  
  highlight(e.target);
});

function highlight(li) {

  items.forEach(item => {
    if (item.classList.contains("highlight")) {
      item.classList.remove("highlight");
      return;
    }
  });

  li.classList.add("highlight");
}
