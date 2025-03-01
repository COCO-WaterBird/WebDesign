
// const todos = [
//     'get groceries',
//     'go to the bank',
//     'run for president',
//     'do laundry'
// ];

// const todoList = document.getElementById("todos");

// todos.reverse().forEach(todo => {
//     const li = document.createElement("li"); 
//     li.textContent = todo; 
//     todoList.appendChild(li); })



const todos = [
    'get groceries',
    'go to the bank',
    'run for president',
    'do laundry'
];

const todoList = document.getElementById("todos");


for (let i = todos.length - 1; i >= 0; i--) {
    const li = document.createElement("li");
    li.textContent = todos[i];
    todoList.appendChild(li);
}
