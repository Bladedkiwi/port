function saveToStorage(name, list) {
    localStorage.setItem(name, JSON.stringify(list));
}
function getFromStorage(name) {
    return JSON.parse(localStorage.getItem(name));
}
function toggleHide(node) {
    node.nodeName === "LI" || node.nodeName == "BUTTON" ? node.classList.toggle('hide') : node.currentTarget.classList.toggle('hide');
}