WebFont.load({
    google: { families: ['David Libre', 'Megrim'] }
});

const navBtns = Array.from(document.querySelectorAll('.menu button'));
navBtns.push(document.getElementById('navBtn'));
navBtns.forEach((element) => element.addEventListener('click', slideNav));

function slideNav(e) {
    const btn = e.currentTarget;
    const nav = document.querySelector('nav');
    console.log(btn);
    //check which btn was clicked
    if (btn.id.includes('left')) {
        nav.style.width = "0%";
        nav.style.width == "0%" ? nav.style.width = "100%" : nav.style.width = "0%";
    }
    else if (btn.id.includes('nav')) {
        nav.style.width == "100%" ? nav.style.width = "0%" : nav.style.width = "0%";
    }
}

function openNav() {
    document.querySelector('nav').style.width = "100%";
}

function closeNav() {
    document.querySelector('nav').style.width = "0%";
}

    