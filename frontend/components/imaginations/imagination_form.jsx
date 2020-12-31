import React, { useEffect, useState } from "react"; 
import MainNavBar from "../navbar/main_nav_bar"
import Footer from "../footer";
import { PongSpinner } from "react-spinners-kit";

const ImaginationForm = props => { 
    const [title, setTitle] = useState(props.imagination.title);
    const [description, setDescription] = useState(props.imagination.description);
    const [imageUrl, setImageUrl] = useState(props.imagination.imageUrl);
    const [imageFile, setImageFile] = useState(props.imagination.imageFile); 
    const [clicked, setClicked] = useState(false); // I added this later on. If it breaks anything, change it back to just state = props.imagination

    useEffect(() => { 
        // window.previousUrl = props.match.url;
        window.scrollTo(0, 0);
    }, []);

    const validateForm = () => {
        return (title.trim() && (props.imagination.image || imageFile)) 
    };

    const formSubmission = e => { 
        e.preventDefault();
        if (clicked) return;
        const formData = new FormData(); // We have to do it this way since we are uploading files
        if (validateForm()) { 
            setClicked(true);
            if (props.formType === "Edit") { 
                formData.append('imagination[id]', props.imagination.id)
            };
            formData.append('imagination[title]', title);
            formData.append('imagination[description]', description);
            formData.append('imagination[artist_id]', props.imagination.artist_id); 
            if (imageFile) {
                formData.append('imagination[image]', imageFile);
            };
            props.action(formData)
                .then(res => {
                    goImagination(res)
                });
        };
    };

    const goImagination = res => { 
        props.history.push(`/imaginations/${res.imagination.id}`)
    };

    const handleFile = e => { 
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader()
        fileReader.onloadend = () => {
            setImageFile(file);
            setImageUrl(fileReader.result);
        }
        if (file) { 
            fileReader.readAsDataURL(file)
        } 
    };

    let preview
    
    // The original didn't have the else if, so it would change the image preview if I selected another file on the edit form.
    if (props.formType === "Create") {
        preview = (imageFile && props.formType === "Create") ? <img src={imageUrl} /> : null
    } else if (imageUrl && props.formType === "Edit") { 
        preview = <img src={imageUrl} />
    } else {
        preview = (props.imagination.image && props.formType === "Edit") ? <img src={props.imagination.image} /> : null
    }
    
    return ( 
        <div>
            <MainNavBar currentUser={props.currentUser} logout={props.logout} />
            <form onSubmit={formSubmission} className="imagination-form">
                <div className="imagination-form-main">
                    { 
                    clicked 
                    ? <div className="form-spinner" ><PongSpinner color="#4d4dff" /></div>
                    : validateForm() 
                    ? <input type="submit" value={`${props.formType}`} className="submit-imagination-button" />
                    : <input type="submit" value={`${props.formType}`} className="submit-imagination-button faded-out" /> 
                    }
                    <div className="file-container">
                        <div className="spotted-border-file">
                            <div className="preview">{preview}</div>
                            <input type="file" onChange={handleFile} className="file-button" accept=".png, .jpg, .jpeg" />
                        </div>
                    </div>
                    <div className="inputs-for-imaginations">
                        <input onChange={e => setTitle(e.currentTarget.value)} value={title} className="title-box" rows="1" placeholder="Title" /> {/* placeholder="Give Your Imagination a Title" */}
                        <div className="imagination-form-horizontal-bar"></div>
                        <textarea onChange={e => setDescription(e.currentTarget.value)} value={description} className="description-box" placeholder="Describe Your Imagination in Words That Will Comprehended By All." />
                    </div>
                </div>
            </form>
            <Footer /> 
        </div>
    )
};

export default ImaginationForm;