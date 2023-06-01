import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ToastAndroid, Modal } from 'react-native';
import colors from '../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import RouteName from '../../routes/RouteName';
import { useNavigation } from '@react-navigation/native';

const Header = ({ icon, title, navigation, setSave, editable, setEditable, setDeletePlan, isNew, setSaveNewPlan}) => {
  const stack = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  const handleSave = () => {
    setEditable(false);
    setSave(true);
  };

  const handleEdit = () => {
    setEditable(true);
  };

  const handleDelete = () => {
    setDeletePlan(true);
  };

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleDeleteAllPlans = () => {
    setShowModal(!showModal);
  };

  const handleAddPlan = () => {
    stack.navigate(RouteName.VIEW_PLAN_SCREEN);
  };

  const handleSaveNewPlan = () => {
    setSaveNewPlan(true);
    stack.navigate(RouteName.PLAN_LIST_SCREEN);
  };

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
          isNew ? (
            <TouchableOpacity onPress={handleSaveNewPlan}>
              <Icon name="plus-square" size={24} color={colors.primary} style={styles.icon} />
            </TouchableOpacity>
          ) : (
            editable ? (
              <TouchableOpacity onPress={handleSave}>
                <Icon name="check" size={24} color={colors.primary} style={styles.icon} />
              </TouchableOpacity>
            ) : (
              <View style={styles.rightContainer}>
                <TouchableOpacity onPress={handleEdit}>
                  <Icon name="edit" size={24} color={colors.primary} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDelete}>
                  <Icon name="trash" size={24} color={colors.primary} style={styles.icon} />
                </TouchableOpacity>
              </View>
            )
          )
        ) : (
          <TouchableOpacity onPress={toggleModal}>
            <Icon name={icon} size={24} color={colors.primary} style={styles.icon} />
          </TouchableOpacity>
        )
      }



      <Modal visible={showModal} animationType="slide" transparent={true}>
        <TouchableOpacity style={styles.modalContainer} onPress={toggleModal}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.modalItem} onPress={handleAddPlan}>
              <Text style={styles.modalItemText}>Add New Plan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem1} onPress={handleDeleteAllPlans}>
              <Text style={styles.modalItemText}>Delete All Plans</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
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
    alignSelf:'center'
  },
  icon: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: colors.linear2,
    width: colors.width * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    height: colors.height * 0.15,
    right: colors.width * 0.14,
    top: colors.height * 0.048,
    position: 'absolute',
    borderRadius: colors.height * 0.02
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  modalItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  modalItem1: {
    paddingVertical: 10,
  },
  modalItemText: {
    fontSize: 16,
    color: colors.primary,
  },
});
