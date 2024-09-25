import React from 'react'

export const Card = (props) => {
  return (
    <div className="project-single">
    <img src={props.image} alt="no-image" className ="project-image" width="100%"></img>
    <div className="overlay">
        <div className="details">
            <div className="icons">
                <a href={props.github}><i classNam="fa-brands fa-2x fa-square-github"></i></a> &nbsp;
                <a href={props.url}><i classNam="fa-solid fa-2x fa-square-share-nodes"></i></a>
            </div>
            <h2>
                <a href={props.title}>Personal Portfolio</a>
            </h2>
            <p>{props.description}</p>
            <p>{props.date}</p>
        </div>
    </div>
</div>
  )
}
