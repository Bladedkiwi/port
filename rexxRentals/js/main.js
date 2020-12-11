import * as util from './util.js';
//Font Load
WebFont.load({
    google: { families: ['David Libre', 'Megrim'] }
});
/*NAV*/
//Giving Function to nav buttons
const nav = document.querySelector('nav');
const navBtns = Array.from(document.querySelectorAll('.bot-nav-btns button'));
navBtns.push(document.querySelector('nav a'));
navBtns.forEach((element) => element.addEventListener('click', util.activateMenu));
//giving nav menu buttons the ability to drop down and display their details
const accordianMenus = document.querySelectorAll('.content__type--accordian');
accordianMenus.forEach((menu) => {
    menu.addEventListener('click', util.toggleShow)
});
