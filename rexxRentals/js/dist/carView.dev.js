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
    key: "renderCarNav",
    value: function renderCarNav(cars) {
      var num = (0, _util.countNum)(0);
      cars.forEach(function (car) {
        var ul = (0, _util.getElem)("#".concat(car.type));
        ul.innerHTML += "\n            <li class=\"list__items\">\n                <h2>".concat(car.name, "</h2>\n                    <img src=\"./img/").concat(car.imgPath, "/mini/front-left-side.webp\" alt=\"").concat(car.name, "\">\n                <div>\n                    <button data-car=\"").concat(num(), "\">Info</button>\n                    <a href=\"").concat(car.rentLnk, "\" title=\"Rent on Turo\">Rent</a>\n                </div>\n             </li>");
      });
    }
  }, {
    key: "renderTravel",
    value: function renderTravel(ele, carAttr) {
      ele.innerHTML += "\n            <li><em>Cost:</em> ".concat(carAttr.costDay, "/day</li>");
      ele.innerHTML += "<li><em>Trips:</em> ".concat(carAttr.trips, "</li>");

      if (carAttr.longTerm) {
        ele.innerHTML += "<li>Available for Long Term</li>";
      }

      if (carAttr.distance) {
        ele.innerHTML += "\n            <li><em>Distance</em>\n                <ul>\n                    <li>Day: ".concat(carAttr.distance[0], "</li>\n                    <li>Week: ").concat(carAttr.distance[1], "</li>\n                    <li>Month: ").concat(carAttr.distance[2], "</li>\n                </ul>\n            </li>");
      } else {
        ele.innerHTML += "\n            <li><em>Distance Included</em>\n                <ul>\n                    <li>".concat(carAttr.disIncl[0], "</li>\n                    <li>").concat(carAttr.disIncl[1], "</li>\n                </ul>\n            </li>");
      }

      ele.innerHTML += "<li><em>Free Delivery Locations:</em> ";
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = carAttr.freeDropLoc[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var location = _step.value;
          ele.innerHTML += "<li>".concat(location, "</li>");
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

      if (carAttr.paidDropLoc) {
        ele.innerHTML += "<li><em>Paid Delivery Locations:</em> ";
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = carAttr.paidDropLoc[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var loc = _step2.value;
            ele.innerHTML += "<li>".concat(loc, "</li>");
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }

      if (carAttr.req.tunnelWash) {
        ele.innerHTML += "<li>Tunnel Washing is allowed</li>";
      } else {
        ele.innerHTML += "<li><em>No Tunnel Washing, please</em></li>";
      }

      if (carAttr.req.rentAgeReq) {
        ele.innerHTML += "<li>Must be <em>".concat(carAttr.req.rentAgeReq, "</em> to rent.</li>");
      }
    }
  }, {
    key: "renderCarAttr",
    value: function renderCarAttr(ele, attr) {
      ele.innerHTML = attr;
    }
  }, {
    key: "renderCarDetails",
    value: function renderCarDetails(ele, attrList) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = attrList[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var li = _step3.value;
          ele.innerHTML += li;
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
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
      var ul = (0, _util.getElem)(".figcapt__icon-reel");
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
      var ul = (0, _util.getElem)(".car__gallery");
      var mainPic = (0, _util.getElem)("#featPic");
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
}(); //This was so cool, the counting back and forth was entertaining. However, it called the cars out of order which was by design, but ended up causing problems in calling the cars from the designation they had in relation to the factory list. So, it didn't get to stay, but it's simpler now which is better.
// getNavLi(ul, cars, count) {
//     let num = countNum(count);
//     cars.forEach((car) => {
//         //fyi: car.imgPath isn't a full path
//         ul.innerHTML += `
//         <li class="list__items">
//             <h2>${car.name}</h2>
//                 <img src="./img/${car.imgPath}/mini/front-left-side.webp" alt="${car.name}">
//             <div>
//                 <button data-car="${num()}">Info</button>
//                 <a href="${car.rentLnk}" title="Rent on Turo">Rent</a>
//             </div>
//          </li>`;
//     });
//     return `${num()}`;
// }
// renderCarNav(carsByType, typeList) {
//     let count = 0;
//     carsByType.forEach((carType) => {
//         let ul = getElem(`#${carType[0].type}`);
//         count = this.getNavLi(ul, carType, count);
//     });
// }


exports["default"] = CarShow;