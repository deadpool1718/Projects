const todoList = [
  { name: "make dinner", duedate: "20-12-2024" },
  { name: "wash dishes", duedate: "03-12-2024" },
];

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach(function(todoObject,index){
    const name = todoObject.name;
    const duedate = todoObject.duedate;
    const html = `
          <div>${name}</div>
          <div> ${duedate}</div>
          <button class="delete-todo-button js-todo-delete-button">Delete</button> 
      `;
    todoListHTML += html;
  });
  

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
  document.querySelectorAll('.js-todo-delete-button')
    .forEach((deleteButton,index)=>{
        deleteButton.addEventListener('click',()=>{
          todoList.splice(index,1); 
          renderTodoList();
        })
    });
}

document.querySelector('.js-add-todo-button').addEventListener('click',()=>{addTodo();})

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const duedate = dateInputElement.value;

  todoList.push({ name, duedate });

  inputElement.value = "";
  renderTodoList();
}
