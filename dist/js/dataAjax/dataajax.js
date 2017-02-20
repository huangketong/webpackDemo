webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var ReactDom = __webpack_require__(32);

	var CommentBox = React.createClass({
	    displayName: 'CommentBox',

	    getInitialState: function getInitialState() {
	        return { data: [] };
	    },
	    loadCommentsFromServer: function loadCommentsFromServer() {
	        $.ajax({
	            url: this.props.url,
	            dataType: 'json',
	            cache: false,
	            success: function (data) {
	                this.setState({ data: data });
	            }.bind(this),
	            error: function (xhr, status, err) {
	                console.error(this.props.url, status, err.toString());
	            }.bind(this)
	        });
	    },
	    commentDidMount: function commentDidMount() {
	        this.loadCommentsFromServer();
	        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	    },
	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'commentBox' },
	            React.createElement(
	                'h1',
	                null,
	                'Comments'
	            ),
	            React.createElement(CommentList, { data: this.state.data }),
	            React.createElement(CommentForm, null)
	        );
	    }
	});

	//class CommentBox extends React.Component{
	//    constructor(){
	//       super();
	//        this.state = [1,2,4];
	//    }
	//
	//    render(){
	//        return(
	//            <div className="commentBox">
	//                <h1>Comments</h1>
	//                <CommentList data={this.props.data} />
	//                <CommentForm />
	//            </div>
	//        );
	//    }
	//}


	ReactDom.render(React.createElement(CommentBox, { url: '/api/comments' }), document.getElementById('root'));

/***/ }
]);