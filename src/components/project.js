import React from "react"

export default function Project(props) {
    return(
        <div>
            <a href={props.link}><h2>{props.name}</h2></a>
            <img src={props.image}></img>
            <p>{props.description}<a href={props.github}>(Github)</a></p>
        </div>
    );
}