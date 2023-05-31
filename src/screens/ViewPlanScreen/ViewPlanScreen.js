import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';
import { Header } from '../../components/index';

const ViewPlanScreen = ({ navigation }) => {
  
  const [save, setSave] = useState(false);
  const data = [
    { id: 1, name: 'Plan 1', expenditure: 500, clicks: 200, impressions: 1000 },
    { id: 2, name: 'Plan 2', expenditure: 750, clicks: 300, impressions: 1500 },
    { id: 3, name: 'Plan 3', expenditure: 1000, clicks: 400, impressions: 2000 },
    { id: 4, name: 'Plan 4', expenditure: 1000, clicks: 400, impressions: 2000 },
    { id: 5, name: 'Plan 5', expenditure: 1000, clicks: 400, impressions: 2000 },
    { id: 6, name: 'Plan 6', expenditure: 1000, clicks: 400, impressions: 2000 },
    { id: 7, name: 'Plan 7', expenditure: 1000, clicks: 400, impressions: 2000 },
    // Add more data as needed
  ];

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Header icon="check" title="Edit Plan" navigation={navigation} setSave={setSave} />
      </ScrollView>
    </LinearGradient>
  );
};

export default ViewPlanScreen;

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
