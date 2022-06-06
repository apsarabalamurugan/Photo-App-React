import React from 'react';
import {getHeaders} from './utils';

class Suggestion extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            suggestion: this.props.model,
            followText: "follow"
        }
        this.toggleFollow = this.toggleFollow.bind(this);
        this.follow = this.follow.bind(this);
        this.unfollow = this.unfollow.bind(this);
        this.followingId = -1;
    }

    toggleFollow() {
        if(this.followingId !== -1) {
            this.unfollow();
        } else {
            this.follow();
        }
    }

   follow () {
        const postData = {
            user_id: this.state.suggestion.id
        };
        
        fetch('/api/following/', {
                method: "POST",
                headers: getHeaders(),
                body: JSON.stringify(postData)
            })
            .then(response => response.json())
            .then(data => {
            console.log(data)
            this.followingId = data.id;
            this.setState({
                suggestion: this.props.model,
                followText: "unfollow"
            })
        })
    };
    
    unfollow() {
        // issue delete request
        const deleteURL ='api/following/' + this.followingId;
        fetch(deleteURL, {
                method: "DELETE",
                headers: getHeaders()
            })
            .then(response => response.json())
            .then(data => {
            // this.props.remakePost()
            console.log(data)
            this.followingId = -1;  
            this.setState({
                suggestion: this.props.model,
                followText: "follow"
            })
        })
    };
    
    
    render () {
        const suggestion = this.state.suggestion;
        if (!suggestion) {
            return (
                <div></div>  
            );
        }
        return (
            <section className="suggestion">
                <div className="suggestion">
                    <img src={suggestion.thumb_url} alt = {suggestion.username} />
                    <div>
                        <p className="username">{suggestion.username}</p>
                        <p className="suggestion-text">suggested for you</p>
                    </div>
                    <div>
                        <button className = "follow" 
                        aria-label = "Follow"
                        role="switch"
                        aria-checked={this.followingId !== -1 ? true : false}
                        data-user-id = {suggestion.id} 
                        onClick = {this.toggleFollow}>{this.state.followText}</button>
                    </div>
                </div>
            </section> 
        );     
    }
}

export default Suggestion;