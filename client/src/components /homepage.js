import React, { Component } from 'react';

class HomeContent extends Component {
    render() {
        return (
            <div className="container-fluid" style={{height:'400px', border:'2px solid black'}}>
                <div className="homepageContent">
                <img src="/html.jpg" alt="this is"></img>
                <div className="welcome-content-div">
                    <h2>welcome div</h2>
                </div>
                </div>
            </div>
        )
    }
}

export default HomeContent

