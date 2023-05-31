import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';
import { Header, ListCard } from '../../components/index';

const PlanListScreen = ({ navigation }) => {
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
        <Header icon="list" title="Plans List" />
        <View style={styles.cardsContainer}>
          {data.map((plan, index) => (
            <ListCard plan={plan} index={index} key={plan.id} navigation={navigation} />
          ))}

        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default PlanListScreen;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    paddingBottom: colors.height * 0.1,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});
