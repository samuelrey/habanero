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
        this.props.selectTrack(this.props.name, track);
    };

    createTrackSelectorButton = (track) => {
        let selected = this.props.selectedTrack === track;
        return (
            <div>
                <TrackSelectorButton
                    icon={this.props.icon}
                    track={track}
                    selected={selected}
                    selectTrack={this.selectTrack} />
            </div>
        );
    };

    createTrackSelectorButtons = () => {
        return this.props.tracks.map(this.createTrackSelectorButton);
    };

    render() {
        return (
            <div>
                <InstrumentName name={this.props.name} />
                {this.createTrackSelectorButtons()}
            </div>
        );
    }
}

export default InstrumentCard;