import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

const Header2 = ({ title, navigation, handleCalculate }) => {
  const goBack = () => {
    navigation.goBack();
  };

  const calculate = () => {
    handleCalculate();
  };


  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={goBack}>
        <Icon name="arrow-left" size={20} color={colors.primary} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
      {
        handleCalculate && (
          <TouchableOpacity onPress={calculate}>
            <Icon1 name="calculate" size={25} color={colors.primary} style={styles.icon} />
          </TouchableOpacity>
        )
      }
    </View>
  );
};

export default Header2;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: colors.height * 0.04,
    paddingTop: colors.height * 0.07,
    justifyContent: 'space-between',
    width: colors.width * 0.9,
    alignSelf: 'center'
  },
  icon: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
});
