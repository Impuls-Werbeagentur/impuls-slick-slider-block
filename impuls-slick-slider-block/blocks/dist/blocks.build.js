/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/src/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/src/blocks.js":
/*!******************************!*\
  !*** ./blocks/src/blocks.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slick_slider_block_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slick-slider-block/block */ "./blocks/src/slick-slider-block/block.js");


/***/ }),

/***/ "./blocks/src/slick-slider-block/block.js":
/*!************************************************!*\
  !*** ./blocks/src/slick-slider-block/block.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/slick-slider-block/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./blocks/src/slick-slider-block/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * External dependencies
 */
var _lodash = lodash,
    filter = _lodash.filter,
    every = _lodash.every,
    map = _lodash.map,
    some = _lodash.some;
var _wp$components = wp.components,
    G = _wp$components.G,
    Path = _wp$components.Path,
    SVG = _wp$components.SVG,
    DropZone = _wp$components.DropZone,
    FormFileUpload = _wp$components.FormFileUpload,
    IconButton = _wp$components.IconButton,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    Toolbar = _wp$components.Toolbar,
    withNotices = _wp$components.withNotices,
    Button = _wp$components.Button;
var withState = wp.compose.withState;


/**
 * WordPress dependencies
 */

var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf;
var _wp$blocks = wp.blocks,
    createBlock = _wp$blocks.createBlock,
    registerBlockType = _wp$blocks.registerBlockType;
var _wp$editor = wp.editor,
    BlockControls = _wp$editor.BlockControls,
    BlockIcon = _wp$editor.BlockIcon,
    MediaPlaceholder = _wp$editor.MediaPlaceholder,
    MediaUpload = _wp$editor.MediaUpload,
    InspectorControls = _wp$editor.InspectorControls,
    mediaUpload = _wp$editor.mediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck;
var createBlobURL = wp.blob.createBlobURL;
var ALLOWED_MEDIA_TYPES = ['image'];

var MyGalleryEdit =
/*#__PURE__*/
function (_Component) {
  _inherits(MyGalleryEdit, _Component);

  function MyGalleryEdit() {
    var _this;

    _classCallCheck(this, MyGalleryEdit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyGalleryEdit).apply(this, arguments));
    _this.onSelectImages = _this.onSelectImages.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleUseBackground = _this.toggleUseBackground.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getUseBackgroundHelp = _this.getUseBackgroundHelp.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleArrows = _this.toggleArrows.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getArrowsHelp = _this.getArrowsHelp.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleAutoplay = _this.toggleAutoplay.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setAutoplaySpeed = _this.setAutoplaySpeed.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleDots = _this.toggleDots.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleAdaptiveHeight = _this.toggleAdaptiveHeight.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleCenterMode = _this.toggleCenterMode.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setCenterPadding = _this.setCenterPadding.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setCssEase = _this.setCssEase.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleDraggable = _this.toggleDraggable.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleFade = _this.toggleFade.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleFocusOnSelect = _this.toggleFocusOnSelect.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setEasing = _this.setEasing.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setEdgeFriction = _this.setEdgeFriction.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleInfinite = _this.toggleInfinite.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setInitialSlide = _this.setInitialSlide.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.togglePauseOnFocus = _this.togglePauseOnFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.togglePauseOnHover = _this.togglePauseOnHover.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.togglePauseOnDotsHover = _this.togglePauseOnDotsHover.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setSlidesToShow = _this.setSlidesToShow.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setSlidesToScroll = _this.setSlidesToScroll.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setSpeed = _this.setSpeed.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleSwipe = _this.toggleSwipe.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleSwipeToSlide = _this.toggleSwipeToSlide.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleTouchMove = _this.toggleTouchMove.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setTouchThreshold = _this.setTouchThreshold.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleUseCSS = _this.toggleUseCSS.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleUseTransform = _this.toggleUseTransform.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleVariableWidth = _this.toggleVariableWidth.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleVertical = _this.toggleVertical.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleVerticalSwiping = _this.toggleVerticalSwiping.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getAdaptiveHeightHelp = _this.getAdaptiveHeightHelp.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getDotsHelp = _this.getDotsHelp.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setSliderHeight = _this.setSliderHeight.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setAttributes = _this.setAttributes.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getInfiniteHelp = _this.getInfiniteHelp.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(MyGalleryEdit, [{
    key: "setSliderHeight",
    value: function setSliderHeight(height) {
      this.setAttributes({
        sliderHeight: height
      });
    }
  }, {
    key: "setAttributes",
    value: function setAttributes(attributes) {
      jQuery('div[data-block="' + this.props.clientId + '"] .slick-slider-block-slider.slick-initialized').slick('unslick');
      this.props.setAttributes(attributes);
    }
  }, {
    key: "pickRelevantMediaFiles",
    value: function pickRelevantMediaFiles(image) {
      var imageProps = {
        url: image.url,
        alt: image.alt,
        caption: image.caption,
        id: image.id
      };
      return imageProps;
    }
  }, {
    key: "pickRelevantIDs",
    value: function pickRelevantIDs(image) {
      return image.id;
    }
  }, {
    key: "onSelectImages",
    value: function onSelectImages(images) {
      var _this2 = this;

      this.setAttributes({
        images: images.map(function (image) {
          return _this2.pickRelevantMediaFiles(image);
        }),
        ids: images.map(function (image) {
          return _this2.pickRelevantIDs(image);
        })
      });
    }
  }, {
    key: "toggleUseBackground",
    value: function toggleUseBackground() {
      this.setAttributes({
        useBackground: !this.props.attributes.useBackground
      });
    }
  }, {
    key: "getUseBackgroundHelp",
    value: function getUseBackgroundHelp(checked) {
      return checked ? __('Die Bilder werden als Hintergrundbilder angezeigt und füllen die Slides aus') : __('Der Slider passt sich an die Bilder an');
    }
  }, {
    key: "toggleArrows",
    value: function toggleArrows() {
      this.setAttributes({
        arrows: !this.props.attributes.arrows
      });
    }
  }, {
    key: "getArrowsHelp",
    value: function getArrowsHelp(checked) {
      return checked ? __('Es werden Vor- und Zurück-Schaltflächen angezeigt') : __('Es werden keine Vor- und Zurück-Schaltflächen angezeigt');
    }
  }, {
    key: "toggleDots",
    value: function toggleDots() {
      this.setAttributes({
        dots: !this.props.attributes.dots
      });
    }
  }, {
    key: "getDotsHelp",
    value: function getDotsHelp(checked) {
      return checked ? __('Es wird eine Slidernavigation unter dem Slider angezeigt.') : __('Es wird keine Slidernavigation unter dem Slider angezeigt.');
    }
  }, {
    key: "toggleAdaptiveHeight",
    value: function toggleAdaptiveHeight() {
      this.setAttributes({
        adaptiveHeight: !this.props.attributes.adaptiveHeight
      });
    }
  }, {
    key: "getAdaptiveHeightHelp",
    value: function getAdaptiveHeightHelp(checked) {
      return checked ? __('Der Slider passt seine Höhe je nach Bildhöhe an.') : __('Der Slider ist so hoch wie das höchste Bild');
    }
  }, {
    key: "getInfiniteHelp",
    value: function getInfiniteHelp(checked) {
      return checked ? __('Nach dem letzten Slide wird wieder der erste Slide angezeigt') : __('Der Slider endet mit dem letzten Slide');
    }
  }, {
    key: "toggleAutoplay",
    value: function toggleAutoplay() {
      this.setAttributes({
        autoplay: !this.props.attributes.autoplay
      });
    }
  }, {
    key: "setAutoplaySpeed",
    value: function setAutoplaySpeed(value) {
      this.setAttributes({
        autoplaySpeed: value
      });
    }
  }, {
    key: "toggleCenterMode",
    value: function toggleCenterMode() {
      this.setAttributes({
        centerMode: !this.props.attributes.centerMode
      });
    }
  }, {
    key: "setCenterPadding",
    value: function setCenterPadding(value) {
      this.setAttributes({
        centerPadding: value
      });
    }
  }, {
    key: "setCssEase",
    value: function setCssEase(value) {
      this.setAttributes({
        cssEase: value
      });
    }
  }, {
    key: "toggleDraggable",
    value: function toggleDraggable() {
      this.setAttributes({
        draggable: !this.props.attributes.draggable
      });
    }
  }, {
    key: "toggleFade",
    value: function toggleFade() {
      this.setAttributes({
        fade: !this.props.attributes.fade
      });
    }
  }, {
    key: "toggleFocusOnSelect",
    value: function toggleFocusOnSelect() {
      this.setAttributes({
        focusOnSelect: !this.props.attributes.focusOnSelect
      });
    }
  }, {
    key: "setEasing",
    value: function setEasing(value) {
      this.setAttributes({
        easing: value
      });
    }
  }, {
    key: "setEdgeFriction",
    value: function setEdgeFriction(value) {
      this.setAttributes({
        edgeFriction: value
      });
    }
  }, {
    key: "toggleInfinite",
    value: function toggleInfinite() {
      this.setAttributes({
        infinite: !this.props.attributes.infinite
      });
    }
  }, {
    key: "setInitialSlide",
    value: function setInitialSlide(value) {
      this.setAttributes({
        initialSlide: value
      });
    }
  }, {
    key: "togglePauseOnFocus",
    value: function togglePauseOnFocus() {
      this.setAttributes({
        pauseOnFocus: !this.props.attributes.pauseOnFocus
      });
    }
  }, {
    key: "togglePauseOnHover",
    value: function togglePauseOnHover() {
      this.setAttributes({
        pauseOnHover: !this.props.attributes.pauseOnHover
      });
    }
  }, {
    key: "togglePauseOnDotsHover",
    value: function togglePauseOnDotsHover() {
      this.setAttributes({
        pauseOnDotsHover: !this.props.attributes.pauseOnDotsHover
      });
    }
  }, {
    key: "setSlidesToShow",
    value: function setSlidesToShow(value) {
      this.setAttributes({
        slidesToShow: value
      });
    }
  }, {
    key: "setSlidesToScroll",
    value: function setSlidesToScroll(value) {
      this.setAttributes({
        slidesToScroll: value
      });
    }
  }, {
    key: "setSpeed",
    value: function setSpeed(value) {
      this.setAttributes({
        speed: value
      });
    }
  }, {
    key: "toggleSwipe",
    value: function toggleSwipe() {
      this.setAttributes({
        swipe: !this.props.attributes.swipe
      });
    }
  }, {
    key: "toggleSwipeToSlide",
    value: function toggleSwipeToSlide() {
      this.setAttributes({
        swipeToSlide: !this.props.attributes.swipeToSlide
      });
    }
  }, {
    key: "toggleTouchMove",
    value: function toggleTouchMove() {
      this.setAttributes({
        touchMove: !this.props.attributes.touchMove
      });
    }
  }, {
    key: "setTouchThreshold",
    value: function setTouchThreshold(value) {
      this.setAttributes({
        touchThreshold: value
      });
    }
  }, {
    key: "toggleUseCSS",
    value: function toggleUseCSS() {
      this.setAttributes({
        useCSS: !this.props.attributes.useCSS
      });
    }
  }, {
    key: "toggleUseTransform",
    value: function toggleUseTransform() {
      this.setAttributes({
        useTransform: !this.props.attributes.useTransform
      });
    }
  }, {
    key: "toggleVariableWidth",
    value: function toggleVariableWidth() {
      this.setAttributes({
        variableWidth: !this.props.attributes.variableWidth
      });
    }
  }, {
    key: "toggleVertical",
    value: function toggleVertical() {
      this.setAttributes({
        vertical: !this.props.attributes.vertical
      });
    }
  }, {
    key: "toggleVerticalSwiping",
    value: function toggleVerticalSwiping() {
      this.setAttributes({
        verticalSwiping: !this.props.attributes.verticalSwiping
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevAtts = prevProps.attributes;
      var clientId = this.props.clientId;

      if (prevAtts == this.props.attributes) {} else {
        if (this.props.attributes.images.length && jQuery('div[data-block="' + clientId + '"] .slick-slider-block-slider .slick-slider-block-slide').length) {
          jQuery('div[data-block="' + this.props.clientId + '"] .slick-slider-block-slider.slick-initialized').slick('unslick');
          jQuery('div[data-block="' + clientId + '"] .slick-slider-block-slider').slick({
            arrows: this.props.attributes.arrows,
            dots: this.props.attributes.dots,
            nextArrow: '<a class="slick-slider-block-next-arrow" href="#"></a>',
            prevArrow: '<a class="slick-slider-block-prev-arrow" href="#"></a>',
            customPaging: function customPaging(slider, i) {
              return jQuery('<a class="slider-dot" />').text(i + 1);
            },
            rows: 0,
            adaptiveHeight: this.props.attributes.useBackground ? false : this.props.attributes.adaptiveHeight,
            autoplay: this.props.attributes.autoplay,
            autoplaySpeed: this.props.attributes.autoplaySpeed,
            centerMode: this.props.attributes.centerMode,
            centerPadding: this.props.attributes.centerPadding,
            cssEase: this.props.attributes.cssEase,
            draggable: this.props.attributes.draggable,
            fade: this.props.attributes.fade,
            focusOnSelect: this.props.attributes.focusOnSelect,
            easing: this.props.attributes.easing,
            edgeFriction: this.props.attributes.edgeFriction,
            infinite: this.props.attributes.infinite,
            initialSlide: this.props.attributes.initialSlide,
            pauseOnFocus: this.props.attributes.pauseOnFocus,
            pauseOnHover: this.props.attributes.pauseOnHover,
            pauseOnDotsHover: this.props.attributes.pauseOnDotsHover,
            slidesToShow: this.props.attributes.slidesToShow,
            slidesToScroll: this.props.attributes.slidesToScroll,
            speed: this.props.attributes.speed,
            swipe: this.props.attributes.swipe,
            swipeToSlide: this.props.attributes.swipeToSlide,
            touchMove: this.props.attributes.touchMove,
            touchThreshold: this.props.attributes.touchThreshold,
            useCSS: this.props.attributes.useCSS,
            useTransform: this.props.attributes.useTransform,
            variableWidth: this.props.attributes.useBackground ? false : this.props.attributes.variableWidth,
            vertical: this.props.attributes.vertical,
            verticalSwiping: this.props.attributes.verticalSwiping
          });
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var clientId = this.props.clientId;

      if (this.props.attributes.ids.length) {
        jQuery('div[data-block="' + clientId + '"] .slick-slider-block-slider').slick({
          arrows: this.props.attributes.arrows,
          dots: this.props.attributes.dots,
          nextArrow: '<a class="slick-slider-block-next-arrow" href="#"></a>',
          prevArrow: '<a class="slick-slider-block-prev-arrow" href="#"></a>',
          customPaging: function customPaging(slider, i) {
            return jQuery('<a class="slider-dot" />').text(i + 1);
          },
          adaptiveHeight: this.props.attributes.useBackground ? false : this.props.attributes.adaptiveHeight,
          rows: 0,
          autoplay: this.props.attributes.autoplay,
          autoplaySpeed: this.props.attributes.autoplaySpeed,
          centerMode: this.props.attributes.centerMode,
          centerPadding: this.props.attributes.centerPadding,
          cssEase: this.props.attributes.cssEase,
          draggable: this.props.attributes.draggable,
          fade: this.props.attributes.fade,
          focusOnSelect: this.props.attributes.focusOnSelect,
          easing: this.props.attributes.easing,
          edgeFriction: this.props.attributes.edgeFriction,
          infinite: this.props.attributes.infinite,
          initialSlide: this.props.attributes.initialSlide,
          pauseOnFocus: this.props.attributes.pauseOnFocus,
          pauseOnHover: this.props.attributes.pauseOnHover,
          pauseOnDotsHover: this.props.attributes.pauseOnDotsHover,
          slidesToShow: this.props.attributes.slidesToShow,
          slidesToScroll: this.props.attributes.slidesToScroll,
          speed: this.props.attributes.speed,
          swipe: this.props.attributes.swipe,
          swipeToSlide: this.props.attributes.swipeToSlide,
          touchMove: this.props.attributes.touchMove,
          touchThreshold: this.props.attributes.touchThreshold,
          useCSS: this.props.attributes.useCSS,
          useTransform: this.props.attributes.useTransform,
          variableWidth: this.props.attributes.useBackground ? false : this.props.attributes.variableWidth,
          vertical: this.props.attributes.vertical,
          verticalSwiping: this.props.attributes.verticalSwiping
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          className = _this$props.className,
          noticeOperations = _this$props.noticeOperations,
          noticeUI = _this$props.noticeUI,
          clientId = _this$props.clientId;
      var images = attributes.images,
          ids = attributes.ids,
          useBackground = attributes.useBackground,
          arrows = attributes.arrows,
          dots = attributes.dots,
          sliderHeight = attributes.sliderHeight,
          adaptiveHeight = attributes.adaptiveHeight,
          autoplay = attributes.autoplay,
          autoplaySpeed = attributes.autoplaySpeed,
          centerMode = attributes.centerMode,
          centerPadding = attributes.centerPadding,
          cssEase = attributes.cssEase,
          draggable = attributes.draggable,
          fade = attributes.fade,
          focusOnSelect = attributes.focusOnSelect,
          easing = attributes.easing,
          edgeFriction = attributes.edgeFriction,
          infinite = attributes.infinite,
          initialSlide = attributes.initialSlide,
          pauseOnFocus = attributes.pauseOnFocus,
          pauseOnHover = attributes.pauseOnHover,
          pauseOnDotsHover = attributes.pauseOnDotsHover,
          slidesToShow = attributes.slidesToShow,
          slidesToScroll = attributes.slidesToScroll,
          speed = attributes.speed,
          swipe = attributes.swipe,
          swipeToSlide = attributes.swipeToSlide,
          touchMove = attributes.touchMove,
          touchThreshold = attributes.touchThreshold,
          useCSS = attributes.useCSS,
          useTransform = attributes.useTransform,
          variableWidth = attributes.variableWidth,
          vertical = attributes.vertical,
          verticalSwiping = attributes.verticalSwiping;
      var myClassName = 'slick-slider-block-slider' + (this.props.attributes.useBackground ? ' use-background-image' : '');

      if (ids.length) {
        return wp.element.createElement(Fragment, null, wp.element.createElement(BlockControls, null, !!images.length && wp.element.createElement(Toolbar, null, wp.element.createElement(MediaUpload, {
          onSelect: this.onSelectImages,
          allowedTypes: ALLOWED_MEDIA_TYPES,
          value: ids,
          multiple: true,
          gallery: true,
          render: function render(_ref) {
            var open = _ref.open;
            return wp.element.createElement(IconButton, {
              className: "components-toolbar__control",
              label: __('Edit gallery'),
              icon: "edit",
              onClick: open
            });
          }
        }))), wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
          title: __('Allgemeine Einstellungen')
        }, wp.element.createElement(ToggleControl, {
          label: __('Vor-/Zurück-Schaltflächen anzeigen'),
          checked: !!arrows,
          onChange: this.toggleArrows,
          help: this.getArrowsHelp
        }), wp.element.createElement(ToggleControl, {
          label: __('Slidernavigation anzeigen'),
          checked: !!dots,
          onChange: this.toggleDots,
          help: this.getDotsHelp
        }), wp.element.createElement(ToggleControl, {
          label: __('Slider Autoplay'),
          checked: !!autoplay,
          onChange: this.toggleAutoplay
          /*help={ this.getAutoplayHelp }*/

        }), !!autoplay && wp.element.createElement(RangeControl, {
          label: "Anzeigedauer der einzelnen Slides",
          value: autoplaySpeed,
          onChange: this.setAutoplaySpeed,
          min: 100,
          max: 15000,
          step: 50
        }), wp.element.createElement(ToggleControl, {
          label: __('Slides überblenden'),
          checked: !!fade,
          onChange: this.toggleFade
          /*help={ this.getAutoplayHelp }*/

        }), wp.element.createElement(ToggleControl, {
          label: __('„Unendlicher“ Slider'),
          checked: !!infinite,
          onChange: this.toggleInfinite,
          help: this.getInfiniteHelp
        })), wp.element.createElement(PanelBody, {
          title: __('Anzeige-Einstellungen'),
          initialOpen: false
        }, wp.element.createElement(RangeControl, {
          label: "Anzahl von Bildern pro Slide",
          value: slidesToShow,
          onChange: this.setSlidesToShow,
          min: 1,
          max: ids.length
        }), wp.element.createElement(RangeControl, {
          label: "Anzahl von Slides beim Scrollvorgang",
          value: slidesToScroll,
          onChange: this.setSlidesToScroll,
          min: 1,
          max: ids.length
        }), wp.element.createElement(RangeControl, {
          label: "Dauer des Slide-Wechsels",
          value: speed,
          onChange: this.setSpeed,
          min: 100,
          max: 5000,
          step: 50
        })), wp.element.createElement(PanelBody, {
          title: __('Erweiterte Einstellungen'),
          initialOpen: false
        }, wp.element.createElement(ToggleControl, {
          label: __('Bilder als Hintergrundbild verwenden'),
          checked: !!useBackground,
          onChange: this.toggleUseBackground,
          help: this.getUseBackgroundHelp
        }), !!useBackground && wp.element.createElement(RangeControl, {
          label: "Höhe des Sliders",
          value: sliderHeight,
          onChange: this.setSliderHeight,
          min: 1,
          max: 1000
        }), !useBackground && wp.element.createElement(ToggleControl, {
          label: __('Höhenanpassung'),
          checked: !!adaptiveHeight,
          onChange: this.toggleAdaptiveHeight,
          help: this.getAdaptiveHeightHelp
        }), !useBackground && wp.element.createElement(ToggleControl, {
          label: __('Variable Breite verwenden'),
          checked: !!variableWidth,
          onChange: this.toggleVariableWidth
          /*help={ this.getPauseOnFocusHelp }*/

        }), wp.element.createElement(RangeControl, {
          label: "Erster anzuzeigender Slide",
          value: initialSlide,
          onChange: this.setInitialSlide,
          min: 0,
          max: images.length
        }), wp.element.createElement(ToggleControl, {
          label: __('Zentrierter Modus'),
          checked: !!centerMode,
          onChange: this.toggleCenterMode
          /*help={ this.getPauseOnFocusHelp }*/

        }), !!centerMode && wp.element.createElement(RangeControl, {
          label: "Innerer Abstand für Zentrierten Modus",
          value: centerPadding,
          onChange: this.setCenterPadding,
          min: 0,
          max: 200
        }), !!autoplay && wp.element.createElement(ToggleControl, {
          label: __('Pausieren bei Focus'),
          checked: !!pauseOnFocus,
          onChange: this.togglePauseOnFocus
          /*help={ this.getPauseOnFocusHelp }*/

        }), !!autoplay && wp.element.createElement(ToggleControl, {
          label: __('Pausieren bei Hover'),
          checked: !!pauseOnHover,
          onChange: this.togglePauseOnHover
          /*help={ this.getPauseOnHoverHelp }*/

        }), !!autoplay && wp.element.createElement(ToggleControl, {
          label: __('Pausieren bei Hover über Navigation'),
          checked: !!pauseOnDotsHover,
          onChange: this.togglePauseOnDotsHover
          /*help={ this.getPauseOnDotsHoverHelp }*/

        }), wp.element.createElement(ToggleControl, {
          label: __('Swipe aktivieren'),
          checked: !!swipe,
          onChange: this.toggleSwipe
          /*help={ this.getSwipeHelp }*/

        }), !!swipe && wp.element.createElement(ToggleControl, {
          label: __('Swipe ignoriert slidesToScroll'),
          checked: !!swipeToSlide,
          onChange: this.toggleSwipeToSlide
          /*help={ this.getSwipeToSlideHelp }*/

        }), wp.element.createElement(ToggleControl, {
          label: __('Drag & Drop mit Maus aktivieren'),
          checked: !!draggable,
          onChange: this.toggleDraggable
          /*help={ this.getPauseOnFocusHelp }*/

        }), wp.element.createElement(ToggleControl, {
          label: __('Wischen mit Touchscreen aktivieren'),
          checked: !!touchMove,
          onChange: this.toggleTouchMove
          /*help={ this.getTouchMoveHelp }*/

        }), !!touchMove && wp.element.createElement(RangeControl, {
          label: "Widerstand beim Touch-Wischen",
          value: touchThreshold,
          onChange: this.setTouchThreshold,
          min: 1,
          max: 20
        }), !infinite && wp.element.createElement(RangeControl, {
          label: "Widerstand beim Erreichen der Ecken",
          value: edgeFriction,
          onChange: this.setEdgeFriction,
          min: 0,
          max: 1,
          step: 0.01
        }), wp.element.createElement(ToggleControl, {
          label: __('Slider beim Markieren in den Fokus nehmen'),
          checked: !!focusOnSelect,
          onChange: this.toggleFocusOnSelect
          /*help={ this.getPauseOnFocusHelp }*/

        }), wp.element.createElement(ToggleControl, {
          label: __('CSS-Transitionen verwenden'),
          checked: !!useCSS,
          onChange: this.toggleUseCSS
          /*help={ this.getPauseOnFocusHelp }*/

        }), wp.element.createElement(ToggleControl, {
          label: __('CSS-Transforms verwenden'),
          checked: !!useTransform,
          onChange: this.toggleUseTransform
          /*help={ this.getPauseOnFocusHelp }*/

        }), !!useCSS && wp.element.createElement(SelectControl, {
          label: "CSS-Easing",
          value: cssEase,
          options: [{
            label: 'Linear',
            value: 'linear'
          }, {
            label: 'Ease',
            value: 'ease'
          }, {
            label: 'Ease-In',
            value: 'ease-in'
          }, {
            label: 'Ease-Out',
            value: 'ease-out'
          }, {
            label: 'Ease-In-Out',
            value: 'ease-in-out'
          }],
          onChange: this.setCssEase
        }), !useCSS && wp.element.createElement(SelectControl, {
          label: "jQuery-Easing",
          value: easing,
          options: [{
            label: 'Linear',
            value: 'linear'
          }, {
            label: 'Swing',
            value: 'swing'
          }],
          onChange: this.setEasing
        }))), wp.element.createElement("div", {
          "class": myClassName,
          style: {
            height: !!useBackground ? sliderHeight : 'auto'
          }
        }, images.map(function (img, index) {
          var mycaption = img.caption ? wp.element.createElement("div", {
            className: 'slick-slider-block-caption'
          }, img.caption) : '';
          var ariaLabel = sprintf(__('image %1$d of %2$d in gallery'), index + 1, images.length);

          if (!!useBackground) {
            return wp.element.createElement("div", {
              className: "slick-slider-block-slide",
              style: {
                backgroundImage: 'url(' + img.url + ')'
              },
              ariaLabel: ariaLabel,
              "data-id": img.id
            }, mycaption);
          }

          return wp.element.createElement("div", {
            className: "slick-slider-block-slide"
          }, wp.element.createElement("img", {
            className: "slick-slider-image",
            alt: img.alt,
            "data-id": img.id,
            src: img.url,
            ariaLabel: ariaLabel
          }), mycaption);
        })));
      }

      return wp.element.createElement(Fragment, null, wp.element.createElement(MediaPlaceholder, {
        accept: "image/*",
        allowedTypes: ALLOWED_MEDIA_TYPES,
        onSelect: this.onSelectImages,
        multiple: true,
        labels: {
          title: 'Sliderbilder',
          instructions: 'Ziehen Sie Bilder hierher, laden Sie neue hoch oder wählen Bilder aus der Mediathek aus, die im Slider angezeigt werden sollen.'
        }
      }));
    }
  }]);

  return MyGalleryEdit;
}(Component);

registerBlockType('impuls-additional-blocks/slick-slider', {
  title: __('Slick-Slider'),
  description: __('Ein einfacher Bilderslider mit Slick'),
  icon: wp.element.createElement(SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, wp.element.createElement(Path, {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), wp.element.createElement(G, null, wp.element.createElement(Path, {
    d: "M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67l1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"
  }))),
  category: 'common',
  keywords: [__('Slick'), __('Slider')],
  attributes: {
    images: {
      type: 'array',
      default: []
    },
    ids: {
      type: 'array',
      default: []
    },
    useBackground: {
      type: 'boolean',
      default: false
    },
    arrows: {
      type: 'boolean',
      default: true
    },
    dots: {
      type: 'boolean',
      default: true
    },
    sliderHeight: {
      type: 'integer',
      default: 250
    },
    adaptiveHeight: {
      type: 'boolean',
      default: true
    },
    autoplay: {
      type: 'boolean',
      default: false
    },
    autoplaySpeed: {
      type: 'integer',
      default: 4000
    },
    centerMode: {
      type: 'boolean',
      default: false
    },
    centerPadding: {
      type: 'integer',
      default: 0
    },
    cssEase: {
      type: 'string',
      default: 'ease'
    },
    draggable: {
      type: 'boolean',
      default: true
    },
    fade: {
      type: 'boolean',
      default: false
    },
    focusOnSelect: {
      type: 'boolean',
      default: false
    },
    easing: {
      type: 'string',
      default: 'linear'
    },
    edgeFriction: {
      type: 'number',
      default: 0.15
    },
    infinite: {
      type: 'boolean',
      default: true
    },
    initialSlide: {
      type: 'integer',
      default: 0
    },
    pauseOnFocus: {
      type: 'boolean',
      default: true
    },
    pauseOnHover: {
      type: 'boolean',
      default: true
    },
    pauseOnDotsHover: {
      type: 'boolean',
      default: true
    },
    slidesToShow: {
      type: 'integer',
      default: 1
    },
    slidesToScroll: {
      type: 'integer',
      default: 1
    },
    speed: {
      type: 'integer',
      default: 800
    },
    swipe: {
      type: 'boolean',
      default: true
    },
    swipeToSlide: {
      type: 'boolean',
      default: false
    },
    touchMove: {
      type: 'boolean',
      default: true
    },
    touchThreshold: {
      type: 'integer',
      default: 5
    },
    useCSS: {
      type: 'boolean',
      default: true
    },
    useTransform: {
      type: 'boolean',
      default: true
    },
    variableWidth: {
      type: 'boolean',
      default: false
    },
    vertical: {
      type: 'boolean',
      default: false
    },
    verticalSwiping: {
      type: 'boolean',
      default: false
    },
    alignment: {
      type: 'string'
    }
  },
  supports: {
    align: ['full']
  },
  edit: MyGalleryEdit,
  save: function save(props) {
    return null;
  }
});

/***/ }),

/***/ "./blocks/src/slick-slider-block/editor.scss":
/*!***************************************************!*\
  !*** ./blocks/src/slick-slider-block/editor.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/slick-slider-block/style.scss":
/*!**************************************************!*\
  !*** ./blocks/src/slick-slider-block/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9zbGljay1zbGlkZXItYmxvY2svYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9zbGljay1zbGlkZXItYmxvY2svZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9zbGljay1zbGlkZXItYmxvY2svc3R5bGUuc2NzcyJdLCJuYW1lcyI6WyJsb2Rhc2giLCJmaWx0ZXIiLCJldmVyeSIsIm1hcCIsInNvbWUiLCJ3cCIsImNvbXBvbmVudHMiLCJHIiwiUGF0aCIsIlNWRyIsIkRyb3Bab25lIiwiRm9ybUZpbGVVcGxvYWQiLCJJY29uQnV0dG9uIiwiUGFuZWxCb2R5IiwiUmFuZ2VDb250cm9sIiwiU2VsZWN0Q29udHJvbCIsIlRvZ2dsZUNvbnRyb2wiLCJUb29sYmFyIiwid2l0aE5vdGljZXMiLCJCdXR0b24iLCJ3aXRoU3RhdGUiLCJjb21wb3NlIiwiZWxlbWVudCIsIkNvbXBvbmVudCIsIkZyYWdtZW50IiwiaTE4biIsIl9fIiwic3ByaW50ZiIsImJsb2NrcyIsImNyZWF0ZUJsb2NrIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJlZGl0b3IiLCJCbG9ja0NvbnRyb2xzIiwiQmxvY2tJY29uIiwiTWVkaWFQbGFjZWhvbGRlciIsIk1lZGlhVXBsb2FkIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJtZWRpYVVwbG9hZCIsIk1lZGlhVXBsb2FkQ2hlY2siLCJjcmVhdGVCbG9iVVJMIiwiYmxvYiIsIkFMTE9XRURfTUVESUFfVFlQRVMiLCJNeUdhbGxlcnlFZGl0IiwiYXJndW1lbnRzIiwib25TZWxlY3RJbWFnZXMiLCJiaW5kIiwidG9nZ2xlVXNlQmFja2dyb3VuZCIsImdldFVzZUJhY2tncm91bmRIZWxwIiwidG9nZ2xlQXJyb3dzIiwiZ2V0QXJyb3dzSGVscCIsInRvZ2dsZUF1dG9wbGF5Iiwic2V0QXV0b3BsYXlTcGVlZCIsInRvZ2dsZURvdHMiLCJ0b2dnbGVBZGFwdGl2ZUhlaWdodCIsInRvZ2dsZUNlbnRlck1vZGUiLCJzZXRDZW50ZXJQYWRkaW5nIiwic2V0Q3NzRWFzZSIsInRvZ2dsZURyYWdnYWJsZSIsInRvZ2dsZUZhZGUiLCJ0b2dnbGVGb2N1c09uU2VsZWN0Iiwic2V0RWFzaW5nIiwic2V0RWRnZUZyaWN0aW9uIiwidG9nZ2xlSW5maW5pdGUiLCJzZXRJbml0aWFsU2xpZGUiLCJ0b2dnbGVQYXVzZU9uRm9jdXMiLCJ0b2dnbGVQYXVzZU9uSG92ZXIiLCJ0b2dnbGVQYXVzZU9uRG90c0hvdmVyIiwic2V0U2xpZGVzVG9TaG93Iiwic2V0U2xpZGVzVG9TY3JvbGwiLCJzZXRTcGVlZCIsInRvZ2dsZVN3aXBlIiwidG9nZ2xlU3dpcGVUb1NsaWRlIiwidG9nZ2xlVG91Y2hNb3ZlIiwic2V0VG91Y2hUaHJlc2hvbGQiLCJ0b2dnbGVVc2VDU1MiLCJ0b2dnbGVVc2VUcmFuc2Zvcm0iLCJ0b2dnbGVWYXJpYWJsZVdpZHRoIiwidG9nZ2xlVmVydGljYWwiLCJ0b2dnbGVWZXJ0aWNhbFN3aXBpbmciLCJnZXRBZGFwdGl2ZUhlaWdodEhlbHAiLCJnZXREb3RzSGVscCIsInNldFNsaWRlckhlaWdodCIsInNldEF0dHJpYnV0ZXMiLCJnZXRJbmZpbml0ZUhlbHAiLCJoZWlnaHQiLCJzbGlkZXJIZWlnaHQiLCJhdHRyaWJ1dGVzIiwialF1ZXJ5IiwicHJvcHMiLCJjbGllbnRJZCIsInNsaWNrIiwiaW1hZ2UiLCJpbWFnZVByb3BzIiwidXJsIiwiYWx0IiwiY2FwdGlvbiIsImlkIiwiaW1hZ2VzIiwicGlja1JlbGV2YW50TWVkaWFGaWxlcyIsImlkcyIsInBpY2tSZWxldmFudElEcyIsInVzZUJhY2tncm91bmQiLCJjaGVja2VkIiwiYXJyb3dzIiwiZG90cyIsImFkYXB0aXZlSGVpZ2h0IiwiYXV0b3BsYXkiLCJ2YWx1ZSIsImF1dG9wbGF5U3BlZWQiLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsImNzc0Vhc2UiLCJkcmFnZ2FibGUiLCJmYWRlIiwiZm9jdXNPblNlbGVjdCIsImVhc2luZyIsImVkZ2VGcmljdGlvbiIsImluZmluaXRlIiwiaW5pdGlhbFNsaWRlIiwicGF1c2VPbkZvY3VzIiwicGF1c2VPbkhvdmVyIiwicGF1c2VPbkRvdHNIb3ZlciIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwic3BlZWQiLCJzd2lwZSIsInN3aXBlVG9TbGlkZSIsInRvdWNoTW92ZSIsInRvdWNoVGhyZXNob2xkIiwidXNlQ1NTIiwidXNlVHJhbnNmb3JtIiwidmFyaWFibGVXaWR0aCIsInZlcnRpY2FsIiwidmVydGljYWxTd2lwaW5nIiwicHJldlByb3BzIiwicHJldkF0dHMiLCJsZW5ndGgiLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJjdXN0b21QYWdpbmciLCJzbGlkZXIiLCJpIiwidGV4dCIsInJvd3MiLCJjbGFzc05hbWUiLCJub3RpY2VPcGVyYXRpb25zIiwibm90aWNlVUkiLCJteUNsYXNzTmFtZSIsIm9wZW4iLCJsYWJlbCIsImltZyIsImluZGV4IiwibXljYXB0aW9uIiwiYXJpYUxhYmVsIiwiYmFja2dyb3VuZEltYWdlIiwidGl0bGUiLCJpbnN0cnVjdGlvbnMiLCJkZXNjcmlwdGlvbiIsImljb24iLCJjYXRlZ29yeSIsImtleXdvcmRzIiwidHlwZSIsImRlZmF1bHQiLCJhbGlnbm1lbnQiLCJzdXBwb3J0cyIsImFsaWduIiwiZWRpdCIsInNhdmUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FB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Q0E7QUEzSndELENBQXpDLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDNW5CQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiaW1wb3J0ICcuL3NsaWNrLXNsaWRlci1ibG9jay9ibG9jayc7IiwiLyoqXG4gKiBFeHRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3QgeyBmaWx0ZXIsIGV2ZXJ5LCBtYXAsIHNvbWUgfSA9IGxvZGFzaDtcbmNvbnN0IHsgXG5cdEcsIFxuXHRQYXRoLCBcblx0U1ZHLFxuXHREcm9wWm9uZSxcblx0Rm9ybUZpbGVVcGxvYWQsXG5cdEljb25CdXR0b24sXG5cdFBhbmVsQm9keSxcblx0UmFuZ2VDb250cm9sLFxuXHRTZWxlY3RDb250cm9sLFxuXHRUb2dnbGVDb250cm9sLFxuXHRUb29sYmFyLFxuXHR3aXRoTm90aWNlcyxcblx0QnV0dG9uXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgeyB3aXRoU3RhdGUgfSA9IHdwLmNvbXBvc2U7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuLyoqXG4gKiBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzXG4gKi9cbmNvbnN0IHsgQ29tcG9uZW50LCBGcmFnbWVudCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgX18sIHNwcmludGYgfSA9IHdwLmkxOG47XG5jb25zdCB7IGNyZWF0ZUJsb2NrLHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7XG5cdEJsb2NrQ29udHJvbHMsXG5cdEJsb2NrSWNvbixcblx0TWVkaWFQbGFjZWhvbGRlcixcblx0TWVkaWFVcGxvYWQsXG5cdEluc3BlY3RvckNvbnRyb2xzLFxuXHRtZWRpYVVwbG9hZCxcblx0TWVkaWFVcGxvYWRDaGVjayxcbn0gPSB3cC5lZGl0b3I7XG5jb25zdCB7IGNyZWF0ZUJsb2JVUkwgfSA9ICB3cC5ibG9iO1xuXG5cbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScgXTtcblxuY2xhc3MgTXlHYWxsZXJ5RWRpdCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCAuLi5hcmd1bWVudHMgKTtcblx0XHR0aGlzLm9uU2VsZWN0SW1hZ2VzID0gdGhpcy5vblNlbGVjdEltYWdlcy5iaW5kKCB0aGlzICk7XG5cdFx0dGhpcy50b2dnbGVVc2VCYWNrZ3JvdW5kID0gdGhpcy50b2dnbGVVc2VCYWNrZ3JvdW5kLmJpbmQoIHRoaXMgKTtcblx0XHR0aGlzLmdldFVzZUJhY2tncm91bmRIZWxwID0gdGhpcy5nZXRVc2VCYWNrZ3JvdW5kSGVscC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudG9nZ2xlQXJyb3dzID0gdGhpcy50b2dnbGVBcnJvd3MuYmluZCggdGhpcyApO1xuXHRcdHRoaXMuZ2V0QXJyb3dzSGVscCA9IHRoaXMuZ2V0QXJyb3dzSGVscC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudG9nZ2xlQXV0b3BsYXkgPSB0aGlzLnRvZ2dsZUF1dG9wbGF5LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zZXRBdXRvcGxheVNwZWVkID0gdGhpcy5zZXRBdXRvcGxheVNwZWVkLmJpbmQodGhpcyk7XG5cdFx0dGhpcy50b2dnbGVEb3RzID0gdGhpcy50b2dnbGVEb3RzLmJpbmQoIHRoaXMgKTtcblx0XHR0aGlzLnRvZ2dsZUFkYXB0aXZlSGVpZ2h0ID0gdGhpcy50b2dnbGVBZGFwdGl2ZUhlaWdodC5iaW5kKCB0aGlzICk7XG5cdFx0dGhpcy50b2dnbGVDZW50ZXJNb2RlID0gdGhpcy50b2dnbGVDZW50ZXJNb2RlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zZXRDZW50ZXJQYWRkaW5nID0gdGhpcy5zZXRDZW50ZXJQYWRkaW5nLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zZXRDc3NFYXNlID0gdGhpcy5zZXRDc3NFYXNlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy50b2dnbGVEcmFnZ2FibGUgPSB0aGlzLnRvZ2dsZURyYWdnYWJsZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudG9nZ2xlRmFkZSA9IHRoaXMudG9nZ2xlRmFkZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudG9nZ2xlRm9jdXNPblNlbGVjdCA9IHRoaXMudG9nZ2xlRm9jdXNPblNlbGVjdC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2V0RWFzaW5nID0gdGhpcy5zZXRFYXNpbmcuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNldEVkZ2VGcmljdGlvbiA9IHRoaXMuc2V0RWRnZUZyaWN0aW9uLmJpbmQodGhpcyk7XG5cdFx0dGhpcy50b2dnbGVJbmZpbml0ZSA9IHRoaXMudG9nZ2xlSW5maW5pdGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNldEluaXRpYWxTbGlkZSA9IHRoaXMuc2V0SW5pdGlhbFNsaWRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy50b2dnbGVQYXVzZU9uRm9jdXMgPSB0aGlzLnRvZ2dsZVBhdXNlT25Gb2N1cy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudG9nZ2xlUGF1c2VPbkhvdmVyID0gdGhpcy50b2dnbGVQYXVzZU9uSG92ZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLnRvZ2dsZVBhdXNlT25Eb3RzSG92ZXIgPSB0aGlzLnRvZ2dsZVBhdXNlT25Eb3RzSG92ZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNldFNsaWRlc1RvU2hvdyA9IHRoaXMuc2V0U2xpZGVzVG9TaG93LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zZXRTbGlkZXNUb1Njcm9sbCA9IHRoaXMuc2V0U2xpZGVzVG9TY3JvbGwuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNldFNwZWVkID0gdGhpcy5zZXRTcGVlZC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudG9nZ2xlU3dpcGUgPSB0aGlzLnRvZ2dsZVN3aXBlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy50b2dnbGVTd2lwZVRvU2xpZGUgPSB0aGlzLnRvZ2dsZVN3aXBlVG9TbGlkZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudG9nZ2xlVG91Y2hNb3ZlID0gdGhpcy50b2dnbGVUb3VjaE1vdmUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNldFRvdWNoVGhyZXNob2xkID0gdGhpcy5zZXRUb3VjaFRocmVzaG9sZC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudG9nZ2xlVXNlQ1NTID0gdGhpcy50b2dnbGVVc2VDU1MuYmluZCh0aGlzKTtcblx0XHR0aGlzLnRvZ2dsZVVzZVRyYW5zZm9ybSA9IHRoaXMudG9nZ2xlVXNlVHJhbnNmb3JtLmJpbmQodGhpcyk7XG5cdFx0dGhpcy50b2dnbGVWYXJpYWJsZVdpZHRoID0gdGhpcy50b2dnbGVWYXJpYWJsZVdpZHRoLmJpbmQodGhpcyk7XG5cdFx0dGhpcy50b2dnbGVWZXJ0aWNhbCA9IHRoaXMudG9nZ2xlVmVydGljYWwuYmluZCh0aGlzKTtcblx0XHR0aGlzLnRvZ2dsZVZlcnRpY2FsU3dpcGluZyA9IHRoaXMudG9nZ2xlVmVydGljYWxTd2lwaW5nLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5nZXRBZGFwdGl2ZUhlaWdodEhlbHAgPSB0aGlzLmdldEFkYXB0aXZlSGVpZ2h0SGVscC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZ2V0RG90c0hlbHAgPSB0aGlzLmdldERvdHNIZWxwLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zZXRTbGlkZXJIZWlnaHQgPSB0aGlzLnNldFNsaWRlckhlaWdodC5iaW5kKCB0aGlzICk7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGVzID0gdGhpcy5zZXRBdHRyaWJ1dGVzLmJpbmQoIHRoaXMgKTtcblx0XHR0aGlzLmdldEluZmluaXRlSGVscCA9IHRoaXMuZ2V0SW5maW5pdGVIZWxwLmJpbmQodGhpcyk7XG5cdH1cblx0c2V0U2xpZGVySGVpZ2h0KGhlaWdodCkge1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlcyh7c2xpZGVySGVpZ2h0OmhlaWdodH0pO1xuXHR9XG5cdHNldEF0dHJpYnV0ZXMoIGF0dHJpYnV0ZXMgKSB7XG5cdFx0alF1ZXJ5KCdkaXZbZGF0YS1ibG9jaz1cIicrdGhpcy5wcm9wcy5jbGllbnRJZCsnXCJdIC5zbGljay1zbGlkZXItYmxvY2stc2xpZGVyLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soJ3Vuc2xpY2snKTtcblx0XHR0aGlzLnByb3BzLnNldEF0dHJpYnV0ZXMoIGF0dHJpYnV0ZXMgKTtcblx0fVxuXHRwaWNrUmVsZXZhbnRNZWRpYUZpbGVzKCBpbWFnZSApe1xuXHRcdGNvbnN0IGltYWdlUHJvcHMgPSB7XG5cdFx0XHR1cmw6IGltYWdlLnVybCxcblx0XHRcdGFsdDogaW1hZ2UuYWx0LFxuXHRcdFx0Y2FwdGlvbjogaW1hZ2UuY2FwdGlvbixcblx0XHRcdGlkOiBpbWFnZS5pZFxuXHRcdH07XG5cdFx0cmV0dXJuIGltYWdlUHJvcHM7XG5cdH1cblx0cGlja1JlbGV2YW50SURzKGltYWdlKXtcblx0XHRyZXR1cm4gaW1hZ2UuaWQ7XG5cdH1cblx0b25TZWxlY3RJbWFnZXMoIGltYWdlcyApIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdGltYWdlczogaW1hZ2VzLm1hcCggKCBpbWFnZSApID0+IHRoaXMucGlja1JlbGV2YW50TWVkaWFGaWxlcyggaW1hZ2UgKSApLFxuXHRcdFx0aWRzIDogaW1hZ2VzLm1hcCgoaW1hZ2UpID0+IHRoaXMucGlja1JlbGV2YW50SURzKGltYWdlKSlcblx0XHR9ICk7XG5cdH1cblx0dG9nZ2xlVXNlQmFja2dyb3VuZCgpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZXMoIHsgdXNlQmFja2dyb3VuZDogISB0aGlzLnByb3BzLmF0dHJpYnV0ZXMudXNlQmFja2dyb3VuZCB9ICk7XG5cdH1cblx0Z2V0VXNlQmFja2dyb3VuZEhlbHAoIGNoZWNrZWQgKSB7XG5cdFx0cmV0dXJuIGNoZWNrZWQgPyBfXyggJ0RpZSBCaWxkZXIgd2VyZGVuIGFscyBIaW50ZXJncnVuZGJpbGRlciBhbmdlemVpZ3QgdW5kIGbDvGxsZW4gZGllIFNsaWRlcyBhdXMnICkgOiBfXyggJ0RlciBTbGlkZXIgcGFzc3Qgc2ljaCBhbiBkaWUgQmlsZGVyIGFuJyApO1xuXHR9XG5cdHRvZ2dsZUFycm93cygpIHtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZXMoIHsgYXJyb3dzOiAhIHRoaXMucHJvcHMuYXR0cmlidXRlcy5hcnJvd3MgfSApO1xuXHR9XG5cdGdldEFycm93c0hlbHAoIGNoZWNrZWQgKSB7XG5cdFx0cmV0dXJuIGNoZWNrZWQgPyBfXyggJ0VzIHdlcmRlbiBWb3ItIHVuZCBadXLDvGNrLVNjaGFsdGZsw6RjaGVuIGFuZ2V6ZWlndCcgKSA6IF9fKCAnRXMgd2VyZGVuIGtlaW5lIFZvci0gdW5kIFp1csO8Y2stU2NoYWx0ZmzDpGNoZW4gYW5nZXplaWd0JyApO1xuXHR9XG5cdHRvZ2dsZURvdHMoKSB7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGVzKCB7IGRvdHM6ICEgdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLmRvdHMgfSApO1xuXHR9XG5cdGdldERvdHNIZWxwKCBjaGVja2VkICkge1xuXHRcdHJldHVybiBjaGVja2VkID8gX18oICdFcyB3aXJkIGVpbmUgU2xpZGVybmF2aWdhdGlvbiB1bnRlciBkZW0gU2xpZGVyIGFuZ2V6ZWlndC4nICkgOiBfXyggJ0VzIHdpcmQga2VpbmUgU2xpZGVybmF2aWdhdGlvbiB1bnRlciBkZW0gU2xpZGVyIGFuZ2V6ZWlndC4nICk7XG5cdH1cblx0dG9nZ2xlQWRhcHRpdmVIZWlnaHQoKXtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZXMoIHsgYWRhcHRpdmVIZWlnaHQ6ICEgdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLmFkYXB0aXZlSGVpZ2h0IH0gKTtcblx0fVxuXHRnZXRBZGFwdGl2ZUhlaWdodEhlbHAoIGNoZWNrZWQgKSB7XG5cdFx0cmV0dXJuIGNoZWNrZWQgPyBfXyggJ0RlciBTbGlkZXIgcGFzc3Qgc2VpbmUgSMO2aGUgamUgbmFjaCBCaWxkaMO2aGUgYW4uJyApIDogX18oICdEZXIgU2xpZGVyIGlzdCBzbyBob2NoIHdpZSBkYXMgaMO2Y2hzdGUgQmlsZCcgKTtcblx0fVxuXHRnZXRJbmZpbml0ZUhlbHAoIGNoZWNrZWQgKSB7XG5cdFx0cmV0dXJuIGNoZWNrZWQgPyBfXyggJ05hY2ggZGVtIGxldHp0ZW4gU2xpZGUgd2lyZCB3aWVkZXIgZGVyIGVyc3RlIFNsaWRlIGFuZ2V6ZWlndCcgKSA6IF9fKCAnRGVyIFNsaWRlciBlbmRldCBtaXQgZGVtIGxldHp0ZW4gU2xpZGUnICk7XG5cdH1cblx0dG9nZ2xlQXV0b3BsYXkoKXtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZXMoeyBhdXRvcGxheSA6ICEgdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLmF1dG9wbGF5IH0pO1xuXHR9XG5cdHNldEF1dG9wbGF5U3BlZWQodmFsdWUpe1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlcyh7IGF1dG9wbGF5U3BlZWQgOiB2YWx1ZSB9KTtcblx0fVxuXHR0b2dnbGVDZW50ZXJNb2RlKCl7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGVzKHsgY2VudGVyTW9kZSA6ICEgdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLmNlbnRlck1vZGUgfSk7XG5cdH1cblx0c2V0Q2VudGVyUGFkZGluZyh2YWx1ZSl7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGVzKHsgY2VudGVyUGFkZGluZyA6IHZhbHVlIH0pO1xuXHR9XG5cdHNldENzc0Vhc2UodmFsdWUpe1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlcyh7IGNzc0Vhc2UgOiB2YWx1ZSB9KTtcblx0fVxuXHR0b2dnbGVEcmFnZ2FibGUoKXtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZXMoeyBkcmFnZ2FibGUgOiAhIHRoaXMucHJvcHMuYXR0cmlidXRlcy5kcmFnZ2FibGUgfSk7XG5cdH1cblx0dG9nZ2xlRmFkZSgpe1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlcyh7IGZhZGUgOiAhIHRoaXMucHJvcHMuYXR0cmlidXRlcy5mYWRlIH0pO1xuXHR9XG5cdHRvZ2dsZUZvY3VzT25TZWxlY3QoKXtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZXMoeyBmb2N1c09uU2VsZWN0IDogISB0aGlzLnByb3BzLmF0dHJpYnV0ZXMuZm9jdXNPblNlbGVjdCB9KTtcblx0fVxuXHRzZXRFYXNpbmcodmFsdWUpe1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlcyh7IGVhc2luZyA6IHZhbHVlIH0pO1xuXHR9XG5cdHNldEVkZ2VGcmljdGlvbih2YWx1ZSl7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGVzKHsgZWRnZUZyaWN0aW9uIDogdmFsdWUgfSk7XG5cdH1cblx0dG9nZ2xlSW5maW5pdGUoKXtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZXMoeyBpbmZpbml0ZSA6ICEgdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLmluZmluaXRlIH0pO1xuXHR9XG5cdHNldEluaXRpYWxTbGlkZSh2YWx1ZSl7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGVzKHsgaW5pdGlhbFNsaWRlIDogdmFsdWUgfSk7XG5cdH1cblx0dG9nZ2xlUGF1c2VPbkZvY3VzKCl7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGVzKHsgcGF1c2VPbkZvY3VzIDogISB0aGlzLnByb3BzLmF0dHJpYnV0ZXMucGF1c2VPbkZvY3VzIH0pO1xuXHR9XG5cdHRvZ2dsZVBhdXNlT25Ib3Zlcigpe1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlcyh7IHBhdXNlT25Ib3ZlciA6ICEgdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLnBhdXNlT25Ib3ZlciB9KTtcblx0fVxuXHR0b2dnbGVQYXVzZU9uRG90c0hvdmVyKCl7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGVzKHsgcGF1c2VPbkRvdHNIb3ZlciA6ICEgdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLnBhdXNlT25Eb3RzSG92ZXIgfSk7XG5cdH1cblx0c2V0U2xpZGVzVG9TaG93KHZhbHVlKXtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZXMoeyBzbGlkZXNUb1Nob3cgOiB2YWx1ZSB9KTtcblx0fVxuXHRzZXRTbGlkZXNUb1Njcm9sbCh2YWx1ZSl7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGVzKHsgc2xpZGVzVG9TY3JvbGwgOiB2YWx1ZSB9KTtcblx0fVxuXHRzZXRTcGVlZCh2YWx1ZSl7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGVzKHsgc3BlZWQgOiB2YWx1ZSB9KTtcblx0fVxuXHR0b2dnbGVTd2lwZSgpe1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlcyh7IHN3aXBlIDogISB0aGlzLnByb3BzLmF0dHJpYnV0ZXMuc3dpcGUgfSk7XG5cdH1cblx0dG9nZ2xlU3dpcGVUb1NsaWRlKCl7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGVzKHsgc3dpcGVUb1NsaWRlIDogISB0aGlzLnByb3BzLmF0dHJpYnV0ZXMuc3dpcGVUb1NsaWRlIH0pO1xuXHR9XG5cdHRvZ2dsZVRvdWNoTW92ZSgpe1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlcyh7IHRvdWNoTW92ZSA6ICEgdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLnRvdWNoTW92ZSB9KTtcblx0fVxuXHRzZXRUb3VjaFRocmVzaG9sZCh2YWx1ZSl7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGVzKHsgdG91Y2hUaHJlc2hvbGQgOiB2YWx1ZSB9KTtcblx0fVxuXHR0b2dnbGVVc2VDU1MoKXtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZXMoeyB1c2VDU1MgOiAhIHRoaXMucHJvcHMuYXR0cmlidXRlcy51c2VDU1MgfSk7XG5cdH1cblx0dG9nZ2xlVXNlVHJhbnNmb3JtKCl7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGVzKHsgdXNlVHJhbnNmb3JtIDogISB0aGlzLnByb3BzLmF0dHJpYnV0ZXMudXNlVHJhbnNmb3JtIH0pO1xuXHR9XG5cdHRvZ2dsZVZhcmlhYmxlV2lkdGgoKXtcblx0XHR0aGlzLnNldEF0dHJpYnV0ZXMoeyB2YXJpYWJsZVdpZHRoIDogISB0aGlzLnByb3BzLmF0dHJpYnV0ZXMudmFyaWFibGVXaWR0aCB9KTtcblx0fVxuXHR0b2dnbGVWZXJ0aWNhbCgpe1xuXHRcdHRoaXMuc2V0QXR0cmlidXRlcyh7IHZlcnRpY2FsIDogISB0aGlzLnByb3BzLmF0dHJpYnV0ZXMudmVydGljYWwgfSk7XG5cdH1cblx0dG9nZ2xlVmVydGljYWxTd2lwaW5nKCl7XG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGVzKHsgdmVydGljYWxTd2lwaW5nIDogISB0aGlzLnByb3BzLmF0dHJpYnV0ZXMudmVydGljYWxTd2lwaW5nIH0pO1xuXHR9XG5cdGNvbXBvbmVudERpZFVwZGF0ZSggcHJldlByb3BzICkge1xuXHRcdGNvbnN0IHByZXZBdHRzID0gcHJldlByb3BzLmF0dHJpYnV0ZXM7XG5cdFx0Y29uc3QgY2xpZW50SWQgPSB0aGlzLnByb3BzLmNsaWVudElkO1xuXHRcdGlmKHByZXZBdHRzID09IHRoaXMucHJvcHMuYXR0cmlidXRlcyl7XG5cdFx0XHRcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYodGhpcy5wcm9wcy5hdHRyaWJ1dGVzLmltYWdlcy5sZW5ndGggJiYgalF1ZXJ5KCdkaXZbZGF0YS1ibG9jaz1cIicrY2xpZW50SWQrJ1wiXSAuc2xpY2stc2xpZGVyLWJsb2NrLXNsaWRlciAuc2xpY2stc2xpZGVyLWJsb2NrLXNsaWRlJykubGVuZ3RoKXtcblx0XHRcdFx0alF1ZXJ5KCdkaXZbZGF0YS1ibG9jaz1cIicrdGhpcy5wcm9wcy5jbGllbnRJZCsnXCJdIC5zbGljay1zbGlkZXItYmxvY2stc2xpZGVyLnNsaWNrLWluaXRpYWxpemVkJykuc2xpY2soJ3Vuc2xpY2snKTtcblx0XHRcdFx0alF1ZXJ5KCdkaXZbZGF0YS1ibG9jaz1cIicrY2xpZW50SWQrJ1wiXSAuc2xpY2stc2xpZGVyLWJsb2NrLXNsaWRlcicpLnNsaWNrKHtcblx0XHRcdFx0XHRhcnJvd3M6dGhpcy5wcm9wcy5hdHRyaWJ1dGVzLmFycm93cyxcblx0XHRcdFx0XHRkb3RzOnRoaXMucHJvcHMuYXR0cmlidXRlcy5kb3RzLFxuXHRcdFx0XHRcdG5leHRBcnJvdzogJzxhIGNsYXNzPVwic2xpY2stc2xpZGVyLWJsb2NrLW5leHQtYXJyb3dcIiBocmVmPVwiI1wiPjwvYT4nLFxuXHRcdFx0XHRcdHByZXZBcnJvdzogJzxhIGNsYXNzPVwic2xpY2stc2xpZGVyLWJsb2NrLXByZXYtYXJyb3dcIiBocmVmPVwiI1wiPjwvYT4nLFxuXHRcdFx0XHRcdGN1c3RvbVBhZ2luZzogZnVuY3Rpb24oc2xpZGVyLCBpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4galF1ZXJ5KCc8YSBjbGFzcz1cInNsaWRlci1kb3RcIiAvPicpLnRleHQoaSArIDEpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cm93czogMCxcblx0XHRcdFx0XHRhZGFwdGl2ZUhlaWdodDogdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLnVzZUJhY2tncm91bmQgPyBmYWxzZSA6IHRoaXMucHJvcHMuYXR0cmlidXRlcy5hZGFwdGl2ZUhlaWdodCxcblx0XHRcdFx0XHRhdXRvcGxheTogdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLmF1dG9wbGF5LFxuXHRcdFx0XHRcdGF1dG9wbGF5U3BlZWQ6IHRoaXMucHJvcHMuYXR0cmlidXRlcy5hdXRvcGxheVNwZWVkLFxuXHRcdFx0XHRcdGNlbnRlck1vZGU6IHRoaXMucHJvcHMuYXR0cmlidXRlcy5jZW50ZXJNb2RlLFxuXHRcdFx0XHRcdGNlbnRlclBhZGRpbmc6IHRoaXMucHJvcHMuYXR0cmlidXRlcy5jZW50ZXJQYWRkaW5nLFxuXHRcdFx0XHRcdGNzc0Vhc2U6IHRoaXMucHJvcHMuYXR0cmlidXRlcy5jc3NFYXNlLFxuXHRcdFx0XHRcdGRyYWdnYWJsZTogdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLmRyYWdnYWJsZSxcblx0XHRcdFx0XHRmYWRlOiB0aGlzLnByb3BzLmF0dHJpYnV0ZXMuZmFkZSxcblx0XHRcdFx0XHRmb2N1c09uU2VsZWN0OiB0aGlzLnByb3BzLmF0dHJpYnV0ZXMuZm9jdXNPblNlbGVjdCxcblx0XHRcdFx0XHRlYXNpbmc6IHRoaXMucHJvcHMuYXR0cmlidXRlcy5lYXNpbmcsXG5cdFx0XHRcdFx0ZWRnZUZyaWN0aW9uOiB0aGlzLnByb3BzLmF0dHJpYnV0ZXMuZWRnZUZyaWN0aW9uLFxuXHRcdFx0XHRcdGluZmluaXRlOiB0aGlzLnByb3BzLmF0dHJpYnV0ZXMuaW5maW5pdGUsXG5cdFx0XHRcdFx0aW5pdGlhbFNsaWRlOiB0aGlzLnByb3BzLmF0dHJpYnV0ZXMuaW5pdGlhbFNsaWRlLFxuXHRcdFx0XHRcdHBhdXNlT25Gb2N1czogdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLnBhdXNlT25Gb2N1cyxcblx0XHRcdFx0XHRwYXVzZU9uSG92ZXI6IHRoaXMucHJvcHMuYXR0cmlidXRlcy5wYXVzZU9uSG92ZXIsXG5cdFx0XHRcdFx0cGF1c2VPbkRvdHNIb3ZlcjogdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLnBhdXNlT25Eb3RzSG92ZXIsXG5cdFx0XHRcdFx0c2xpZGVzVG9TaG93OiB0aGlzLnByb3BzLmF0dHJpYnV0ZXMuc2xpZGVzVG9TaG93LFxuXHRcdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiB0aGlzLnByb3BzLmF0dHJpYnV0ZXMuc2xpZGVzVG9TY3JvbGwsXG5cdFx0XHRcdFx0c3BlZWQ6dGhpcy5wcm9wcy5hdHRyaWJ1dGVzLnNwZWVkLFxuXHRcdFx0XHRcdHN3aXBlOiB0aGlzLnByb3BzLmF0dHJpYnV0ZXMuc3dpcGUsXG5cdFx0XHRcdFx0c3dpcGVUb1NsaWRlOiB0aGlzLnByb3BzLmF0dHJpYnV0ZXMuc3dpcGVUb1NsaWRlLFxuXHRcdFx0XHRcdHRvdWNoTW92ZTogdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLnRvdWNoTW92ZSxcblx0XHRcdFx0XHR0b3VjaFRocmVzaG9sZDogdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLnRvdWNoVGhyZXNob2xkLFxuXHRcdFx0XHRcdHVzZUNTUzogdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLnVzZUNTUyxcblx0XHRcdFx0XHR1c2VUcmFuc2Zvcm06IHRoaXMucHJvcHMuYXR0cmlidXRlcy51c2VUcmFuc2Zvcm0sXG5cdFx0XHRcdFx0dmFyaWFibGVXaWR0aDogdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLnVzZUJhY2tncm91bmQgPyBmYWxzZSA6IHRoaXMucHJvcHMuYXR0cmlidXRlcy52YXJpYWJsZVdpZHRoLFxuXHRcdFx0XHRcdHZlcnRpY2FsOiB0aGlzLnByb3BzLmF0dHJpYnV0ZXMudmVydGljYWwsXG5cdFx0XHRcdFx0dmVydGljYWxTd2lwaW5nOiB0aGlzLnByb3BzLmF0dHJpYnV0ZXMudmVydGljYWxTd2lwaW5nXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpe1xuXHRcdGNvbnN0IGNsaWVudElkID0gdGhpcy5wcm9wcy5jbGllbnRJZDtcblx0XHRpZih0aGlzLnByb3BzLmF0dHJpYnV0ZXMuaWRzLmxlbmd0aCl7XG5cdFx0XHRqUXVlcnkoJ2RpdltkYXRhLWJsb2NrPVwiJytjbGllbnRJZCsnXCJdIC5zbGljay1zbGlkZXItYmxvY2stc2xpZGVyJykuc2xpY2soe1xuXHRcdFx0XHRhcnJvd3M6dGhpcy5wcm9wcy5hdHRyaWJ1dGVzLmFycm93cyxcblx0XHRcdFx0ZG90czp0aGlzLnByb3BzLmF0dHJpYnV0ZXMuZG90cyxcblx0XHRcdFx0bmV4dEFycm93OiAnPGEgY2xhc3M9XCJzbGljay1zbGlkZXItYmxvY2stbmV4dC1hcnJvd1wiIGhyZWY9XCIjXCI+PC9hPicsXG5cdFx0XHRcdHByZXZBcnJvdzogJzxhIGNsYXNzPVwic2xpY2stc2xpZGVyLWJsb2NrLXByZXYtYXJyb3dcIiBocmVmPVwiI1wiPjwvYT4nLFxuXHRcdFx0XHRjdXN0b21QYWdpbmc6IGZ1bmN0aW9uKHNsaWRlciwgaSkge1xuXHRcdFx0XHRcdHJldHVybiBqUXVlcnkoJzxhIGNsYXNzPVwic2xpZGVyLWRvdFwiIC8+JykudGV4dChpICsgMSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFkYXB0aXZlSGVpZ2h0OiB0aGlzLnByb3BzLmF0dHJpYnV0ZXMudXNlQmFja2dyb3VuZCA/IGZhbHNlIDogdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLmFkYXB0aXZlSGVpZ2h0LFxuXHRcdFx0XHRyb3dzOiAwLFxuXHRcdFx0XHRhdXRvcGxheTogdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLmF1dG9wbGF5LFxuXHRcdFx0XHRhdXRvcGxheVNwZWVkOiB0aGlzLnByb3BzLmF0dHJpYnV0ZXMuYXV0b3BsYXlTcGVlZCxcblx0XHRcdFx0Y2VudGVyTW9kZTogdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLmNlbnRlck1vZGUsXG5cdFx0XHRcdGNlbnRlclBhZGRpbmc6IHRoaXMucHJvcHMuYXR0cmlidXRlcy5jZW50ZXJQYWRkaW5nLFxuXHRcdFx0XHRjc3NFYXNlOiB0aGlzLnByb3BzLmF0dHJpYnV0ZXMuY3NzRWFzZSxcblx0XHRcdFx0ZHJhZ2dhYmxlOiB0aGlzLnByb3BzLmF0dHJpYnV0ZXMuZHJhZ2dhYmxlLFxuXHRcdFx0XHRmYWRlOiB0aGlzLnByb3BzLmF0dHJpYnV0ZXMuZmFkZSxcblx0XHRcdFx0Zm9jdXNPblNlbGVjdDogdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLmZvY3VzT25TZWxlY3QsXG5cdFx0XHRcdGVhc2luZzogdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLmVhc2luZyxcblx0XHRcdFx0ZWRnZUZyaWN0aW9uOiB0aGlzLnByb3BzLmF0dHJpYnV0ZXMuZWRnZUZyaWN0aW9uLFxuXHRcdFx0XHRpbmZpbml0ZTogdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLmluZmluaXRlLFxuXHRcdFx0XHRpbml0aWFsU2xpZGU6IHRoaXMucHJvcHMuYXR0cmlidXRlcy5pbml0aWFsU2xpZGUsXG5cdFx0XHRcdHBhdXNlT25Gb2N1czogdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLnBhdXNlT25Gb2N1cyxcblx0XHRcdFx0cGF1c2VPbkhvdmVyOiB0aGlzLnByb3BzLmF0dHJpYnV0ZXMucGF1c2VPbkhvdmVyLFxuXHRcdFx0XHRwYXVzZU9uRG90c0hvdmVyOiB0aGlzLnByb3BzLmF0dHJpYnV0ZXMucGF1c2VPbkRvdHNIb3Zlcixcblx0XHRcdFx0c2xpZGVzVG9TaG93OiB0aGlzLnByb3BzLmF0dHJpYnV0ZXMuc2xpZGVzVG9TaG93LFxuXHRcdFx0XHRzbGlkZXNUb1Njcm9sbDogdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLnNsaWRlc1RvU2Nyb2xsLFxuXHRcdFx0XHRzcGVlZDp0aGlzLnByb3BzLmF0dHJpYnV0ZXMuc3BlZWQsXG5cdFx0XHRcdHN3aXBlOiB0aGlzLnByb3BzLmF0dHJpYnV0ZXMuc3dpcGUsXG5cdFx0XHRcdHN3aXBlVG9TbGlkZTogdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLnN3aXBlVG9TbGlkZSxcblx0XHRcdFx0dG91Y2hNb3ZlOiB0aGlzLnByb3BzLmF0dHJpYnV0ZXMudG91Y2hNb3ZlLFxuXHRcdFx0XHR0b3VjaFRocmVzaG9sZDogdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLnRvdWNoVGhyZXNob2xkLFxuXHRcdFx0XHR1c2VDU1M6IHRoaXMucHJvcHMuYXR0cmlidXRlcy51c2VDU1MsXG5cdFx0XHRcdHVzZVRyYW5zZm9ybTogdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLnVzZVRyYW5zZm9ybSxcblx0XHRcdFx0dmFyaWFibGVXaWR0aDogdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLnVzZUJhY2tncm91bmQgPyBmYWxzZSA6IHRoaXMucHJvcHMuYXR0cmlidXRlcy52YXJpYWJsZVdpZHRoLFxuXHRcdFx0XHR2ZXJ0aWNhbDogdGhpcy5wcm9wcy5hdHRyaWJ1dGVzLnZlcnRpY2FsLFxuXHRcdFx0XHR2ZXJ0aWNhbFN3aXBpbmc6IHRoaXMucHJvcHMuYXR0cmlidXRlcy52ZXJ0aWNhbFN3aXBpbmdcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIG5vdGljZU9wZXJhdGlvbnMsIG5vdGljZVVJLGNsaWVudElkIH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHsgXG5cdFx0XHRpbWFnZXMsIFxuXHRcdFx0aWRzLCBcblx0XHRcdHVzZUJhY2tncm91bmQsIFxuXHRcdFx0YXJyb3dzLCBcblx0XHRcdGRvdHMsIFxuXHRcdFx0c2xpZGVySGVpZ2h0LFxuXHRcdFx0YWRhcHRpdmVIZWlnaHQsXG5cdFx0XHRhdXRvcGxheSxcblx0XHRcdGF1dG9wbGF5U3BlZWQsXG5cdFx0XHRjZW50ZXJNb2RlLFxuXHRcdFx0Y2VudGVyUGFkZGluZyxcblx0XHRcdGNzc0Vhc2UsXG5cdFx0XHRkcmFnZ2FibGUsXG5cdFx0XHRmYWRlLFxuXHRcdFx0Zm9jdXNPblNlbGVjdCxcblx0XHRcdGVhc2luZyxcblx0XHRcdGVkZ2VGcmljdGlvbixcblx0XHRcdGluZmluaXRlLFxuXHRcdFx0aW5pdGlhbFNsaWRlLFxuXHRcdFx0cGF1c2VPbkZvY3VzLFxuXHRcdFx0cGF1c2VPbkhvdmVyLFxuXHRcdFx0cGF1c2VPbkRvdHNIb3Zlcixcblx0XHRcdHNsaWRlc1RvU2hvdyxcblx0XHRcdHNsaWRlc1RvU2Nyb2xsLFxuXHRcdFx0c3BlZWQsXG5cdFx0XHRzd2lwZSxcblx0XHRcdHN3aXBlVG9TbGlkZSxcblx0XHRcdHRvdWNoTW92ZSxcblx0XHRcdHRvdWNoVGhyZXNob2xkLFxuXHRcdFx0dXNlQ1NTLFxuXHRcdFx0dXNlVHJhbnNmb3JtLFxuXHRcdFx0dmFyaWFibGVXaWR0aCxcblx0XHRcdHZlcnRpY2FsLFxuXHRcdFx0dmVydGljYWxTd2lwaW5nXG5cdFx0fSA9IGF0dHJpYnV0ZXM7XG5cdFx0Y29uc3QgbXlDbGFzc05hbWUgPSAnc2xpY2stc2xpZGVyLWJsb2NrLXNsaWRlcicgK1xuXHRcdFx0XHRcdCh0aGlzLnByb3BzLmF0dHJpYnV0ZXMudXNlQmFja2dyb3VuZCA/ICcgdXNlLWJhY2tncm91bmQtaW1hZ2UnIDogJycpO1xuXHRcdGlmKGlkcy5sZW5ndGgpe1x0XG5cdFx0XHRyZXR1cm4gXHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHQ8QmxvY2tDb250cm9scz5cblx0XHRcdFx0XHRcdFx0eyAhISBpbWFnZXMubGVuZ3RoICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17IHRoaXMub25TZWxlY3RJbWFnZXMgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBpZHMgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtdWx0aXBsZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRnYWxsZXJ5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEljb25CdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbXBvbmVudHMtdG9vbGJhcl9fY29udHJvbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBnYWxsZXJ5JyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJlZGl0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdDwvQmxvY2tDb250cm9scz5cblx0XHRcdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnQWxsZ2VtZWluZSBFaW5zdGVsbHVuZ2VuJyApIH0+XG5cdFx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdWb3ItL1p1csO8Y2stU2NoYWx0ZmzDpGNoZW4gYW56ZWlnZW4nICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17ICEhIGFycm93cyB9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IHRoaXMudG9nZ2xlQXJyb3dzIH1cblx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9eyB0aGlzLmdldEFycm93c0hlbHAgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdTbGlkZXJuYXZpZ2F0aW9uIGFuemVpZ2VuJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyAhISBkb3RzIH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgdGhpcy50b2dnbGVEb3RzIH1cblx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9eyB0aGlzLmdldERvdHNIZWxwIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU2xpZGVyIEF1dG9wbGF5JyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyAhISBhdXRvcGxheSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IHRoaXMudG9nZ2xlQXV0b3BsYXkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0LypoZWxwPXsgdGhpcy5nZXRBdXRvcGxheUhlbHAgfSovXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHR7ICEhYXV0b3BsYXkgJiYgPFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkFuemVpZ2VkYXVlciBkZXIgZWluemVsbmVuIFNsaWRlc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYXV0b3BsYXlTcGVlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPSB7IHRoaXMuc2V0QXV0b3BsYXlTcGVlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1pbj17IDEwMCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1heD17IDE1MDAwIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0c3RlcD17IDUwIH1cblx0XHRcdFx0XHRcdFx0XHQvPiB9XG5cdFx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdTbGlkZXMgw7xiZXJibGVuZGVuJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyAhISBmYWRlIH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgdGhpcy50b2dnbGVGYWRlIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8qaGVscD17IHRoaXMuZ2V0QXV0b3BsYXlIZWxwIH0qL1xuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICfigJ5VbmVuZGxpY2hlcuKAnCBTbGlkZXInICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17ICEhIGluZmluaXRlIH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgdGhpcy50b2dnbGVJbmZpbml0ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXsgdGhpcy5nZXRJbmZpbml0ZUhlbHAgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdBbnplaWdlLUVpbnN0ZWxsdW5nZW4nICkgfSAgaW5pdGlhbE9wZW49e2ZhbHNlfT5cblx0XHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiQW56YWhsIHZvbiBCaWxkZXJuIHBybyBTbGlkZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgc2xpZGVzVG9TaG93IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9IHsgdGhpcy5zZXRTbGlkZXNUb1Nob3cgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtaW49eyAxIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bWF4PXsgaWRzLmxlbmd0aCB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiQW56YWhsIHZvbiBTbGlkZXMgYmVpbSBTY3JvbGx2b3JnYW5nXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBzbGlkZXNUb1Njcm9sbCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPSB7IHRoaXMuc2V0U2xpZGVzVG9TY3JvbGwgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtaW49eyAxIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bWF4PXsgaWRzLmxlbmd0aCB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiRGF1ZXIgZGVzIFNsaWRlLVdlY2hzZWxzXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBzcGVlZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPSB7IHRoaXMuc2V0U3BlZWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtaW49eyAxMDAgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXg9eyA1MDAwIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0c3RlcD17IDUwIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdFcndlaXRlcnRlIEVpbnN0ZWxsdW5nZW4nICkgfSBpbml0aWFsT3Blbj17ZmFsc2V9PlxuXHRcdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQmlsZGVyIGFscyBIaW50ZXJncnVuZGJpbGQgdmVyd2VuZGVuJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyAhISB1c2VCYWNrZ3JvdW5kIH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgdGhpcy50b2dnbGVVc2VCYWNrZ3JvdW5kIH1cblx0XHRcdFx0XHRcdFx0XHRcdGhlbHA9eyB0aGlzLmdldFVzZUJhY2tncm91bmRIZWxwIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdHsgISEgdXNlQmFja2dyb3VuZCAmJiA8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiSMO2aGUgZGVzIFNsaWRlcnNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IHNsaWRlckhlaWdodCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPSB7IHRoaXMuc2V0U2xpZGVySGVpZ2h0IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bWluPXsgMSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1heD17IDEwMDAgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz4gfVxuXHRcdFx0XHRcdFx0XHRcdHsgIXVzZUJhY2tncm91bmQgJiYgPFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdIw7ZoZW5hbnBhc3N1bmcnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17ICEhIGFkYXB0aXZlSGVpZ2h0IH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgdGhpcy50b2dnbGVBZGFwdGl2ZUhlaWdodCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWxwPXsgdGhpcy5nZXRBZGFwdGl2ZUhlaWdodEhlbHAgfVxuXHRcdFx0XHRcdFx0XHRcdC8+fVxuXHRcdFx0XHRcdFx0XHRcdHshdXNlQmFja2dyb3VuZCAmJiA8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1ZhcmlhYmxlIEJyZWl0ZSB2ZXJ3ZW5kZW4nICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17ICEhIHZhcmlhYmxlV2lkdGggfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB0aGlzLnRvZ2dsZVZhcmlhYmxlV2lkdGggfVxuXHRcdFx0XHRcdFx0XHRcdFx0LypoZWxwPXsgdGhpcy5nZXRQYXVzZU9uRm9jdXNIZWxwIH0qL1xuXHRcdFx0XHRcdFx0XHRcdC8+fVxuXHRcdFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJFcnN0ZXIgYW56dXplaWdlbmRlciBTbGlkZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgaW5pdGlhbFNsaWRlIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9IHsgdGhpcy5zZXRJbml0aWFsU2xpZGUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtaW49eyAwIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bWF4PXsgaW1hZ2VzLmxlbmd0aCB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnWmVudHJpZXJ0ZXIgTW9kdXMnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17ICEhIGNlbnRlck1vZGUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB0aGlzLnRvZ2dsZUNlbnRlck1vZGUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0LypoZWxwPXsgdGhpcy5nZXRQYXVzZU9uRm9jdXNIZWxwIH0qL1xuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0eyAhIWNlbnRlck1vZGUgJiYgPFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIklubmVyZXIgQWJzdGFuZCBmw7xyIFplbnRyaWVydGVuIE1vZHVzXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBjZW50ZXJQYWRkaW5nIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9IHsgdGhpcy5zZXRDZW50ZXJQYWRkaW5nIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bWluPXsgMCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1heD17IDIwMCB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPn1cblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHR7ICEhYXV0b3BsYXkgJiYgPFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdQYXVzaWVyZW4gYmVpIEZvY3VzJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyAhISBwYXVzZU9uRm9jdXMgfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB0aGlzLnRvZ2dsZVBhdXNlT25Gb2N1cyB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvKmhlbHA9eyB0aGlzLmdldFBhdXNlT25Gb2N1c0hlbHAgfSovXG5cdFx0XHRcdFx0XHRcdFx0Lz4gfVxuXHRcdFx0XHRcdFx0XHRcdHsgISFhdXRvcGxheSAmJiA8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1BhdXNpZXJlbiBiZWkgSG92ZXInICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17ICEhIHBhdXNlT25Ib3ZlciB9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IHRoaXMudG9nZ2xlUGF1c2VPbkhvdmVyIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8qaGVscD17IHRoaXMuZ2V0UGF1c2VPbkhvdmVySGVscCB9Ki9cblx0XHRcdFx0XHRcdFx0XHQvPiB9XG5cdFx0XHRcdFx0XHRcdFx0eyAhIWF1dG9wbGF5ICYmIDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnUGF1c2llcmVuIGJlaSBIb3ZlciDDvGJlciBOYXZpZ2F0aW9uJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyAhISBwYXVzZU9uRG90c0hvdmVyIH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgdGhpcy50b2dnbGVQYXVzZU9uRG90c0hvdmVyIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8qaGVscD17IHRoaXMuZ2V0UGF1c2VPbkRvdHNIb3ZlckhlbHAgfSovXG5cdFx0XHRcdFx0XHRcdFx0Lz4gfVxuXHRcdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU3dpcGUgYWt0aXZpZXJlbicgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgISEgc3dpcGUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB0aGlzLnRvZ2dsZVN3aXBlIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8qaGVscD17IHRoaXMuZ2V0U3dpcGVIZWxwIH0qL1xuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0eyAhIXN3aXBlICYmIDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU3dpcGUgaWdub3JpZXJ0IHNsaWRlc1RvU2Nyb2xsJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyAhISBzd2lwZVRvU2xpZGUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB0aGlzLnRvZ2dsZVN3aXBlVG9TbGlkZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvKmhlbHA9eyB0aGlzLmdldFN3aXBlVG9TbGlkZUhlbHAgfSovXG5cdFx0XHRcdFx0XHRcdFx0Lz4gfVxuXHRcdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRHJhZyAmIERyb3AgbWl0IE1hdXMgYWt0aXZpZXJlbicgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgISEgZHJhZ2dhYmxlIH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgdGhpcy50b2dnbGVEcmFnZ2FibGUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0LypoZWxwPXsgdGhpcy5nZXRQYXVzZU9uRm9jdXNIZWxwIH0qL1xuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdXaXNjaGVuIG1pdCBUb3VjaHNjcmVlbiBha3RpdmllcmVuJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyAhISB0b3VjaE1vdmUgfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB0aGlzLnRvZ2dsZVRvdWNoTW92ZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvKmhlbHA9eyB0aGlzLmdldFRvdWNoTW92ZUhlbHAgfSovXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHR7ICEhIHRvdWNoTW92ZSAmJiA8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiV2lkZXJzdGFuZCBiZWltIFRvdWNoLVdpc2NoZW5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IHRvdWNoVGhyZXNob2xkIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9IHsgdGhpcy5zZXRUb3VjaFRocmVzaG9sZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1pbj17IDEgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtYXg9eyAyMCB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPiB9XG5cdFx0XHRcdFx0XHRcdFx0eyAhIGluZmluaXRlICYmIDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJXaWRlcnN0YW5kIGJlaW0gRXJyZWljaGVuIGRlciBFY2tlblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgZWRnZUZyaWN0aW9uIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9IHsgdGhpcy5zZXRFZGdlRnJpY3Rpb24gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtaW49eyAwIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bWF4PXsgMSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0ZXA9eyAwLjAxIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+IH1cblx0XHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1NsaWRlciBiZWltIE1hcmtpZXJlbiBpbiBkZW4gRm9rdXMgbmVobWVuJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyAhISBmb2N1c09uU2VsZWN0IH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgdGhpcy50b2dnbGVGb2N1c09uU2VsZWN0IH1cblx0XHRcdFx0XHRcdFx0XHRcdC8qaGVscD17IHRoaXMuZ2V0UGF1c2VPbkZvY3VzSGVscCB9Ki9cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQ1NTLVRyYW5zaXRpb25lbiB2ZXJ3ZW5kZW4nICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17ICEhIHVzZUNTUyB9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IHRoaXMudG9nZ2xlVXNlQ1NTIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8qaGVscD17IHRoaXMuZ2V0UGF1c2VPbkZvY3VzSGVscCB9Ki9cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQ1NTLVRyYW5zZm9ybXMgdmVyd2VuZGVuJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyAhISB1c2VUcmFuc2Zvcm0gfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB0aGlzLnRvZ2dsZVVzZVRyYW5zZm9ybSB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvKmhlbHA9eyB0aGlzLmdldFBhdXNlT25Gb2N1c0hlbHAgfSovXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHR7ICEhIHVzZUNTUyAmJiA8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJDU1MtRWFzaW5nXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgY3NzRWFzZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiAnTGluZWFyJywgdmFsdWU6ICdsaW5lYXInIH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6ICdFYXNlJywgdmFsdWU6ICdlYXNlJyB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IGxhYmVsOiAnRWFzZS1JbicsIHZhbHVlOiAnZWFzZS1pbicgfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJ0Vhc2UtT3V0JywgdmFsdWU6ICdlYXNlLW91dCcgfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJ0Vhc2UtSW4tT3V0JywgdmFsdWU6ICdlYXNlLWluLW91dCcgfSxcblx0XHRcdFx0XHRcdFx0XHRcdF0gfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB0aGlzLnNldENzc0Vhc2UgfVxuXHRcdFx0XHRcdFx0XHRcdC8+IH1cblx0XHRcdFx0XHRcdFx0XHR7IXVzZUNTUyAmJiA8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJqUXVlcnktRWFzaW5nXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgZWFzaW5nIH1cblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM9eyBbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgbGFiZWw6ICdMaW5lYXInLCB2YWx1ZTogJ2xpbmVhcicgfSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJ1N3aW5nJywgdmFsdWU6ICdzd2luZycgfSxcblx0XHRcdFx0XHRcdFx0XHRcdF0gfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyB0aGlzLnNldEVhc2luZyB9XG5cdFx0XHRcdFx0XHRcdFx0Lz4gfVxuXHRcdFx0XHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdFx0XHQ8ZGl2IFxuXHRcdFx0XHRcdFx0XHRjbGFzcz17IG15Q2xhc3NOYW1lIH1cblx0XHRcdFx0XHRcdFx0c3R5bGUgPSB7e1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogISF1c2VCYWNrZ3JvdW5kID8gc2xpZGVySGVpZ2h0OidhdXRvJ1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7IGltYWdlcy5tYXAoICggaW1nLCBpbmRleCApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBteWNhcHRpb24gPSBpbWcuY2FwdGlvbiA/IDxkaXYgY2xhc3NOYW1lPXsnc2xpY2stc2xpZGVyLWJsb2NrLWNhcHRpb24nfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IGltZy5jYXB0aW9uIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+IDogJyc7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgYXJpYUxhYmVsID0gc3ByaW50ZiggX18oICdpbWFnZSAlMSRkIG9mICUyJGQgaW4gZ2FsbGVyeScgKSwgKCBpbmRleCArIDEgKSwgaW1hZ2VzLmxlbmd0aCApO1xuXHRcdFx0XHRcdFx0XHRcdGlmKCEhdXNlQmFja2dyb3VuZCl7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0geyBcInNsaWNrLXNsaWRlci1ibG9jay1zbGlkZVwiIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZEltYWdlIDogJ3VybCgnK2ltZy51cmwrJyknXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYUxhYmVsID0geyBhcmlhTGFiZWwgfSBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLWlkPXsgaW1nLmlkIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBteWNhcHRpb24gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17IFwic2xpY2stc2xpZGVyLWJsb2NrLXNsaWRlXCJ9ID5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJzbGljay1zbGlkZXItaW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9eyBpbWcuYWx0IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS1pZD17IGltZy5pZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17IGltZy51cmwgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhTGFiZWwgPSB7IGFyaWFMYWJlbCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgbXljYXB0aW9uIH1cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH0gKSB9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdH0gXG5cdFx0cmV0dXJuIDxGcmFnbWVudD5cblx0XHRcdFx0XHQ8TWVkaWFQbGFjZWhvbGRlclxuXHRcdFx0XHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0ID0geyB0aGlzLm9uU2VsZWN0SW1hZ2VzIH1cblx0XHRcdFx0XHRcdFx0bXVsdGlwbGVcblx0XHRcdFx0XHRcdFx0bGFiZWxzID0geyB7IHRpdGxlOiAnU2xpZGVyYmlsZGVyJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0IGluc3RydWN0aW9uczogJ1ppZWhlbiBTaWUgQmlsZGVyIGhpZXJoZXIsIGxhZGVuIFNpZSBuZXVlIGhvY2ggb2RlciB3w6RobGVuIEJpbGRlciBhdXMgZGVyIE1lZGlhdGhlayBhdXMsIGRpZSBpbSBTbGlkZXIgYW5nZXplaWd0IHdlcmRlbiBzb2xsZW4uJyB9IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHR9XG59XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdpbXB1bHMtYWRkaXRpb25hbC1ibG9ja3Mvc2xpY2stc2xpZGVyJyx7XG5cdHRpdGxlOiBfXyggJ1NsaWNrLVNsaWRlcicgKSxcblx0ZGVzY3JpcHRpb246IF9fKCAnRWluIGVpbmZhY2hlciBCaWxkZXJzbGlkZXIgbWl0IFNsaWNrJyApLFxuXHRpY29uOiA8U1ZHIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PFBhdGggZmlsbD1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwVjB6XCIgLz48Rz48UGF0aCBkPVwiTTIwIDR2MTJIOFY0aDEybTAtMkg4Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDEyYzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS04LjUgOS42N2wxLjY5IDIuMjYgMi40OC0zLjFMMTkgMTVIOXpNMiA2djE0YzAgMS4xLjkgMiAyIDJoMTR2LTJINFY2SDJ6XCIgLz48L0c+PC9TVkc+LFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cdGtleXdvcmRzOiBbIF9fKCAnU2xpY2snICksIF9fKCAnU2xpZGVyJyApIF0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRpbWFnZXM6IHtcblx0XHRcdHR5cGU6ICdhcnJheScsXG5cdFx0XHRkZWZhdWx0OiBbXSxcblx0XHR9LFxuXHRcdGlkczoge1xuXHRcdFx0dHlwZTogJ2FycmF5Jyxcblx0XHRcdGRlZmF1bHQ6IFtdLFxuXHRcdH0sXG5cdFx0dXNlQmFja2dyb3VuZDoge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogZmFsc2UsXG5cdFx0fSxcblx0XHRhcnJvd3M6IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6IHRydWUsXG5cdFx0fSxcblx0XHRkb3RzOiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiB0cnVlLFxuXHRcdH0sXG5cdFx0c2xpZGVySGVpZ2h0OiB7XG5cdFx0XHR0eXBlOiAnaW50ZWdlcicsXG5cdFx0XHRkZWZhdWx0OiAyNTBcblx0XHR9LFxuXHRcdGFkYXB0aXZlSGVpZ2h0OiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiB0cnVlLFxuXHRcdH0sXG5cdFx0YXV0b3BsYXk6IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6ZmFsc2UsXG5cdFx0fSxcblx0XHRhdXRvcGxheVNwZWVkOiB7XG5cdFx0XHR0eXBlOiAnaW50ZWdlcicsXG5cdFx0XHRkZWZhdWx0OjQwMDAsXG5cdFx0fSxcblx0XHRjZW50ZXJNb2RlOiB7XG5cdFx0XHR0eXBlOidib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6ZmFsc2UsXG5cdFx0fSxcblx0XHRjZW50ZXJQYWRkaW5nOiB7XG5cdFx0XHR0eXBlOidpbnRlZ2VyJyxcblx0XHRcdGRlZmF1bHQ6MCxcblx0XHR9LFxuXHRcdGNzc0Vhc2U6IHtcblx0XHRcdHR5cGU6J3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OidlYXNlJyxcblx0XHR9LFxuXHRcdGRyYWdnYWJsZToge1xuXHRcdFx0dHlwZTonYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OnRydWUsXG5cdFx0fSxcblx0XHRmYWRlOiB7XG5cdFx0XHR0eXBlOidib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6ZmFsc2UsXG5cdFx0fSxcblx0XHRmb2N1c09uU2VsZWN0OiB7XG5cdFx0XHR0eXBlOidib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6ZmFsc2UsXG5cdFx0fSxcblx0XHRlYXNpbmc6IHtcblx0XHRcdHR5cGU6J3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OidsaW5lYXInLFxuXHRcdH0sXG5cdFx0ZWRnZUZyaWN0aW9uOiB7XG5cdFx0XHR0eXBlOidudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDowLjE1LFxuXHRcdH0sXG5cdFx0aW5maW5pdGU6IHtcblx0XHRcdHR5cGU6J2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDp0cnVlLFxuXHRcdH0sXG5cdFx0aW5pdGlhbFNsaWRlOiB7XG5cdFx0XHR0eXBlOidpbnRlZ2VyJyxcblx0XHRcdGRlZmF1bHQ6MCxcblx0XHR9LFxuXHRcdHBhdXNlT25Gb2N1czoge1xuXHRcdFx0dHlwZTonYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OnRydWUsXG5cdFx0fSxcblx0XHRwYXVzZU9uSG92ZXI6IHtcblx0XHRcdHR5cGU6J2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDp0cnVlLFxuXHRcdH0sXG5cdFx0cGF1c2VPbkRvdHNIb3Zlcjoge1xuXHRcdFx0dHlwZTonYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OnRydWUsXG5cdFx0fSxcblx0XHRzbGlkZXNUb1Nob3c6e1xuXHRcdFx0dHlwZTonaW50ZWdlcicsXG5cdFx0XHRkZWZhdWx0OjEsXG5cdFx0fSxcblx0XHRzbGlkZXNUb1Njcm9sbDp7XG5cdFx0XHR0eXBlOidpbnRlZ2VyJyxcblx0XHRcdGRlZmF1bHQ6MSxcblx0XHR9LFxuXHRcdHNwZWVkOntcblx0XHRcdHR5cGU6J2ludGVnZXInLFxuXHRcdFx0ZGVmYXVsdDo4MDAsXG5cdFx0fSxcblx0XHRzd2lwZToge1xuXHRcdFx0dHlwZTonYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OnRydWUsXG5cdFx0fSxcblx0XHRzd2lwZVRvU2xpZGU6IHtcblx0XHRcdHR5cGU6J2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDpmYWxzZSxcblx0XHR9LFxuXHRcdHRvdWNoTW92ZToge1xuXHRcdFx0dHlwZTonYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OnRydWUsXG5cdFx0fSxcblx0XHR0b3VjaFRocmVzaG9sZDoge1xuXHRcdFx0dHlwZTonaW50ZWdlcicsXG5cdFx0XHRkZWZhdWx0OjUsXG5cdFx0fSxcblx0XHR1c2VDU1M6IHtcblx0XHRcdHR5cGU6J2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDp0cnVlLFxuXHRcdH0sXG5cdFx0dXNlVHJhbnNmb3JtOiB7XG5cdFx0XHR0eXBlOidib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6dHJ1ZSxcblx0XHR9LFxuXHRcdHZhcmlhYmxlV2lkdGg6IHtcblx0XHRcdHR5cGU6J2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDpmYWxzZSxcblx0XHR9LFxuXHRcdHZlcnRpY2FsOiB7XG5cdFx0XHR0eXBlOidib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6ZmFsc2UsXG5cdFx0fSxcblx0XHR2ZXJ0aWNhbFN3aXBpbmc6IHtcblx0XHRcdHR5cGU6J2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDpmYWxzZSxcblx0XHR9LFxuXHRcdGFsaWdubWVudDoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIH0sXG5cdH0sXG5cdHN1cHBvcnRzOiB7XG5cdFx0YWxpZ246IFsnZnVsbCddLFxuXHR9LFxuXG5cdGVkaXQ6IE15R2FsbGVyeUVkaXQsIFxuXG5cdHNhdmU6IGZ1bmN0aW9uKHByb3BzKXtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufSk7IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=