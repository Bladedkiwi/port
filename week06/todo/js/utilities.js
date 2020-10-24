function removeSpecificItem(list, value) {
	//removes data from array index
	let key = list.indexOf(value);
	if (key > -1) {
		list.splice(key, 1);
	}
	return list;
}
function replaceSpecificItem(list, value, newValue) {
	//updates data in array
	let key = list.indexOf(value);
	if (key > -1) {
		list.splice(key, 1, newValue);
	}
	return list;
}
function displayTaskList(type) {
	//grabs desired Task List based on which button has been clicked
	let tally = document.getElementById("total");
	let elementList = Array.from(document.querySelectorAll(".list__task"));
	if (type === "default") {
		elementList.forEach((item) => {
			item.classList.toggle("hide");
			if (item.classList.contains("hide")) {
				item.classList.toggle("hide");
			}
		});
		let tallyList = elementList.filter((item) => {
			if (item.nodeName == "INPUT") {
				if (
					!(
						item.classList.contains("hide") || item.dataset.task === "completed"
					)
				) {
					return item;
				}
			}
		});
		tally.innerHTML = `${tallyList.length} tasks left`;
	} else {
		elementList.forEach((item) => {
			if (!(item.dataset.task === type)) {
				if (!item.classList.contains("hide")) {
					item.classList.toggle("hide");
				}
			} else if (
				item.dataset.task === type &&
				item.classList.contains("hide")
			) {
				item.classList.toggle("hide");
			}
		});
		let tallyList = elementList.filter((item) => {
			if (item.dataset.task === type && item.nodeName == "INPUT") {
				if (!item.classList.contains("hide")) {
					return item;
				}
			}
		});
		type === "completed"
			? (tally.innerHTML = `${tallyList.length} tasks done`)
			: (tally.innerHTML = `${tallyList.length} tasks left`);
	}
}
function updateButtons(boundRemoveTask) {
	const btns = Array.from(document.querySelectorAll("form button"));
	btns.forEach((element) => element.addEventListener("click", boundRemoveTask));
}
function updateChkbxs(boundCompleteTask) {
	const chkbxs = Array.from(document.querySelectorAll("form input"));
	chkbxs.forEach((element) => {
		element.addEventListener("click", boundCompleteTask);
		if (element.dataset.task === "completed") {
			element.checked = true;
		}
	});
}
