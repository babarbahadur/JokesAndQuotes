import axios from 'axios';
import searchJokeActions from '../actions';
import { showAlert } from '../../../utils/showAlert';


import { SEARCH_JOKE_PATH } from '../constants';


export const searchJoke = (parameters) => (dispatch, getState) => {
  dispatch(searchJokeActions.searchJoke());

  axios
    .get(`${SEARCH_JOKE_PATH}`,
    {
      header: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .then(response => {
        console.log(response)
    //   if(response.data.success) {
    //     dispatch(searchJokeActions.loginSuccess(response.data.data))
    //   } else {
    //     showAlert(response.data.message)
    //     dispatch(searchJokeActions.loginFailure(response.data.message))
    //   }
    })
    .catch(error => {
      console.log(error)
    //   showAlert('Something went wrong! Please try again');
    //   dispatch(searchJokeActions.loginFailure(error))
    });
};