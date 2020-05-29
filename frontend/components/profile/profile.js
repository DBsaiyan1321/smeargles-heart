import React from "react"; 

export default class Profile extends React.Component { 
    componentDidMount() {
        this.props.fetchUser(this.props.match.params.username)
        // this.props.fetchUsers()
    }

    render() { 
        debugger
        if (!this.props.targetUser) return null

        return <p>I am here</p>
    }
}