"use strict";
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const taskText = input.value.trim();
    if (taskText === '') {
        return;
    }

    addTodoItem(taskText);
    input.value = '';
});

function addTodoItem(text) {
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    const leftSection = document.createElement('div');
    leftSection.className = 'todo-left';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.textContent = text;
    span.className = 'todo-text';

    checkbox.addEventListener('change', function () {
        span.classList.toggle('done');
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = `
  <svg viewBox="0 0 24 24">
    <path d="M9 3V4H4V6H5V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V6H20V4H15V3H9ZM7 6H17V19H7V6Z"/>
  </svg>
`;
    deleteButton.className = 'delete-btn';

    deleteButton.addEventListener('click', function () {
        todoList.removeChild(listItem);
    });

    leftSection.appendChild(checkbox);
    leftSection.appendChild(span);

    listItem.appendChild(leftSection);
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);
}
