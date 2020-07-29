import React from 'react';
import { SideNav } from '../SideNav/SideNav';
import './portfolio.css';
import { SectionContainer } from '../SectionContainer/SectionContainer';
import { about } from '../../constants/About';


export const Portfolio = (props) => {
    return (
        <div className="portfolio-container">
            <div className="sidenav-container">
                <SideNav  handleSelectSection={props.handleSelectSection}/>
            </div>
            <div className="main-section-container">
                <SectionContainer
                about={props.about}
                skills={props.skills}
                selectedHeading={props.selectedHeading}
                selectedSection={props.selectedSection}
                selectedQuote={props.selectedQuote}

                />
            </div>
            
        </div>
    );
};