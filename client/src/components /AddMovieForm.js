import React from 'react';
import '../AddMovie.css';
import Redirect from 'react-router-dom/Redirect';

class AddMovieForm extends React.Component {
    constructor(){
        super();
        this.getFormData = this.getFormData.bind(this);
        this.state = {
            redirect:false,
        }
    }

    getFormData(e){
        e.preventDefault();
        let movie = {};
        movie.moviename = document.getElementById('moviename').value;
        movie.status = document.getElementById('status').value;
        movie.releaseYear = document.getElementById('releaseYear').value;
        movie.actorname = document.getElementById('actorname').value;
        movie.image_url = document.getElementById('image').value;
        movie.desc = document.getElementById('desc').value;
        this.props.method(movie);
        this.setState({
            redirect:true,
        })
        
    }
    render() {
        const {redirect} = this.state;
        if(redirect){
            return <Redirect to="/movies" />
        }
        return (
            <section className="container-fluid">
            <img src={require('../../src/images/form-background-01.jpg')} alt="movieimage" />
            <div className="form-div opacity"></div>
            <div className="form-div">
                    <form className="add-movie-form d-flex">

                            <div className="form-group">
                              <label for="exampleInputEmail1">MovieName</label>
                              <input type="text" className="form-control" id="moviename" placeholder="MovieName" name="moviename"></input>
                            </div>
                            <div className="form-group">
                              <label for="exampleInputPassword1">ReleaseYear</label>
                              <input type="number" className="form-control" id="releaseYear" placeholder="ReleaseYear" name="releaseYear"></input>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Status</label>
                                <input type="text" className="form-control"  id="status" placeholder="Status" name="status"></input>
                
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">ActorName</label>
                                <input type="text" className="form-control"  id="actorname" placeholder="ActorName" name="actorname"></input>
                
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">image-url</label>
                                <input type="text" className="form-control" id="image" placeholder="image-url" name="image"></input>
                
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Description</label>
                                <input type="text" className="form-control" id="desc" placeholder="description" name="description"></input>
                
                            </div>
                            <div className="form-group">
                            <button className="btn btn-primary" onClick={this.getFormData}>add</button>
                        </div>
                          </form>
            </div>
        </section>
        )
    } 
}

export default AddMovieForm;