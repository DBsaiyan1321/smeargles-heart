import React from "react"; 
import { Link } from "react-router-dom";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { FaAngellist } from "react-icons/fa";

const LoggedOutNavBar = () => ( 
    <div className="main-nav-bar-content">
        <div className="home-tab">
            <Link to="/" className="main-nav-bar-element">HOME</Link>
        </div>
        <div className="vertical-bar"></div>
        <div className="socials-tab">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/DBsaiyan1321" className="main-nav-bar-element"><AiOutlineGithub className="socials-links" /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dorian-izaiah-brown-1430b3193/" className="main-nav-bar-element"><AiFillLinkedin className="socials-links" /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://angel.co/u/dorian-izaiah-brown" className="main-nav-bar-element"><FaAngellist className="socials-links" /></a>
        </div>
        {/* <div><Search /></div> */}
        <div className="user-auth-links">
            <Link to="/signup" className="main-nav-bar-element">JOIN</Link>
            <br />
            <Link to="/login" className="main-nav-bar-element">LOG IN</Link>
        </div>
    </div>
);

export default LoggedOutNavBar;
