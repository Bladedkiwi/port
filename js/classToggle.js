//Toggles a menu slide
function toggleDrapes() {
	const showElement = document.querySelector('.lining__content');
	updateElement.classList.toggle("slide");
	showElement.classList.remove('show');
}
const updateElement = document.querySelector('.lining__panel');

updateElement.addEventListener('click', toggleDrapes);

