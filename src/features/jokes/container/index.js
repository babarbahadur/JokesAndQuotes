import { connect } from 'react-redux';

import JokeScreen from './jokes';
import { searchJoke } from '../middleware';

const mapStateToProps = state => {
  return {
    isLoading: state.searchJoke.isLoading,
    isError: state.searchJoke.isError,
    joke: state.searchJoke.joke
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchJoke: (parameters) => dispatch(searchJoke(parameters)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JokeScreen);
