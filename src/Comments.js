import React from 'react';

class Comments extends React.Component { 
    render() {
        const comments = this.props.comments;
        const lastComment = comments[comments.length -1];
        // console.log("firstcomments", comments);
        if (comments && comments.length > 1){
            // console.log("user", comments[0].user.username);
            return (<div>
                <p><span className="card_comment_username"><b>{lastComment.user.username} </b></span> 
                {lastComment.text} </p>
                <p className = "timestamp" > {lastComment.display_time} </p>
                <button id = "view_comments" className = "link">
                    View all {comments.length} comments
                </button>
                </div>
            );
        }
        else if (comments.length === 1) {
            return (<div>
                <p><span className="card_comment_username"><b>{lastComment.user.username} </b></span> 
                {lastComment.text} </p>
                <p className = "timestamp" > {lastComment.display_time} </p>
                </div>
            );
        }
        else {
            return (null)
        }

        

    }

}
export default Comments;