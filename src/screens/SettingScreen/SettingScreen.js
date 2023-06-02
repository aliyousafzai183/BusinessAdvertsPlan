import React from 'react';
import { Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header } from '../../components/index';
import RouteName from '../../routes/RouteName';
import { deleteAllData } from '../../database/crud';
import Toast from 'react-native-toast-message';

const SettingScreen = ({ navigation }) => {

  const handleDelete = () => {
    deleteAllData()
      .then(() => {
        fetchData();
        Toast.show({
          type: 'error',
          text1: 'Data cleared',
          visibilityTime: 2000,
        });
      })
      .catch((error) => {
        Toast.show({
          type: 'success',
          text1: 'Data not found!',
          visibilityTime: 2000,
        });
      });

  }

  const handleReset = () => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete all plans?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            handleDelete();
          },
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.gradient}>
      <Header title="Settings" icon="list" />
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(RouteName.AD_BUDGET_PLAN_SCREEN)}>
          <Text style={styles.buttonText}>Ad Budget Calculator</Text>
          <Icon name="arrow-right" size={20} color={colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(RouteName.VIEW_PLAN_SCREEN)}>
          <Text style={styles.buttonText}>Add New Plan</Text>
          <Icon name="arrow-right" size={20} color={colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(RouteName.AD_SERVICE_SCREEN)}>
          <Text style={styles.buttonText}>Ads Services</Text>
          <Icon name="arrow-right" size={20} color={colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset App</Text>
          <Icon name="arrow-right" size={20} color={colors.primary} />
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    flexGrow: 1,
    paddingBottom: 20,
  },
  button: {
    backgroundColor: colors.linear2,
    borderRadius: 8,
    width: '90%',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 10,

    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
