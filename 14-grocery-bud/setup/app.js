// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.querySelector('#grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = '';

// ****** SETUP ITEMS **********
setupItems = () => {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach((item) => {
      createListItem(item.id, item.value);
    });
    container.classList.add('show-container');
  }
};

createListItem = (id, value) => {
  list.innerHTML += `<article class="grocery-item" data-id="${id}">
  <p class="title">${value}</p>
  <div class="btn-container">
    <button type="button" class="edit-btn">
      <i class="fas fa-edit"></i>
    </button>
    <button type="button" class="delete-btn">
      <i class="fas fa-trash"></i>
    </button>
  </div>
</article>
`;
  const deleteBtns = list.querySelectorAll('.delete-btn');
  const editBtns = list.querySelectorAll('.edit-btn');
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener('click', deleteItem);
  });
  editBtns.forEach((editBtn) => {
    editBtn.addEventListener('click', editItem);
  });
};

// ****** FUNCTIONS **********
addItem = (e) => {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  // because everthing is truthy/falsy
  if (value && !editFlag) {
    createListItem(id, value);
    // display alert
    displayAlert('item added to list', 'success');
    // show container
    container.classList.add('show-container');
    // add to local STORAGE
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert('value changed', 'success');
    // edit local storage
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert('please enter value', 'danger');
  }
};

// display alert
displayAlert = (text, action) => {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // remove alert
  setTimeout(() => {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 1000);
};
// set back to default
setBackToDefault = () => {
  grocery.value = '';
  editFlag = false;
  editID = '';
  submitBtn.textContent = 'submit bitch';
};
// clear ITEMS
clearItems = () => {
  const items = document.querySelectorAll('.grocery-item');
  if (items) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
  container.classList.remove('show-container');
  displayAlert('empty list', 'danger');
  setBackToDefault();
  localStorage.removeItem('list');
};
// delete function
deleteItem = (e) => {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove('show-container');
  }
  displayAlert('item removed', 'danger');
  removeFromLocalStorage(id);

  setBackToDefault();
  // remove from local storage
};
editItem = (e) => {
  const element = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form values
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = 'edit bitch';
};
// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', addItem);
// clear items
clearBtn.addEventListener('click', clearItems);
// load ITEMS
window.addEventListener('DOMContentLoaded', setupItems);
// ****** LOCAL STORAGE **********
addToLocalStorage = (id, value) => {
  const grocery = { id, value };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem('list', JSON.stringify(items));
};
// remove from local storage
removeFromLocalStorage = (id) => {
  let items = getLocalStorage();
  items = items.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem('list', JSON.stringify(items));
};
editLocalStorage = (id, value) => {
  let items = getLocalStorage();
  items = items.map((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem('list', JSON.stringify(items));
};
getLocalStorage = () => {
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : [];
};
// localStorage API
// setItem
// getItem
// removeItem
// save as strings
