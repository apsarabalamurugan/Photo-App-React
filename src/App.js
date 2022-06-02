import React from 'react';
import NavBar from './NavBar';
import Profile from './Profile';
import Stories from './Stories';
import Suggestions from './Suggestions';
import Posts from './Posts';

class App extends React.Component {  

    render () {
        return (
            <div>
                <NavBar title="Photo App" username="my user" />
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