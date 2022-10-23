document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const tasks = [];
  document.getElementById("tasks").innerHTML = tasks;

  function addTask(event){
    var x = document.getElementById("new-task-description").value;
    tasks.push(x);

    document.getElementById("tasks").innerHTML = tasks;

    event.preventDefault();
  }
  
  const form = document.getElementById("create-task-form");
  
  form.addEventListener('submit', addTask);
  
});





