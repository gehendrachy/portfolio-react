import React from 'react'
import {Slider1,Slider2,Slider3} from "./image.js";
import { Card } from './Card';

export const Projects = () => {
    const projects = [
        {
            image:Slider1,
            github:"",
            url:"",
            title:"Personal Portoflio",
            description:"Tech Stack : HTML, CSS, Javascript, React",
            date:"12 August 2024"
        },
        {
            image:Slider2,
            github:"",
            url:"",
            title:"Personal Portoflio",
            description:"Tech Stack : HTML, CSS, Javascript, React",
            date:"12 August 2024"
        },
        {
            image:Slider3,
            github:"",
            url:"",
            title:"Personal Portoflio",
            description:"Tech Stack : HTML, CSS, Javascript, React",
            date:"12 August 2024"
        },
        {
            image:Slider2,
            github:"",
            url:"",
            title:"Personal Portoflio",
            description:"Tech Stack : HTML, CSS, Javascript, React",
            date:"12 August 2024"
        },
        {
            image:Slider1,
            github:"",
            url:"",
            title:"Personal Portoflio",
            description:"Tech Stack : HTML, CSS, Javascript, React",
            date:"12 August 2024"
        },
        {
            image:Slider3,
            github:"",
            url:"",
            title:"Personal Portoflio",
            description:"Tech Stack : HTML, CSS, Javascript, React",
            date:"12 August 2024"
        }
    ]
    console.log(projects);
  return (

    
    <div>
        <div className="project-section" id="projects">
            <div className="title">
                <h1>My Recent Works</h1>
            </div>
            <div className="projects-gallery">
                
                {
                    projects.map((item,i)=> <Card key={i} {...item}/>)

                }

            </div>
            
            
        </div>
    </div>
  )
}
