// // examine the document object
// console.dir(document);

// console.log(document.domain);
// console.log(document.activeElement);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.nodeName);
// console.log(document.all);

// // get element by id
// // let headerTitle = document.getElementById('main-header');
// let headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// // headerTitle.textContent = 'hai';
// // headerTitle.innerText = 'goodbye';
// // headerTitle.innerHTML = '<h1><marquee>hello</marquee></h1>';
// headerTitle.style.borderBottom = 'solid 1px #fff';

// // get element by class name
// let items = document.getElementsByClassName('list-group-item');
// console.log('items tes', items);
// items[1].textContent = 'testing';
// items[1].style.fontSize = '29px';


// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = 'yellow';
    
// }

// // query selector

// let head = document.querySelector('#main-header');
// console.log(head)
// head.style.borderBottom = '10px solid yellow';

// let input = document.querySelector('input');
// input.value = 'input your name';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = "kirim";

// let firstLi = document.querySelector('.list-group-item');
// firstLi.style.color = 'red';

// let lastLi = document.querySelector('.list-group-item:last-child');
// lastLi.style.color = 'aqua';

// let secondLi = document.querySelector('.list-group-item:nth-child(3)');
// secondLi.style.color = 'orange';

// let second = document.querySelector('.list-group-item:nth-child(2)');
// second.style.color = 'green';

// // query selector all

// let tes = document.querySelectorAll('.title');
// console.log(tes)

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// for (let index = 0; index < odd.length; index++) {
//     const element = odd[index];
//     const element1 = even[index];
//     element.style.backgroundColor = "grey";
//     element1.style.backgroundColor = "blue";
    
// }

// // next sibling
// // console.log(itemList.nextSibling)

// // console.log('prev sibling',itemList.previousSibling);

// // createElement

// // create a div
// var newDiv = document.createElement('div');
// newDiv.className = 'hello';

// // add id
// newDiv.id = 'id1';

// // add attribute
// newDiv.setAttribute('title', 'hello div id 1');

// // create a text node

// var newDivText = document.createTextNode('hello pawit');

// // add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '100px';
// container.insertBefore(newDiv, h1); 
// ===========================================//

// event
// var button = document.getElementById('button').addEventListener('click', buttonClick);

// const buttonClick = () => {
//   console.log('hello')
// }
// function buttonClick(e){
//   console.log('hello')
//   document.getElementById('header-title').textContent = 'hallo dom';
//   document.querySelector('#main').style.backgroundColor = '#f4f4f4';

//   console.log(e.target);
//   console.log(e.target.id);
//   console.log(e.target.className); 

//   var output = document.getElementById('output');
//   output.innerHTML = '<h3>'+e.target.id+'</h3>'
//   console.log(e.type)

//   console.log(e.clientX)
//   console.log(e.clientY)
// }

var button = document.getElementById('button');
var box = document.getElementById('box');
var output  = document.getElementById('output');

// button.addEventListener('dblclick', onEvent)
// button.addEventListener('mouseover', onEvent)
// button.addEventListener('mousedown', onEvent)
// button.addEventListener('mouseup', onEvent)
// box.addEventListener('click', onEvent)
// box.addEventListener('mouseenter', onEvent)
// box.addEventListener('mouseleave', onEvent)
// box.addEventListener('mouseover', onEvent)
// box.addEventListener('mouseout', onEvent)

// box.addEventListener('click', onEvent)

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
form.addEventListener('submit', onEvent)
// itemInput.addEventListener('keydown', onEvent)
// itemInput.addEventListener('input', onEvent)
// itemInput.addEventListener('focus', onEvent)
// itemInput.addEventListener('cut', onEvent)
// itemInput.addEventListener('paste', onEvent)
// itemInput.addEventListener('keyup', onEvent)

function onEvent(e){
  e.preventDefault();
    console.log('Event type: ' +e.type)

    // output.innerHTML = '<h3> MouseX'+e.offsetX+'</h3>'

    // document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
    // console.log(e.target.value)
    // document.getElementById('output').innerHTML = '<h3>' +e.target.value+'</h3>'
}
