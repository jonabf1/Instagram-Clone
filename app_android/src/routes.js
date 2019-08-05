import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Image, View } from 'react-native';

import logo from './assets/logo.png';

import Feed from './pages/Feed';
import New from './pages/New';

export default createAppContainer(
    createStackNavigator({
        Feed,
        New,
        
    }, {
            initialRouteName: 'Feed',
            defaultNavigationOptions: {
                headerTintColor: '#000',
                headerTitle: <Image style={{ marginHorizontal: 20 }} source={logo} />,
                headerBackTitle: null,
            },
            headerLayoutPreset: 'center',
            mode: 'modal'

        })
);

