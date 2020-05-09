import React from 'react';
// import hero from 'data/hero';
import exp from 'data/experiences';
import Profile from 'routes/Resume/Profile/Profile';
import Skills from 'routes/Resume/Skills/Skill-List';
import Experience from 'routes/Resume/Experience/Experience';
import Wrapper from './Print.styled';

const Print = () => (
  <Wrapper>
    <Profile />

    <ul className="mt1 perks">
      <h5>Perks</h5>

      <li>
        #FluentEnglish #UIUX #CommandLine #Gamification #Performance
        #CuttingEdgeSoftware #MicroServices #Versatile #Curious #GoodPractices
        #CleanCode
      </li>
    </ul>

    <hr />
    <Skills />

    <hr />
    <h4>Work Experience</h4>

    {exp.reverse().map((experience) => (
      <Experience key={experience.name} exp={experience} print />
    ))}
  </Wrapper>
);

export default Print;
