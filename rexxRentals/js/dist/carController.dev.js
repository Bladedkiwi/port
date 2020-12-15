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
    this.carShow = new _carView["default"]();
  }

  _createClass(CarFactory, [{
    key: "showCarNav",
    value: function showCarNav(factory) {
      try {
        this.carShow.renderCarNav(factory); //closure start const - sets things up

        var carLot = this.carMaker.getLinkData("data-car");
        factory.forEach(function (car) {
          (0, _util.setListeners)(carLot(car), "click", _util.setNewCarWindow);
        });
      } catch (err) {
        console.log("CarFactory failed to showCarNav: ".concat(err.message));
      }
    }
  }, {
    key: "showCarImg",
    value: function showCarImg(carDetails, imgRefList) {
      var _this = this;

      try {
        var carImgList = imgRefList.filter(function (img) {
          return img.match("".concat(carDetails.imgPath));
        });
        this.carShow.renderCarImgs(this.carMaker.getCarImgLists("/mini/", carImgList), this.carMaker.getCarImgLists("/medium/", carImgList), this.carMaker.getCarImgLists("large", carImgList));
        var gallery = (0, _util.getElemAll)(".car__gallery img");
        gallery.forEach(function (img) {
          img.addEventListener("click", _this.changeImgView.bind(_this));
        });
      } catch (err) {
        console.log("CarFactory failed to showCarImg: ".concat(err.message));
      }
    }
  }, {
    key: "changeImgView",
    value: function changeImgView(event) {
      try {
        var srcSet = event.target.getAttribute("data-srcSet");
        var alt = event.target.alt;
        var imgSrc = srcSet.split(",");
        imgSrc = imgSrc[1].split(" ");
        this.carShow.renderFeatPic((0, _util.getElem)("#featPic img"), srcSet, imgSrc[1], alt);
      } catch (err) {
        console.log("CarFactory failed to changeImgView: ".concat(err.message));
      }
    }
  }, {
    key: "showCarIcons",
    value: function showCarIcons(carDetails, iconsList) {
      try {
        this.carShow.renderCarIcons(this.carMaker.getCarIcons(carDetails.specs, iconsList));
      } catch (err) {
        console.log("CarFactory failed to showCarIcons: ".concat(err.message));
      }
    }
  }, {
    key: "showCarPage",
    value: function showCarPage(carDetails) {
      try {
        //type, name, year, imgPath, rentLnk, about, specs, travel, addons?,pkgIncl?, uniqAttrib?
        this.carShow.renderCarAttr((0, _util.getElem)("#featName"), this.carMaker.getName(carDetails));
        this.carShow.renderCarAttr((0, _util.getElem)("#carName"), this.carMaker.getName(carDetails));
        this.carShow.renderCarAttr((0, _util.getElem)("#about"), this.carMaker.getAbout(carDetails));

        if (carDetails.uniqAttr) {
          this.carShow.renderCarDetails((0, _util.getElem)("#uniqAttr ul"), this.carMaker.getAttr(carDetails.uniqAttr));
        }

        if (carDetails.addOns) {
          this.carShow.renderCarDetails((0, _util.getElem)("#addOns ul"), this.carMaker.getAttr(carDetails.addOns));
        }

        if (carDetails.pkgIncl) {
          this.carShow.renderCarDetails((0, _util.getElem)("#pkgIncl ul"), this.carMaker.getAttr(carDetails.pkgIncl));
        }

        this.carShow.renderCarDetails((0, _util.getElem)("#specs ul"), this.carMaker.getSpecs(carDetails.specs));
        this.carShow.renderTravel((0, _util.getElem)("#travel ul"), carDetails.travel);
      } catch (err) {
        console.log("CarFactory failed to showCarPage: ".concat(err.message));
      }
    }
  }, {
    key: "chkContent",
    value: function chkContent(carDetails) {
      if (!(carDetails.uniqAttr && carDetails.pkgIncl)) {
        (0, _util.getElem)("#enhancements").remove();
        (0, _util.getElem)(".tabs__links:nth-of-type(1)").remove();
        (0, _util.getElem)("#specs").style.display = "grid";
        (0, _util.getElem)("#specsData").classList.add("active");
      }
    }
  }]);

  return CarFactory;
}();

exports["default"] = CarFactory;