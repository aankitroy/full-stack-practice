const tasksectionRef = document.querySelector('.task-section');
const addActionButtonRef = document.querySelector('.actions .add');
const modalRef = document.querySelector('.add-task-modal');
const newTaskTextAreaRef = document.querySelector('.add-task-modal .left-section textarea');

function createTask(title) {
  const newTaskContent = `
    <div class="task-priority"></div>
    <div class="task-id"></div>
    <div class="task-title"> 
        <span>${title}</span>
        <div class="task-remove">x</div>
    </div> 
  `  
    const newTask = document.createElement('div'); 
    newTask.classList.add('task');
    newTask.innerHTML = newTaskContent; 
    tasksectionRef.appendChild(newTask);  
}   

createTask('Task 1');
createTask('Task 2');
createTask('Task 3');

function toggleModal(ishidden) {
    if(ishidden) {
        modalRef.classList.remove('hide');
    } else {
        modalRef.classList.add('hide');
    }
}

addActionButtonRef.addEventListener('click', (event) => {
    const ishidden = modalRef.classList.contains('hide');
    toggleModal(ishidden);
});

newTaskTextAreaRef.addEventListener('keyup', (event) => {
    if(event.key === "Enter") {
        const title = event.target.value;
        createTask(title);
        toggleModal(false);
    }
});