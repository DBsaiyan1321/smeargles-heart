import React from "react"; 
import MainNavBar from "../main_nav_bar"

class ImaginationForm extends React.Component { 
    constructor(props) {
        super(props)
        this.state = this.props.imagination 

        this.updateField = this.updateField.bind(this)
        this.formSubmission = this.formSubmission.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }

    updateField(field) { 
        return e => { 
            this.setState( { [field]: e.target.value })
        }
    }

    formSubmission(e) { 
        e.preventDefault();
        const formData = new FormData();
        formData.append('imagination[title]', this.state.title);
        formData.append('imagination[description]', this.state.description);
        formData.append('imagination[artist_id]', this.state.artist_id); 
        if (this.state.imageFile) {
            formData.append('imagination[image]', this.state.imageFile);
        } 
        this.props.action(formData);
    }

    handleFile(e) { 
        this.setState( { imageFile: e.currentTarget.files[0] })
    }

    render() { 
        return ( 
            <div>
                <MainNavBar currentUser={this.props.currentUser} logout={this.props.logout} />

                <form onSubmit={e => this.formSubmission(e)} className="form">
                    <input type="file" onChange={this.handleFile} />
                    <input type="text" onChange={this.updateField("title")} value={this.state.title} />
                    <textarea onChange={this.updateField("description")} value={this.state.description} />
                    <input type="submit" value="Imagination" />
                </form>
            </div>
        )
    }
}

export default ImaginationForm;