import React from 'react'
import HeroImage from'./../assets/profile-image.png';

export const HeroAndBanner = () => {
  return (
    <div>
         <div className="section-hero" id="home">
            <div className="title-hero">
                <h3>Hi, I'm <b>Gehendra Chaudhary</b></h3>
                <div className="headtext">
                    <h2 className ="job-post">Software Engineer</h2>
                    <h2 className ="job-post">Full Stack Developer</h2>
                    <h2 className ="job-post">Table Games Dealer</h2>
                </div>
                
                <p>I'm a digital architect - designing and coding intuitive, high-performing systems that make a tangible impact.</p>
                
                <a className  ="btn btn-download" href="./assets/resume.pdf" download="download">Download <i className  ="fa-solid fa-download"></i></a>
            </div>
            <div className="image-hero">
                <img src={HeroImage} alt="no-image" width="50%"></img>
            </div>
        </div>
        
        <div className="section-banner">
            <ul className ="banners list-none">
                
                <li className ="banner-item">
                    <div className="icon">
                        <i className  ="fa-solid fa-graduation-cap fa-lg"></i>
                    </div>
                    <div className="details">
                        <p>
                            <span classNam="s-title">Software Engineering</span> <br></br>
                            <small className  ="status">Graduation</small>
                        </p>
                    </div>
                </li>
                
                <div className="separator"></div>
                
                <li className ="banner-item">
                    <div className="icon">
                        <i className  ="fa-solid fa-laptop-code fa-lg"></i>
                    </div>
                    <div className="details">
                        <p>
                            <span classNam="s-title">100+ Projects</span> <br></br>
                            <small className  ="status">Completed</small>
                        </p>
                    </div>
                </li>
                
                <div className="separator"></div>
                
                <li className ="banner-item">
                    <div className="icon">
                        <i className  ="fa-solid fa-briefcase fa-lg"></i>
                    </div>
                    <div className="details">
                        <p>
                            <span classNam="s-title">4+ Years</span> <br></br>
                            <small className  ="status">Experience</small>
                        </p>
                    </div>
                </li>
            </ul>
        </div>

    </div>
  )
}
