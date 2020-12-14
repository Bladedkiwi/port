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

      var carImgList = imgRefList.filter(function (img) {
        return img.match("".concat(carDetails.imgPath));
      });
      var carSrcSetList = carImgList.filter(function (img) {
        if (!img.match("/mini/")) {
          return img;
        }
      });
      var carMiniList = carImgList.filter(function (img) {
        return img.match("/mini/");
      });
    }
  }]);

  return CarMaker;
}();

exports["default"] = CarMaker;