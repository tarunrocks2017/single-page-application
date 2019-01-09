import React, { Component } from 'react';
import NavigationHeader from './header';
import webFooter from './footer';

class HomeContent extends Component {
    render() {
        return (
            <div className="container-fluid" style={{height:'400px', border:'2px solid black'}}>
                <NavigationHeader />
                <div className="homepageContent">
                <img src="/html.jpg" alt="this is"></img>
                <div className="welcome-content-div">
                    <h2>welcome div</h2>
                </div>
                </div>
                <webFooter />
            </div>
        )
    }
}

export default HomeContent

