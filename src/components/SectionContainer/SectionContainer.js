import React from 'react';

import { About } from './../About/About';
import { Skills } from './../Skills/Skills';


import './section-container.css';

export const SectionContainer = (props) => {
    return (
        <div className="section-container">
            <div className="section-heading-container">
    <h1 className="main-heading">{props.selectedHeading}</h1>
                 <p className="main-quote">{props.selectedQuote} </p>
            </div>
            <div className="section-component">
             {
                 {
                 about:<About bio={props.about.bio}
                 />,
                 skills:<Skills skills={props.skills}/>
                 }[props.selectedSection]
             }
            </div>
        </div>
    )
}