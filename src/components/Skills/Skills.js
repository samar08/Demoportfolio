import React from 'react';

import { SkillCard } from './../SkillCard/SkillCard';

import './skills.css';

export const Skills = ({ skills }) => {
    return (
        <div className="skills-container">
            <h3>Industry Knowledge</h3>
            <div className="industry-skill-container">
            {
                skills?
                skills.industryKnowledge.map(skill=><SkillCard skill={skill} key={skill}/>)
                :<SkillCard skill="Web development"/>
            }

            </div>
        </div>
    )
}