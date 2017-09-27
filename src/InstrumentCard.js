import React, { Component } from 'react'
import TrackSelectorButton from './TrackSelectorButton'

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
    selectTrack = (track) => {
        this.setState({
            selected: track
        });
        this.props.selectTrack(this.props.instrument, track);
    };

    createButton = (track) => {
        let selected = false;
        return (
            <div>
                <TrackSelectorButton track={track} selectTrack={this.selectTrack} selected={selected} />
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

export default InstrumentCard;