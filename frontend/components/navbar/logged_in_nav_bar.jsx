import React from "react"; 
import { Link } from "react-router-dom"; 
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { FaAngellist } from "react-icons/fa";

const LoggedInNavBar = ({ currentUser, logout }) => ( 
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
        <div className="username-tab">
            {(currentUser.avatar) ?
                <h2 className="main-nav-bar-element username-nav"><img src={currentUser.avatar} className="main-nav-bar-avatar" /></h2> :
                <h2 className="main-nav-bar-element username-nav">{currentUser.username}</h2>}
            <ul className="username-dropdown">
                {/* <li className="dropdown-item dropdown-item-username"><Link to={`/user/${currentUser.username}`}>{currentUser.username}</Link></li>  */}
                <li className="dropdown-item dropdown-item-username" onClick={() => window.location.href = `/#/user/${currentUser.username}`}>{currentUser.username}</li>  {/* Be cautious of this. Revert it back to the original if you need to */}
                <li className="dropdown-item" onClick={() => logout()}>Log Out</li>
            </ul>
        </div>
    </div>
);

export default LoggedInNavBar; 