import {
    SEARCH_QUOTES,
    SEARCH_QUOTES_SUCCESS,
    SEARCH_QUOTES_FAILURE,
  } from '../constants';
  
    const initialState = {
      isLoading: false,
      isError: false,
      error: {},
      quote: null,
    };
    
    export default function searchQuoteReducer(state = initialState, action) {
      switch (action.type) {
        case SEARCH_QUOTES:
          return {
            ...state,
            isLoading: false,
            isError: false,
            error: {},
          };
        case SEARCH_QUOTES_SUCCESS:
          return {
            ...state,
            isLoading: false,
            joke: action.payload,
          };
        case SEARCH_QUOTES_FAILURE:
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
    