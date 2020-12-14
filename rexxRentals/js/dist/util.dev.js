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

  if (this.className.includes("close")) {
    nav.style.width == "100%" ? nav.style.width = "0%" : nav.style.width = "0%";
  } else if (this.id.includes("rent")) {
    window.location = "".concat(this.dataset.src);
  } else if (this.id.includes("about")) {
    window.location = "/about.html";
  } else {
    nav.style.width = "100%";
  }
} //toggle's display property of child element


function toggleShow() {
  var item = this.children[1]; //if item hasn't been defined -
  //define it block, or if item is defined as none define it block
  //if item is defined as "block" define it none

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

function setNewCarWindow(event) {
  window.location = "./ourFleet.html#".concat(event.target.dataset.car);
}