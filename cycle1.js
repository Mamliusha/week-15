const form = document.querySelector('#form');
const TaskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList');
const EmptyList = document.querySelector('#emptyList');




form.addEventListener('submit', addTask);

tasksList.addEventListener('click', deleteTask);

function addTask(event){ 
    event.preventDefault();

    const taskText = TaskInput.value;
    

    const taskHTML = `<li class="list-group-item d-flex justify-content-between task-item">
    <span class="task-title">${taskText}</span>
    <div class="task-item__buttons">
        <button type="button" data-action="done" class="btn-action">
            <img src="/cycles/tick.svg" alt="Done" width="18" height="18">
        </button>
        <button type="button" data-action="delete" class="btn-action">
            <img src="/cycles/cross.svg" alt="Done" width="18" height="18">
        </button>
    </div>
</li>`

tasksList.insertAdjacentHTML('beforeend', taskHTML);

TaskInput.value = "";
TaskInput.focus();

if(EmptyList.children.length > 1){
    EmptyList.classList.add('none');
}}

function deleteTask(event){
    console.log(event.target);

    if(event.target.dataset.action === 'delete'){
        console.log('deleted');
        const parentNode = event.target.closest('li')
        parentNode.remove();
    }

    if(tasksList.children.length === 1){
        EmptyList.classList.remove('none');
    }
}

tasksList.addEventListener('click', taskCompleted);

function taskCompleted(event){

    if(event.target.dataset.action === 'done'){
        console.log('done');
        const parentNode = event.target.closest('.list-group-item');
        const taskTitle = parentNode.querySelector('.task-title');
        taskTitle.classList.toggle('task-title--done');
    }
}

function DeleteAll(){
    tasksList.remove();
}
