import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteName from './RouteName';
import BottomTab from './BottomTab';
import {
    AdBudgetPlanner, ProfileScreen,
    ResultScreen, AdServiceScreen,
    ViewPlanScreen, BusinessNameScreen,
    ContinueScreen, NameScreen,
    SplashScreen
} from '../screens';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown:false
                }}
            >

                <Stack.Screen
                    name={RouteName.SPLASH_SCREEN}
                    component={SplashScreen}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name={RouteName.NAME_SCREEN}
                    component={NameScreen}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name={RouteName.BUSINESS_NAME_SCREEN}
                    component={BusinessNameScreen}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name={RouteName.CONTINUE_SCREEN}
                    component={ContinueScreen}
                    options={{
                        headerShown: false
                    }}
                    />

                <Stack.Screen
                    name={RouteName.MAIN_HOME_SCREEN}
                    component={BottomTab}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name={RouteName.AD_BUDGET_PLAN_SCREEN}
                    component={AdBudgetPlanner}
                />

                <Stack.Screen
                    name={RouteName.AD_SERVICE_SCREEN}
                    component={AdServiceScreen}
                />

                <Stack.Screen
                    name={RouteName.VIEW_PLAN_SCREEN}
                    component={ViewPlanScreen}
                />

                <Stack.Screen
                    name={RouteName.RESULT_SCREEN}
                    component={ResultScreen}
                />

                <Stack.Screen
                    name={RouteName.PROFILE_SCREEN}
                    component={ProfileScreen}
                />


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigator;