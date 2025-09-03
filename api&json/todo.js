const loadTOdo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((res) => res.json())
    .then((json) => displayTodo(json));
};
// completed: true;
// id: 183;
// title: "omnis nulla eum aliquam distinctio";
// userId: 10;
const displayTodo = (todos) => {
  // 1
  const todoContainer = document.getElementById("todo-container");

  todos.forEach((todo) => {
    //     console.log(todo);
    // 2
    const todoCard = document.createElement("div");
    todoCard.innerHTML = `
    <div class = "todo-card">
    <p>${
      todo.completed == true
        ? `<i class="fa-regular fa-square-check"></i>`
        : `<i class="fa-solid fa-square-check"></i>`
    } </p>
    <h4>${todo.title}</h4>
    </div>
    `;
    //     3
    todoContainer.appendChild(todoCard);
  });
};
loadTOdo();
