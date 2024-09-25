import React from 'react'

export const Footer = () => {
  return (
    <div>
        <footer className ="footer">
            <div className="links">
                <div className="local-links">
                    <h3>Links</h3>
                    <ul className ="list-none">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="contact">Contact</a></li>
                    </ul>
                </div>
                
                <div className="local-links">
                    <h3>Social Links</h3>
                    <ul className ="list-none">
                        <li><a href="https://www.linkedin.com/in/gehendrachaudhary/" target="_blank">LinkedIn</a></li>
                        <li><a href="https://github.com/gehendrachy?tab=repositories" target="_blank">Github</a></li>
                        <li><a href="" target="_blank">Facebook</a></li>
                        <li><a href="" target="_blank">Youtube</a></li>
                    </ul>
                </div>
                
            </div>
            <div className="bottom">
                <p>Coded with <i className="fa-solid fa-heart"></i> by Gehendra Chaudhary</p>
            </div>
        </footer>
    </div>
  )
}
