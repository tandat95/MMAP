// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
// import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Demo from './components/Demo';

const rootElement = document.getElementById('root');

ReactDOM.render(<Demo />, rootElement);

registerServiceWorker();
