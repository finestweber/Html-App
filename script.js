// Array de categorias de tarefas
const categories = [
  /*{
    title: "Personal",
    img: "boy.png",
  },*/
  
];

// Array para armazenar as tarefas
//let tasks = [];

// Função para salvar as tarefas no armazenamento local
const saveLocal = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Função para recuperar as tarefas do armazenamento local
const getLocal = () => {
  const tasksLocal = JSON.parse(localStorage.getItem("tasks"));
  tasks = tasksLocal || [];
};

// Função para alternar entre as telas de categorias
const toggleScreen = () => {
  screenWrapper.classList.toggle("show-category");
};

// Função para atualizar o número total de tarefas
/*const updateTotals = () => {
  const categoryTasks = tasks.filter(
    (task) => task.category.toLowerCase() === selectedCategory.title.toLowerCase()
  );
  numTasks.textContent = `${categoryTasks.length} Tasks`;
  totalTasks.textContent = tasks.length;
};*/

// Função para renderizar as categorias na interface
/*const renderCategories = () => {
  categoriesContainer.innerHTML = "";
  categories.forEach((category) => {
    const categoryTasks = tasks.filter(
      (task) => task.category.toLowerCase() === category.title.toLowerCase()
    );
    const div = createCategoryElement(category, categoryTasks.length);
    div.addEventListener("click", () => {
      toggleScreen();
      selectedCategory = category;
      updateTotals();
      renderTasks();
    });
    categoriesContainer.appendChild(div);
  });
};*/

// Função para renderizar as tarefas na interface
/*const renderTasks = () => {
  tasksContainer.innerHTML = "";
  const categoryTasks = tasks.filter(
    (task) => task.category.toLowerCase() === selectedCategory.title.toLowerCase()
  );
  if (categoryTasks.length === 0) {
    tasksContainer.innerHTML = `<p class="no-tasks">No tasks added for this category</p>`;
  } else {
    categoryTasks.forEach((task) => {
      const div = createTaskElement(task);
      tasksContainer.appendChild(div);
      const deleteBtn = div.querySelector(".delete");
      deleteBtn.addEventListener("click", () => {
        tasks = tasks.filter((t) => t.id !== task.id);
        saveLocal();
        renderTasks();
      });
    });
  }
  updateTotals();
};
*/
// Função para alternar a exibição do formulário de adição de tarefas
const toggleAddTaskForm = () => {
  addTaskWrapper.classList.toggle("active");
  blackBackdrop.classList.toggle("active");
  addTaskBtn.classList.toggle("active");
};

// Função para adicionar uma nova tarefa
const addTask = (e) => {
  e.preventDefault();
  const taskValue = taskInput.value.trim();
  const categoryValue = categorySelect.value.trim();

  if (!taskValue) {
    alert("Please enter a task");
    return;
  }

  const newTask = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    task: taskValue,
    category: categoryValue,
    completed: false,
  };
  tasks.push(newTask);
  saveLocal();
  toggleAddTaskForm();
  renderTasks();
};

// Inicialização de variáveis e elementos do DOM
//let selectedCategory = categories[0];
//const categoriesContainer = document.querySelector(".categories");
//const screenWrapper = document.querySelector(".wrapper");
const menuBtn = document.querySelector(".menu-btn");
const backBtn = document.querySelector(".back-btn");
//const tasksContainer = document.querySelector(".tasks");
//const numTasks = document.getElementById("num-tasks");
const categorySelect = document.getElementById("category-select");
const addTaskWrapper = document.querySelector(".add-task");
const addTaskBtn = document.querySelector(".add-task-btn");
const taskInput = document.getElementById("task-input");
const blackBackdrop = document.querySelector(".black-backdrop");
const addBtn = document.querySelector(".add-btn");
const cancelBtn = document.querySelector(".cancel-btn");
//const totalTasks = document.getElementById("total-tasks");

// Anexa event listeners aos elementos do DOM
//menuBtn.addEventListener("click", toggleScreen);
//backBtn.addEventListener("click", toggleScreen);
addTaskBtn.addEventListener("click", toggleAddTaskForm);
//blackBackdrop.addEventListener("click", toggleAddTaskForm);
addBtn.addEventListener("click", addTask);
cancelBtn.addEventListener("click", toggleAddTaskForm);

// Renderiza o estado inicial da aplicação
getLocal();
renderTasks();
/*categories.forEach((category) => {
  const option = document.createElement("option");
  option.value = category.title.toLowerCase();
  option.textContent = category.title;
  categorySelect.appendChild(option);
});
*/