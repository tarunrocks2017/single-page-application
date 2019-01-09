import React from 'react';
import '../addActor.css';
import Options from './SelectMovieComponent';
import Redirect from 'react-router-dom/Redirect';

class AddActorForm extends React.Component {
    constructor(){
        super();
        this.getFormData = this.getFormData.bind(this);
        this.state = {
            redirect:false,
        }
    }
    getFormData(e){
        e.preventDefault();
        let actor = {};
        actor.actorname = document.getElementById('actorname').value;
        actor.activeYear = document.getElementById('activeYear').value;
        actor.moviename = document.getElementById('moviename').value;
        actor.totalmovies = document.getElementById('totalmovies').value;
        actor.image_url = document.getElementById('image').value;
        this.props.method(actor);
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
            <section class="container-fluid d-flex">
            <div class="bg-actor-form">
            <img src="../images/addActor-06.jpg" alt=""></img>
            </div>
            <div class ="actor-form opacity"></div>
            <div class="actor-form">
                    <form class="add-movie-form d-flex">

                            <div class="form-group">
                              <label for="exampleInputEmail1">ActorName</label>
                              <input type="text" class="form-control" id="actorname" placeholder="ActorName"></input>
                            </div>
                            <div class="form-group">
                              <label for="exampleInputPassword1">ActiveYear</label>
                              <input type="text" class="form-control" id="activeYear" placeholder="ActiveYear"></input>
                            </div>
                            <div class="form-group mb-3">
                                  <label  for="inputGroupSelect01">Options</label>
                                <select class="custom-select" id="moviename">
                                {
                                    
                                    this.props.movieOptions.map((option) => {
                                        return <Options option = {option} />
                                    })
                                   
                                }
                                </select>
                              </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">TotalMovies</label>
                                <input type="number" class="form-control" id="totalmovies"  placeholder="TotalMovies"></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">image-url</label>
                                <input type="text" class="form-control" id="image"  placeholder="image-url"></input>
                
                            </div>
                            <div class="form-group">
                            <button  class="btn btn-primary" id="addActor" onClick={this.getFormData}>add</button>
                        </div>
                </form>
            </div>
        </section>
        )
    }
}
export default AddActorForm;