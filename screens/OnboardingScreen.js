import React, { useEffect } from 'react';
import { View, Image, SafeAreaView } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
    useEffect(() => {
        // This will run when the component mounts
        // Redirect to the login page after a short delay (e.g., 2 seconds)
        const redirectTimer = setTimeout(() => {
            navigation.replace('LoginScreen');
        }, 2000);

        // Clean up the timer when the component unmounts
        return () => clearTimeout(redirectTimer);
    }, [navigation]);

    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
            }}
        >
            <View>
                <Image source={require('../assets/MicroLend.png')} />
            </View>
        </SafeAreaView>
    );
};

export default OnboardingScreen;
