"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activateMenu = activateMenu;
exports.toggleShow = toggleShow;
exports.fetchTheBall = fetchTheBall;
exports.setNewCarWindow = setNewCarWindow;
exports.countNum = countNum;
exports.setListeners = setListeners;
exports.getElem = getElem;
exports.getElemAll = getElemAll;
exports.fetchThePaper = fetchThePaper;
exports.openTab = openTab;

function getElem(id) {
  return document.querySelector("".concat(id));
}

function getElemAll(id) {
  return document.querySelectorAll("".concat(id));
}

function countNum(start) {
  var index = start;
  return function () {
    return index++;
  };
}

function setListeners(elem, event, call) {
  elem.addEventListener(event, call);
} //slides nav, or changes window location


function activateMenu() {
  var nav = document.querySelector("nav"); //check which btn was clicked and change width

  var responsive = "";
  screen.width > 500 ? responsive = "25vw" : responsive = "100%";

  if (this.className.includes("close")) {
    nav.style.width == "".concat(responsive) ? nav.style.width = "0%" : nav.style.width = "0%";
  } else if (this.id.includes("rent")) {
    window.location = "".concat(this.dataset.src);
  } else if (this.id.includes("about")) {
    window.location = "./about.html";
  } else {
    nav.style.width = "".concat(responsive);
  }
} //toggle's display property of child element


function toggleShow() {
  var item = this.children[1];
  item.style.display === "" || item.style.display === "none" ? item.style.display = "block" : item.style.display = "none";
}

function fetchTheBall(url) {
  var ball;
  return regeneratorRuntime.async(function fetchTheBall$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(url).then(function (dog) {
            if (!dog.ok) {
              throw Error(dog.statusText);
            } else {
              return dog.json();
            }
          })["catch"](function (error) {
            return console.log("Dog is blind: ".concat(error));
          }));

        case 2:
          ball = _context.sent;
          return _context.abrupt("return", ball);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

function fetchThePaper(url) {
  var ball;
  return regeneratorRuntime.async(function fetchThePaper$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch(url).then(function (dog) {
            if (!dog.ok) {
              throw Error(dog.statusText);
            } else {
              return dog.text();
            }
          })["catch"](function (error) {
            return console.log("Dog is blind: ".concat(error));
          }));

        case 2:
          ball = _context2.sent;
          return _context2.abrupt("return", ball);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function openTab(e) {
  var pages = document.querySelectorAll(".details__content");
  var lowerTarget = e.target.innerHTML.toLowerCase();

  var setPage = function setPage(activePage) {
    activePage.className += " active";
  };

  pages.forEach(function (page) {
    if (page.className.includes("active")) {
      page.classList.remove("active");
    }

    if (page.id.includes(lowerTarget)) {
      setPage(page);
    }
  });
  e.target.classList += " active";
}

function setNewCarWindow(event) {
  window.location.href = "./ourFleet.html#".concat(event.target.dataset.car);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  if (window.location.href.match("ourFleet")) {
    window.location.reload();
  }
}