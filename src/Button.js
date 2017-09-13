import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    toggleAudio = () => {
        alert(this.props.audio);
    };

    render() {
        return (
            <button className='btn-primary' onClick={this.toggleAudio}>
                <img src={this.props.icon} alt='icon'/>
            </button>
        );
    }
}

class Card extends Component {
    constructor(props) {
        super(props);
    }

    createButton(track) {
        return <p>{track}</p>
    }

    createButtons(tracks) {
        return tracks.map(this.createButton);
    }

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                {this.createButtons(this.props.tracks)}
            </div>
        );
    }
}

/*
    Button:
        props:
            icon: string
            audio: string
        state:
            gain: GainNode
        initialState:
            gain: 0
        events:
            onClick: toggle gain between 0 & .25

    Card:
        props:
            title: string
            numButtons: int
        state:
            selectedIndex: int
 */

export {
    Card,
};