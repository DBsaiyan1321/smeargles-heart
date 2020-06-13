import React, { useState } from "react"; 
import Modal from "react-modal";

const ModalForm = (props) => { 
    Modal.setAppElement("#root") // When I set this  outside of the function it doesn't work. Maybe it's because I'm exporting this function in particular and not the whole page.

    const [modalIsOpen, setModalIsOpen] = useState(false) 
    // debugger
    return ( 
        <div className="modal-div"> 
            <button onClick={() => setModalIsOpen(true)} className="edit-profile-button">EDIT PROFILE</button>

            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="modal" overlayClassName="modal-overlay">
                <div className="modal-x" onClick={e => {
                    e.preventDefault()
                    setModalIsOpen(false)
                    props.cancelUpdate(e)
                }}>X</div>
                <h1 className="modal-title">Profile Info</h1>
                <form onSubmit={(e) => { 
                    props.updateProfile(e)
                    setModalIsOpen(false)
                }} className="modal-form"> 
                    <div className="edit-section-of-profile">
                        <div className="profile-pic-upload">
                            <div>{props.preview}</div>
                            <input type="file" onChange={props.handleFile} accept=".png, .jpg, .jpeg" />
                        </div>
                        <textarea onChange={props.updateField("bio")} value={props.state.bio} className="modal-bio" placeholder="Let Everyone Know Who You Are"/>
                    </div>
                    <div className="profile-form-buttons"> 
                        <button onClick={e => {
                            e.preventDefault()
                            setModalIsOpen(false)
                            props.cancelUpdate(e)
                        }} className="modal-cancel">CANCEL</button>
                        <input type="submit" value="UPDATE" className="modal-update" />
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default ModalForm;