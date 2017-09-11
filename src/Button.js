import React, { Component } from 'react';

class Button extends Component {
    render() {
        return <input type='image' className='button' src={this.props.icon} onClick={this.props.onClick} alt=''/>;
    }
}

class ChickenButton extends Component {
    performCluck() {
        const audio = new Audio(process.env.PUBLIC_URL + 'ukulele.mp3');
        audio.play();
    }

    render() {
        return <Button onClick={this.performCluck} icon={process.env.PUBLIC_URL + 'chicken.png'} />
    }
}

class CowButton extends Component {
    performMoo() {
        const audio = new Audio(process.env.PUBLIC_URL + 'energy.mp3');
        audio.play();
    }

    render() {
        return <Button onClick={this.performMoo} icon={process.env.PUBLIC_URL + 'cow.png'} />
    }
}

export {
    ChickenButton,
    CowButton
};