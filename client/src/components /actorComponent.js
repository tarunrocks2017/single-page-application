import React from 'react';

const ActorComponent = (props) => {
    return (
        <div className="data-container">
            <div className="content-image">
                <img src={props.actorObj.image_url} alt="content-pic" />
            </div>
            <div className="content-info">
                <h5>{props.actorObj.actorname}</h5>
            </div>
            <div className="content-info">
                <h5>{props.actorObj.activeYear}</h5>
            </div>
            <div className="content-info">
                <h5>{props.actorObj.moviename}</h5>
            </div>
            <div className="content-info">
                <h5>{props.actorObj.totalmovies}</h5>
            </div>
        </div>
    )
}

export default ActorComponent;