// You can access the 'todoItems' variable from the 'data.js' file, so long as 'data.js'
// comes before 'script.js' in the HTML document
console.log(todoItems)

// Use the 'todoItems' variable to create the appropriate elements and append them onto
// the page.

const incompleteList = document.querySelector('#incomplete-items')
const completeList = document.querySelector('#complete-items')
const newTodo = document.querySelector('#todoForm')
const inputItem = document.querySelector('#inputItem')


newTodo.addEventListener('submit', function(e) {
  e.preventDefault()
  const newTask = {
    id: todoItems.length + 1,
    title: inputItem.value,
    completed: false,
  }

  todoItems.push(newTask)
  console.log(todoItems)
  const addTaskInto = document.createElement('li')
  addTaskInto.classList.add('list-group-item')

  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.classList.add('form-check-input')
  addTaskInto.appendChild(checkbox)

  const label = document.createElement('label')
  label.innerText = newTask.title
  label.classList.add('form-check-label', 'ps-3')
  addTaskInto.appendChild(label)
  incompleteList.appendChild(addTaskInto)

  checkbox.addEventListener('click', function () {
    if(checkbox.checked) {
      completeList.appendChild(addTaskInto)
      addTaskInto.completed
    }
    else {
      incompleteList.appendChild(addTaskInto)
    }
  })


  newTodo.reset()
})




