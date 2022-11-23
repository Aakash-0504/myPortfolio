import React from 'react'
import './mobile.css'

function Mobile({isOpen,setIsOpen}) {
  return (
    <div className='mobile'>
        <div className='close-icon' onClick={()=> setIsOpen(!isOpen)}>
        <img src="https://img.icons8.com/sf-regular/48/null/close-window.png"/>
        </div>
        <div className="mobile-options">
            <div className="mobile-option">
                <a href='#project'>
                    Projects
                </a>
            </div>
            <div className="mobile-option">
                <a href='#skills'>
                    Skills
                </a>
            </div>
            <div className="mobile-option">
                <a href='#contact'>
                    Contact
                </a>
            </div>

            </div>

    </div>
  )
}

export default Mobile