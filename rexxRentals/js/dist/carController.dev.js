"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _carModel = _interopRequireDefault(require("./carModel.js"));

var _carView = _interopRequireDefault(require("./carView.js"));

var _util = require("./util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CarFactory =
/*#__PURE__*/
function () {
  function CarFactory(type1, type2, type3) {
    _classCallCheck(this, CarFactory);

    this.carTypeList = [type1, type2, type3];
    this.carMaker = new _carModel["default"]();
    this.carShow = new _carView["default"](); //this.factory = list.rentals;
  }

  _createClass(CarFactory, [{
    key: "showCarNav",
    value: function showCarNav(factory) {
      try {
        this.carShow.renderCarNav(this.carMaker.getNavLinkDataByType(factory, this.carTypeList), this.carTypeList); //closure start const - sets things up

        var carLot = this.carShow.getLinkData("data-car");
        factory.forEach(function (car) {
          (0, _util.setListeners)(carLot(car), "click", _util.setNewCarWindow);
        });
      } catch (err) {
        console.log("CarFactory failed to showCarNav: ".concat(err.message));
      }
    }
  }, {
    key: "showCarImg",
    value: function showCarImg(pageRef, imgRefList, factory) {
      var _this = this;

      pageRef = parseInt(pageRef.match(/[1-9]/));
      var carDetails = factory[pageRef - 1];
      var carImgList = imgRefList.filter(function (img) {
        return img.match("".concat(carDetails.imgPath));
      });
      this.carShow.renderCarImgs(this.carMaker.getCarImgLists("/mini/", carImgList), this.carMaker.getCarImgLists("/medium/", carImgList), this.carMaker.getCarImgLists("large", carImgList));
      var gallery = this.carShow.getElemAll(".car__gallery img");
      gallery.forEach(function (img) {
        img.addEventListener("click", _this.changeImgView.bind(_this));
      });
    }
  }, {
    key: "changeImgView",
    value: function changeImgView(event) {
      var srcSet = event.target.getAttribute("data-srcSet");
      var alt = event.target.alt;
      var imgSrc = srcSet.split(",");
      imgSrc = imgSrc[1].split(" ");
      this.carShow.renderFeatPic(this.carShow.getElem("#featPic img"), srcSet, imgSrc[1], alt); //const featPic = document.querySelector('#featPic');
      //featPic.srcSet = srcSet;
      //featPic.src =
    } // showCarPage(pageRef) {
    //     try {
    //         pageRef = parseInt(pageRef.match(/[1-9]/));
    //         const carDetails = this.factory[(pageRef - 1)];
    //         console.log(carDetails);
    //         //type, name, year, imgPath, rentLnk, about, specs, travel, addons?,pkgIncl?, uniqAttrib?
    //         //show name
    //         this.carShow.renderCarName(this.carMaker.getElementData('name'), carDetails);
    //     }catch (err) {
    // 		console.log(`CarFactory failed to showCarPage: ${err.message}`);
    // 	}
    // }

  }]);

  return CarFactory;
}();

exports["default"] = CarFactory;