// examine the document object
console.dir(document);

console.log(document.domain);
console.log(document.activeElement);
console.log(document.URL);
console.log(document.doctype);
console.log(document.nodeName);
console.log(document.all);

// get element by id
// let headerTitle = document.getElementById('main-header');
let headerTitle = document.getElementById('header-title');
console.log(headerTitle);
// headerTitle.textContent = 'hai';
// headerTitle.innerText = 'goodbye';
// headerTitle.innerHTML = '<h1><marquee>hello</marquee></h1>';
headerTitle.style.borderBottom = 'solid 1px #fff';

// get element by class name
let items = document.getElementsByClassName('list-group-item');
console.log('items tes', items);
items[1].textContent = 'testing';
items[1].style.fontSize = '29px';


for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = 'yellow';
    
}

// query selector

let head = document.querySelector('#main-header');
console.log(head)
head.style.borderBottom = '10px solid yellow';

let input = document.querySelector('input');
input.value = 'input your name';

let submit = document.querySelector('input[type="submit"]');
submit.value = "kirim";

let firstLi = document.querySelector('.list-group-item');
firstLi.style.color = 'red';

let lastLi = document.querySelector('.list-group-item:last-child');
lastLi.style.color = 'aqua';

let secondLi = document.querySelector('.list-group-item:nth-child(3)');
secondLi.style.color = 'orange';

let second = document.querySelector('.list-group-item:nth-child(2)');
second.style.color = 'green';

// query selector all

let tes = document.querySelectorAll('.title');
console.log(tes)

let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');

for (let index = 0; index < odd.length; index++) {
    const element = odd[index];
    const element1 = even[index];
    element.style.backgroundColor = "grey";
    element1.style.backgroundColor = "blue";
    
}