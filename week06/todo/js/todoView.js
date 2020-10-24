export default class TodoView {
	constuctor() {}
	renderDefaultTask(list, task, parentElement) {
		list.push(task);
		saveToStorage("allTasks", list);
		parentElement.innerHTML = task;
	}
	renderStoredTasks(list, parentElement) {
		for (const task of list) {
			parentElement.innerHTML += task;
		}
	}
	renderNewTask(list, task, parentElement) {
		list.push(task);
		saveToStorage("allTasks", list);
		parentElement.innerHTML += task;
	}
}
