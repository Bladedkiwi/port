"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var util = _interopRequireWildcard(require("./util.js"));

var _carController = _interopRequireDefault(require("./carController.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//Font Load
WebFont.load({
  google: {
    families: ["David Libre", "Megrim"]
  }
});
/*NAV*/
//add event listeners to nav buttons

var navBtns = Array.from(document.querySelectorAll(".bot-nav-btns button"));
navBtns.push(document.querySelector("nav a"));
navBtns.forEach(function (element) {
  return element.addEventListener("click", util.activateMenu);
}); //add event listeners to accordian menus

var accordianMenus = document.querySelectorAll(".content__type");
accordianMenus.forEach(function (menu) {
  menu.addEventListener("click", util.toggleShow);
}); //pass in the desired types to the car factory

function findFactory() {
  var foundFactory, carFactory, pageRef, imgRefList;
  return regeneratorRuntime.async(function findFactory$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(util.fetchTheBall('./../rexx-rentalsInfo.json'));

        case 2:
          foundFactory = _context.sent;
          carFactory = new _carController["default"]("sedan", "truck", "sportsCar");
          carFactory.showCarNav(foundFactory.rentals); //

          if (!window.location.href.includes('ourFleet')) {
            _context.next = 12;
            break;
          }

          pageRef = window.location.hash;
          _context.next = 9;
          return regeneratorRuntime.awrap(util.fetchTheBall('./../imgPaths.json'));

        case 9:
          imgRefList = _context.sent;
          carFactory.showCarImg(pageRef, imgRefList, foundFactory.rentals);
          carFactory.showCarPage(pageRef); //console.log(document.querySelector('meta[name="description"]').content);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
}

findFactory();