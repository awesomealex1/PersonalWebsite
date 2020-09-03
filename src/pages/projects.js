import React from "react";
import Container from "../components/container";
import Search from "../images/search.png";
import PersonalWebsite from "../images/personalWebsite.png";
import Project from "../components/project.js"

export default function Projects() {
    return(
        <Container>
            <h1>Some of my projects</h1>
            
            <Project name="Search Algorithm Visualiser" link="https://alexmurphy.me/" image={Search} description="
            A website that visualises search algorithms (Depth First Search, Breadth First Search, A* Search). 
            Features include a resizable grid, possibility to add walls, move start and endpoints and change speed of algorithm.
            Built with React. " github="https://github.com/awesomealex1/Search"></Project>

            <Project name="This Website" link="https://alexmurphy.me/" image={PersonalWebsite} description="
            The website you are on right now! Built with gatsby. " github="https://github.com/awesomealex1/Search"></Project>
        </Container>
    );
}