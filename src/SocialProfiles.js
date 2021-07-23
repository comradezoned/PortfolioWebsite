import React, {Component} from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component {
    render(){
        const {link, image, title} = this.props.socialProfile;
        return (
            <div style={{display: 'inline-block', marginRight: 15}}>
                <a href={link}>
                    <img style={{maxHeight: 64, maxWidth: 128}} src={image} alt={title}/>
                </a>
            </div>
        )
    }
}

class SocialProfiles extends Component{
    render(){
        return (
            <div>
                <h2>Get In Touch</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                            return <SocialProfile key={SOCIAL_PROFILES.id} socialProfile={SOCIAL_PROFILE} />;
                        }) 
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;