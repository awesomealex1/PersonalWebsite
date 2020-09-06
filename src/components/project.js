import React from "react"
import projectStyles from "./project.module.scss"

export default function Project(props) {
    return(
        <div className={projectStyles.project}>
            <a href={props.link}><h2>{props.name}</h2>
            <img src={props.image}></img></a>
            <p>{props.description}<a href={props.github} className="custom-link">(Github)</a></p>
        </div>
    );
}