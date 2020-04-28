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
            <form onSubmit={e => this.handleSubmit(e)}>

                {(this.props.errors) ? this.props.errors.map((error, i)=> <p key={i}>{error}</p>) : <></>}

                <h1>{title}</h1>

                <Link to={link}>{linkText}</Link>
                <br />
                <label>Username 
                    <input type="text" value={this.state.username} onChange={this.updateField("username")} />
                </label>  

                <label>Email
                    <input type="text" value={this.state.email} onChange={this.updateField("email")} />
                </label>   

                <label>Password
                    <input type="password" value={this.state.password} onChange={this.updateField("password")} />
                </label>        

                <input type="submit" value={title} />        
            </form>
        )
    }
}

export default SessionForm;