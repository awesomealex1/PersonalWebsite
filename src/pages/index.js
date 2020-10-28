import React from "react"
import Container from '../components/container.js'
import CustomIcon from "../components/customIcon.js"
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPortrait } from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"

export default function Home() {
	var icon_color = "black";
	return (
		<Container>
			<h1>Welcome to my website</h1>
			<p>Hi I'm Alex, a computer science student at the University of Edinburgh.</p>
			<p>Take a look at some of my <Link to="projects/"><div className="custom-link">Projects</div></Link></p>
			<div class="icon-links-container">
			<CustomIcon href="https://github.com/awesomealex1" icon={faGithub} color={icon_color} text="Github"></CustomIcon>
			<CustomIcon href="https://www.linkedin.com/in/alexander-murphy-5995871a6/" icon={faLinkedin} color={icon_color} text="Linkedin"></CustomIcon>
			<CustomIcon href="Resume.pdf" icon={faPortrait} color={icon_color} text="Resume"></CustomIcon>
			</div>
		</Container>
	);
}