import { Howl } from 'howler'
import React, { Component } from 'react'
import InstrumentCard from './InstrumentCard'

class InstrumentTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drums: new Howl({
                src: ['drum-tracks.wav'],
                sprite: {
                    'drums01-83bpm.wav': [0, 2892, true],
                    two: [5892, 6000, true]
                }
            }),
            bass: new Howl({
                src: ['bass-tracks.wav'],
                sprite: {
                    'bass01-166bpm.wav': [0, 11566, true],
                    two: [14566, 12000, true]
                }
            }),
            selectedTracks: {}
        }
    }

    selectTrack = (instrument, track) => {
        let selectedTracks = this.state.selectedTracks;
        selectedTracks[instrument] = track;
        this.setState(selectedTracks);
        this.play();
    };

    play = () => {
        for(let t in this.state.selectedTracks) {
            let track = this.state.selectedTracks[t];
            this.state.t.play(track);
        }
    };

    render() {
        let data = this.props.data;

        return (
            <table className='table'>
                <td>
                    <InstrumentCard instrument='drums' tracks={data.drums.tracks} selectTrack={this.selectTrack} />
                </td>
                <td>
                    <InstrumentCard instrument='bass' tracks={data.bass.tracks}  selectTrack={this.selectTrack} />
                </td>
            </table>
        )
    }
}

export default InstrumentTable;