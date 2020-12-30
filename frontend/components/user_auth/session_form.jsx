import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SessionForm = props => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        const user = { username, email, password };
        props.processForm(user)
    };

    const demo = () => {
        setUsername("Demo_User") 
        setPassword("demouser")
    };

    useEffect(() => { 
        return () => { 
            props.clearErrors()
        }
    }, []); 

    let title;
    let link;
    let linkText;
    if (props.formType === "login") {
        title = "Log In"
        link = "/signup"
        linkText = "Join"
    } else {
        title = "Join"
        link = "/login"
        linkText = "Log In"
    };

    return (
        <div className="auth-page">
            <div className="auth-display">
                <Link className="auth-display__exit" to="/"><h1>X</h1></Link>
                <div className="auth-display__text">
                    {/* <Link to="/"> */}
                    <div className="top-text">
                        <img src="https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargle-Head.png" alt="logo" className="logo" />
                        <h3>SMEARGLE'S HEART</h3>
                    </div>
                    {/* </Link> */}
                    <h1>JOIN THE LARGEST CREATIVE BRAIN IN THE REGION</h1>
                    <p>Whether you want to buy or sell creativity, become a better imaginator, or enjoy the imaginations – you can do it all here.</p>
                </div>



                <form onSubmit={e => handleSubmit(e)} className="auth-form">
                    <div className="top-text auth-form__logo">
                        <img src="https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargle-Head.png" alt="logo" className="logo" />
                        <h3>SMEARGLE'S HEART</h3>
                    </div>

                    <div className="auth-form__title">
                        <h1>{title}</h1>
                        <Link to={link} className="auth-link">{linkText}</Link>
                    </div>

                    <div className="auth-input-container">
                        <div className="box">
                            <input className="input" type="text" value={username} onChange={e => setUsername(e.currentTarget.value)} required />
                            <label className="label"> Username</label>
                        </div>

                        {(props.formType === "signup") ? (
                            <div className="box">

                                <input className="input" type="text" value={email} onChange={e => setEmail(e.currentTarget.value)} required />
                                <label className="label"> Email</label>

                            </div>
                        ) : <></>
                        }

                        <div className="box">
                            <input className="input" type="password" value={password} onChange={e => setPassword(e.currentTarget.value)} required />
                            <label className="label"> Password</label>
                        </div>
                    </div>
                    {(props.errors) ? (
                        <div className="auth-errors-container">
                            {props.errors.map((error, i) => <p key={i}>{error}</p>)}
                            <br />
                        </div>
                    ) : <></>}



                    <div className="buttons">
                        <button className="auth-button submit">{title.toUpperCase()}</button>
                        {(props.formType === "login") ?
                            <button className="auth-button demo" onClick={() => demo()}>DEMO USER</button> :
                            <></>
                        }
                    </div>
                </form>

            </div>
        </div>
    );
};

export default SessionForm;