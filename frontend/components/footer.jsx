import React from "react"; 
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { FaAngellist } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = props => (
    <footer className="footer"> 
        <div className="footer-content"> 
            <div className="footer-logo"> 
                <Link to="/"><img src="https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargle-Head.png" alt="logo" className="main-nav-bar-logo" /></Link>
                <Link to="/"><p>SMEARGLE'S HEART</p></Link>
            </div>
            <a target="_blank" rel="noopener noreferrer" href="https://dbsaiyan1321.github.io/portfolio-site/" className="footer-element">Portfolio</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dorian-izaiah-brown-1430b3193/" className="footer-element"><AiFillLinkedin /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/DBsaiyan1321" className="footer-element"><AiOutlineGithub /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://angel.co/u/dorian-izaiah-brown" className="footer-element"><FaAngellist /></a>            
        </div> 
        <p className="copyright">&copy; 2020 Smeargle's Heart</p>
    </footer>
);
    
export default Footer;
