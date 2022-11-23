import React from 'react'
import SocialContact from '../../common/social-contact/index';
import './about.css';

function About() {
  return (
    <div className='about'>
      <div className="about-top">
        <div className="about-info">
          Hi This is <br /><span className='info-name'>Aakash</span><br />Iam a Front End Developer<br/>
          this is my new portfolio design
        </div>
        <div className="about-photo">
          <img src={require('../../../assets/icons/about.svg').default} className='about-picture'/>
        </div>

      </div>
      
    <SocialContact />
    </div>
  )
}

export default About