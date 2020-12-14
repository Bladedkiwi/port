"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _util = require("./util.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CarShow =
/*#__PURE__*/
function () {
  function CarShow() {
    _classCallCheck(this, CarShow);
  } //closure combo function to easy grab/assign desired querySelectors


  _createClass(CarShow, [{
    key: "getLinkData",
    value: function getLinkData() {
      var num = (0, _util.countNum)(1);
      return function (item) {
        return item = document.querySelector("button[data-car=\"".concat(num(), "\"]"));
      };
    }
  }, {
    key: "getElem",
    value: function getElem(id) {
      return document.querySelector("".concat(id));
    }
  }, {
    key: "getElemAll",
    value: function getElemAll(id) {
      return document.querySelectorAll("".concat(id));
    }
  }, {
    key: "getNavLi",
    value: function getNavLi(ul, cars, count) {
      var num = (0, _util.countNum)(count);
      cars.forEach(function (car) {
        //fyi: car.imgPath isn't a full path
        ul.innerHTML += "\n            <li class=\"list__items\">\n                <h2>".concat(car.name, "</h2>\n                    <img src=\"./img/").concat(car.imgPath, "/mini/front-left-side.webp\" alt=\"").concat(car.name, "\">\n                <div>\n                    <button data-car=\"").concat(num(), "\">Info</button>\n                    <a href=\"").concat(car.rentLnk, "\" title=\"Rent on Turo\">Rent</a>\n                </div>\n             </li>");
      });
      return "".concat(num());
    }
  }, {
    key: "renderCarNav",
    value: function renderCarNav(carsByType, typeList) {
      var _this = this;

      var count = 1;
      carsByType.forEach(function (carType) {
        var ul = _this.getElem("#".concat(carType[0].type));

        count = _this.getNavLi(ul, carType, count);
      });
    }
  }, {
    key: "renderCarName",
    value: function renderCarName(ele, car) {
      ele.innerHTML = "".concat(car.year, " ").concat(car.name);
    }
  }, {
    key: "renderCarAttributes",
    value: function renderCarAttributes(ele, car) {
      ele.innerHTML;
    }
  }, {
    key: "renderFeatPic",
    value: function renderFeatPic(img, imgSet, imgSrc, imgAlt) {
      img.srcset = imgSet;
      img.src = imgSrc;
      img.alt = imgAlt;
    }
  }, {
    key: "renderCarIcons",
    value: function renderCarIcons(carIcons) {
      var ul = this.getElem('.figcapt__icon-reel');
      carIcons.forEach(function (icon) {
        ul.innerHTML += "<li><img src=\"".concat(icon[1], "\" alt=\"").concat(icon[2], "\">").concat(icon[0], "</li>");
      });
    }
    /*
       Checks img path, and extracts file portion. 
       Then, sets images respectively.
        */

  }, {
    key: "renderCarImgs",
    value: function renderCarImgs(miniList, medList, largeList) {
      var ul = this.getElem(".car__gallery");
      var mainPic = this.getElem("#featPic");
      ul.innerHTML = ""; //regex grabs words inbetween / and .

      var imgAltRegx = /(?![/])(\w+-\w+)+(?=[.])/;
      var noDashRegx = /(?![/])(\w+\w+)+(?=[.])/;
      var imgAlt = miniList.map(function (img) {
        var imgChk = img.match(imgAltRegx);

        if (imgChk) {
          return imgChk;
        } else {
          return img.match(noDashRegx);
        }
      });
      imgAlt = imgAlt.map(function (img) {
        return img[0];
      });

      for (var i = 0; i < miniList.length; i++) {
        ul.innerHTML += "<img src=\"./img/".concat(miniList[i], "\" alt=\"").concat(imgAlt[i], "\" data-srcSet=\"./img/").concat(medList[i], " 500w, ./img/").concat(largeList[i], " 1000w\">");
      }

      mainPic.innerHTML = "<img srcset=\"./img/".concat(medList[0], " 500w, ./img/").concat(largeList[0], " 1000w\"\n             sizes=\"(max-width: 500px) 500px, 1000px\"\n             src=\"./img/").concat(largeList[0], "\"\n             alt=\"").concat(imgAlt[0], "\">");
    }
  }]);

  return CarShow;
}();

exports["default"] = CarShow;