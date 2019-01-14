import React from 'react';
import '../addActor.css';
import Options from './SelectMovieComponent';
import Redirect from 'react-router-dom/Redirect';
import {connect} from 'react-redux';
import {addActors} from '../Store/ReduxActions/actions';

class AddActorForm extends React.Component {
    constructor(){
        super();
        this.state = {
            redirect:false,
                actorname:'',
                activeYear:'',
                moviename:'',
                totalmovies:0,
                image_url:'',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
                [e.target.name]:e.target.value,
        })
    }

     handleSubmit(e) {
        e.preventDefault();
        this.props.addActors(this.state);
        this.setState({
            redirect:true,
        })
    }

    render(){
        const { redirect } = this.state ;
        if(redirect){
            return <Redirect to="/actors"/>
        }
        return (
            <section className="container-fluid d-flex">
            <div className="bg-actor-form">
            <img src="../images/addActor-06.jpg" alt=""></img>
            </div>
            <div className ="actor-form opacity"></div>
            <div className="actor-form">
                    <form className="add-movie-form d-flex" onSubmit={this.handleSubmit}>

                            <div className="form-group">
                              <label for="exampleInputEmail1">ActorName</label>
                              <input type="text" className="form-control" name="actorname" placeholder="ActorName" value={this.state.actorname} onChange={this.handleChange}></input>
                            </div>
                            <div className="form-group">
                              <label for="exampleInputPassword1">ActiveYear</label>
                              <input type="text" className="form-control" name="activeYear" placeholder="ActiveYear" value={this.state.activeYear} onChange={this.handleChange}></input>
                            </div>
                            <div className="form-group mb-3">
                                  <label  for="inputGroupSelect01">Options</label>
                                <select className="custom-select" name="moviename" value={this.state.moviename} onChange={this.handleChange}>
                                {
                                    
                                    this.props.movies.map((option) => {
                                        return <Options option = {option} />
                                    })
                                   
                                }
                                </select>
                              </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">TotalMovies</label>
                                <input type="number" className="form-control" name="totalmovies"  placeholder="TotalMovies" value={this.state.totalmovies} onChange={this.handleChange}></input>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">image-url</label>
                                <input type="text" className="form-control" name="image_url"  placeholder="image-url" value={this.state.image_url} onChange={this.handleChange}></input>
                
                            </div>
                            <div className="form-group">
                            <button type="submit" className="btn btn-primary" id="addActor">add</button>
                        </div>
                </form>
            </div>
        </section>
        )
    }
}

const mapStateProps = (state) => {
    console.log("in addactorform");
    console.log("when you hit the addform"+state.actors);
    return {
        movies:state.movies,
    }
}
const mapDispachProps = {addActors}
export default connect(mapStateProps,mapDispachProps)(AddActorForm);