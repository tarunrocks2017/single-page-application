
const initialState = {
    actors:[],
    movies:[],
}

const reducer = (state = initialState , action) => {

    switch(action.type){

        case 'ADD_MOVIE':
            const newMovieAdded = {...state};
            newMovieAdded.movies.push(action.val.result[0]);
            return {
                ...newMovieAdded,
                movies:newMovieAdded.movies
            }
        case 'GET_MOVIES':
            const newMovieState = {...state};
            newMovieState.movies = action.val.result ;
            return {
                ...newMovieState,
                movies:newMovieState.movies
            }
        case 'GET_ACTORS':
            const newActorState = {...state};
            newActorState.actors = action.val.result ;
            return {
                ...newActorState,
                actors:newActorState.actors
            }

        case 'ADD_ACTOR':
            const newAddedState = {...state};
            newAddedState.actors.push(action.val.result[0]);
            return {
                actors:newAddedState.actors,
                movies:newAddedState.movies,
            }

        case 'EDIT_ACTOR' : 
            const updatedActorState = {...state};
            const indexOfActordObject = updatedActorState.actors.findIndex(obj => obj.actorid === action.val.id);
            updatedActorState.actors.splice(indexOfActordObject,1,action.val.result[0])
            return {
                actors:updatedActorState.actors,
                movies:updatedActorState.movies
            }
        
        case 'EDIT_MOVIE' :
            const updatedMovieState = {...state};
            const indexOfMovieObject = updatedMovieState.movies.findIndex(obj => obj.movieid === action.val.id);
            updatedMovieState.movies.splice(indexOfMovieObject,1,action.val.result[0]);
            return {
                actors:updatedMovieState.actors,
                movies:updatedMovieState.movies,
            }

        case 'DELETE_ACTOR' :
            const newUpdatedActorState = {...state};
            const newActors = newUpdatedActorState.actors.filter(element => element.actorid !== action.val);
            return {
                actors:newActors,
                movies:newUpdatedActorState.movies
            }

        case 'DELETE_MOVIE' :
            const newUpdatedMovieState = {...state};
            const newMovies = newUpdatedMovieState.movies.filter(element => element.movieid !== action.val);
            return {
                actors:newUpdatedMovieState.actors,
                movies:newMovies
            }
        
        default :
        return state;
    }
};



export default reducer;