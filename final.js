var addForm = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter')
// form submit event

addForm.addEventListener('submit', addItem);
filter.addEventListener('keyup', filterItem);

// delete event

itemList.addEventListener('click', removeItem);

// filter
function filterItem(e){
  var text = e.target.value.toLowerCase();
  console.log(text)
  // get list item
  var items = itemList.getElementsByTagName('li');
 
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else{
      item.style.display = 'none'
    }
  })
}
// delete item
function removeItem(e){
 if(e.target.classList.contains('delete')){
   console.log('delete')
   if(confirm('are you sure?')){
     var li = e.target.parentElement;
     itemList.removeChild(li);
   }
 }

}

// add item
function addItem(e){
  e.preventDefault();

//  get input value

var newItem = document.getElementById('item').value;

// create new elemen li

var li = document.createElement('li');
// add class
li.className = 'list-group-item';
// console.log(li)
// Add text node with input value

li.appendChild(document.createTextNode(newItem));

// create delete button element

var deleteBtn = document.createElement('button');

// add class to delete button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
deleteBtn.appendChild(document.createTextNode('X'));

// append delete to li
li.appendChild(deleteBtn);

// append li to list
itemList.appendChild(li);
}