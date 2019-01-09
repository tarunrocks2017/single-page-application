import React from 'react';

const MovieComponent = (props) => {
    return (
        <div className="data-container">
            <div className="content-image">
                <img src={require('../images'+props.movie.image_url)} alt="content-pic" />
            </div>
            <div className="content-info">
                <h5>{props.movie.moviename}</h5>
            </div>
            <div className="content-info">
                <h5>{props.movie.releaseYear}</h5>
            </div>
            <div className="content-info">
                <h5>{props.movie.status}</h5>
            </div>
            <div className="content-info">
                <h5>{props.movie.actorname}</h5>
            </div>
        </div>
    )
}
export default MovieComponent;