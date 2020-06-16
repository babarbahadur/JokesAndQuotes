import { ScaledSheet } from "react-native-size-matters";

export const styles = ScaledSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchContainerStyle: {
    backgroundColor: '#FFFF',
    opacity: 0.95,
    paddingTop: '10@ms',
    paddingBottom: '10@ms',
    color: '#FFFFFF',
  },
  contentView: {
    height: '100%',
    width: '100%',
    padding: '20@ms',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: '14@ms',
    marginBottom: '5@ms',
    fontStyle: 'italic'
  },
  contentText: {
    fontSize: '14@ms',
    marginBottom: '10@ms'
  },
  buttonText: {
    fontSize: '14@ms',
    color: '#FFFFFF',
    fontWeight: 'bold'

  },
  buttonStyle: {
    backgroundColor: '#00BFA6',
    width: '100%',
    height: '50@ms',
    borderRadius: '5@ms',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20@ms',

    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 3,
  },
  backgroundImage: {
    height: 250,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    opacity: 0.5
  },
  listView: {
    marginHorizontal: '10@ms',
    backgroundColor: '#00BFA6',
    borderRadius: '5@ms',
    marginBottom: '2@ms'
  },
  searchedContentText: {
    fontSize: '14@ms',
    color: '#FFFFFF',
    margin: '10@ms'
  }
});
