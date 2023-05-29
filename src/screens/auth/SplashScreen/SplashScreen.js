import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../utils/colors';
import RouteName from '../../../routes/RouteName';

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(RouteName.NAME_SCREEN); // Replace 'NextScreen' with the actual name of your next screen
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.gradient} >
      <Text>SplashScreen</Text>
    </LinearGradient>
  )
}

export default SplashScreen;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    paddingHorizontal: colors.width * 0.05,
  },
});