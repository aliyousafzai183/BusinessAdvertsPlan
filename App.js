import React from 'react';
import StackNavigator from './src/routes/StackNavigator';
import Toast from 'react-native-toast-message';
import { View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <StackNavigator />
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container takes up the entire screen
  },
});

export default App;
