import React from 'react'
import SocialContact from '../../common/social-contact/index';
import './about.css';

function About() {
  return (
    <div className='about'>
      <div className="about-top">
        <div className="about-info">
         <span className='info-name'>Aakash</span>  Here,<br/>Iam a versatile Frontend Developer<br/>
          who is  Responsible, creative, and hardworking. <br/>I have a passion for learning new technologies and<br/>I am a quick learner and I am always ready to take on new challenges.
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