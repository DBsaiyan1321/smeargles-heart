import React from "react"; 
import { Link, Redirect } from "react-router-dom";

class SessionForm extends React.Component { 
    constructor(props) { 
        super(props);
        this.state = { 
            username: "", 
            email: "", 
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    updateField(field) { 
        return e => { 
            this.setState({ [field]: e.target.value });
        }
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
            <div className="user-auth-background">

                <div className="user-auth">
                    <Link className="user-auth-exit" to="/"><h1>X</h1></Link>

                    <div className="user-auth-text">
                        <h3>SMEARGLE'S HEART</h3>
                        <h1>JOIN THE LARGEST CREATIVE BRAIN IN THE REGION</h1>
                        <p>Whether you want to buy or sell creativity, become a better imaginator, or enjoy the imaginations – you can do it all here.</p>
                    </div>


                    <form onSubmit={e => this.handleSubmit(e)} className="user-auth-form">

                        {(this.props.errors) ? this.props.errors.map((error, i)=> <p key={i}>{error}</p>) : <></>}

                        <div>
                            <h1>{title}</h1>
                            <Link to={link}>{linkText}</Link>
                        </div>

                        <div>
                            {/* <label>Username  */}
                                <input type="text" value={this.state.username} onChange={this.updateField("username")} placeholder=" Username" />
                            {/* </label>   */}

                            <br />

                            {(this.props.formType === "signup") ? (
                                    // <label>Email
                                        <input type="text" value={this.state.email} onChange={this.updateField("email")} placeholder=" Email" />
                                    // </label> 
                                ) : <></>
                            }

                            <br />

                            {/* <label>Password */}
                                <input type="password" value={this.state.password} onChange={this.updateField("password")} placeholder="Password" />
                            {/* </label>         */}
                        </div>

                        {/* <input type="submit" value={title} className="user-auth-button" />         */}
                        <button className="user-auth-button">{title.toUpperCase()}</button> 
                    </form>

                </div>
            </div>
        )
    }
}

export default SessionForm;