import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/counters';

ReactDOM.render( < Counters / > , document.getElementById('root'));
registerServiceWorker();

//Testing the react app
// const element = < h1 > Hello React!! < /h1>;
// ReactDOM.render(element, document.getElementById('root'));