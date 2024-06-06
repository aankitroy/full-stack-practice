function fetchTodo() {
    fetch('https://dummyjson.com/todos')
        .then(response => response.json())
        .then(data => {
            // Handle the fetched todo data here
            console.log(data);
            renderTodo(data['todos']);
            update(data);
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Error fetching todo:', error);
        });
}


function renderTodo(data) {
    const todoList = document.getElementById('todo-list');
    data.forEach((todo) => {
        const todoItem = document.createElement('li');
        todoItem.innerText = todo.todo;
        todoList.appendChild(todoItem); 
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        todoItem.prepend(checkbox);
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.style.marginLeft = '10px';
        removeButton.style.fontSize = '12px';
        todoItem.appendChild(removeButton);

        if (todo.completed) {
            todoItem.style.textDecoration = 'line-through';
        } else {
            todoItem.style.textDecoration = 'none';
        }
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                todoItem.style.textDecoration = 'line-through';
            } else {
                todoItem.style.textDecoration = 'none';
            }
        });

        removeButton.addEventListener('click', () => {
            todoItem.remove();
        });
    });
  
    
}

fetchTodo();