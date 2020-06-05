import React, { useState } from "react"; 
import ImaginationIndexItem from "../imaginations/imagination_index_item";
import MainNavBar from "../main_nav_bar";
import { Link } from "react-router-dom";
// import Modal from "react-modal";
import ModalForm from "./modal"

export default class Profile extends React.Component { 
    constructor(props) { 
        super(props)

        this.state = props.targetUser;

        // const [modalIsOpen, setModalIsOpen] = useState(false)

        this.renderButton = this.renderButton.bind(this)
        // this.loadEdit = this.loadEdit.bind(this)
        this.updateProfile = this.updateProfile.bind(this)
        this.updateField = this.updateField.bind(this)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.username)
        this.props.fetchImaginations()
    }

    renderButton() { 
        if (this.props.currentUser === this.props.targetUser) {
            return <ModalForm updateField={this.updateField} updateProfile={this.updateProfile} state={this.state} />
        } else {
            return
        }
    }

    // loadEdit(e) { 
    //     e.preventDefault()
    //     return (
    //         <Modal isOpen={true}>
    //             <form onSubmit={this.updateProfile}>
    //                 <textarea onChange={this.updateField("bio")} value={this.state.bio} />
    //                 <input type="submit" value="UPDATE" />
    //             </form>
    //         </Modal>
    //     )
    // }

    updateField(field) { 
        return e => this.setState({ [field]: e.target.value })
    }

    updateProfile(e) { 
        e.preventDefault()
        let user = { user: this.state }
        this.props.updateUser(user)
    }

    render() { 
        if (!this.props.targetUser) return null

        return (
            <div> 

                <MainNavBar currentUser={this.props.currentUser} logout={this.props.logout } />

                <div className="profile-page"> 
                    <div className="profile-head-info"> 
                        <div className="profile-head-pic-and-name"> 
                            <div className="profile-page-avatar"></div>
                            <h1>{this.props.targetUser.username}</h1>
                            {this.renderButton()}
                        </div>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Temporibus, vero amet voluptatibus commodi odit neque maiores 
                        cupiditate. Optio temporibus est, deserunt quasi quidem placeat 
                        provident culpa omnis autem fugit quam! Lorem ipsum dolor, sit 
                        amet consectetur adipisicing elit. Nam, aperiam distinctio 
                        incidunt iste rerum aliquam esse voluptate, at id quaerat delectus 
                        eius neque natus deleniti. Architecto pariatur quis aut explicabo.</p> */}
                        <p>{this.props.targetUser.bio}</p>

                        {/* <Modal isOpen={modalIsOpen}>
                            <form onSubmit={this.updateProfile}>
                                <textarea onChange={this.updateField("bio")} value={this.state.bio} />
                                <input type="submit" value="UPDATE" />
                            </form>
                        </Modal> */}
                    </div>

                    <div className="profile-imaginations"> 
                        <ul className="imaginations-index"> 
                            {this.props.ownedImaginations.map(imagination => {
                                return <ImaginationIndexItem imagination={imagination} key={imagination.id} artist={imagination.username} />
                            })}
                        </ul>
                    </div>
                </div>

                {(this.props.currentUser) ? <></> : (
                    <div className="bottom-bar">
                        <p>Join the most creative mind you will ever witness.</p>
                        <Link to="/login" className="bottom-bar-element bb-l">LOG IN</Link>
                        <br />
                        <Link to="/signup" className="bottom-bar-element bb-s">JOIN</Link>
                    </div>
                )}

            </div>
        )
            
    }
}

// export default Profile; // Could've put it down here as well