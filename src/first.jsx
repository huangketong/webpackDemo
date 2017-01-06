// const React = require('react'),
// ReactDOM =  require('react-dom');
 
import React from 'react';
import ReactDOM from 'react-dom';

function App(){
    return(
        <div className='container'>
            <h2>hello React11</h2>
            <h3>welcome to React World</h3>
        </div>
    );
}

var ele = document.getElementById('root1');
ReactDOM.render(<App />, ele);