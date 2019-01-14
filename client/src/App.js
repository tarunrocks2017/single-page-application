import React, { Component } from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import HomeContent from './components /homepage';
import MovieContent from './components /movies';
import ActorContent from './components /actor';
import AddMovieForm from './components /AddMovieForm';
import AddActorForm from './components /AddActorForm';
import NavigationHeader from './components /header';
import EditActorForm from './components /editActor';
import EditMovieForm from './components /editMovie';  
//import Redirect from 'react-router-dom/Redirect';
import './App.css';
import {connect} from 'react-redux';
import {getActors, getMovies} from './Store/ReduxActions/actions';


class App extends Component {

   async componentDidMount(){
     await this.props.getActors();
     await this.props.getMovies();

    console.log("i am mounting ");
    console.log(this.props.state);
}


  render() {
    console.log(this.props.movies);
    return (
      <Router>
        <div className="myApp">
          <NavigationHeader />
          <Switch>
          <Route path="/" component={HomeContent} exact />
          <Route path="/movies" component={MovieContent} exact/>
          <Route path="/actors" component={ActorContent} exact/>
          <Route path="/actors/addActor" component={AddActorForm} />
          <Route path="/movies/addMovies" component={AddMovieForm} />
          <Route path="/actors/edit/:id" component={EditActorForm} actor={this.props.actors}/>
          <Route path="/movies/edit/:id" component={EditMovieForm} movie={this.props.movies}/>
          </Switch>
        </div>
      </Router>
    ) 
  }
}
const mapStateProps = (state) => {
  console.log("in mapstate app.js");
 console.log("state of movies"+state);
  return {
      state:state,
      actors:state.actors,
      movies:state.movies
  }
}

const mapdispatchtoProps =  {getActors,getMovies};
console.log("first connect");

export default connect(mapStateProps,mapdispatchtoProps)(App);
