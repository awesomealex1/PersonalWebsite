import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function CustomIcon(props) {
    return(
        <div className="icon-link">
            <a href={props.href}><FontAwesomeIcon icon={props.icon} size="3x" color={props.color}/>
            <p>{props.text}</p>
            </a>
            
        </div>
    );
}