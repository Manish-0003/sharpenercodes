var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input values
  var newItem = document.getElementById('item').value;
  var newDescription = document.getElementById('description').value;

  // Create new li element
  var li = document.createElement('li');
  li.className = 'list-group-item';

  // Create a span for item name and description
  var itemText = document.createElement('span');
  itemText.textContent = newItem + '  ' + newDescription;

  // Append text span to li
  li.appendChild(itemText);

  // Create del button element
  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append delete button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

  // Clear input fields
  document.getElementById('item').value = '';
  document.getElementById('description').value = '';
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(function (item) {
    var itemName = item.textContent;
    if (itemName.toLowerCase().indexOf(text) !== -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
