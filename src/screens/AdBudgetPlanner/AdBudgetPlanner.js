import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput, Keyboard, BackHandler, ToastAndroid } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';
import { Header2 } from '../../components/index';
import RouteName from '../../routes/RouteName';

const AdBudgetCalculatorScreen = ({ navigation }) => {
  const [impressions, setImpressions] = useState('');
  const [clicks, setClicks] = useState('');
  const [users, setUsers] = useState('');

  const handleCalculate = () => {
    if (impressions && clicks && users) {
      const impressionsValue = parseInt(impressions) || 0;
      const clicksValue = parseInt(clicks) || 0;
      const usersValue = parseInt(users) || 0;

      // Your calculation logic goes here
      const total = impressionsValue + clicksValue + usersValue;
      const estimatedBudgetValue = total * 0.1; // Example calculation

      const data = {
        impressions: impressionsValue,
        clicks: clicksValue,
        users: usersValue,
        estimatedBudget: estimatedBudgetValue.toFixed(2),
      };

      navigation.navigate(RouteName.RESULT_SCREEN, { data });
    } else {
      ToastAndroid.show("Fill all the details first", ToastAndroid.SHORT);
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      goBack();
      return true;
    });

    return () => backHandler.remove();
  }, []);

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Header2 title={"Ad Budget Calculator"} navigation={navigation} handleCalculate={handleCalculate} />

        <View style={styles.inputContainer}>
          {impressions !== '' && <Text style={styles.label}>Impressions:</Text>}
          <TextInput
            style={styles.input}
            value={impressions}
            onChangeText={setImpressions}
            keyboardType="numeric"
            placeholder="Enter impressions"
            returnKeyType="done"
            placeholderTextColor={colors.primary}
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
          />
        </View>

        <View style={styles.inputContainer}>
          {clicks !== '' && <Text style={styles.label}>Clicks:</Text>}
          <TextInput
            style={styles.input}
            value={clicks}
            onChangeText={setClicks}
            keyboardType="numeric"
            placeholder="Enter clicks"
            returnKeyType="done"
            placeholderTextColor={colors.primary}
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
          />
        </View>

        <View style={styles.inputContainer}>
          {users !== '' && <Text style={styles.label}>Users:</Text>}
          <TextInput
            style={styles.input}
            value={users}
            onChangeText={setUsers}
            keyboardType="numeric"
            placeholder="Enter users"
            returnKeyType="done"
            placeholderTextColor={colors.primary}
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
          />
        </View>

        <TouchableOpacity style={styles.btn} onPress={handleCalculate}>
          <Text style={styles.btnText}>Calculate</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default AdBudgetCalculatorScreen;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    flexGrow: 1,
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: colors.height * 0.03,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
    alignSelf: 'center'
  },
  input: {
    height: colors.height * 0.06,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: colors.height * 0.02,
    paddingHorizontal: colors.width * 0.05,
    width: colors.width * 0.7,
    color: colors.primary,
    textAlign: 'center',
    fontSize: 15
  },

  btn: {
    backgroundColor: colors.linear2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: colors.width * 0.08,
    paddingVertical: colors.height * 0.01,
    borderRadius: colors.height * 0.05
  },

  btnText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 15,
  }
});
