// singel element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));

console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();

ul.firstElementChild.textContent = 'item baru';
ul.children[1].innerText = "item dua";
ul.lastElementChild.innerHTML = "<h1>Item tiga</h1>";

const btn = document.querySelector('.btn');
btn.style.background = 'red';

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click', e.target.className);
    document.querySelector('#my-form').style.background = "aqua";
    document.querySelector('body').classList.add(' bg-dark');
});