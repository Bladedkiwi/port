export default class TodoModel {
	constructor() {
		this.text = "Create New Task Below";
		this.dataLabel = ["default", "active", "completed"];
	}
	getDefaultTask(key) {
		//returns base task for basic instructions on using the app
		return `<label class="list__task" data-task="${this.dataLabel[0]}">
        <input class="list__task"
               data-task="${this.dataLabel[0]}" data-key="${key}"
               type="checkbox">${this.text}</label>
        <button type="button" data-task="${this.dataLabel[0]}" class="list__task">&#9587;</button>`;
	}
	getNewTask(key) {
		//grabs text input and returns task string
		this.text = document.querySelector(".todo__create input").value;
		return `<label class="list__task" data-task="${this.dataLabel[1]}">
        <input class="list__task"
               data-task="${this.dataLabel[1]}" data-key="${key}"
               type="checkbox">${this.text}</label>
        <button type="button" data-task="${this.dataLabel[1]}" class="list__task">&#9587;</button>`;
	}
	getCompletedTask(e, key) {
		//sends updated task and updates document
		this.text = e.srcElement.nextSibling.textContent;
		e.srcElement.labels[0].classList.toggle("completed");
		e.srcElement.dataset.task = this.dataLabel[2];
		return `<label class="list__task completed" data-task="${this.dataLabel[2]}">
            <input class="list__task"
                   data-task="${this.dataLabel[2]}" data-key="${key}"
                   type="checkbox">${this.text}</label>
            <button type="button" data-task="${this.dataLabel[2]}" class="list__task">&#9587;</button>`;
	}
	getTaskValue(key, tasks) {
		//returns the matched value to the list
		return tasks.filter((item) => {
			if (item.includes(`data-key="${key}`)) {
				return item;
			}
		});
	}
}
