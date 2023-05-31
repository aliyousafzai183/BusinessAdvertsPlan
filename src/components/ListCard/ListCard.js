import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../utils/colors';
import Feather from 'react-native-vector-icons/Feather';
import RouteName from '../../routes/RouteName';

const ListCard = ({ plan, index, navigation }) => {
  const isEven = index % 2 === 0;
  const eggStyle = isEven ? styles.smallEgg : styles.largeEgg;

  const handlePress = () => {
    navigation.navigate(RouteName.VIEW_PLAN_SCREEN, {id: plan.id} );
  }

  return (
    <TouchableOpacity
      style={[styles.cardContainer, eggStyle]}
      key={plan.name}
      onPress={handlePress}
    >
      <Text style={styles.planName}>{plan.name}</Text>
      <View style={styles.infoContainer}>
        <Feather name="dollar-sign" size={colors.height * 0.02} color={colors.primary} />
        <Text style={styles.value}>{plan.expenditure}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Feather name="mouse-pointer" size={colors.height * 0.02} color={colors.primary} />
        <Text style={styles.value}>{plan.clicks}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Feather name="eye" size={colors.height * 0.02} color={colors.primary} />
        <Text style={styles.value}>{plan.impressions}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.linear2,
    borderRadius: colors.width * 0.2,
    padding: colors.width * 0.05,
    width: colors.width * 0.4,
    aspectRatio: 1,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallEgg: {
    height: colors.height * 0.2,
    marginTop: colors.height * 0.05,
  },
  largeEgg: {
    height: colors.height * 0.2,
  },
  planName: {
    fontSize: colors.width * 0.04,
    fontWeight: 'bold',
    marginBottom: colors.height * 0.01,
    color: colors.primary,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: colors.height * 0.005,
  },
  value: {
    fontSize: colors.width * 0.032,
    color: colors.primary,
    marginLeft: colors.width * 0.02,
  },
});
