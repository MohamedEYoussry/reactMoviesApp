import { legacy_createStore as createStore } from "redux";
import favReducer from "./reducer";
import { applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const store = createStore(favReducer,applyMiddleware(thunk))  //add THUNK anf middleware

export default store