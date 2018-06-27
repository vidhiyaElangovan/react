import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './assets/js/registerServiceWorker';
import Router from './components/routes/routes';

ReactDOM.render(
    <Router />, document.getElementById('root'));
registerServiceWorker();
