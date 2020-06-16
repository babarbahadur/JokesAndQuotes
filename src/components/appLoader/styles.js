import { Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const { width, height } = Dimensions.get('window');

export const styles = ScaledSheet.create({
  container: {
    width,
    height,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundView: {
    position: 'absolute',
    width,
    height,
    backgroundColor: '#fff',
    opacity: 0.6
  },
  loader: {
    width: '80@ms',
    height: '80@ms'
  }
});
