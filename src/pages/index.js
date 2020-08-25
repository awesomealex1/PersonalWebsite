import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
	return (
		<div>
			<h1>Hello!</h1>
			<p>I'm Alex. I'm a computer science student at the University of Edinburgh.</p>
			<a href="https://www.linkedin.com/in/alexander-murphy-5995871a6/"><FontAwesomeIcon icon={faGithub} size="3x"/></a>
			<a href="https://github.com/awesomealex1"><FontAwesomeIcon icon={faLinkedin} size="3x"/></a>
		</div>
	);
}
