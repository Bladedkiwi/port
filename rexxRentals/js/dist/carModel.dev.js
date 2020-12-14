"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _util = require("./util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CarMaker =
/*#__PURE__*/
function () {
  function CarMaker() {
    _classCallCheck(this, CarMaker);
  }

  _createClass(CarMaker, [{
    key: "getNavLinkDataByType",
    value: function getNavLinkDataByType(cars, typeList) {
      var carList = [];
      var type1List = [];
      var type2List = [];
      var type3List = [];
      cars.forEach(function (car) {
        if (car.type === typeList[0]) {
          type1List.push(car);
        } else if (car.type === typeList[1]) {
          type2List.push(car);
        } else if (car.type === typeList[2]) {
          type3List.push(car);
        } else {
          console.log("New Type of Car Detected");
        }
      });
      carList.push(type1List, type2List, type3List);
      return carList;
    }
  }, {
    key: "getCarImgLists",
    value: function getCarImgLists(size, list) {
      if (size === "large") {
        return list.filter(function (img) {
          if (!(img.match("/mini/") || img.match("/medium/"))) {
            return img;
          }
        });
      } else {
        return list.filter(function (img) {
          return img.match(size);
        });
      }
    }
  }, {
    key: "getCarIcons",
    value: function getCarIcons(carDetails, iconsList) {
      //return an array of matching icons and details for the icon - key/value pair
      var carIcons = [];
      var carMech = carDetails.mechanics;
      carIcons.push(["".concat(carDetails.doors), "".concat(iconsList.doors), "Doors"]);
      carIcons.push(["".concat(carDetails.seatsHeatCool[0]), "".concat(iconsList.seats), "Seats"]);
      carIcons.push(["".concat(carMech.drivetrain), "".concat(iconsList.drivetrain), "Drivetrain"]);
      carIcons.push(["".concat(carMech.transmission), "".concat(iconsList.transmission), "Transmission"]);

      if (carMech.zeroToSixty) {
        carIcons.push(["".concat(carMech.zeroToSixty), "".concat(iconsList.zeroToSixty), "0-60"]);
      } else if (carDetails.seatsHeatCool[1]) {
        carIcons.push(["Heat", "".concat(iconsList.heatedSeats), "Heated Seats"]);
      } else if (carDetails.keyLess) {
        carIcons.push(["", "".concat(iconsList.keyLess), "KeyLess"]);
      } else if (carMech.gas) {
        carIcons.push(["".concat(carMech.gas), "".concat(iconsList.gas), "Gas"]);
      } else if (!carMech.gas) {
        carIcons.push(["Electric", "".concat(iconsList.electric), "Electric"]);
      }

      return carIcons;
    }
  }]);

  return CarMaker;
}();

exports["default"] = CarMaker;