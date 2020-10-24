import TodoModel from "./todoModel.js";
import TodoView from "./todoView.js";

export default class TodoController {
	constructor(parentId) {
		//parentId is a form element
		this.parentElement = document.getElementById(parentId);
		this.todoModel = new TodoModel();
		this.todoView = new TodoView(parentId);
		this.allTasks = getFromStorage("allTasks");
		this.dataKeys = getFromStorage("dataKeys");
	}
	showCurrentTasks() {
		//grab localStorage tasks or create default task instead, then display
		try {
			if (this.allTasks == null) {
				//create new default task
				this.allTasks = [];
				if (this.dataKeys == null) {
					this.dataKeys = [];
					this.todoView.renderDefaultTask(
						this.allTasks,
						this.todoModel.getDefaultTask("0"),
						this.parentElement
					);
					this.dataKeys.push("0");
					saveToStorage("dataKeys", this.dataKeys);
				} else {
					//load stored tasks
					let nextKey = this.dataKeys.length;
					this.todoView.renderDefaultTask(
						this.allTasks,
						this.todoModel.getDefaultTask(nextKey),
						this.parentElement
					);
				}
			} else {
				//display localStorage tasks
				this.todoView.renderStoredTasks(this.allTasks, this.parentElement);
			}
		} catch (err) {
			console.log(err.message + "::>todocontroller-showCurrentTasks()");
		}
	}
	appendNewTask() {
		try {
			let nextKey = this.dataKeys.length;
			this.todoView.renderNewTask(
				this.allTasks,
				this.todoModel.getNewTask(nextKey),
				this.parentElement
			);
			this.dataKeys.push(nextKey);
			saveToStorage("dataKeys", this.dataKeys);
			//adding in the event listeners
			updateButtons(this.removeTask.bind(this));
			updateChkbxs(this.completeTask.bind(this));
			displayTaskList("default");
		} catch (err) {
			console.log(err.message + "::>todocontroller-appendNewTask()");
		}
	}
	removeTask(e) {
		try {
			//removes clicked task from arrays, and either saves to localStorage or clears localStorage
			let key =
				e.srcElement.previousElementSibling.firstElementChild.dataset.key;
			let taskKey = this.todoModel.getTaskValue(key, this.allTasks);
			//remove task from both arrays
			removeSpecificItem(this.allTasks, taskKey[0]);
			removeSpecificItem(this.dataKeys, key);
			//save arrays
			saveToStorage("allTasks", this.allTasks);
			saveToStorage("dataKeys", this.dataKeys);
			e.srcElement.previousElementSibling.remove();
			e.currentTarget.remove();
			displayTaskList("default");
			//In the case that all tasks were finished, and both arrays are empty - clear them from storage
			if (!(this.allTasks.length && this.dataKeys.length)) {
				localStorage.clear();
			}
		} catch (err) {
			console.log(err.message + "::todocontroller-removeTask()");
		}
	}
	completeTask(e) {
		try {
			//completes task by updating it in LocalStorage, and updating it on the document
			let key = e.srcElement.dataset.key;
			let taskKey = this.todoModel.getTaskValue(key, this.allTasks);
			let updatedTask = this.todoModel.getCompletedTask(e, key);
			this.allTasks = replaceSpecificItem(
				this.allTasks,
				taskKey[0],
				updatedTask
			);
			saveToStorage("allTasks", this.allTasks);
			updateChkbxs(this.completeTask.bind(this));
			displayTaskList("default");
		} catch (err) {
			console.log(err.message + "::todocontroller-completeTask()");
		}
	}
}
