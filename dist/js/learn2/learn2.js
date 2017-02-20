webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1),
	    ReactDom = __webpack_require__(32);

	__webpack_require__(190);

	//Nav 导航栏

	var Nav = function (_React$Component) {
	    _inherits(Nav, _React$Component);

	    function Nav() {
	        _classCallCheck(this, Nav);

	        return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
	    }

	    _createClass(Nav, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'nav',
	                { className: 'nav' },
	                React.createElement(
	                    'ul',
	                    { className: 'navlist' },
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { className: 'active', href: '' },
	                            '\u9996\u9875'
	                        )
	                    ),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: '' },
	                            '\u544A\u767D\u6C14\u7403'
	                        )
	                    ),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: '' },
	                            '\u521A\u597D\u9047\u89C1\u4F60'
	                        )
	                    ),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: '' },
	                            '\u7F51\u6613\u4E91\u97F3\u4E50'
	                        )
	                    ),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: '' },
	                            '\u738B\u8005\u8363\u8000'
	                        )
	                    ),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: '' },
	                            '\u859B\u4E4B\u8C26'
	                        )
	                    ),
	                    React.createElement(
	                        'li',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: '' },
	                            '\u5468\u6770\u4F26'
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Nav;
	}(React.Component);

	var Banner = function (_React$Component2) {
	    _inherits(Banner, _React$Component2);

	    function Banner() {
	        _classCallCheck(this, Banner);

	        return _possibleConstructorReturn(this, (Banner.__proto__ || Object.getPrototypeOf(Banner)).apply(this, arguments));
	    }

	    _createClass(Banner, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'banner' },
	                React.createElement('img', { src: '../dist/images/learn2/banner-1.jpg', alt: '' })
	            );
	        }
	    }]);

	    return Banner;
	}(React.Component);
	//Header

	var Header = function (_React$Component3) {
	    _inherits(Header, _React$Component3);

	    function Header() {
	        _classCallCheck(this, Header);

	        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	    }

	    _createClass(Header, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'header' },
	                React.createElement(Nav, null),
	                React.createElement(Banner, null)
	            );
	        }
	    }]);

	    return Header;
	}(React.Component);
	//Content

	var Content = function (_React$Component4) {
	    _inherits(Content, _React$Component4);

	    function Content() {
	        _classCallCheck(this, Content);

	        return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
	    }

	    _createClass(Content, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'content' },
	                'hello react'
	            );
	        }
	    }]);

	    return Content;
	}(React.Component);
	//Footer

	var Footer = function (_React$Component5) {
	    _inherits(Footer, _React$Component5);

	    function Footer() {
	        _classCallCheck(this, Footer);

	        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
	    }

	    _createClass(Footer, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'div',
	                { className: 'footer' },
	                'footer12'
	            );
	        }
	    }]);

	    return Footer;
	}(React.Component);
	//Main 页面容器

	var Main = function (_React$Component6) {
	    _inherits(Main, _React$Component6);

	    function Main() {
	        _classCallCheck(this, Main);

	        return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
	    }

	    _createClass(Main, [{
	        key: 'render',
	        value: function render() {
	            return React.createElement(
	                'section',
	                { className: 'main' },
	                React.createElement(Header, null),
	                React.createElement(Content, null),
	                React.createElement(Footer, null)
	            );
	        }
	    }]);

	    return Main;
	}(React.Component);

	ReactDom.render(React.createElement(Main, { imgsrc: IMGSRC }), document.getElementById('root'));

/***/ },

/***/ 190:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});