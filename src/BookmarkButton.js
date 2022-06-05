import React from 'react';
import {getHeaders} from './utils.js';

class BookmarkButton extends React.Component { 

    constructor(props) {
        super(props);

        this.toggleBookmark = this.toggleBookmark.bind(this);
        this.bookmark = this.bookmark.bind(this);
        this.unbookmark = this.unbookmark.bind(this);
        // this.remakePost = this.props.remakePost.bind(this);
    }

    toggleBookmark () {
        if(this.props.bookmarkId) {
            this.unbookmark();
        } else {
            this.bookmark();
        }
    }
    bookmark () {
        console.log("bookmark");
        // const postId = this.props.postId;
        const url = `/api/bookmarks`
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

    unbookmark () {
        console.log("unbookmark");
        // const postId = this.props.postId;
        const url =  '/api/bookmarks/' + this.props.bookmarkId;
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
        const bookmarkId = this.props.bookmarkId;
        const classFill = bookmarkId ? 'fas' : 'far';
        return (
            <button onClick={this.toggleBookmark}
                    aria-label="Bookmark Button" >
            
            {/* role="switch"
            className='like'
                aria-label="Like Button" 
                aria-checked={likeId ? true : false}
                onClick={this.toggleLike}> */}
                <i className={classFill + ' fa-bookmark'}></i>
            </button>
        ); 
    }

}
export default BookmarkButton;