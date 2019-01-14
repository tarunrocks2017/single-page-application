import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 

class NavigationHeader extends Component {

    render() {
        return (
            <header>
      <nav className="navbar navbar-expand-lg">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="./HomePage.html">MovieWorld</a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/homepage">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/movies">Movies</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/actors">Actors</Link>
                  </li>
                </ul>
              </div>
            </nav>
</header>
        )
    }
}

export default NavigationHeader ;