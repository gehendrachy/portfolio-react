import React from 'react'
import { HeroImage } from './image'

export const AboutMe = () => {
  return (
    <div>
        <div className="about-section" id="about">
            <div className="about">
               
                <div className="content">
                    <div className="about-image">
                        <img src={HeroImage} alt="about-image"></img>
                    </div>
                    <div className="description">
                        <h2>Gehendra Chaudhary</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores ea quod molestiae libero eos mollitia amet reiciendis rem, eaque odit et unde quaerat, culpa laborum. Atque odit dolorum in vero!</p>
                        <br></br>
                        <p>Interests</p>
                        <ul className ="list-none">
                            <li><i className  ="fa-solid fa-code"></i> Coding</li>
                            <li><i className  ="fa-solid fa-music"></i> Music</li>
                            <li><i className  ="fa-solid fa-person-running"></i> Football</li>
                            <li><i className  ="fa-solid fa-person-hiking"></i> Adventure</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
