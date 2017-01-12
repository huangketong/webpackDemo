// const React = require('react'),
// ReactDOM =  require('react-dom');
 
import React from 'react';
import ReactDOM from 'react-dom';
require('{css}/first/first.css');
// const Remarkable = require('remarkable');

var data = [
    {id: 1, author: "huangketong", text: "This is one comment"},
    {id: 2, author: "hkt", text: "This is *another* comment"}
];

function App(){
    return(
        <div className='container'>
            <h2>hello React11</h2>
            <h3>welcome to React World</h3>
            <CommentBox />
        </div>
        
    );
};

var CommentBox = React.createClass({
    render: function(){
        return(
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
                <DataList data = {data} />
            </div>
        );
    }
});

var DataList = React.createClass({
    render: function(){
        console.log(this.props.data);
        var dataNodes = this.props.data.map(function(datalist){
            return(
                <Comment author={datalist.author} id={datalist.id}>{datalist.text}</Comment>
            );
        });
        return(
            <div className="dataList">{dataNodes}</div>
        );
    }

});

var CommentList = React.createClass({
    render: function(){
        return(
            <div className="commentList">
                hello, world! I am CommentList.
                <Comment author="huangketong">This is comment</Comment>
                <Comment author="hkt" >This is another comment</Comment>
            </div>
        )
    }
});
var CommentForm = React.createClass({
    render: function(){
        return(
            <div className="commentForm">
                helle, I am CommentForm.
            </div>
        );
    }
});

var Comment = React.createClass({
    render: function(){
        return(
            <div className="comment">
                <h2 className="commentAuthor" id={this.props.id?this.props.id:''}>{this.props.author}</h2>
                {this.props.children}
            </div>
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
ReactDOM.render(<App />, ele);