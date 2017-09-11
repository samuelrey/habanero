import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ChickenButton, CowButton} from './Button';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ChickenButton />, document.getElementById('chicken_container'));
ReactDOM.render(<CowButton />, document.getElementById('cow_container'));
registerServiceWorker();
