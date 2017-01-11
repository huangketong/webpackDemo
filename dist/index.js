webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(183);


/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var login = __webpack_require__(184);
	// 使用webpack.ProvidePlugin插件后，每个js 文件中就不用引用jQuery了
	var $ = __webpack_require__(185);

	__webpack_require__(187);

	$('.userName').html(login.sayName());

	$('.div').html('hello joyowo.com!');

	console.log(login.sayName());
	console.log('imports userName is ' + login.userName);

	console.log('this is my webpack!');

/***/ },

/***/ 184:
/***/ function(module, exports) {

	"use strict";

	var userName = "joyowo.com";

	module.exports.userName = userName;
	module.exports.sayName = function () {
	    return userName;
	};

/***/ },

/***/ 187:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});