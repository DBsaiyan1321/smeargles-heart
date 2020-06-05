import React, { useState } from "react"; 
import Modal from "react-modal";

const ModalForm = (props) => { 
    Modal.setAppElement("#root") // When I set this  outside of the function it doesn't work. Maybe it's because I'm exporting this function in particular and not the whole page.

    const [modalIsOpen, setModalIsOpen] = useState(false) 

    return ( 
        <div className="modal-div"> 
            <button onClick={() => setModalIsOpen(true)} className="edit-profile-button">EDIT PROFILE</button>

            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <form onSubmit={props.updateProfile}>
                    <div>{props.preview}</div>
                    <input type="file" onChange={props.handleFile} className="file-button" accept=".png, .jpg, .jpeg" />
                    <textarea onChange={props.updateField("bio")} value={props.state.bio} />
                    <input type="submit" value="UPDATE" />
                </form>
                <button onClick={e => {
                    setModalIsOpen(false)
                    props.cancelUpdate(e)
                }}>CLOSE</button>
                {/* style={{
                    overlay: {
                        // position: 'fixed',
                        // top: 0,
                        // left: 0,
                        // right: 0,
                        // bottom: 0,
                        backgroundColor: 'rgba(6, 7, 13, 0.78)'
                    }
                }} */}
            </Modal>
        </div>
    )
}

export default ModalForm;