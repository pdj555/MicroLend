import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform, Image,
} from 'react-native';
import { SocialIcon } from 'react-native-elements';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Replace this with your actual login logic
        // For simplicity, we'll just log the username and password
        console.log('Username:', username);
        console.log('Password:', password);
    };

    const handleSignUp = () => {
        // Navigate to the registration screen when "Sign up here" is clicked
        navigation.navigate('RegisterScreen');
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View>
                <Image
                    source={require('../assets/squig.png')}
                    style={{ width: 800, height: 230, alignSelf: 'center', position:'absolute', top: -170}}
                />
            </View>

            <View style={styles.formContainer}>


                <Text style={styles.header}>Welcome Back!</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
                    <Text style={styles.buttonText2}>Sign Up</Text>
                </TouchableOpacity>

                    <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 40, paddingBottom: 10, top: 60}}>
                        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                        <View>
                            <Text style={{width: 50, textAlign: 'center', fontWeight:'bold'}}>or</Text>
                        </View>
                        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                    </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, top: 70 }}>
                    <SocialIcon
                        button
                        iconColor="black"
                        iconSize={25}
                        iconType="font-awesome"
                        onLongPress={() => console.log("onLongPress()")}
                        onPress={() => console.log("onPress()")}
                        style={{
                            paddingHorizontal: 15,
                            backgroundColor: "white",
                            borderColor: 'black',
                            borderWidth: 1,
                        }}
                        type="apple"
                    />

                    <SocialIcon
                        button
                        iconColor="black"
                        iconSize={25}
                        iconType="font-awesome"
                        onLongPress={() => console.log("onLongPress()")}
                        onPress={() => console.log("onPress()")}
                        style={{
                            paddingHorizontal: 15,
                            backgroundColor: "white",
                            borderColor: 'black',
                            borderWidth: 1,
                        }}
                        type="google"
                    />

                    <SocialIcon
                        button
                        iconColor="black"
                        iconSize={25}
                        iconType="font-awesome"
                        onLongPress={() => console.log("onLongPress()")}
                        onPress={() => console.log("onPress()")}
                        style={{
                            paddingHorizontal: 20,
                            backgroundColor: "white",
                            borderColor: 'black',
                            borderWidth: 1,
                        }}
                        type="facebook"
                    />
                </View>

            </View>
        </KeyboardAvoidingView>
    );
};

// ... (styles and export statement are the same as in the previous example)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    formContainer: {
        width: '80%',
    },
    header: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 30,
        textAlign: 'left',
        top: 50,
    },
    input: {
        height: 50,
        borderBottomWidth: StyleSheet.hairlineWidth, // Add a thin black bottom border
        borderBottomColor: 'black',
        marginBottom: 15,
        paddingHorizontal: 10,
        top: 50,
    },
    loginButton: {
        backgroundColor: 'black',
        paddingVertical: 15,
        width: 350,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        top: 60,
    },
    signUpButton: {
        top: 60,
        backgroundColor: 'white',
        paddingVertical: 15,
        width: 350,
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
    },
    buttonText2: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    signup: {
        position: 'absolute',
        top: 650,
        justifyContent: 'flex-end', // Center the text horizontally
        alignItems: 'center', // Center the text vertically
        width: '100%', // Set the width to fill the entire screen
    },
});

export default LoginScreen;
