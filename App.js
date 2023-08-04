import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
export default function App() {
  return (
      <NavigationContainer>
      {/*<View style={styles.container}>*/}
        <AuthStack />
        {/*<StatusBar style="auto" />*/}
    {/*</View>*/}
      </NavigationContainer>
  );
}