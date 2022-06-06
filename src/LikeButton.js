import React from 'react';
import {getHeaders} from './utils.js';

class LikeButton extends React.Component { 

    constructor(props) {
        super(props);

        this.toggleLike = this.toggleLike.bind(this);
        this.like = this.like.bind(this);
        this.unlike = this.unlike.bind(this);
        // this.remakePost = this.props.remakePost.bind(this);
    }

    toggleLike () {
        if(this.props.likeId) {
            this.unlike();
        } else {
            this.like();
        }
    }
    like () {
        console.log("LIKE");
        // const postId = this.props.postId;
        const url = `/api/posts/likes`
        const postData = {
            post_id : this.props.postId
        }
        fetch(url, {
            headers: getHeaders(),
            method: 'POST',
            body: JSON.stringify(postData),
        })
        .then(response => response.json())
        .then(data => {
            this.props.refreshPost();
        })
    }

    unlike () {
        console.log("UNLIKE");
        // const postId = this.props.postId;
        const url =  '/api/posts/likes/' + this.props.likeId;
        fetch(url, {
            method: 'DELETE',
            headers: getHeaders(),
        })
        .then(response => response.json())
        .then(data => {
            // this.props.remakePost()
            console.log(data)
            this.props.refreshPost();
        })
    }

    render () {
        const likeId = this.props.likeId;
        const classFill = likeId ? 'fas' : 'far';
        return (
            <button onClick={this.toggleLike}
                    aria-label="Like Button" 
                    role="switch"
                    aria-checked={likeId ? true : false}
                    >
            
            {/* role="switch"
            className='like'
                aria-label="Like Button" 
                aria-checked={likeId ? true : false}
                onClick={this.toggleLike}> */}
                <i className={classFill + ' fa-heart'}></i>
            </button>
        ); 
    }

}
export default LikeButton;