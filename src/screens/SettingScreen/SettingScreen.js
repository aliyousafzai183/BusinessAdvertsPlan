import React from 'react';
import { Text, ToastAndroid, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header } from '../../components/index';
import RouteName from '../../routes/RouteName';

const SettingScreen = ({ navigation }) => {

  const handleReset = () => {
    ToastAndroid.show("Data cleared!", ToastAndroid.SHORT);
    navigation.navigate(RouteName.HOME_SCREEN);
  }

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.gradient}>
      <Header title="Settings" icon="list"/>
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
