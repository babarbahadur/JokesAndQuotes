import {
    SEARCH_JOKE,
    SEARCH_JOKE_SUCCESS,
    SEARCH_JOKE_FAILURE,
  } from '../constants';
    
export default class searchJokeActions {
    static searchJoke() {
        return {
            type: SEARCH_JOKE
        };
    }

    static searchJokeSuccess(data) {
        return {
            type: SEARCH_JOKE_SUCCESS,
            payload: data
        };
    }

    static searchJokeFailure(error) {
        return {
            type: SEARCH_JOKE_FAILURE,
            error
        };
    }
}
    