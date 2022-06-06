import React from 'react';
import LikeButton from './LikeButton';
import BookmarkButton from './BookmarkButton';
import AddComment from './AddComment';
import Comments from './Comments';
import {getHeaders} from './utils';

class Suggestion extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            suggestion: props.model
        }
        this.toggleFollow = this.toggleFollow.bind(this);
    }

    toggleFollow() {
        
    }
    
    render () {
        const suggestion = this.state.suggestion;
        if (!suggestion) {
            return (
                <div></div>  
            );
        }
        return (
            <section className="suggestion">
                <div class="suggestion">
                    <img src={suggestion.thumb_url} />
                    <div>
                        <p class="username">{suggestion.username}</p>
                        <p class="suggestion-text">suggested for you</p>
                    </div>
                    <div>
                        <button class = "follow" 
                        aria-label = "Follow"
                        aria-checked = "false"
                        data-user-id = {suggestion.id} 
                        onclick = {this.toggleFollow}>follow</button>
                    </div>
                </div>
            </section> 
        );     
    }
}

export default Suggestion;