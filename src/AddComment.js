
import React from 'react';
import {getHeaders} from './utils.js';

class AddComment extends React.Component { 

    constructor(props) {
        super(props);

        this.addComment = this.addComment.bind(this);
        this.state = {value: ''};
        this.commentRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        // this.remakePost = this.props.remakePost.bind(this);
        this._handleKeyDown = this._handleKeyDown.bind(this);

    }

    handleChange(ev) {
        this.setState({value: ev.target.value});
    }
    
    _handleKeyDown = (ev) => {
        if (ev.key === 'Enter') {
          console.log('do validate');
        }
      }

    addComment () {
        // const postId = this.props.postId;
        const url = `/api/comments`
        const postData = {
            post_id : this.props.postId,
            text: this.state.value
        }
        fetch(url, {
            headers: getHeaders(),
            method: 'POST',
            body: JSON.stringify(postData),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({value: ''});
            this.commentRef.current.focus();
            this.props.refreshPost();
        })

    }

    render () { 
        return(
            <div>
            <div className="add_comment">
                <i className="far fa-smile"></i>
                <input type="text"
                    // id="writteCommentFor${post.id}"
                    aria-label="Add a comment..."
                    placeholder="Add a comment..."
                    value={this.state.value}
                    ref={this.commentRef}
                    onChange={this.handleChange}
                    // data-user-id="${post.user.id}"
                    // data-username="${post.user.username}"
                    // data-comment-id="${post.comments.id}"
                    // data-post-id="${post.id}"
                />
            </div>
            <button
                className="comment_button"
                onKeyDown={this._handleKeyDown}
                // data-post-id={post.id}
                // data-post-comments={post.comments}
                onClick={this.addComment}>
                Post
            </button>
            </div>
               );}
}          
export default AddComment;
