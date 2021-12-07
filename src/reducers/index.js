import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer';


const rootReducer = combineReducers({
    movieRed: movieReducer,
    favoritesRed: favoritesReducer
})


export default rootReducer;