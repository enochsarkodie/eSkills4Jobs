const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

function addTodo() {
    const todoText = todoInput.value.trim(); 

    if (todoText) {

        const todoItem = document.createElement('li');
        todoItem.textContent = todoText;

        todoItem.addEventListener('click', () => {
            todoItem.remove();
        });

        todoList.appendChild(todoItem);
        todoInput.value = '';
    } else {
        alert('you godda add something man!');
    }
}
 addTodoBtn.addEventListener('click', addTodo);


todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTodo();
    }
});

addTodoBtn.addEventListener('submit',(event)=>{
    event.preventDefault();
})