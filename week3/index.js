const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const emptyMessage = document.getElementById('empty-message');
const totalCount = document.getElementById('total-count');
const completedCount = document.getElementById('completed-count');

console.log('counter total (#total-count):', totalCount);

function updateCounts(){
    const total = todoList.children.length;
    const completed = todoList.querySelectorAll('li.completed').length;

    totalCount.textContent = total;
    completedCount.textContent = completed;

    if (total === 0) {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
    }
}

function createTodoItem(taskText) {
    const li = document.createElement('li');
    const taskLabel = document.createElement('span');
    taskLabel.textContent = taskText;

    const completeBtn = document.createElement('button');
    completeBtn.type = 'button';
    completeBtn.textContent = 'Selesai';

    completeBtn.addEventListener('click', function() {
        li.classList.toggle('completed');
        updateCounts();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Hapus';

    deleteBtn.addEventListener('click', function() {
        li.remove();
        updateCounts();
    });

    li.appendChild(taskLabel);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = todoInput.value.trim();
    if (taskText === '') {
        alert('silahkan masukkan tugas!');
        return;
    }

    createTodoItem(taskText);
    todoInput.value = '';
    todoInput.focus();
    updateCounts();
});

updateCounts();