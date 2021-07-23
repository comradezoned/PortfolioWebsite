import React, { Component} from 'react';

const TITLES = [
    'Software Developer',
    'Electrical Engineer',
    'Mechanical Engineer',
    'Systems Administrator',
    'Robotics Enthusiast'
];

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true};

    componentDidMount() {
        console.log('Title comp mounted.');

        this.timeout = setTimeout(() => this.setState({fadeIn: false}), 2000);
        this.animateTitles();
    }

    componentWillUnmount() {
        console.log('Title component about to unmount.');

        clearInterval(this.titleInterval);
        clearTimeout(this.timeout)
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({titleIndex, fadeIn: true});
            this.timeout = setTimeout(() => this.setState({fadeIn: false}), 2000);
        }, 4000);
    }

    render() {
        const {fadeIn, titleIndex} = this.state;
        const title = TITLES[titleIndex];
        
        return (
            <p className={fadeIn ? 'title-FadeIn' : 'title-FadeOut'}>I am: {title}</p>
        )
    }
}

export default Title;