import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ icon, title, navigation, setSave }) => {
  const goBack = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    setSave(true);
  }

  return (
    <View style={styles.header}>
      {navigation && (
        <TouchableOpacity onPress={goBack}>
          <Icon name="arrow-left" size={20} color={colors.primary} style={styles.icon} />
        </TouchableOpacity>
      )}
      <Text style={styles.headerText}>{title}</Text>
      {icon && (
        <TouchableOpacity onPress={handleSave}>
          <Icon name={icon} size={24} color={colors.primary} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: colors.height * 0.04,
    paddingTop: colors.height * 0.07,
    justifyContent: 'space-between',
    width: colors.width * 0.9,
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
