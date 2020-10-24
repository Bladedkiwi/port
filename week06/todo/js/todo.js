//main for todo's index.html
import TodoController from "./todoController.js";

try {
	//create the List
	let taskList = new TodoController("todoList");
	taskList.showCurrentTasks();
	//Add new Tasks when clicked
	document
		.getElementById("task")
		.addEventListener("click", taskList.appendNewTask.bind(taskList));
	//update page
	updateButtons(taskList.removeTask.bind(taskList));
	updateChkbxs(taskList.completeTask.bind(taskList));
	displayTaskList("default");
} catch (err) {
	console.log(err.log + " :" + err.message);
}
/*
Kept as a reminder of how I evolved my bind() functions:
//Add new Tasks when clicked
const newTask = taskList.appendNewTask; //Globally called function that won't get called just yet.
const boundNewTask = taskList.appendNewTask.bind(taskList);
//remove tasks when clicked
const removeTask = taskList.removeTask;
const boundRemoveTask = taskList.removeTask.bind(taskList);
const btns = Array.from(document.querySelectorAll('form button'));
btns.forEach((element) => element.addEventListener("click", boundRemoveTask));
Complete Tasks when clicked
const completeTask = taskList.completeTask;
const boundCompleteTask = taskList.completeTask.bind(taskList);
const chkbxs = Array.from(document.querySelectorAll('form input'));
chkbxs.forEach((element) => element.addEventListener('click', boundCompleteTask));
*/
