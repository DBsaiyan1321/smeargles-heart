import React from "react"; 
import ImaginationIndexItem from "../imaginations/imagination_index_item";
import MainNavBar from "../navbar/main_nav_bar";
import ModalForm from "./modal"
import { WaveSpinner } from "react-spinners-kit";
import Footer from "../footer";

// This component was giving me trouble with this one bug. Since this component relies a lot on it's 
// state, I had to really understand the order of execution and how to work around the state.
export default class Profile extends React.Component { 
    constructor(props) { 
        super(props)

        this.state = {  targetUser: props.targetUser }; // I shouldn't be copying props into state, so I need to figure out another way to do this 

        this.renderButton = this.renderButton.bind(this)
        this.updateProfile = this.updateProfile.bind(this)
        this.updateField = this.updateField.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.cancelUpdate = this.cancelUpdate.bind(this)
    }

    componentDidMount() {
        window.previousUrl = this.props.match.url
        this.props.fetchUser(this.props.match.params.username)
    }

    componentDidUpdate(prevProps) { 
        if (this.props.match.params.username !== prevProps.match.params.username) { 
            this.props.fetchUser(this.props.match.params.username)
        }
    }

    static getDerivedStateFromProps(props, state) { 
        if (state.targetUser !== props.targetUser) { 
            return { targetUser: props.targetUser }
        } else { 
            return null;
        }
    }

    renderButton() { 
        let preview

        if (this.state.targetUser) { 
            if (this.state.avatarUrl) {
                preview = <img src={this.state.avatarUrl} className="profile-pic-preview" />
            } else {
                preview = (this.state.targetUser.avatar) ? 
                    <img src={this.state.targetUser.avatar} className="profile-pic-preview" /> : 
                    null
            }
        }

        if (this.props.currentUser === this.props.targetUser) {
            return <ModalForm 
                updateField={this.updateField} 
                updateProfile={this.updateProfile} 
                state={this.state.targetUser} 
                handleFile={this.handleFile} 
                preview={preview} 
                cancelUpdate={this.cancelUpdate} />
        } else {
            return
        }
    }

    updateField(field) {
        return e => { 
            let targetUser = this.state.targetUser 
            targetUser[field] = e.target.value
            this.setState({ targetUser })
        }
    }

    updateProfile(e, bio) { 
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[id]', this.props.targetUser.id)
        formData.append('user[bio]', bio);
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

    // From the React.Component docs: 
    // The render() function should be pure, meaning that it does not modify component 
    // state, it returns the same result each time it’s invoked, and it does not directly 
    // interact with the browser. If you need to interact with the browser, perform 
    // your work in componentDidMount() or the other lifecycle methods instead. Keeping 
    // render() pure makes components easier to think about.
    render() { 
        if (!this.props.targetUser) return ( 
            <div className="index-spinner-container">
                <WaveSpinner size={40} color="#4D4DFF" loading={true} />
            </div>
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
                            <h1>{`${this.props.targetUser.username}'s Profile`}</h1>
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

                <Footer />
            </div>
        )
            
    }
}

// export default Profile; // Could've put it down here as well

// Also from the React.Component docs: 
// Note
// Avoid copying props into state! This is a common mistake:
// constructor(props) {
//     super(props);
//     // Don't do this!
//     this.state = { color: props.color };
// }
// The problem is that it’s both unnecessary(you can use this.props.color directly instead), and creates bugs(updates to the color prop won’t be reflected in the state).
// Only use this pattern if you intentionally want to ignore prop updates.In that case, it makes sense to rename the prop to be called initialColor or defaultColor.You can then force a component to “reset” its internal state by changing its key when necessary.
// Read our blog post on avoiding derived state(this is a link) to learn about what to do if you think you need some state to depend on the props.