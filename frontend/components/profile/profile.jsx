import React, { useState } from "react"; 
import ImaginationIndexItem from "../imaginations/imagination_index_item";
import MainNavBar from "../main_nav_bar";
import { Link } from "react-router-dom";
// import Modal from "react-modal";
import ModalForm from "./modal"
import { CubeSpinner, FireworkSpinner, WaveSpinner } from "react-spinners-kit";


export default class Profile extends React.Component { 
    constructor(props) { 
        super(props)
        
        this.state = props.targetUser;

        this.renderButton = this.renderButton.bind(this)
        this.updateProfile = this.updateProfile.bind(this)
        this.updateField = this.updateField.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.cancelUpdate = this.cancelUpdate.bind(this)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.username)
    }

    renderButton() { 
        let preview

        // This was all taken from my imagination form component, so I just commented this out what I didn't need 
        // if (this.props.formType === "Create") {
        //     preview = (this.state.imageFile && this.props.formType === "Create") ? <img src={this.state.imageUrl} /> : null
        // } else 

        if (this.state) { // Look into why I need this if condition right here
            if (this.state.avatarUrl) {
                preview = <img src={this.state.avatarUrl} className="profile-pic-preview" />
            } else {
                preview = (this.state.avatar) ? <img src={this.state.avatar} className="profile-pic-preview" /> : null
            }
        }

        if (this.props.currentUser === this.props.targetUser) {
            return <ModalForm updateField={this.updateField} updateProfile={this.updateProfile} state={this.state} handleFile={this.handleFile} preview={preview} cancelUpdate={this.cancelUpdate} />
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
        if (this.state.avatarFile) {
            formData.append('user[avatar]', this.state.avatarFile);
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
                {/* <CubeSpinner size={40} frontColor="black" backColor="#4D4DFF" loading={true} /> */}
                {/* <FireworkSpinner size={40} color="#4D4DFF" loading={true} /> */}
                <WaveSpinner size={40} color="#4D4DFF" loading={true} />
            </div >
        )

        // if (this.state.fetching) return <div className="index-spinner-container">
        //         {/* <CubeSpinner size={40} frontColor="black" backColor="#4D4DFF" loading={true} /> */ }
        // {/* <FireworkSpinner size={40} color="#4D4DFF" loading={true} /> */ }
        // <WaveSpinner size={40} color="#4D4DFF" loading={true} />
        // </div > 

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