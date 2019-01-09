import React from 'react';
import WebFooter from '../components /footer';
import '../../src/actor.css';
import ActorComponent from './actorComponent';
import {Link} from 'react-router-dom';

class ActorContent extends React.Component {
    
    render() {
        return (
            <div>
                <section className="container-fluid d-flex">
                <div className="movie-operation">
                    <ul className="movie-operation-list">
                       <Link to="/actors/addActor"><li>ADD ACTOR</li></Link>
                    </ul>
                </div>
                <div className="movie-list-container d-flex">
                    <div className="list-heading">
                        <ul>
                            <li>ActorImage</li>
                            <li>ActorName</li>
                            <li>ActiveYear</li>
                            <li>movieName</li>
                            <li>TotalMovies</li>
                        </ul>
                    </div>
                    <div className="content-list d-flex">
                    {
                        this.props.stateActors.map((actor) => {
                            return <ActorComponent actorObj= {actor} />
                        })
                    }
                        
                    </div>
                </div>
                   
            </section>
                <WebFooter />
            </div>
        )
    }
}
export default ActorContent;
