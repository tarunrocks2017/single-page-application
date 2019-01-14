import React from 'react';
import {Link} from 'react-router-dom';

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
            <div class='content-info'>
            <Link to={`/actors/edit/${props.actorObj.actorid}`} ><button class='edit-button btn btn-primary' name={props.actorObj.actorid} >EDIT</button></Link>
                <button class='delete-button btn' id={props.actorObj.actorid} onClick={props.deleteMethod}>DELETE</button>
            </div>
        </div>
    )
}

export default ActorComponent;