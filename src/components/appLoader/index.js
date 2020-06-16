import React, { memo } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import animatedLoader from '../../assets/animation/loader.json';
import { styles } from './styles';

const AppLoader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundView} />
      <LottieView
        source={animatedLoader}
        autoPlay
        loop
        style={styles.loader}
      />
    </View>
  );
};

export default memo(AppLoader);
