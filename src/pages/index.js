import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
	return (
		<div>
			<h1>Hello!</h1>
			<FontAwesomeIcon icon={faGithub} size="5x"/>
		</div>
	);
}
