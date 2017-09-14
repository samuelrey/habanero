import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Card} from './Button'
import data from './data.json'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Card title='drums' tracks={data.drums.tracks} />, document.getElementById('card'));
ReactDOM.render(<Card title='basslines' tracks={data.bass.tracks} />, document.getElementById('card2'));
registerServiceWorker();
