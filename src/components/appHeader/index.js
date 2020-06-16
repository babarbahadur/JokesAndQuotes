import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { Right, Left, Body, Button } from 'native-base';

import { styles } from './styles';
import {Icon} from 'react-native-elements';

const AppHeader = ({ title, leftIcon, rightIcon, onPressRightText, style, IconColor, titleStyle, onPressLeftText}) => {
  return (
    <View style={[styles.appHeader, style]}>
      <Left style={styles.leftStyle}>
        <Button transparent rounded  onPress={onPressLeftText} style={styles.leftButtonStyle}>
          <Icon containerStyle={styles.leftIcon} name={leftIcon} color={IconColor}/>
        </Button>
      </Left>
    
      <Body>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </Body>
      
      <Right>
        <Button transparent rounded onPress={onPressRightText}>
          <Icon containerStyle={styles.leftIcon} name={rightIcon} color={IconColor}/>
        </Button>
      </Right>
    </View>
  );
};

export default memo(AppHeader);
