import React from 'react';
import WebFooter from '../components /footer';
import '../../src/actor.css';
import MovieComponent from './movieComponent';
import {Link} from 'react-router-dom';

class movieContent extends React.Component {

    render() {
        const {history} = this.props ;
        console.log(history);
        return (

            <div>
                <section className="container-fluid d-flex">
                <div className="movie-operation">
                    <ul className="movie-operation-list">
                       <Link to="/movies/addMovies"><li>ADD MOVIE</li></Link>
                    </ul>
                </div>
                <div className="movie-list-container d-flex">
                    <div className="list-heading">
                        <ul>
                            <li>MovieImage</li>
                            <li>MovieName</li>
                            <li>ReleaseYear</li>
                            <li>status</li>
                            <li>ActorName</li>
                        </ul>
                    </div>
                    <div className="content-list d-flex">
                        {
                            this.props.stateMovies.map((movie) => {
                                return <MovieComponent movie={movie} />
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
export default movieContent;