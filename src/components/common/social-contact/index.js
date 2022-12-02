
import React from 'react'
import './social-contact.css'
import {SocialData} from '../../../assets/data/social'

export default function SocialContact() {
    const data= SocialData;
  return (
    <div className='social-contact'>
        {data.map((item)=>{
            return(
                <a href={item.link} target={'_blank'}>
                    <div className="social-icon-div">
                        <img src={item.icon}  className='social-icon'/>

                    </div>
                </a>
            )

        })}
    </div>
  )
}
