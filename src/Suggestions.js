import React from 'react';
import Suggestion from './Suggestion';
import {getHeaders} from './utils';


class Suggestions extends React.Component {  
    constructor(props) {
        super(props);
        // constructor logic
        console.log('Suggestions component created');
        this.state = { suggestions: [] };
        this.fetchSuggestions = this.fetchSuggestions.bind(this);
    }

    componentDidMount() {
        // fetch posts
        console.log('Suggestions component mounted');
        this.fetchSuggestions()
    }

    fetchSuggestions() {
        fetch('/api/suggestions', {
            // authentication headers added using 
            // getHeaders() function from src/utils.js
            headers: getHeaders()
        })
        .then(response => response.json())
        .then(data => {
            this.setState({ suggestions: data });
        })
    }

    render () {
        return (
            <div className="suggestions">
                {
                    this.state.suggestions.map(suggestion => {
                        return (
                            <Suggestion model={suggestion} key = {"user" +suggestion.id}/>
                        )
                    })
                }
            </div>
        )     
    }
}

export default Suggestions;