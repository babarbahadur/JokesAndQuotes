import { combineReducers } from 'redux';

import searchJokeReducer from '../features/jokes/reducer';
import searchQuoteReducer from '../features/quotes/reducer'

const rootReducer = combineReducers({
    searchJoke: searchJokeReducer,
    searchQuote: searchQuoteReducer
}); 

export default rootReducer;