import {
    SEARCH_QUOTES,
    SEARCH_QUOTES_SUCCESS,
    SEARCH_QUOTES_FAILURE,
  } from '../constants';
    
export default class searchQuotesActions {
    static searchQuotes() {
        return {
            type: SEARCH_QUOTES
        };
    }

    static searchQuotesSuccess(data) {
        return {
            type: SEARCH_QUOTES_SUCCESS,
            payload: data
        };
    }

    static searchQuotesFailure(error) {
        return {
            type: SEARCH_QUOTES_FAILURE,
            error
        };
    }
}
    