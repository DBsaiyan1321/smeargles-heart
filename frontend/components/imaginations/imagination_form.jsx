import React from "react"; 
import MainNavBar from "../main_nav_bar"
import Footer from "../footer";
import { PongSpinner } from "react-spinners-kit";

class ImaginationForm extends React.Component { 
    constructor(props) {
        super(props);
        this.state = this.props.imagination ;

        this.updateField = this.updateField.bind(this);
        this.formSubmission = this.formSubmission.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.goImagination = this.goImagination.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    componentDidMount() { 
        // window.previousUrl = this.props.match.url
        window.scrollTo(0, 0)
    }

    updateField(field) { 
        return e => { 
            this.setState( { [field]: e.target.value })
        }
    }

    validateForm() {
        return (this.state.title.trim() && (this.state.image || this.state.imageFile)) 
    }

    formSubmission(e) { 
        e.preventDefault();
        const formData = new FormData();
        if (this.validateForm()) { 
            if (this.props.formType === "Edit") { 
                formData.append('imagination[id]', this.props.imagination.id)
            }
            formData.append('imagination[title]', this.state.title);
            formData.append('imagination[description]', this.state.description);
            formData.append('imagination[artist_id]', this.state.artist_id); 
            if (this.state.imageFile) {
                formData.append('imagination[image]', this.state.imageFile);
            } 
    /**************************************************************************/    
            this.props.action(formData)
                .then(res => {
                    this.goImagination(res)
                })
        }
    }

    goImagination(res) { 
        this.props.history.push(`/imaginations/${res.imagination.id}`)
    }
    /**************************************************************************/

    handleFile(e) { 
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader()
        fileReader.onloadend = () => {
            this.setState({ imageFile: file, imageUrl: fileReader.result })
        }
        if (file) { 
            fileReader.readAsDataURL(file)
        } 
    }

    render() { 
        let preview
        
        // The original didn't have the else if, so it would change the image preview if I selected another file on the edit form.
        if (this.props.formType === "Create") {
            preview = (this.state.imageFile && this.props.formType === "Create") ? <img src={this.state.imageUrl} /> : null
        } else if (this.state.imageUrl && this.props.formType === "Edit") { 
            preview = <img src={this.state.imageUrl} />
        } else {
            preview = (this.state.image && this.props.formType === "Edit") ? <img src={this.state.image} /> : null
        }
       
        return ( 
            <div>
                <MainNavBar currentUser={this.props.currentUser} logout={this.props.logout} />

                <form onSubmit={this.formSubmission} className="imagination-form">

                    <div className="imagination-form-main">
                        { this.validateForm() 
                        ? <input type="submit" value={`${this.props.formType}`} className="submit-imagination-button" />
                        : <input type="submit" value={`${this.props.formType}`} className="submit-imagination-button faded-out" /> }

                        <div className="file-container">
                            <div className="spotted-border-file">
                                <div className="preview">{preview}</div>
                                <input type="file" onChange={this.handleFile} className="file-button" accept=".png, .jpg, .jpeg" />
                            </div>
                        </div>
                            
                        {/* </div> */}
        
                        <div className="inputs-for-imaginations">
                            <input onChange={this.updateField("title")} value={this.state.title} className="title-box" rows="1" placeholder="Title" /> {/* placeholder="Give Your Imagination a Title" */}
                            <div className="imagination-form-horizontal-bar"></div>
                            <textarea onChange={this.updateField("description")} value={this.state.description} className="description-box" placeholder="Describe Your Imagination in Words That Will Comprehended By All." />
                        </div>
                        
                    </div>
                </form>

                <Footer /> 
            </div>
        )
    }
}

export default ImaginationForm;