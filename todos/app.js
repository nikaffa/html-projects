const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

addForm.addEventListener('submit', event => {
  event.preventDefault();
  const todo = addForm.add.value.trim();
  if(todo.length) {
    genetareTemplate(todo);
    addForm.reset();
  }
  
});

const genetareTemplate = todo => {
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
      `;

  list.innerHTML +=html;
};

//delete todos
list.addEventListener('click', event => { //when click a trash icon
  if(event.target.classList.contains('delete')) {
    event.target.parentElement.remove(); //delete this list element
  }
});

const filterTodos = term => { //match term against todos and filter them
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered')); //if user's input matches any todo, this todo still shows in a list

  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered')); //if it doesn't, it's hidden from the list
};

//add a keyup event on typing input in Search form, so that
//when user inputs in something, only a todo contains this string shows in a list, the others are being removed 
search.addEventListener('keyup', ()=> {
  const term = search.value.trim().toLowerCase(); //whatever user typed in in that moment
  filterTodos(term);
});


