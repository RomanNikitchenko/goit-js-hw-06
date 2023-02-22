const list = document.querySelector('.list');
const items = document.querySelectorAll('.list li');
const btn = document.querySelector('.btn');

let limit = 1;
let disabled = false;

//navigation menu
btn.addEventListener('click', e => {
  e.preventDefault();

  // не больше одного клика в 500 м/с
  if (disabled) return;
  disabled = true;
  setTimeout(() => (disabled = false), 500);
  if (e.target.tagName !== 'BUTTON') return;

  console.log('click button');

  items.forEach(item => {
    if (item.classList.contains('motion-pause')) {
      item.classList.remove('motion-pause');
    }
  });

  console.log(limit);
  limit += 1;
});

list.addEventListener('click', e => {
  // не больше одного клика в 500 м/с
  if (disabled) return;
  disabled = true;
  setTimeout(() => (disabled = false), 500);
  if (e.target.tagName !== 'LI') return;

  console.log('click li');

  //   highlight(e.target);
});

// function highlight(li) {
//   items.forEach(item => {
//     if (item.classList.contains('highlight')) {
//       item.classList.remove('highlight');
//       return;
//     }
//   });

//   li.classList.add('highlight');
// }
