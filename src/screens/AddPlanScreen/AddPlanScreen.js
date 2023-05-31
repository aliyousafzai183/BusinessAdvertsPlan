import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';

const AddPlanScreen = ({ navigation }) => {

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">

      </ScrollView>
    </LinearGradient>
  );
};

export default AddPlanScreen;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    paddingBottom: 20, // Add padding to ensure the button is not covered by the keyboard
  },
});
