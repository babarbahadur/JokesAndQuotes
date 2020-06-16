import { ScaledSheet } from 'react-native-size-matters';

let font = Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto';
export const styles = ScaledSheet.create({
  appHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '5@ms0.3',
    backgroundColor: '#00BFA6'
  },
  title: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: 'bold',
    fontFamily: font,
    letterSpacing: '1.5@ms0.3',
    width: '240@ms',
    textAlign: 'center',
  },
  leftStyle: {
    paddingLeft: '5@ms'
  },
  leftIcon: {
    width: '40@ms', 
    alignSelf: 'center'
  },
  leftButtonStyle: {
    justifyContent: 'center', 
    alignContent: 'center'
  }
});

