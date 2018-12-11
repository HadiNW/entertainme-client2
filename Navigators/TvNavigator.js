import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Tv from '../Screens/Tv';
import TvDetail from '../Screens/TvDetail'

const SettingsTabs = createStackNavigator({
   Tv: {
        screen: Tv,
    },
    TvDetail:  {
        screen: TvDetail
    }
});

//Issue: the tab navigator needs to be wrapped inside a stack navigator
export default createStackNavigator({ SettingsTabs }, { headerMode: "none" });