const React = require('react');
const ReactDom = require('react-dom');

var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  loadCommentsFromServer: function(){
      $.ajax({
          url: this.props.url,
          dataType: 'json',
          cache: false,
          success: function(data){
              this.setState({data: data});
          }.bind(this),
          error: function(xhr, status, err){
              console.error(this.props.url, status, err.toString());
          }.bind(this)
      });
  },
  commentDidMount: function(){
      this.loadCommentsFromServer();
      setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
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


ReactDom.render( <CommentBox url="/api/comments"/> , document.getElementById('root'));