import React, { useState } from "react"; 
import ImaginationIndexItem from "../imaginations/imagination_index_item";
import MainNavBar from "../main_nav_bar";
import { Link } from "react-router-dom";
import ModalForm from "./modal"
import { CubeSpinner, FireworkSpinner, WaveSpinner } from "react-spinners-kit";


export default class Profile extends React.Component { 
    constructor(props) { 
        super(props)

        this.state = { 
            runConstructor: false, 
            targetUser: props.targetUser
        };

        this.renderButton = this.renderButton.bind(this)
        this.updateProfile = this.updateProfile.bind(this)
        this.updateField = this.updateField.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.cancelUpdate = this.cancelUpdate.bind(this)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.username)
    }

    componentDidUpdate(prevProps) { // Fixed the problem for when I got back to another profile. But when I click mine from the nav bar it's still jacked up.
        if (this.props.match.params.username !== prevProps.match.params.username) { 
            this.props.fetchUser(this.props.match.params.username)
        }
    }

    renderButton() { 
        let preview

        // This was all taken from my imagination form component, so I just commented this out what I didn't need 
        // if (this.props.formType === "Create") {
        //     preview = (this.state.targetUser.imageFile && this.props.formType === "Create") ? <img src={this.state.targetUser.imageUrl} /> : null
        // } else 

        if (this.state.targetUser) { // Look into why I need this if condition right here
            if (this.state.targetUser.avatarUrl) {
                preview = <img src={this.state.targetUser.avatarUrl} className="profile-pic-preview" />
            } else {
                preview = (this.state.targetUser.avatar) ? <img src={this.state.targetUser.avatar} className="profile-pic-preview" /> : null
            }
        }

        if (this.props.currentUser === this.props.targetUser) {
            return <ModalForm updateField={this.updateField} updateProfile={this.updateProfile} state={this.state.targetUser} handleFile={this.handleFile} preview={preview} cancelUpdate={this.cancelUpdate} />
            // return
        } else {
            return
        }
    }

    updateField(field) { // Again, this is how you handle nested objects in state
        return e => { 
            let targetUser = this.state.targetUser 
            targetUser[field] = e.target.value
            this.setState({ targetUser })
        }
    }

    updateProfile(e) { 
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[id]', this.props.targetUser.id)
        formData.append('user[bio]', this.state.targetUser.bio);
        if (this.state.targetUser.avatarFile) {
            formData.append('user[avatar]', this.state.targetUser.avatarFile);
        }
        this.props.updateUser(formData)
    }

    cancelUpdate(e) { 
        e.preventDefault(); 
        this.setState({ avatarFile: null, avatarUrl: null })
    }

    handleFile(e) {
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader()
        fileReader.onloadend = () => {
            this.setState({ avatarFile: file, avatarUrl: fileReader.result })
        }
        if (file) {
            fileReader.readAsDataURL(file)
        }
    }

    render() { 
        if (!this.props.targetUser) return ( 
            <div className="index-spinner-container">
                <WaveSpinner size={40} color="#4D4DFF" loading={true} />
            </div >
        )

        return (
            <div> 

                <MainNavBar currentUser={this.props.currentUser} logout={this.props.logout } />

                <div className="profile-page"> 
                    <div className="profile-head-info"> 
                        <div className="profile-head-pic-and-name"> 
                            {(this.props.targetUser.avatar) ? 
                            <img src={this.props.targetUser.avatar} alt="broke" className="profile-page-avatar" /> : 
                            <div className="profile-page-no-avatar">Profile Picture</div>}
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