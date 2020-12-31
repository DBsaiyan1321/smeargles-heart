import React, { useEffect } from "react";
import ImaginationIndexItem from "../imaginations/imagination_index_item";
import MainNavBar from "../navbar/main_nav_bar";
import ModalForm from "./modal"
import { WaveSpinner } from "react-spinners-kit";
import Footer from "../footer";

const Profile = props => {
    useEffect(() => {
        window.previousUrl = props.match.url;
        props.fetchUser(props.match.params.username);
    }, [props.match.params.username]);

    const renderButton = () => {
        if (props.currentUser === props.targetUser) {
            return <ModalForm user={props.targetUser} {...props} />
        } else {
            return
        }
    }

    if (!props.targetUser) return ( 
        <div className="index-spinner-container">
            <WaveSpinner size={40} color="#4D4DFF" loading={true} />
        </div>
    )

    return ( 
        <div>
            <MainNavBar currentUser={props.currentUser} logout={props.logout} />
            <div className="profile-page">
                <div className="profile-head-info">
                    <div className="profile-head-pic-and-name">
                        {(props.targetUser.avatar) ?
                            <img src={props.targetUser.avatar} alt="broke" className="profile-page-avatar" /> :
                            <div className="profile-page-no-avatar">Profile Picture</div>}
                        <h1>{`${props.targetUser.username}'s Profile`}</h1>
                        {renderButton()}
                    </div>
                    <p>{props.targetUser.bio}</p>
                </div>
                <div className="profile-imaginations">
                    <ul className="imaginations-index">
                        {props.ownedImaginations.map((imagination) => {
                            return <ImaginationIndexItem imagination={imagination} key={imagination.id} artist={imagination.username} />
                        })}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Profile; 
