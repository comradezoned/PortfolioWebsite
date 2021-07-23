import React, {Component} from 'react';
import PROJECTS from '../data/projects';
import Projects from './Projects';
import SOCIAL_PROFILES from '../data/socialProfiles';
import SocialProfiles from './SocialProfiles';
import profilePicture from 'url:../assets/profilePicture.jpg';
import Title from './Title';
import Requests from './Request';
/*
class RegularClass{}
class ComponentClass extends Component {}
const regularClassInst = new RegularClass();
const componentClassInst = new ComponentClass();
*/

class App extends Component {
    state = {displayBiography: false};
    /*
    constructor() {
        super();

        this.toggleBio = this.toggleBio.bind(this);
    }
    */
    toggleBio = () => {
        this.setState({displayBiography: !this.state.displayBiography});
    }

    render(){
        /*
        const biography = this.state.displayBiography ? (
        <div>
            <p>I live in the Greater Nashville Area.</p>
            <p>I have a passion for linear motion systems, machining, software development, electrical engineering and computing.</p>
        </div>
        ) : null;
        */
        return (
            <div>
                <img src={profilePicture} alt='Profile Picture' className='profilePicture'/>
                <h1>Thomas Dolash</h1>
                <Title />
                {
                    this.state.displayBiography ? (
                        <div>
                            <p>I live in the Greater Nashville Area.</p>
                            <p>I have a passion for linear motion systems, machining, software development, electrical engineering and computing.</p>
                            <button onClick={this.toggleBio}>Show less Information</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleBio}>More About Me</button>
                        </div>
                    )
                }
                <hr/>
                <Projects/>
                <hr/>
                <SocialProfiles/>
                <Requests/>
            </div>
        )
    }
}

export default App;