import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ToastAndroid, ScrollView, TextInput, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';
import { Header } from '../../components/index';
import { useRoute } from '@react-navigation/native';
import RouteName from '../../routes/RouteName';

const ViewPlanScreen = ({ navigation }) => {
  const route = useRoute();
  const { id } = route.params;

  const [save, setSave] = useState(false);
  const [editable, setEditable] = useState(false);
  const [deletePlan, setDeletePlan] = useState(false);
  const [planName, setPlanName] = useState('');
  const [expenditure, setExpenditure] = useState('');
  const [clicks, setClicks] = useState('');
  const [impressions, setImpressions] = useState('');
  const [planId, setPlanId] = useState('');

  const data = [
    { id: 1, name: '', expenditure: 500, clicks: 200, impressions: 1000 },
    { id: 2, name: 'Plan 2', expenditure: 750, clicks: 300, impressions: 1500 },
    { id: 3, name: 'Plan 3', expenditure: 1000, clicks: 400, impressions: 2000 },
    { id: 4, name: 'Plan 4', expenditure: 1000, clicks: 400, impressions: 2000 },
    { id: 5, name: 'Plan 5', expenditure: 1000, clicks: 400, impressions: 2000 },
    { id: 6, name: 'Plan 6', expenditure: 1000, clicks: 400, impressions: 2000 },
    { id: 7, name: 'Plan 7', expenditure: 1000, clicks: 400, impressions: 2000 },
  ];

  useEffect(() => {
    const plan = data.find((item) => item.id === id);
    if (plan) {
      setPlanName(plan.name);
      setExpenditure(plan.expenditure.toString());
      setClicks(plan.clicks.toString());
      setImpressions(plan.impressions.toString());
      setPlanId(plan.id.toString());
    }

    if(deletePlan){
      // handleDeletePlan
      ToastAndroid.show('Plan Deleted', ToastAndroid.SHORT);
      navigation.navigate(RouteName.PLAN_LIST_SCREEN);
    }

    if (save) {
      handleSave();
    }

  }, [id, data, save, deletePlan]);

  const handleSave = () => {
    ToastAndroid.show("Plan Saved", ToastAndroid.SHORT);
    // navigation.navigate(RouteName.PLAN_LIST_SCREEN);
  };

  const handleKeyboardDone = () => {
    Keyboard.dismiss();
  };

  const renderTextInput = (label, value, placeholder, setValue, type) => (
    <View style={styles.inputContainer}>
      {value ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor={colors.primary}
        keyboardType={type}
        returnKeyType="done"
        onSubmitEditing={handleKeyboardDone}
        editable={editable}
      />
    </View>
  );

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.gradient}>
      <Header title="Edit Plan" navigation={navigation} setSave={setSave} save={save} editable={editable} setEditable={setEditable} setDeletePlan={setDeletePlan}/>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">

        {id ? (
          <View>
            {renderTextInput('Plan Name', planName, 'Enter plan name', setPlanName, "default")}
            {renderTextInput('Expenditure', expenditure, 'Enter expenditure', setExpenditure, "numeric")}
            {renderTextInput('Clicks', clicks, 'Enter clicks', setClicks, "numeric")}
            {renderTextInput('Impressions', impressions, 'Enter impressions', setImpressions, "numeric")}
          </View>
        ) : (
          <Text>No data found</Text>
        )}
      </ScrollView>
    </LinearGradient>
  );
};

export default ViewPlanScreen;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    flexGrow: 1,
    paddingBottom: 20, // Add padding to ensure the button is not covered by the keyboard
    justifyContent: 'flex-start'
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    color: colors.linear2,
    marginBottom: 5,
    alignSelf:'center',
  },
  textInput: {
    height: colors.height * 0.05,
    width: colors.width * 0.7,
    borderColor: colors.linear2,
    color: colors.black,
    paddingHorizontal: 10,
    borderRadius: colors.height * 0.02,
    textAlign: 'center',
    borderWidth: 1,
    color: colors.primary,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
