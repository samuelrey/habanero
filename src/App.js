import React, { Component } from 'react';
import { Howl } from 'howler'
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
        this.props.playTrack(track, this.props.instrument);
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
    constructor(props) {
        super(props);
        this.state = {
            drums: new Howl({
                src: ['drum-tracks.wav'],
                sprite: {
                    one: [0, 2892, true],
                    two: [5892, 11892, true]
                }
            }),
            bass: new Howl({
                src: ['bass-tracks.wav'],
                sprite: {
                    one: [0, 11566, true],
                    two: [14566, 26566, true]
                }
            }),
            selectedDrumTrack: '',
            selectedBassTrack: ''
        }
    }

    playTrack = (track, instrument) => {
        // if(this.state.drums !== null) {
        //     this.state.drums.stop();
        // }
        // if(this.state.bass !== null) {
        //     this.state.bass.stop();
        // }
        // switch(instrument) {
        //     case 'drums':
        //         this.setState({
        //             drums: new Howl({
        //                 src: [track]
        //             })
        //         });
        //         break;
        //     case 'bass':
        //         this.setState({
        //             bass: new Howl({
        //                 src: [track]
        //             })
        //         });
        //         break;
        //     default:
        //         console.log('throw exception');
        //         break;
        // }
        // if(this.state.drums) {
        //     this.state.drums.play();
        // }
        // if(this.state.bass) {
        //     this.state.bass.play();
        // }
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
