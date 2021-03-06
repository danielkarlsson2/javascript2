const { deleteTodo } = require("../backend/models/todosModel");

const output = document.querySelector('#output')
const todoInput = document.querySelector('#todoInput')
const todoForm = document.querySelector('#todoForm')

var myModal = new bootstrap.Modal(document.getElementById('addTodo'));



let todos = [];

const fetchTodos = async () => {
    const res = await fetch('http://localhost:8080/api/todos')
    const data = await res.json();

    todos = data;
    console.log(todos);
    listTodos(todos)
}

const listTodos = () => {
    output.innerHTML = '';
    _todos.forEach(todo => {
        output.insertAdjacentHTML('beforeend', createTodoElement(todo))
        addRemoveOnClick(todo)
        addToggleComplete(todo)
    })
}

const addRemoveOnClick = todo => {
    document.querySelector(`#delete_${todo._id}`).addEventListener('click', () => {
        if(todo.completed) {
            deleteTodo(todo)
        }
        else {
            // error model
        }
    })
}

const addToggleComplete = todo => {
    document.querySelector(`#title${todo._id}`).addEventListener('click', () => {
       fetch(`http://localhost:8080/api/todos/${todo._id}`, {
           method: 'PATCH',
           headers: {
               'Content-Type': 'application/json; charset=UF-8'
           },
           body: JSON.stringify({
               completed: !todo.completed
           })
       })
    })
}

const deleteTodo = async todo => {
    const res = await fetch(`http://localhost:8080/api/todos/${todo._id}`,  {
        method:'DELETE'
    })

    if(res.ok) {
        const data = await res.json()
        const todoElement = document.querySelector(`#todo_${data.id}`)
        todoElement.classList.add('animationend', () => {
            todoElement.remove();
        })
        todoElement.classList.add('slideout')
    }
}

const createTodoElement = todo => {
    let template = `
    <div class="border-bottom animate" id="todo_${todo._id}">
        <div class="container d-flex justify-content-between align-items-center px-5 py-2">
            <p id="title_${todo._id}" class="h5 m-0 title ${todo.completed ? 'complete' : ''}">${todo.title}</p>
            <i class="fa-solid fa-trash text-danger" id="delete_${todo._id}"></i>
        </div>
    </div>`

    return template
}

fetchTodos()

const addNewTodo = title => {
    fetch('http://localhost:8080/api/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'applications/json; charset=UTF-8'
        },
        body: JSON.stringify({ title })
    })
    .then(res => res.json())
    .then(data => {
        output.insertAdjacentHTML('beforeend', createTodoElement(todo))
        addRemoveOnClick(data)
    })
    .catch(err => console.log(err))
}

todoForm.addEventListener('submit', e => {
    e.preventDefault();
    if(todoInput.ariaValueMax.trim() !== '') {
        addNewTodo(todoInput.value);
        input.value = '';
        addTodoModal.hide();
    }
})