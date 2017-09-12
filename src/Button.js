import React, { Component } from 'react';

class Button extends Component {
    getInitialState() {
        return {
        }
    }

    render() {
        return <button className='btn-primary' onClick={this.props.perform}><img src={this.props.icon} alt='icon'/></button>;
    }
}

class ChickenButton extends Component {
    performCluck() {
        const audio = new Audio(process.env.PUBLIC_URL + 'ukulele.mp3');
        audio.play();
    }

    render() {
        return <Button perform={this.performCluck} icon={process.env.PUBLIC_URL + 'chicken.png'} />
    }
}

class CowButton extends Component {
    performMoo() {
        const audio = new Audio(process.env.PUBLIC_URL + 'energy.mp3');
        audio.play();
    }

    render() {
        return <Button perform={this.performMoo} icon={process.env.PUBLIC_URL + 'cow.png'} />
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

    FoodGroup:
        props:
            title: string
            numButtons: int
        state:
            selectedIndex: int
 */

export {
    ChickenButton,
    CowButton
};