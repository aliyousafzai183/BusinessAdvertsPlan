import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';
import { Header, ListCard } from '../../components/index';
import { readData } from '../../database/crud';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library you want to use
import RouteName from '../../routes/RouteName';

const PlanListScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const data = await readData();
          setData(data);
        } catch (error) {
          console.log('Error retrieving data:', error);
        }
      };

      fetchData();
    }, [])
  );

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Header icon="list" title="All Ad Plans" />
        <View style={styles.cardsContainer}>
          {data.length === 0 ? (
            <TouchableOpacity
              style={styles.noDataContainer}
              onPress={()=> navigation.navigate(RouteName.VIEW_PLAN_SCREEN)}
            >
              <Icon name="exclamation-circle" size={30} color={colors.primary} />
              <Text style={styles.noDataText}>No data found, Add Now!</Text>

            </TouchableOpacity>
          ) : (
            data.map((plan, index) => (
              <ListCard plan={plan} index={index} key={plan.id} navigation={navigation} />
            ))
          )}
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
  noDataContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: colors.height * 0.3,
  },
  noDataText: {
    color: colors.primary,
    fontSize: 16,
    marginTop: 10,
  },
});
