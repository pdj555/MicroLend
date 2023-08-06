import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
export default function App() {
  return (
      <SafeAreaProvider>
      <NavigationContainer>
      {/*<View style={styles.container}>*/}
        <AuthStack />
        {/*<StatusBar style="auto" />*/}
    {/*</View>*/}
      </NavigationContainer>
      </SafeAreaProvider>
  );
}