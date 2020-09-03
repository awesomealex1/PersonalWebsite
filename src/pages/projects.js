import React from "react";
import Container from "../components/container";
import Search from "../images/search.png";
import PersonalWebsite from "../images/personalWebsite.png";
import { Link } from "gatsby";

export default function Projects() {
    return(
        <Container>
            <h1>Some of my projects</h1>
            <a href="https://alexmurphy.me/"><h2>Search Algorithm Visualiser</h2></a>
            <img src={Search}></img>
            <p>A website that visualises search algorithms (Depth First Search, Breadth First Search, A* Search). 
               Features include a resizable grid, possibility to add walls, move start and endpoints and change speed of algorithm. Built with React. <a href="https://github.com/awesomealex1/Search">(Github)</a></p>
            <a href="https://alexmurphy.me/"><h2>This Website</h2></a>
            <img src={PersonalWebsite}></img>
            <p>The website you are on right now! Built with gatsby. <a href="https://github.com/awesomealex1/Search">(Github)</a></p>
        </Container>
    );
}