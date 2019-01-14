import React from 'react';
import WebFooter from '../components /footer';
import '../../src/actor.css';
import MovieComponent from './movieComponent';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteMovie} from '../Store/ReduxActions/actions';

class movieContent extends React.Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
  
    handleDelete(e) {
        const id = e.target.id ;
        this.props.deleteMovie(id);
        console.log("i am in handle delete");
    }

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
                            this.props.movies.map((movie) => {
                                return <MovieComponent movie={movie} method={this.handleDelete} />
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
const mapMovieStateProps = (state) => {
    console.log("i come inside every time");
    return {
        movies:state.movies
    }
}
const mapDispatchToProps = { deleteMovie }

export default connect(mapMovieStateProps,mapDispatchToProps)(movieContent);