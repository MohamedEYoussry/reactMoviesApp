
const Initial_state = {
    movies: [],
    getMovies:[]

}
export default function favReducer(state = Initial_state, action) {
    switch (action.type) {
        case "SET_FAV":
            return { ...state, movies: [...state.movies, action.payload] }
        case "SET_DEL":
            return { ...state, movies: [...action.payload] }  // add splice 
            case 'SET_FAVMOVIE':                               // THunk
            return{...state,getMovies:[...action.payload]}

        default:
            return state
    }
}