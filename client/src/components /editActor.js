import React from 'react';
import '../addActor.css';
import Options from './SelectMovieComponent';
import Redirect from 'react-router-dom/Redirect';
import {connect} from 'react-redux';
import {editActor} from '../Store/ReduxActions/actions';
//import actor from './actor';

class EditActorForm extends React.Component {
    constructor(props){
        super(props);
       
        this.state = {
            redirect:false,
                actorid:0,
                movieid:0,
                actorname:'',
                activeYear:'',
                totalmovies:0,
                image_url:'',
                moviename:''
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log("i am constructor");
    }

    handleChange(e) {
        console.log(e.target.value);
        this.setState({
                [e.target.name]:e.target.value,
        })
    }

     componentDidMount() {
        const id = this.props.match.params.id ;
        const actorData = this.props.actors.filter(element => element.actorid === +id);
        this.setState({
            actorid:actorData[0].actorid,
            actorname:actorData[0].actorname,
            activeYear:actorData[0].activeYear,
            movieiname : actorData[0].moviename,
            totalmovies :actorData[0].totalmovies,
            image_url:actorData[0].image_url,
            movieid:actorData[0].movieid,

        })
     }


     handleSubmit(e) {
        e.preventDefault();
        this.props.editActor(this.state);
        this.setState({
            redirect:true
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
                                        return <Options option = {option} key={option.movieid} />
                                    })
                                   
                                }
                                </select>
                              </div>
                            <div className="form-group">
                                <label for="examAddActorFormpleInputEmail1">TotalMovies</label>
                                <input type="number" className="form-control" name="totalmovies"  placeholder="TotalMovies" value={this.state.totalmovies} onChange={this.handleChange}></input>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">image-url</label>
                                <input type="text" className="form-control" name="image_url" value={this.state.image_url} placeholder="image-url" onChange={this.handleChange}></input>
                
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
        actors:state.actors,
    }
}
const mapDispachProps = {editActor}
export default connect(mapStateProps,mapDispachProps)(EditActorForm);