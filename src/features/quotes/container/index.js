import { connect } from 'react-redux';

import QuoteScreen from './quotes';
import { searchQuotes } from '../middleware';

const mapStateToProps = state => {
  return {
    isLoading: state.searchQuote.isLoading,
    isError: state.searchQuote.isError,
    joke: state.searchQuote.joke
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchQuotes: (parameters) => dispatch(searchQuotes(parameters)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteScreen);
