import React, { Component } from 'react';
import data from './data.json'
import './App.css';

class TrackSelectorButton extends Component {
    select = () => {
        this.props.select(this.props.track);
    };

    render() {
        let className = 'btn-primary';
        if(this.props.selected) {
            className = 'btn-primary active';
        }
        return (
            <button className={className} onClick={this.select}>
                {this.props.track}
            </button>
        );
    }
}

class InstrumentName extends Component {
    render() {
        return (
            <h2>
                {this.props.name}
            </h2>
        )
    }
}

class InstrumentCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: ''
        };
    }

    selectTrack = (track) => {
        this.setState({
            selected: track
        });
        this.props.playTrack(track);
    };

    createButton = (track) => {
        let selected = false;
        if(track === this.state.selected) {
            selected = true;
        }
        return (
            <div>
                <TrackSelectorButton track={track} select={this.selectTrack} selected={selected} />
            </div>
        )
    };

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
    // createCard(instrument, tracks) {
    //     return (
    //         <td>
    //             <InstrumentCard instrument={instrument} tracks={tracks} />
    //         </td>
    //     )
    // }
    playTrack = (track) => {
        alert(track);
    };

    render() {
        let data = this.props.data;

        return (
            <table className='table'>
                <td>
                    <InstrumentCard instrument='drums' tracks={data.drums.tracks} playTrack={this.playTrack} />
                </td>
                <td>
                    <InstrumentCard instrument='bass' tracks={data.bass.tracks}  playTrack={this.playTrack} />
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
                <AppHeader text='Habanero'/>
                <InstrumentTable data={data}/>
            </div>
        );
    }
}

export default App;
