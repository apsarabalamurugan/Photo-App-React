import React from 'react';

class Profile extends React.Component {  

    constructor(props) {
        super(props);
        // constructor logic
        console.log('Profile component created');
    }

    componentDidMount() {
        // fetch posts
        console.log('Profile component mounted');
    }

    render () {
        return (
            <div>
            <div className="recommendations_header"> 
                <img  className="profile_pic" src={this.props.img} alt={"profile picture for" + this.props.username}/>  
            </div>
            <div className="recommendations_header"> 
                <h1>{this.props.username}</h1> 
            </div>
            </div>
        );
    }
}

export default Profile;