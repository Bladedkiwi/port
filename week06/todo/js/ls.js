//localStorage Handler
function saveToStorage(name, list) {
	localStorage.setItem(name, JSON.stringify(list));
}
function getFromStorage(name) {
	return JSON.parse(localStorage.getItem(name));
}
