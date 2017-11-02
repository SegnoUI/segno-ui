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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener('WebComponentsReady', function () {
    // Import Class Definition
    var DsIcon = __webpack_require__(1);
    var DsInlineError = __webpack_require__(63);
    var DsReveal = __webpack_require__(65);
    var DsSpinner = __webpack_require__(68);

    // Register Custom Element
    customElements.define(DsIcon.is, DsIcon);
    customElements.define(DsInlineError.is, DsInlineError);
    customElements.define(DsReveal.is, DsReveal);
    customElements.define(DsSpinner.is, DsSpinner);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tagName = 'ds-icon';

var template = document.createElement('template');
template.innerHTML = '<style>' + __webpack_require__(2) + '</style><slot></slot>';

var icons = {
    'angle-down': __webpack_require__(3),
    'angle-left': __webpack_require__(4),
    'angle-right': __webpack_require__(5),
    'angle-up': __webpack_require__(6),
    'arrow-down': __webpack_require__(7),
    'arrow-left': __webpack_require__(8),
    'arrow-right': __webpack_require__(9),
    'arrow-up': __webpack_require__(10),
    'ban': __webpack_require__(11),
    'bell': __webpack_require__(12),
    'bookmark': __webpack_require__(13),
    'calendar': __webpack_require__(14),
    'caret-down': __webpack_require__(15),
    'caret-left': __webpack_require__(16),
    'caret-right': __webpack_require__(17),
    'caret-up': __webpack_require__(18),
    'check': __webpack_require__(19),
    'check-circle': __webpack_require__(20),
    'clock': __webpack_require__(21),
    'cog': __webpack_require__(22),
    'download': __webpack_require__(23),
    'envelope': __webpack_require__(24),
    'exclamation': __webpack_require__(25),
    'exclamation-circle': __webpack_require__(26),
    'exclamation-triangle': __webpack_require__(27),
    'external-link': __webpack_require__(28),
    'filter': __webpack_require__(29),
    'folder': __webpack_require__(30),
    'heart': __webpack_require__(31),
    'image': __webpack_require__(32),
    'info': __webpack_require__(33),
    'info-circle': __webpack_require__(34),
    'key': __webpack_require__(35),
    'link': __webpack_require__(36),
    'map-marker': __webpack_require__(37),
    'menu-bento': __webpack_require__(38),
    'menu-doner': __webpack_require__(39),
    'menu-hamburger': __webpack_require__(40),
    'menu-kebab': __webpack_require__(41),
    'menu-meatball': __webpack_require__(42),
    'minus': __webpack_require__(43),
    'padlock-locked': __webpack_require__(44),
    'padlock-unlocked': __webpack_require__(45),
    'paperclip': __webpack_require__(46),
    'pencil': __webpack_require__(47),
    'phone': __webpack_require__(48),
    'plus': __webpack_require__(49),
    'redo': __webpack_require__(50),
    'refresh': __webpack_require__(51),
    'search': __webpack_require__(52),
    'sortable': __webpack_require__(53),
    'sorted-down': __webpack_require__(54),
    'sorted-up': __webpack_require__(55),
    'star': __webpack_require__(56),
    'times': __webpack_require__(57),
    'times-circle': __webpack_require__(58),
    'trash': __webpack_require__(59),
    'undo': __webpack_require__(60),
    'upload': __webpack_require__(61),
    'user': __webpack_require__(62)
};

var DsIcon = function (_HTMLElement) {
    _inherits(DsIcon, _HTMLElement);

    _createClass(DsIcon, null, [{
        key: 'is',
        get: function get() {
            return tagName;
        }
    }, {
        key: 'icons',
        get: function get() {
            return icons;
        }
    }, {
        key: 'observedAttributes',
        get: function get() {
            return ['type'];
        }
    }]);

    function DsIcon(type) {
        _classCallCheck(this, DsIcon);

        var _this = _possibleConstructorReturn(this, (DsIcon.__proto__ || Object.getPrototypeOf(DsIcon)).call(this));

        _this.attachShadow({ mode: 'open' });
        if (window.ShadyCSS) {
            ShadyCSS.prepareTemplate(template, tagName);
            ShadyCSS.styleElement(_this);
        }
        _this.shadowRoot.appendChild(template.content.cloneNode(true));

        if (type) {
            _this.type = type;
        }
        return _this;
    }

    _createClass(DsIcon, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this._render();
        }
    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback() {
            this._render();
        }
    }, {
        key: '_render',
        value: function _render() {
            // erase previously injected markup
            this.innerHTML = '';
            // add new SVG markup
            if (this.type in DsIcon.icons) {
                var elSurrogate = document.createElement('div');
                elSurrogate.innerHTML = DsIcon.icons[this.type];
                this.appendChild(elSurrogate.firstElementChild);
            }
        } //_render()

    }, {
        key: 'type',
        get: function get() {
            return this.getAttribute('type');
        },
        set: function set(newVal) {
            this.setAttribute('type', newVal);
        }
    }]);

    return DsIcon;
}(HTMLElement); //DsIcon

module.exports = DsIcon;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ":host{background-color:inherit;color:inherit;display:inline-block;height:1em;vertical-align:-2px;width:1em}:host:empty{height:0;width:0}::slotted(svg){fill:currentColor;stroke:none}"

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 8.325l-4.55-4.55-1.95 1.95 6.5 6.5 6.5-6.5-1.95-1.95z\"/>\n</svg>\n"

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M7.692 8L12 3.692l-1.846-1.846L4 8l6.154 6.154L12 12.308z\"/>\n</svg>\n"

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8.308 8L4 3.692l1.846-1.846L12 8l-6.154 6.154L4 12.308z\"/>\n</svg>\n"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 7.675l-4.55 4.55-1.95-1.95 6.5-6.5 6.5 6.5-1.95 1.95z\"/>\n</svg>\n"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M7 10.5H3.5L8 15l4.5-4.5H9V1H7v9.5z\"/>\n</svg>\n"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M5.5 7V3.5L1 8l4.5 4.5V9H15V7H5.5z\"/>\n</svg>\n"

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M10.5 9v3.5L15 8l-4.5-4.5V7H1v2h9.5z\"/>\n</svg>\n"

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M9 5.5h3.5L8 1 3.5 5.5H7V15h2V5.5z\"/>\n</svg>\n"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M5.124 12.689a5.5 5.5 0 0 0 7.238-8.04l-7.238 8.04zM3.638 11.35l7.238-8.039a5.5 5.5 0 0 0-7.238 8.04zM8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14z\"/>\n</svg>\n"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M9.444 12.125H13c-1.193-1.193-1.745-3.096-1.658-5.71A3.344 3.344 0 0 0 8.827 3.06a.833.833 0 1 0-1.654 0 3.345 3.345 0 0 0-2.515 3.353C4.745 9.03 4.193 10.932 3 12.125h3.556a1.459 1.459 0 0 0 2.888 0z\"/>\n</svg>\n"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M11.5 13.469V2.531h-7v10.938l3.5-3.5z\"/>\n</svg>\n"

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M11.707 7.293A.997.997 0 0 1 12 8v3.715a.997.997 0 0 1-1 1H8.571v-1.143h2.286v-1.143H8.571V9.286h2.286V8.143H8.571V7H11c.276 0 .526.112.707.293zM4 10.358v-.072a1 1 0 0 1 1-1h1.286V8.143H4V7h2.429a.997.997 0 0 1 1 1v1.429a.997.997 0 0 1-1 1H5.143v1.143h2.286v1.143H4v-2.357zM13 3h2v12H1V3h2V1h2v2h6V1h2v2zM2 6v8h12V6H2z\"/>\n</svg>\n"

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M12.5 5.75L8 10.25l-4.5-4.5z\"/>\n</svg>\n"

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M10.25 12.5L5.75 8l4.5-4.5z\"/>\n</svg>\n"

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M5.75 12.5l4.5-4.5-4.5-4.5z\"/>\n</svg>\n"

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M12.5 10.25L8 5.75l-4.5 4.5z\"/>\n</svg>\n"

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M1.017 8.088l5.304 5.304 8.662-8.662-2.122-2.122-6.54 6.541-3.182-3.182z\"/>\n</svg>\n"

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM4 8.05l1.215-1.215 1.823 1.823 3.747-3.747L12 6.127l-4.962 4.962L4 8.05z\"/>\n</svg>\n"

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM4.62 9.11V7.64h2.578V3.11h1.718v6H4.62z\"/>\n</svg>\n"

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M9.5 2.707c.416.118.812.283 1.182.49l1.207-1.207 2.121 2.12-1.207 1.208c.207.37.372.766.49 1.182H15v3h-1.707a5.466 5.466 0 0 1-.49 1.182l1.207 1.207-2.12 2.121-1.208-1.207c-.37.207-.766.372-1.182.49V15h-3v-1.707a5.466 5.466 0 0 1-1.182-.49L4.111 14.01 1.99 11.89l1.207-1.208a5.466 5.466 0 0 1-.49-1.182H1v-3h1.707c.118-.416.283-.812.49-1.182L1.99 4.111 4.11 1.99l1.208 1.207c.37-.207.766-.372 1.182-.49V1h3v1.707zM8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z\"/>\n</svg>\n"

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M12.5 7L8 11.5 3.5 7h9zm-6-6h3v6h-3V1zM2 13h12v2H2v-2z\"/>\n</svg>\n"

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M15 6v7.5H1V6l7 3.498 7-3.499zm0-2L8 7.497 1 3.999V2.5h14V4z\"/>\n</svg>\n"

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M6.5 11h3v3h-3v-3zM6 2h4l-.5 7h-3L6 2z\"/>\n</svg>\n"

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM7 10h2v2H7v-2zm-.5-6h3L9 9H7l-.5-5z\"/>\n</svg>\n"

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 1l7 14H1L8 1zm0 2.236L2.618 14h10.764L8 3.236zm-.75 8.769h1.5v1.25h-1.5v-1.25zM7 6.25h2L8.75 11h-1.5L7 6.25z\"/>\n</svg>\n"

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M7.884 13.5H13.5V9H15v6H1V1h6v1.5H2.5v11h5.384zm0-3.616L6.116 8.116l5-5L9 1h6v6l-2.116-2.116-5 5z\"/>\n</svg>\n"

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M9.65 8.285L14 3.5H2l4.35 4.785V14.5l3.3-1.1V8.285z\"/>\n</svg>\n"

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 4.571h6v8.572H2V2.857h5.012z\"/>\n</svg>\n"

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 4.246a3.515 3.515 0 1 1 4.97 4.97L8 14.188l-4.97-4.97A3.515 3.515 0 0 1 8 4.247z\"/>\n</svg>\n"

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M15 11v4H1V1h14v10zm-1.5-3.25V2.5h-11v10.75l11-5.5zM6 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z\"/>\n</svg>\n"

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M6.5 12h-2v1.5h7V12h-2V6.5h-5V8h2v4zM8 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z\"/>\n</svg>\n"

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M7.045 10.5V8.045H5.773v-1h3.182V10.5h1.272v1H5.773v-1h1.272zM8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0-7.59A.955.955 0 1 1 8 4a.955.955 0 0 1 0 1.91z\"/>\n</svg>\n"

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8.907 6.555l4.053 4.053v2.342h-2.342V11.39h-1.56V9.828H7.495l-.931-.931a3.513 3.513 0 1 1 2.342-2.342zm-4.143-.63a1.17 1.17 0 1 0 0-2.342 1.17 1.17 0 0 0 0 2.342z\"/>\n</svg>\n"

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path d=\"M10.64 6.573l-1.217.95a1.5 1.5 0 0 0-2.346-.705l-3.94 3.078a1.5 1.5 0 0 0 1.846 2.364l.596-.465c.5.319 1.053.531 1.625.634l-1.297 1.013a3 3 0 1 1-3.694-4.728l3.94-3.078a3 3 0 0 1 4.486.937zM5.36 9.427l1.217-.95a1.5 1.5 0 0 0 2.346.705l3.94-3.078a1.5 1.5 0 0 0-1.846-2.364l-.596.465a4.497 4.497 0 0 0-1.625-.634l1.297-1.013a3 3 0 0 1 3.694 4.728l-3.94 3.078a3 3 0 0 1-4.486-.937z\"/>\n</svg>\n"

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path d=\"M3.77 9.395a5.5 5.5 0 1 1 8.457.003l.016.016-3.41 5.116a1 1 0 0 1-1.665 0l-3.41-5.116.013-.019zM5.88 8a3 3 0 1 0 4.242-4.243A3 3 0 0 0 5.88 8z\"/>\n</svg>\n"

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M15.044 6.5v3h-3v-3h3zm-11.088 0v3h-3v-3h3zm5.588 0v3h-3v-3h3zM15.087 1v3h-3V1h3zM4 1v3H1V1h3zm5.587 0v3h-3V1h3zm5.5 11v3h-3v-3h3zM4 12v3H1v-3h3zm5.587 0v3h-3v-3h3z\"/>\n</svg>\n"

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M5 12.044h6v3H5v-3zM3 6.456h10v3H3v-3zm-2-5.5h14v3H1v-3z\"/>\n</svg>\n"

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M1 1h14v3H1V1zm0 11.087h14v3H1v-3zM1 6.5h14v3H1v-3z\"/>\n</svg>\n"

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M6.5.956h3v3h-3v-3zm0 11.088h3v3h-3v-3zm0-5.588h3v3h-3v-3z\"/>\n</svg>\n"

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M15.044 6.5v3h-3v-3h3zm-11.088 0v3h-3v-3h3zm5.588 0v3h-3v-3h3z\"/>\n</svg>\n"

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M2 6.5h12v3H2z\"/>\n</svg>\n"

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8.316 9.949a1 1 0 1 0-.632 0L7 12h2l-.684-2.051zM4 6a4 4 0 1 1 8 0h-1.5a2.5 2.5 0 0 0-5 0H4zm0 0h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z\"/>\n</svg>\n"

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8.316 9.949a1 1 0 1 0-.632 0L7 12h2l-.684-2.051zM4 6a4 4 0 0 1 6.828-2.828l-1.06 1.06A2.5 2.5 0 0 0 5.5 6H12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z\"/>\n</svg>\n"

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M7.646 2.904a3.5 3.5 0 0 1 4.95 4.95l-.707-.708a2.5 2.5 0 0 0-3.535-3.535l-.708-.707zM4.111 9.268l.707.707a1.5 1.5 0 0 0 2.121 2.121l.707.707a2.5 2.5 0 1 1-3.535-3.535zm4.95-4.95a1.5 1.5 0 0 1 2.121 2.121l-.707-.707a.5.5 0 0 0-.707-.707l-.707-.707zM7.646 2.904l.708.707-6.01 6.01a.5.5 0 1 1-.708-.707l6.01-6.01zm4.243 4.242l.707.708-4.95 4.95-.707-.708 4.95-4.95zM9.061 4.318l.707.707-4.95 4.95-.707-.707 4.95-4.95zm1.414 1.414l.707.707-4.95 4.95a.5.5 0 1 1-.707-.707l4.95-4.95z\"/>\n</svg>\n"

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M11.5 1.938a1.5 1.5 0 0 1 .549 2.049l-.25.433-2.598-1.5.25-.433a1.5 1.5 0 0 1 2.049-.55zM8.701 3.786l2.598 1.5-4 6.928-2.598-1.5 4-6.928zm-4.5 7.794l2.598 1.5-2.299.982-.299-2.482z\"/>\n</svg>\n"

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M11.686 13.545c-2.19 1.264-5.4-.198-7.171-3.266-1.771-3.067-1.432-6.58.757-7.843l.596-.344a.687.687 0 0 1 .938.252l1.49 2.579a.687.687 0 0 1-.252.938l-.397.23a1.146 1.146 0 0 1-1.253-.07l-.083.047.002.003a1.123 1.123 0 0 0-.08.043c-.834.48-.893 1.936-.134 3.251s2.05 1.99 2.882 1.51c.027-.015.052-.032.077-.049l.002.003.083-.047c-.05-.439.159-.886.566-1.12l.396-.23a.687.687 0 0 1 .94.252l1.488 2.579a.687.687 0 0 1-.251.939l-.596.343z\"/>\n</svg>\n"

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M6.5 6.5H2v3h4.5V14h3V9.5H14v-3H9.5V2h-3v4.5z\"/>\n</svg>\n"

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M12.95 3.05l-1.06 1.06A5.5 5.5 0 1 0 13.41 9h1.52A7.002 7.002 0 0 1 1 8a7 7 0 0 1 11.95-4.95zM15 1v5.833H9.167L15 1z\"/>\n</svg>\n"

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M1.07 7a7.002 7.002 0 0 1 11.88-3.95l-1.06 1.06A5.502 5.502 0 0 0 2.591 7H1.07zm1.98 5.95l1.06-1.06A5.502 5.502 0 0 0 13.409 9h1.521A7.002 7.002 0 0 1 3.05 12.95zM15 1v5.833H9.167L15 1zM1 15V9.167h5.833L1 15z\"/>\n</svg>\n"

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M11.04 9.606l3.867 3.868-1.433 1.433-3.868-3.867a5.5 5.5 0 1 1 1.433-1.433zM6.5 10.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8z\"/>\n</svg>\n"

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M12.5 10.5L8 15l-4.5-4.5h9zm0-5h-9L8 1l4.5 4.5zm-6 0h3v5h-3v-5z\"/>\n</svg>\n"

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M12.5 10.5L8 15l-4.5-4.5h9zm-6-5h3v5h-3v-5z\"/>\n</svg>\n"

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M12.5 5.5h-9L8 1l4.5 4.5zm-6 0h3v5h-3v-5z\"/>\n</svg>\n"

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 11.06l-4.017 2.453 1.092-4.578L1.5 5.872l4.692-.376L8 1.15l1.808 4.346 4.692.376-3.575 3.063 1.092 4.578z\"/>\n</svg>\n"

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 5.879L4.818 2.697 2.697 4.818 5.879 8l-3.182 3.182 2.121 2.121L8 10.121l3.182 3.182 2.121-2.121L10.121 8l3.182-3.182-2.121-2.121z\"/>\n</svg>\n"

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0-6.9l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6z\"/>\n</svg>\n"

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M4.126 4a4.002 4.002 0 0 1 7.748 0H13a1 1 0 0 1 0 2v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 1 1 0-2h1.126zm1.582 0h4.584a2.5 2.5 0 0 0-4.584 0zM7.28 6v7.58H8.7V6H7.28zm2.88 0v7.58h1.42V6h-1.42zM4.4 6v7.58h1.42V6H4.4z\"/>\n</svg>\n"

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M1.07 9h1.52A5.502 5.502 0 0 0 13.5 8a5.5 5.5 0 0 0-9.39-3.89L3.05 3.05A7 7 0 1 1 1.07 9zM1 1l5.833 5.833H1V1z\"/>\n</svg>\n"

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M12.5 5.5L8 1 3.5 5.5h9zm-6 6v-6h3v6h-3zM2 13h12v2H2v-2z\"/>\n</svg>\n"

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M6.022 9.929C4.244 10.427 3 11.576 3 12.915c0 .2.028.395.08.585h9.84c.052-.19.08-.386.08-.585 0-1.339-1.244-2.488-3.022-2.986A4.984 4.984 0 0 1 8 10.335a4.984 4.984 0 0 1-1.978-.406zM8 8.335a3 3 0 1 1 0-6 3 3 0 0 1 0 6z\"/>\n</svg>\n"

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tagName = 'ds-inline-error';

var template = document.createElement('template');
template.innerHTML = '' + __webpack_require__(64);

var DsInlineError = function (_HTMLElement) {
    _inherits(DsInlineError, _HTMLElement);

    _createClass(DsInlineError, null, [{
        key: 'is',
        get: function get() {
            return tagName;
        }
    }]);

    function DsInlineError() {
        _classCallCheck(this, DsInlineError);

        var _this = _possibleConstructorReturn(this, (DsInlineError.__proto__ || Object.getPrototypeOf(DsInlineError)).call(this));

        _this.attachShadow({ mode: 'open' });
        if (window.ShadyCSS) {
            ShadyCSS.prepareTemplate(template, tagName);
            ShadyCSS.styleElement(_this);
        }
        _this.shadowRoot.appendChild(template.content.cloneNode(true));
        return _this;
    }

    return DsInlineError;
}(HTMLElement);

module.exports = DsInlineError;

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "<ds-icon type=\"exclamation-circle\" alt=\"Error\"></ds-icon>\n<slot></slot>\n"

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tagName = 'ds-reveal';

var template = document.createElement('template');
template.innerHTML = '\n  <style>' + __webpack_require__(66) + '</style>\n  ' + __webpack_require__(67) + '\n';

var DsReveal = function (_HTMLElement) {
    _inherits(DsReveal, _HTMLElement);

    _createClass(DsReveal, null, [{
        key: 'is',
        get: function get() {
            return tagName;
        }
    }, {
        key: 'observedAttributes',
        get: function get() {
            return ['open'];
        }
    }]);

    function DsReveal() {
        _classCallCheck(this, DsReveal);

        var _this = _possibleConstructorReturn(this, (DsReveal.__proto__ || Object.getPrototypeOf(DsReveal)).call(this));

        _this.attachShadow({ mode: 'open' });
        if (window.ShadyCSS) {
            ShadyCSS.prepareTemplate(template, tagName);
            ShadyCSS.styleElement(_this);
        }
        _this.shadowRoot.appendChild(template.content.cloneNode(true));
        // Private reference to Shadow DOM element
        _this.$summary = _this.shadowRoot.querySelector('#summary');
        // Fix "this" in _toggle()
        _this._toggle = _this._toggle.bind(_this);
        return _this;
    }

    _createClass(DsReveal, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.$summary.addEventListener('click', this._toggle);
        }
    }, {
        key: 'disconnectedCallback',
        value: function disconnectedCallback() {
            this.$summary.removeEventListener('click', this._toggle);
        }
    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(attr, oldValue, newValue) {
            this.$summary.setAttribute('aria-expanded', Boolean(newValue));
        }
    }, {
        key: '_toggle',
        value: function _toggle() {
            this.open = !this.open;
        }
    }, {
        key: 'open',
        set: function set(value) {
            if (Boolean(value)) {
                this.setAttribute('open', '');
            } else {
                this.removeAttribute('open');
            }
        },
        get: function get() {
            return this.hasAttribute('open');
        }
    }]);

    return DsReveal;
}(HTMLElement);

module.exports = DsReveal;

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = ":host{display:block}:host([open])>#body{display:block}#summary{background-color:transparent;border:none;color:inherit;font-size:1em;margin:0;padding:0;text-align:left;width:100%}#body,#summary:empty{display:none}"

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = "<button id=\"summary\" aria-expanded=\"false\">\n  <slot name=\"summary\"></slot>\n</button>\n<div id=\"body\">\n  <slot></slot>\n</div>\n\n"

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tagName = 'ds-spinner';

var template = document.createElement('template');
template.innerHTML = '<style>' + __webpack_require__(69) + '</style>';

var DsSpinner = function (_HTMLElement) {
    _inherits(DsSpinner, _HTMLElement);

    _createClass(DsSpinner, null, [{
        key: 'is',
        get: function get() {
            return tagName;
        }
    }]);

    function DsSpinner() {
        _classCallCheck(this, DsSpinner);

        var _this = _possibleConstructorReturn(this, (DsSpinner.__proto__ || Object.getPrototypeOf(DsSpinner)).call(this));

        _this.attachShadow({ mode: 'open' });
        if (window.ShadyCSS) {
            ShadyCSS.prepareTemplate(template, tagName);
            ShadyCSS.styleElement(_this);
        }
        _this.shadowRoot.appendChild(template.content.cloneNode(true));
        return _this;
    }

    _createClass(DsSpinner, [{
        key: 'paused',
        get: function get() {
            return this.hasAttribute('paused');
        },
        set: function set(val) {
            if (Boolean(val)) {
                this.setAttribute('paused', '');
                this.dispatchEvent(new CustomEvent('pause', {
                    bubbles: true
                }));
            } else {
                this.removeAttribute('paused');
                this.dispatchEvent(new CustomEvent('start', {
                    bubbles: true
                }));
            }
        }
    }]);

    return DsSpinner;
}(HTMLElement);

module.exports = DsSpinner;

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = ":host{animation:spin .8s linear infinite;animation-play-state:running;border-color:transparent transparent currentColor currentColor;border-radius:1em;border-style:solid;border-width:1px;display:inline-block;height:1em;width:1em}:host([paused]){animation-play-state:paused}:host([hidden]){display:none}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}"

/***/ })
/******/ ]);