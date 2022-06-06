import React from 'react';
import { getHeaders } from './utils';
import Story from './Story';

class Stories extends React.Component {  

    constructor(props) {
        super(props);
        // constructor logic
        console.log('Stories component created');
        this.state = { stories: [] };
        this.fetchStories = this.fetchStories.bind(this);
    }

    fetchStories() {
        fetch('/api/stories', {
            headers: getHeaders()
        })
        .then(response => response.json())
        .then(data => {
            this.setState({ stories: data });
        })
    }
    
    componentDidMount() {
        // fetch posts
        console.log('Stories component mounted');
        this.fetchStories();
    }

    

    render () {
        return (
            <div className="stories">
                {
                    this.state.stories.map(story => {
                        return (
                            <Story model={story} key = {"user" + story.user.username}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default Stories;