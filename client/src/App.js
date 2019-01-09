import React, { Component } from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import HomeContent from './components /homepage';
import MovieContent from './components /movies';
import ActorContent from './components /actor';
import AddMovieForm from './components /AddMovieForm';
import AddActorForm from './components /AddActorForm';
import NavigationHeader from './components /header';
import Redirect from 'react-router-dom/Redirect';
import './App.css';

class App extends Component {

  constructor(props){
    super();
    this.state={
      actors:[],
      movies:[],
      redirect:false,
    }
    this.getActorData = this.getActorData.bind(this);
    this.addMovies = this.addMovies.bind(this);
    this.addActor = this.addActor.bind(this);
    console.log("i am here");
  }
  async componentDidMount() {
    const url = "http://localhost:8080/movies";
    const response = await fetch(url);
    const result = await response.json();
    this.setState({
      movies: result
    });

    const urlActor = "http://localhost:8080/actors";
    const Actorresponse = await fetch(urlActor);
    const Actorresult = await Actorresponse.json();
    this.setState({
      actors: Actorresult
    });
   }

  getActorData(data){
    this.setState({
      actors:data,
    });
    console.log(data);
  }

  addMovies(movie){
    const {movies} = this.state ;
    movies.push(movie); 
  }

  addActor(actor){
    const {actors} = this.state ;
    actors.push(actor);
  }
  render() {
   
    return (
      <Router>
        <div className="myApp">
          <NavigationHeader />
          <Switch>
          <Route path="/" component={HomeContent} exact />
          <Route path="/movies" render={(routeProps) => ( <MovieContent stateMovies={this.state.movies} /> )} exact/>
          <Route path="/actors" render={(routeProps) => ( <ActorContent stateActors={this.state.actors} method={this.getActorData} /> )} exact/>
          <Route path="/actors/addActor" render={(routeProps) => (<AddActorForm  method={this.addActor} movieOptions={this.state.movies} /> )} />
          <Route path="/movies/addMovies" render={(routeProps) => (this.state.redirect ? (<Redirect to="/movies" />) : (<AddMovieForm method={this.addMovies} />)) } />
          </Switch>
        </div>
      </Router>
    ) 
  }
}
export default App
