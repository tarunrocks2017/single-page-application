import React from 'react';
import WebFooter from '../components /footer';
import '../../src/actor.css';
import ActorComponent from './actorComponent';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteActor, editActor} from '../Store/ReduxActions/actions';

class ActorContent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state= {
            actorElement:[]
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleDelete(e) {
        const id = e.target.id ;
        this.props.deleteActor(id);
    }

    handleEdit(e) {
        const id = e.target.id ;
        const element = this.props.actor.filter(actor => actor.actorid === id);
        this.setState({
            actorElement:element
        })
    }
    render() {
        console.log("in render");
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
                        this.props.actors.map((actor) => {
                            return <ActorComponent actorObj= {actor} deleteMethod={this.handleDelete} editMethod={this.handleEdit}/>
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
const mapActorStateProps = (state) => {
    console.log("i come inside again");
    console.log(state);
    return {
        actors:state.actors,
        movies:state.movies,
    }
}
const mapDispatchToProps = {deleteActor,editActor};

export default connect(mapActorStateProps,mapDispatchToProps)(ActorContent);
