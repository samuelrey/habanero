import React, { Component } from 'react';
import './App.css';
import data from './data.json'
import InstrumentTable from './InstrumentTable'

class AppHeader extends Component {
    render() {
        return (
            <div className='App-header'>
                <h2>{this.props.text}</h2>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div className='App'>
                <AppHeader text='Habanero'/>
                <InstrumentTable data={data}/>
            </div>
        );
    }
}

export default App;
