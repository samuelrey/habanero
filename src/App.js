import React, { Component } from 'react';
import data from './data.json'
import './App.css';

class TrackSelectorButton extends Component {
    render() {
        let className = 'btn-primary';

        return (
            <button className={className}>
                {this.props.track}
            </button>
        );
    }
}

class InstrumentName extends Component {
    render() {
        return (
            <h3>
                {this.props.name}
            </h3>
        )
    }
}

class InstrumentCard extends Component {
    createButton(track) {
        return (
            <div>
                <TrackSelectorButton track={track} />
            </div>
        )
    }

    render() {
        let tracks = this.props.tracks;

        return (
            <div>
                <InstrumentName name={this.props.instrument} />
                {tracks.map(this.createButton)}
            </div>
        )
    }
}

class InstrumentTable extends Component {
    createCard(instrument, tracks) {
        return (
            <td>
                <InstrumentCard instrument={instrument} tracks={tracks} />
            </td>
        )
    }

    render() {
        let data = this.props.data;

        return (
            <table className='table'>
                <td>
                    <InstrumentCard instrument='drums' tracks={data.drums.tracks} />
                </td>
                <td>
                    <InstrumentCard instrument='bass' tracks={data.bass.tracks} />
                </td>
            </table>
        )
    }
}

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
                <AppHeader text='Beat Burrito'/>
                <InstrumentTable data={data}/>
            </div>
        );
    }
}

export default App;
