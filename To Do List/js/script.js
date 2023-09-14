document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  // Load tasks from local storage
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function renderTasks() {
      taskList.innerHTML = "";
      tasks.forEach((task, index) => {
          const listItem = document.createElement("li");
          listItem.innerHTML = `
              <span>${task}</span>
              <button class="delete-button" data-index="${index}">Delete</button>
          `;
          taskList.appendChild(listItem);
      });
  }

  // Add a new task
  addTaskButton.addEventListener("click", () => {
      const newTask = taskInput.value.trim();
      if (newTask !== "") {
          tasks.push(newTask);
          saveTasks();
          taskInput.value = "";
          renderTasks();
      }
  });

  // Delete a task
  taskList.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-button")) {
          const index = e.target.getAttribute("data-index");
          tasks.splice(index, 1);
          saveTasks();
          renderTasks();
      }
  });

  // Initial rendering
  renderTasks();
});
