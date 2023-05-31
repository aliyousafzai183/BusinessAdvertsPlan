import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import colors from '../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ icon, title, navigation, setSave, editable, setEditable, setDeletePlan }) => {
  const goBack = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    setEditable(false);
    setSave(true);
  }

  const handleEdit = () => {
    setEditable(true);
  }

  const handleDelete = () => {
    setDeletePlan(true);
  }

  return (
    <View style={styles.header}>
      {navigation && (
        <TouchableOpacity onPress={goBack}>
          <Icon name="arrow-left" size={20} color={colors.primary} style={styles.icon} />
        </TouchableOpacity>
      )}
      <Text style={styles.headerText}>{title}</Text>

      {
        navigation ? (
          editable ?
            <TouchableOpacity onPress={handleSave}>
              <Icon name="check" size={24} color={colors.primary} style={styles.icon} />
            </TouchableOpacity>
            :
            <View style={styles.rightContainer}>
              <TouchableOpacity onPress={handleEdit}>
                <Icon name="edit" size={24} color={colors.primary} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleDelete}>
                <Icon name="trash" size={24} color={colors.primary} style={styles.icon} />
              </TouchableOpacity>
            </View>
        ) : (
          <Icon name={icon} size={24} color={colors.primary} style={styles.icon} />
        )
      }
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

  rightContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  }
});
