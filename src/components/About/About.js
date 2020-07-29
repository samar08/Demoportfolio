import React from 'react';

import './about.css';

export const About = (props) => {
    return (
        <div className="about-container">
            <p>{props.bio}</p>
        </div>
    )
}