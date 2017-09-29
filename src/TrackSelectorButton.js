import React, { Component } from 'react'

class TrackSelectorButton extends Component {
    selectTrack = () => {
        this.props.selectTrack(this.props.track);
    };

    render() {
        let className = 'btn-primary';
        if(this.props.selected) {
            className = 'btn-primary active';
        }
        return (
            <button className={className} onClick={this.selectTrack}>
                <img src={this.props.icon} alt='' />
            </button>
        );
    }
}

export default TrackSelectorButton;