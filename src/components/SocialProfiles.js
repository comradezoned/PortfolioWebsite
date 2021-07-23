import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = props => {
    const {link, image, title} = props.socialProfile;
    return (
        <div style={{display: 'inline-block', marginRight: 15}}>
            <a href={link}>
                <img style={{maxHeight: 64, maxWidth: 128}} src={image} alt={title}/>
            </a>
        </div>
    )
}

const SocialProfiles = () => (
    <div>
        <h2>Get In Touch</h2>
        <div>
            {
                SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                    return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />;
                }) 
            }
        </div>
    </div>
)


export default SocialProfiles;