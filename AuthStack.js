import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import OnboardingScreen from "./screens/OnboardingScreen";
import RegisterScreen from "./screens/RegisterScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Onboarding"
                component={OnboardingScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Login" component={LoginScreen} />
            {/* Add more screens here as needed */}
        </Stack.Navigator>
    );
};

export default AuthStack;