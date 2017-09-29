import React, { Component } from 'react'
import { Howl } from 'howler'
import InstrumentCard from './InstrumentCard'

class InstrumentTable extends Component {
    constructor(props) {
        super(props);
        this.howlers = this.createHowlers(this.props.data);
        for(let instrument in this.howlers) {
            console.log(this.howlers[instrument].state());
        }
        this.state = {
            selectedTracks: {}
        }
    }

    stopSelectedTracks = () => {
        for(let instrument in this.state.selectedTracks) {
            this.howlers[instrument].stop();
        }
    };

    selectTrack = (instrument, track) => {
        // TODO:
        this.stopSelectedTracks();
        let selectedTracks = Object.assign({}, this.state.selectedTracks);
        if(selectedTracks[instrument] === track) {
            delete selectedTracks[instrument];
        }
        else {
            selectedTracks[instrument] = track;
        }
        for(let key in this.state.selectedTracks) {
            selectedTracks[key] = this.state.selectedTracks[key];
        }
        this.setState({selectedTracks});
        this.playSelectedTracks();
    };

    playSelectedTracks = () => {
        // TODO: playSelectedTracks the selected tracks for each instrument
        for(let t in this.state.selectedTracks) {
            let track = this.state.selectedTracks[t];
            this.howlers[t].play(track);
        }
    };

    createInstrumentCards = () => {
        let data = this.props.data;
        let instruments = [];
        for(let instrument in data) {
            let selectedTrack = this.state.selectedTracks[instrument];
            let tracks = data[instrument].tracks;
            let icon = data[instrument].icon;
            instruments.push(
                <td>
                    <InstrumentCard
                        name={instrument}
                        tracks={tracks}
                        icon={icon}
                        selectedTrack={selectedTrack}
                        selectTrack={this.selectTrack} />
                </td>);
        }
        return instruments;
    };

    createHowlers = (data) => {
        let instruments = {};
        for(let instrument in data) {
            instruments[instrument] = new Howl({
                src: [data[instrument].src],
                sprite: this.createSprites(data[instrument].tracks)
            });
        }
        return instruments;
    };

    createSprites = (tracks) => {
        let sprites = {};
        for(let track in tracks) {
            sprites[tracks[track].title] = [tracks[track].start, tracks[track].duration, true];
        }
        return sprites;
    };

    render() {
        return (
            <table className='table'>
                {this.createInstrumentCards()}
            </table>
        )
    }
}

export default InstrumentTable;