import React, { useState } from "react"; 
import Modal from "react-modal";

const ModalForm = props => { 
    Modal.setAppElement("#root") 
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [bio, setBio] = useState(props.user.bio);
    const [avatarFile, setAvatarFile] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState(null);

    const updateProfile = (e, bio) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[id]', props.user.id)
        formData.append('user[bio]', bio);
        if (avatarFile) {
            formData.append('user[avatar]', avatarFile);
        }
        props.updateUser(formData)
    }

    const cancelUpdate = e => {
        e.preventDefault();
        setBio(props.user.bio);
        setAvatarFile(null);
        setAvatarUrl(null);
    }

    const handleFile = e => {
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader()
        fileReader.onloadend = () => {
            setAvatarFile(file);
            setAvatarUrl(fileReader.result);
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    };

    let preview

    if (props.user) {
        if (avatarUrl) {
            preview = <img src={avatarUrl} className="profile-pic-preview" />
        } else {
            preview = (props.user.avatar) ?
                <img src={props.user.avatar} className="profile-pic-preview" /> :
                null
        }
    }
    
    return ( 
        <div className="modal-div"> 
            <button onClick={() => setModalIsOpen(true)} className="edit-profile-button">
                EDIT PROFILE
            </button>

            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="modal" overlayClassName="modal-overlay">
                <div className="modal-x" onClick={e => { e.preventDefault(); setModalIsOpen(false); cancelUpdate(e)} }>X</div>
                <h1 className="modal-title">Profile Info</h1>
                <form onSubmit={(e) => { updateProfile(e, bio); setModalIsOpen(false) }} className="modal-form"> 
                    <div className="edit-section-of-profile">
                        <div className="profile-pic-upload">
                            <div>{preview}</div>
                            <input type="file" onChange={handleFile} accept=".png, .jpg, .jpeg" />
                        </div>
                        <textarea onChange={e => setBio(e.target.value)} value={bio} className="modal-bio" placeholder="Let Everyone Know Who You Are"/>
                    </div>
                    <div className="profile-form-buttons"> 
                        <button onClick={e => { e.preventDefault(); setModalIsOpen(false); cancelUpdate(e) }} className="modal-cancel">CANCEL</button>
                        <input type="submit" value="UPDATE" className="modal-update" />
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default ModalForm;