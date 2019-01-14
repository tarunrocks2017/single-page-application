import React from 'react';
import {Link} from 'react-router-dom';

class MovieComponent extends React.Component {

    render() {
    return (
        <div className="data-container">
            <div className="content-image">
                <img src={require('../images'+this.props.movie.image_url)} alt="content-pic" />
            </div>
            <div className="content-info">
                <h5>{this.props.movie.moviename}</h5>
            </div>
            <div className="content-info">
                <h5>{this.props.movie.releaseYear}</h5>
            </div>
            <div className="content-info">
                <h5>{this.props.movie.status}</h5>
            </div>
            <div className="content-info">
                <h5>{this.props.movie.actorname}</h5>
            </div>
            <div class='content-info'>
                <Link to={`movies/edit/${this.props.movie.movieid}`}><button class='edit-button btn btn-primary'name={this.props.movie.movieid} >EDIT</button></Link>
                <button class='delete-button btn' id={this.props.movie.movieid} onClick={this.props.method}>DELETE</button>
            </div>
        </div>
    )
    }
}
export default MovieComponent;