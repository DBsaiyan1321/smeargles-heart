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

        this.renderButton = this.renderButton.bind(this)
        this.updateProfile = this.updateProfile.bind(this)
        this.updateField = this.updateField.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.username)
    }

    renderButton() { 
        if (this.props.currentUser === this.props.targetUser) {
            return <ModalForm updateField={this.updateField} updateProfile={this.updateProfile} state={this.state} handleFile={this.handleFile} />
        } else {
            return
        }
    }

    updateField(field) { 
        return e => this.setState({ [field]: e.target.value })
    }

    updateProfile(e) { 
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[id]', this.props.targetUser.id)
        formData.append('user[bio]', this.state.bio);
        if (this.state.imageFile) {
            formData.append('user[avatar]', this.state.imageFile);
        }
        this.props.updateUser(formData)
    }

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
        if (!this.props.targetUser) return null

        return (
            <div> 

                <MainNavBar currentUser={this.props.currentUser} logout={this.props.logout } />

                <div className="profile-page"> 
                    <div className="profile-head-info"> 
                        <div className="profile-head-pic-and-name"> 
                            {(this.props.targetUser.avatar) ? 
                            <img src={this.props.targetUser.avatar} alt="broke" className="profile-page-avatar" /> : 
                            <div className="profile-page-avatar">Profile Picture</div>}
                            <h1>{this.props.targetUser.username}</h1>
                            {this.renderButton()}
                        </div>
                        <p>{this.props.targetUser.bio}</p>
                    </div>

                    <div className="profile-imaginations"> 
                        <ul className="imaginations-index"> 
                            {this.props.ownedImaginations.map((imagination) => {
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