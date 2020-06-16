import {
    SEARCH_JOKE,
    SEARCH_JOKE_SUCCESS,
    SEARCH_JOKE_FAILURE,
  } from '../constants';
  
    const initialState = {
      isLoading: false,
      isError: false,
      error: {},
      joke: null,
    };
    
    export default function searchJokeReducer(state = initialState, action) {
      switch (action.type) {
        case SEARCH_JOKE:
          return {
            ...state,
            isLoading: false,
            isError: false,
            error: {},
          };
        case SEARCH_JOKE_SUCCESS:
          return {
            ...state,
            isLoading: false,
            joke: action.payload,
          };
        case SEARCH_JOKE_FAILURE:
          return {
            ...state,
            isLoading: false,
            isError: true,
            error: action.error
          };
        default:
          return state;
      }
    }
    