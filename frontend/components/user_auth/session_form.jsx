import React from "react"; 
import { Link } from "react-router-dom";

class SessionForm extends React.Component { 
    constructor(props) { 
        super(props);
        this.state = { 
            username: "", 
            email: "", 
            password: ""
        };

        this.demo = this.demo.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentWillUnmount = this.componentWillUnmount(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
    }

    updateField(field) { 
        return e => { 
            this.setState({ [field]: e.target.value });
        }
    }

    demo() { 
        this.setState({ username: "Demo_User", password: "demouser" })
    }

    componentWillUnmount() { 
        this.props.clearErrors()
    }

    render() { 
        let title; 
        let link;
        let linkText;
        if (this.props.formType === "login") { 
            title = "Log In"
            link = "/signup"
            linkText = "Join"
        } else { 
            title = "Join"
            link="/login"
            linkText = "Log In"
        }

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
                    


                    <form onSubmit={e => this.handleSubmit(e)} className="auth-form">
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
                                <input className="input" type="text" value={this.state.username} onChange={this.updateField("username")} required />
                                <label className="label"> Username</label>
                            </div>

                            {(this.props.formType === "signup") ? (
                                <div className="box">
    
                                    <input className="input" type="text" value={this.state.email} onChange={this.updateField("email")} required />
                                    <label className="label"> Email</label>
    
                                </div>
                                ) : <></>
                            }

                            <div className="box">
                                <input className="input" type="password" value={this.state.password} onChange={this.updateField("password")} required />
                                <label className="label"> Password</label>
                            </div>
                        </div>
                        {(this.props.errors) ? (
                        <div className="auth-errors-container"> 
                            {this.props.errors.map((error, i) => <p key={i}>{error}</p>)}
                            <br /> 
                        </div> 
                    ) : <></>}



                        <div className="buttons">
                            <button className="auth-button submit">{title.toUpperCase()}</button> 
                            { (this.props.formType === "login") ? 
                                <button className="auth-button demo" onClick={() => this.demo()}>DEMO USER</button> :
                                <></>
                            }
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}

export default SessionForm;