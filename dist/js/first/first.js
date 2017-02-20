webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//const React = require('react'),
	//ReactDOM =  require('react-dom');

	__webpack_require__(178);
	// const Remarkable = require('remarkable');

	var data = [{ id: 1, author: "huangketong", text: "This is one comment" }, { id: 2, author: "hkt", text: "This is *another* comment" }];

	function App() {
	    return _react2.default.createElement(
	        'div',
	        { className: 'container' },
	        _react2.default.createElement(
	            'h2',
	            null,
	            'hello React11'
	        ),
	        _react2.default.createElement(
	            'h3',
	            null,
	            'welcome to React World'
	        ),
	        _react2.default.createElement(CommentBox, null)
	    );
	};

	var CommentBox = _react2.default.createClass({
	    displayName: 'CommentBox',

	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: 'commentBox' },
	            _react2.default.createElement(
	                'h1',
	                null,
	                'Comments'
	            ),
	            _react2.default.createElement(CommentList, null),
	            _react2.default.createElement(CommentForm, null),
	            _react2.default.createElement(DataList, { data: data })
	        );
	    }
	});

	var DataList = _react2.default.createClass({
	    displayName: 'DataList',

	    render: function render() {
	        console.log(this.props.data);
	        var dataNodes = this.props.data.map(function (datalist) {
	            return _react2.default.createElement(
	                Comment,
	                { author: datalist.author, id: datalist.id },
	                datalist.text
	            );
	        });
	        return _react2.default.createElement(
	            'div',
	            { className: 'dataList' },
	            dataNodes
	        );
	    }

	});

	var CommentList = _react2.default.createClass({
	    displayName: 'CommentList',

	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: 'commentList' },
	            'hello, world! I am CommentList.',
	            _react2.default.createElement(
	                Comment,
	                { author: 'huangketong' },
	                'This is comment'
	            ),
	            _react2.default.createElement(
	                Comment,
	                { author: 'hkt' },
	                'This is another comment'
	            )
	        );
	    }
	});
	var CommentForm = _react2.default.createClass({
	    displayName: 'CommentForm',

	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: 'commentForm' },
	            'helle, I am CommentForm.'
	        );
	    }
	});

	var Comment = _react2.default.createClass({
	    displayName: 'Comment',

	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: 'comment' },
	            _react2.default.createElement(
	                'h2',
	                { className: 'commentAuthor', id: this.props.id ? this.props.id : '' },
	                this.props.author
	            ),
	            this.props.children
	        );
	    }
	});

	// var Comment = React.createClass({
	//   rawMarkup: function() {
	//     var md = new Remarkable();
	//     var rawMarkup = md.render(this.props.children.toString());
	//     return { __html: rawMarkup };
	//   },

	//   render: function() {
	//     return (
	//       <div className="comment">
	//         <h2 className="commentAuthor">
	//           {this.props.author}
	//         </h2>
	//         <span dangerouslySetInnerHTML={this.rawMarkup()} />
	//       </div>
	//     );
	//   }
	// });

	var ele = document.getElementById('root1');
	_reactDom2.default.render(_react2.default.createElement(App, null), ele);

/***/ },

/***/ 178:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});