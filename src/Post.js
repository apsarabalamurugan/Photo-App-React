import React from 'react';

class Post extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            post: this.props.model
        }
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
                        <i class = "far fa-heart"></i>
                        <i class="far fa-comment"></i>
                        <i class="far fa-paper-plane"></i>
                        Additional data / controls go here...
                    </div>
                    <p>{ post.caption }</p>
                </div>
            </section> 
        );     
    }
}

export default Post;