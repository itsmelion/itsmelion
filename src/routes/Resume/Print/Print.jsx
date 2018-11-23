import React from 'react';
// import hero from 'data/hero';
import exp from 'data/experiences';
import Profile from '../Profile/Profile';
import Experience from '../Experience/Experience';
import './Print.scss';

const Print = React.memo(() => (
  <main id="Print">
    <Profile />

    <ul className="mt1 perks">
      <h6>Perks</h6>

      <li>
        #FluentEnglish #UIUX #CommandLine #Gamification #Performance
        #CuttingEdgeSoftware #MicroServices #Versatile #Curious #GoodPractices
        #CleanCode
      </li>
    </ul>

    <hr />

    <h4>Work Experience</h4>

    {exp.map(experience => (
      <Experience print exp={experience} />
    ))}
  </main>
));

export default Print;
