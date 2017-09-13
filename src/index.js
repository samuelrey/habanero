import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Card} from "./Button"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Card title='bangers' tracks={['north cack','accordion','dat $tick']} />, document.getElementById('card'));
ReactDOM.render(<Card title='basslines' tracks={['last living soul','hard to concentrate']} />, document.getElementById('card2'));
registerServiceWorker();
