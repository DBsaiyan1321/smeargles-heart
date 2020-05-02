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
        if (this.props.formType === "Edit") { 
            formData.append('imagination[id]', this.props.imagination.id)
        }
        formData.append('imagination[title]', this.state.title);
        formData.append('imagination[description]', this.state.description);
        formData.append('imagination[artist_id]', this.state.artist_id); 
        if (this.state.imageFile) {
            formData.append('imagination[image]', this.state.imageFile);
        } 
        debugger
        this.props.action(formData);
    }

    handleFile(e) { 
        const file = e.currentTarget.files[0]
        console.log(file)
        const fileReader = new FileReader()
        fileReader.onloadend = () => {
            this.setState({ imageFile: file, imageUrl: fileReader.result })
        }
        if (file) { 
            fileReader.readAsDataURL(file)
        } 
    }

    render() { 
        const preview = (this.state.imageUrl) ? <img src={this.state.imageUrl} /> : null

        return ( 
            <div>
                <MainNavBar currentUser={this.props.currentUser} logout={this.props.logout} />

                <form onSubmit={e => this.formSubmission(e)} className="imagination-form">
                    <div className="imagination-form-main">
                        <input type="submit" value={`${this.props.formType} Imagination`} className="submit-imagination-button" />
                        {/* <div className="left-imagination-form"> */}
                            <div className="file-container">
                                <div className="preview">{preview}</div>
                                <input type="file" onChange={this.handleFile} className="file-button" />
                            </div>
                        {/* </div> */}
        
                        <div className="inputs-for-imaginations">
                            <input type="text" onChange={this.updateField("title")} value={this.state.title} className="title-box" placeholder="Give Your Imagination a Title" />
                            <div className="imagination-form-horizontal-bar"></div>
                            <textarea onChange={this.updateField("description")} value={this.state.description} className="description-box" placeholder="Describe Your Imagination in Words That Will Comprehended By All." />
                        </div>
                        
                    </div>
                </form>
            </div>
        )
    }
}

export default ImaginationForm;