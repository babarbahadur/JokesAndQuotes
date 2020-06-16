import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";

import Jokes from '../features/jokes/container/index'
import Quotes from '../features/quotes/container/index'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import { Icon } from 'native-base'

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
        <Tab.Navigator initialRouteName="Jokes" 
        tabBarOptions={{ 
        activeTintColor: '#00BFA6' , 
        // activeBackgroundColor: '#FFFFFF', 
        // inactiveBackgroundColor: '#FFFF',
        // style:{
        //     backgroundColor: '#FFFFFF'
        // }
        }}>
        <Tab.Screen name="Jokes" component={Jokes}
            options={{
            tabBarLabel: 'Jokes',
              tabBarIcon: () => (
                <Icon name="white-balance-incandescent" size={25} style={{color: '#00BFA6'}}/>
              ),
            }}
        />
        <Tab.Screen name="Quotes" component={Quotes}
            options={{
            tabBarLabel: 'Quotes',
              tabBarIcon: () => (
                <Icon name="format-quote-close" size={25} color={'#00BFA6'} style={{color: '#00BFA6'}}/>
              ),
            }}
        />
    </Tab.Navigator> 
    </NavigationContainer>
  );
}