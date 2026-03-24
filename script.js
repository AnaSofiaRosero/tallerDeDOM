const inTarea = document.getElementById("task-input");
const btAgregar = document.getElementById("add-task-btn");
const ulListaTareas = document.getElementById("task-list");

function createTaskElement (taskText) {
    // Crear un nuevo elemneto de la lista
  const elemento = document.createElement("li");
  elemento.textContent = taskText;
  elemento.className = "task-item";

  // Insertar en el DOM
  ulListaTareas.appendChild(elemento);

  // Crear un boton de eliminar
  const boton = document.createElement("button");
  boton.textContent = "Eliminar";
  boton.className = "delete-btn";

  // Agregar el boton al elemento de la lista
  elemento.appendChild(boton);

  boton.addEventListener("click", () => { elemento.remove(); } )  
  saveTasks();
}

btAgregar.addEventListener("click", () => {
  if (inTarea.value != "") {
    createTaskElement(inTarea.value);
    inTarea.value = ""; 
  }
  
})

function saveTasks() { //metodo para que podamos guardar las tareas 
    const tasks = [];
    const taskItems = document.querySelectorAll(".task-item");

    taskItems.forEach((item) => {
        tasks.push(item.firstChild.textContent);
    });

    localStorage.setItem("tasks", JSON.stringify(tasks)); //la guarda en el diapositivo
    console.log("Tareas:", tasks);
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || []; //JSON.parse coge la cadena y lo convierte en objeto

  for (const task of tasks) {
    createTaskElement(task);
  } 
}

//aqui cargamos las tareas al iniciar la pagina
loadTasks()
