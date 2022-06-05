import React from 'react';
import NavBar from './NavBar';
import Profile from './Profile';
import Stories from './Stories';
import Suggestions from './Suggestions';
import Posts from './Posts';
import {getHeaders} from './utils';

class App extends React.Component {  
    constructor(props) {
        super(props);
        // issue feetch request to api/profile endpoint
        this.getProfileFromServer();
        this.state = {
            user: {}
        }
    }

    getProfileFromServer () {
        fetch('/api/profile',{
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                user: data
            })
        })
    }

    render () {
        return (
            <div>
                <NavBar title="Photo App" username={this.state.user.username} />
                <aside>
                    <Profile />
                    <Suggestions />
                </aside>

                <main className="content">
                    <Stories />
                    <Posts />
                </main>
            </div>
            // <div>

            // <nav className="main-nav">
            //     <h1>Photo App</h1>
            //     <NavBar />
            // </nav>

            // <aside>
            //     <header>
            //         Profile
            //         <Profile />
            //     </header>
            //     <div className="suggestions">
            //         <p className="suggestion-text">Suggestions for you</p>
            //         <div>
            //             Suggestions
            //             <Suggestions />
            //         </div>
            //     </div>
            // </aside>

            // <main className="content">
            //     <header className="stories">
            //         Stories
            //         <Stories />
            //     </header>
            //     <div id="posts">
            //         Posts
            //         <Posts />
            //     </div>
            // </main>

            // </div>
        );
    }
}

export default App;