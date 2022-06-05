import React from 'react';
import LikeButton from './LikeButton';
import BookmarkButton from './BookmarkButton';
import AddComment from './AddComment';
import Comments from './Comments';
import {getHeaders} from './utils';

class Post extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            post: props.model
        }
        this.refreshPostDataFromServer = this.refreshPostDataFromServer.bind(this);
    }

    refreshPostDataFromServer() {
        console.log("remakePost");
        const url = '/api/posts/' + this.state.post.id;
        fetch(url , {
            headers: getHeaders()
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                post: data
            });
        });
    }
    
    render () {
        const post = this.state.post;
        if (!post) {
            return (
                <div></div>  
            );
        }
        return (
            <section className="card">
                <div className="header">
                    <h3>{ post.user.username }</h3>
                    <i className="fas fa-ellipsis-h"></i>
                </div>
                
                <img 
                    src={ post.image_url } 
                    alt={'Image posted by ' +  post.user.username } 
                    width="300" 
                    height="300" />
                
                <div className="info">
                    <div>
                        <LikeButton 
                            likeId={post.current_user_like_id}
                            postId={post.id}
                            refreshPost={this.refreshPostDataFromServer}
                        />
                        <i className="far fa-comment"></i>
                        <i className="far fa-paper-plane"></i>

                        <BookmarkButton
                            bookmarkId={post.current_user_bookmark_id}
                            postId={post.id}
                            refreshPost={this.refreshPostDataFromServer}
                        />
                        Additional data / controls go here...
                    </div>
                    <p>{ post.caption }</p>
                </div>
                <Comments comments={post.comments} postId={post.id}/>

                <AddComment
                    postId={post.id}
                    refreshPost={this.refreshPostDataFromServer}
                />
            </section> 
        );     
    }
}

export default Post;