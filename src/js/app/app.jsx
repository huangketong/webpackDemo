import 'bootstrap/scss/bootstrap.scss';

const React = require('react'),
     ReactDom = require('react-dom');

import DeskMark from 'components/DeskMark';

ReactDom.render(
    <DeskMark />,
    document.getElementById('root')
);