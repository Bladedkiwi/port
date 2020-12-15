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
}); //add event listeners to nav buttons

var navBtns = Array.from(document.querySelectorAll(".bot-nav-btns button"));
navBtns.push(document.querySelector("nav a"));
navBtns.forEach(function (element) {
  if (!element.id.includes("favBtn")) {
    element.addEventListener("click", util.activateMenu);
  } else {
    element.addEventListener("click", util.setNewCarWindow);
  }
}); //add event listeners to accordian menus

var accordianMenus = document.querySelectorAll(".content__type");
accordianMenus.forEach(function (menu) {
  menu.addEventListener("click", util.toggleShow);
}); //pass in the desired types to the car factory

function findFactory() {
  var foundFactory, carFactory, pageRef, carDetails, imgRefList, iconsList, loadConditions, tabs;
  return regeneratorRuntime.async(function findFactory$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(util.fetchTheBall("./rexx-rentalsInfo.json"));

        case 2:
          foundFactory = _context2.sent;
          carFactory = new _carController["default"]("sedan", "truck", "sportsCar");
          carFactory.showCarNav(foundFactory.rentals); //check for href change

          if (!window.location.href.includes("ourFleet")) {
            _context2.next = 23;
            break;
          }

          pageRef = window.location.hash;
          pageRef = parseInt(pageRef.match(/[0-9]/));
          carDetails = foundFactory.rentals[pageRef];
          _context2.next = 11;
          return regeneratorRuntime.awrap(util.fetchTheBall("./imgPaths.json"));

        case 11:
          imgRefList = _context2.sent;
          _context2.next = 14;
          return regeneratorRuntime.awrap(util.fetchTheBall("./icons.json"));

        case 14:
          iconsList = _context2.sent;
          carFactory.showCarImg(carDetails, imgRefList);
          carFactory.showCarIcons(carDetails, iconsList);
          carFactory.showCarPage(carDetails); //async arrow function - super cool

          loadConditions = function loadConditions() {
            return regeneratorRuntime.async(function loadConditions$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return regeneratorRuntime.awrap(util.fetchThePaper("./conditions.txt"));

                  case 2:
                    util.getElem("#conditions").innerHTML = _context.sent;

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            });
          };

          util.getElem("#conditionsBtn").addEventListener("click", loadConditions);
          tabs = document.querySelectorAll(".details__tabs");
          tabs.forEach(function (tab) {
            tab.addEventListener("click", util.openTab);
          });
          carFactory.chkContent(carDetails);

        case 23:
        case "end":
          return _context2.stop();
      }
    }
  });
}

findFactory();