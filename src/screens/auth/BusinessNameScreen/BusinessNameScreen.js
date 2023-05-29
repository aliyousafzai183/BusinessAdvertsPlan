import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../utils/colors';

const BusinessNameScreen = () => {
  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.gradient} >
      <Text>BusinessNameScreen</Text>
    </LinearGradient>
  )
}

export default BusinessNameScreen;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    paddingHorizontal: colors.width * 0.05,
  },
});