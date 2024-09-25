import React from 'react'

export const Header = () => {
  return (
    <div>
        <nav className="header">
            <div className="logo-section">
                <h1 className ="title">
                    <span className="portfolio-name">Gehendra</span>
                    <span className="job-title">Software Engineer</span>
                </h1>
            </div>
            <div className="menu-section">
                <ul className ="menu list-none">
                    <li className ="menu-item">
                        <a href="#home">Home</a>
                    </li>
                    <li className ="menu-item">
                        <a href="#skills">Skills</a>
                    </li>
                    <li className ="menu-item">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className ="menu-item">
                        <a href="#about">About</a>
                    </li>
                    <li className ="menu-item">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>

    </div>
  )
}
