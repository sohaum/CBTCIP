const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const pendingList = document.getElementById('pendingList');
const completedList = document.getElementById('completedList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const newTask = document.createElement('li');
        newTask.textContent = taskText;
        
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', () => {
            newTask.classList.add('completed');
            completedList.appendChild(newTask);
            newTask.removeChild(completeBtn);
        });

        newTask.appendChild(completeBtn);
        pendingList.appendChild(newTask);
        
        taskInput.value = '';
    }
});
