import axios from 'axios';
import searchQuotesActions from '../actions';
import { showAlert } from '../../../utils/showAlert';


import { SEARCH_QUOTES_PATH } from '../constants';


export const searchQuotes = (parameters) => (dispatch, getState) => {
  dispatch(searchQuotesActions.searchQuotes());

  axios
    .get(`${SEARCH_QUOTES_PATH}`,
    {
      header: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .then(response => {
        console.log(response)
    //   if(response.data.success) {
    //     dispatch(searchQuotesActions.loginSuccess(response.data.data))
    //   } else {
    //     showAlert(response.data.message)
    //     dispatch(searchQuotesActions.loginFailure(response.data.message))
    //   }
    })
    .catch(error => {
      console.log(error)
    //   showAlert('Something went wrong! Please try again');
    //   dispatch(searchQuotesActions.loginFailure(error))
    });
};