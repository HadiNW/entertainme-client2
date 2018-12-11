import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Movies from '../Screens/Movies'
import MovieDetail from '../Screens/MovieDetail'

const SettingsTabs = createStackNavigator({
   Movies: {
        screen: Movies
    },
   MovieDetail: {
        screen: MovieDetail
   }
});

//Issue: the tab navigator needs to be wrapped inside a stack navigator
export default createStackNavigator({ SettingsTabs }, { headerMode: "none" });