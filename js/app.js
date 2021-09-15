'use strict';

// DOM ELEMENTS
const task_name = document.getElementById('task-name');
const add_task_btn = document.getElementById('add-task');
const task_list = document.getElementById('todo-list');


// DOM EVENTS
add_task_btn.addEventListener('click', function addTask() {
    // If there isn't nothing in the task input
    if (task_name.value == '') {
        alert('Please enter a name to your task');

        task_name.classList.add('required');
    } else {
        task_list.insertAdjacentHTML('afterbegin',
            `<li class="todo-list__item">
                <div class= "todo-list__task" >
                    <h2 class="item__title">${task_name.value}</h2>
                    <div class="icons">
                        <span class="material-icons-outlined task__icon task__icon--bg1">done</span>
                        <span class="material-icons-outlined task__icon task__icon--bg2">delete</span>
                    </div>
                </div >
            </li>`);

        task_name.value = '';
        task_name.classList.remove('required');
    }
});

// For marking a task or removing it 
task_list.addEventListener('click', function(event) {
    // This is for marking a task as done.
    if(event.target.classList.contains('task__icon--bg1')) {
        event.target.parentElement.parentElement.parentElement.classList.toggle('task-done');
    } else if(event.target.classList.contains('task__icon--bg2')) {
        //Removes the task
        event.target.parentElement.parentElement.parentElement.remove();
    }
});
