WebFont.load({
    google: { families: ['David Libre', 'Megrim'] }
});
const nav = document.querySelector('nav');
const navBtns = Array.from(document.querySelectorAll('.bot-nav-btns button'));
navBtns.push(document.querySelector('nav a'));
navBtns.forEach((element) => element.addEventListener('click', slideNav));

function slideNav() {
    //check which btn was clicked and change width
    if (this.className.includes('close')) {
        nav.style.width == "100%" ? nav.style.width = "0%" : nav.style.width = "0%";
    }
    else if (this.id.includes('rent')) {
        window.location = `${this.dataSet.src}`;
    }
    else if (this.id.includes('about')) {
        window.location ="/about.html";
    }
    else {
        nav.style.width = "100%";
    }
}
    