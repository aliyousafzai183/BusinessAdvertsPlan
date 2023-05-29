import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RouteName from './RouteName';
import {
  HomeScreen, PlanListScreen,
  SettingScreen, 
} from '../screens';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={RouteName.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={RouteName.PLAN_LIST_SCREEN} component={PlanListScreen} />
      <Tab.Screen name={RouteName.SETTING_SCREEN} component={SettingScreen} />
    </Tab.Navigator>
  );
}

export default BottomTab;