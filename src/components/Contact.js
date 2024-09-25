import React from 'react'

export const Contact = () => {
  return (
    <div>
        <div className="contact-section" id="contact">
            <h2>Get In Touch</h2>
            <ul className ="social-container list-none">
                <li className ="social-icon">
                    <a href="https://www.linkedin.com/in/gehendrachaudhary/" target="_blank">
                        <i className  ="fa-brands fa-4x fa-linkedin"></i>
                    </a>
                </li>
                <li>    
                    <a href="" target="_blank">
                        <i className  ="fa-brands fa-4x fa-square-github"></i>
                    </a>
                </li>
                <li>
                    <a href="" target="_blank">
                        <i className  ="fa-brands fa-4x fa-square-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="" target="_blank">
                        <i className  ="fa-brands fa-4x fa-youtube"></i>
                    </a>
                </li>
            </ul>
            <p>OR</p>
            <div className="button-box">
                <a className  ="mail-to-btn" href="mailto:gehendra.chy@gmai.com" target="_blank">
                    <span>gehendra.chy@gmail.com</span>
                    <i className  ="fa-solid fa-paper-plane"></i>
                </a>
                
            </div>
        </div>
    </div>
  )
}
