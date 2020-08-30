import React from "react"
import { Link } from "react-router-dom";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { FaAngellist } from "react-icons/fa";
import Search from "./search/search_container";

const MainNavBar = props => {
    return ( 
        <nav className="main-nav-bar">
            <div className="main-nav-bar-top-left home"> {/* Instead of this div, maybe make it a link and see if that works */}
                <Link to="/" className="home"><img src="https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargle-Head.png" alt="logo" className="main-nav-bar-logo" /></Link>
                <Link to="/" className="home"><h1>SMEARGLE'S HEART</h1></Link>
            </div>
            <div className="vertical-bar"></div>

            {(props.currentUser) ? (
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
                        {(props.currentUser.avatar) ? 
                        <h2 className="main-nav-bar-element username-nav"><img src={props.currentUser.avatar} className="main-nav-bar-avatar" /></h2> : 
                        <h2 className="main-nav-bar-element username-nav">{props.currentUser.username}</h2> } 
                        <ul className="username-dropdown">
                            {/* <li className="dropdown-item dropdown-item-username"><Link to={`/user/${props.currentUser.username}`}>{props.currentUser.username}</Link></li>  */}
                            <li className="dropdown-item dropdown-item-username" onClick={() => window.location.href = `/#/user/${props.currentUser.username}`}>{props.currentUser.username}</li>  {/* Be cautious of this. Revert it back to the original if you need to */}
                            <li className="dropdown-item" onClick={() => props.logout()}>Log Out</li>
                        </ul>
                    </div>
                </div>
            ) : (
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
                )}
            <div className="vertical-bar"></div>
            <div className="top-right-nav-bar">
                <Link to="/new" className="main-nav-bar-element main-nav-submit">SUBMIT</Link>
            </div>
        </nav>
    )
}

export default MainNavBar;