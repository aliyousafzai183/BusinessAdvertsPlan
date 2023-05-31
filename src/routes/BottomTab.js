import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RouteName from './RouteName';
import { HomeScreen, PlanListScreen, SettingScreen } from '../screens';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import colors from '../utils/colors';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === RouteName.HOME_SCREEN) {
            iconName = 'home';
          } else if (route.name === RouteName.PLAN_LIST_SCREEN) {
            iconName = 'list';
          } else if (route.name === RouteName.SETTING_SCREEN) {
            iconName = 'cog';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          position: 'absolute',
          borderWidth: 1,
          borderColor: colors.primary,
          borderRadius: 20,
          borderTopColor: colors.primary,
          elevation: 0,
          backgroundColor: 'transparent',
        },
        sceneContainerStyle: {
          backgroundColor: 'transparent',
        },
        tabBarActiveTintColor: colors.linear1,
        tabBarInactiveTintColor: colors.primary
      })}
    >
      <Tab.Screen
        name={RouteName.HOME_SCREEN}
        component={HomeScreen}
        options={{
          title: 'HOME',
          headerShown:false
        }}
        />

      <Tab.Screen
        name={RouteName.PLAN_LIST_SCREEN}
        component={PlanListScreen}
        options={{
          title: 'LIST',
          headerShown:false
        }}
        />

      <Tab.Screen
        name={RouteName.SETTING_SCREEN}
        component={SettingScreen}
        options={{
          title: 'SETTINGS',
          headerShown:false
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
