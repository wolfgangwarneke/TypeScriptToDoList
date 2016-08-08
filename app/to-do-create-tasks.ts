/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />

var people = ToDoList.people;

var tasks = [];
tasks.push(new ToDoList.HomeTask("Do the dishes.", "High"));
tasks.push(new ToDoList.HomeTask("Buy chocolate.", "Low", people.diane));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "High"));
tasks[0].markDone();

tasks.push(new ToDoList.HobbyTask("Practice origami."));
tasks.push(new ToDoList.HobbyTask("Bake a pie."));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new ToDoList.WorkTask(today, "Update blog.", "High", people.diane));
tasks.push(new ToDoList.WorkTask(tomorrow, "Go to meeting.", "Medium", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Save the world.", "High", people.thor));
tasks.push(new ToDoList.WorkTask(tomorrow, "Buy a new shirt.", "Low", people.thor));
tasks.push(new ToDoList.WorkTask(nextDay, "Clean ceiling.", "Low", people.loki));

console.log(tasks);
var thorTasks = ToDoList.describeTasksForPerson(people.thor, tasks);
console.log("Here are Thor's tasks: ");
for(var task of thorTasks){
  console.log(task);
}

function formFunction() {
  var description = document.getElementById("task-name").value;
  var priority = document.getElementById("priority").value;
  var category = document.getElementById("category").value;
  var dueDate = document.getElementById("due-date").value;
  var datetimeDueDate = new Date(dueDate);
  if (category === "work") {
    tasks.push(new ToDoList.WorkTask(datetimeDueDate, description, priority, people.thor));
  } else if (category === "home") {
    tasks.push(new ToDoList.HomeTask(description, priority, people.thor));
  } else {
    tasks.push(new ToDoList.HobbyTask(description));
  }
  console.log("Here are the updated tasks");
  for(var task of tasks){
    console.log("-------");
    console.log("-------");
    console.log(task.description);
    console.log("-------");
    console.log(task);
  }
  var newList = document.createElement("UL");
  newList.setAttribute("id", "tasksListUL");
  document.getElementById("tasksList").appendChild(newList);
  for(var task of tasks){
    var newListItem = document.createElement("LI");
    var textNode = document.createTextNode(task.description);
    newListItem.appendChild(textNode);
    document.getElementById("tasksListUL").appendChild(newListItem);
  }
}



document.getElementById("button").onclick = function() {formFunction()};





// document.getElementById('addTask').addEventListener('onsubmit', function(e) {
//     e.preventDefault();
// });
//
// document.getElementById('button').addEventListener('click', function() {
//   console.log("CLICK");
// });
