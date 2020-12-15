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
    key: "getLinkData",
    value: function getLinkData() {
      var num = (0, _util.countNum)(0);
      return function (item) {
        return item = document.querySelector("button[data-car=\"".concat(num(), "\"]"));
      };
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
    key: "getName",
    value: function getName(car) {
      return "".concat(car.year, " ").concat(car.name);
    }
  }, {
    key: "getAbout",
    value: function getAbout(car) {
      return "".concat(car.about.car, " <a id=\"aboutURL\" href=\"").concat(car.about.link, "\" title=\"Read more about the ").concat(car.year, " ").concat(car.name, "\">Read more..</a>");
    }
  }, {
    key: "getAttr",
    value: function getAttr(carAttr) {
      var list = carAttr.map(function (attr) {
        return "<li>".concat(attr, "</li>");
      });
      return list;
    }
  }, {
    key: "getSpecs",
    value: function getSpecs(carAttr) {
      var list = [];
      list.push("<li>Doors:".concat(carAttr.doors, "</li>"));
      list.push("<li>Seats: ".concat(carAttr.seatsHeatCool[0], "</li>"));
      var mech = carAttr.mechanics;
      list.push("<li>".concat(mech.drivetrain, "</li><li>").concat(mech.transmission, "</li>"));

      if (mech.gas) {
        list.push("<li>Gas: ".concat(mech.gas, "</li>"));

        if (mech.mpgHwyCtyAvg) {
          list.push("<li>Miles Per Gallon:</li>");

          if (mech.mpgHwyCtyAvg[0]) {
            list.push("<li>Highway: ".concat(mech.mpgHwyCtyAvg[0], "</li>"));
          }

          if (mech.mpgHwyCtyAvg[1]) {
            list.push("<li>City: ".concat(mech.mpgHwyCtyAvg[1], "</li>"));
          }

          list.push("<li>Average: ".concat(mech.mpgHwyCtyAvg[2], "</li>"));
        }

        if (mech.mpgeHwyCtyAvg) {
          list.push("<li><em>Mile Per Gallon Equivalent:</em></li>");

          if (mech.mpgHwyCtyAvg[0]) {
            list.push("<li>Highway: ".concat(mech.mpgeHwyCtyAvg[0], "</li>"));
          }

          if (mech.mpgHwyCtyAvg[1]) {
            list.push("<li>City: ".concat(mech.mpgeHwyCtyAvg[1], "</li>"));
          }

          list.push("<li>Average: ".concat(mech.mpgeHwyCtyAvg[2], "</li>"));
        }
      }

      if (mech.zeroToSixty) {
        list.push("<li>0-60: ".concat(mech.zeroToSixty, "</li>"));
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = carAttr.features[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          list.push("<li>".concat(item, "</li>"));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (carAttr.seatsHeatCool[1]) {
        list.push("<li>Heated Seats</li>");

        if (carAttr.seatsHeatCool[2]) {
          list.push("<li>A/C Seats</li>");
        }
      }

      if (carAttr.leather) {
        list.push("<li>Leather Interior</li>");
      }

      list.push("</ul>");
      return list;
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

      if (carMech.transmission.includes("Auto")) {
        carIcons.push(["Auto", "".concat(iconsList.transmission), "".concat(carMech.transmission)]);
      } else if (carMech.transmission.includes("Manual")) {
        carIcons.push(["Man", "".concat(iconsList.transmission), "".concat(carMech.transmission)]);
      }

      if (carMech.zeroToSixty) {
        carIcons.push(["".concat(carMech.zeroToSixty), "".concat(iconsList.zeroToSixty), "0-60"]);
      }

      if (carDetails.seatsHeatCool[1]) {
        carIcons.push(["Heat", "".concat(iconsList.heatedSeats), "Heated Seats"]);
      }

      if (carDetails.keyLess) {
        carIcons.push(["", "".concat(iconsList.keyLess), "KeyLess"]);
      }

      if (carMech.gas) {
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