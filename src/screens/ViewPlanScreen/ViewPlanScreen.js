import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ToastAndroid, ScrollView, TextInput, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';
import { Header } from '../../components/index';
import { useRoute } from '@react-navigation/native';
import RouteName from '../../routes/RouteName';
import { updateData, readDataById, createData, deleteData } from '../../database/crud';
import { useFocusEffect } from '@react-navigation/native';

const ViewPlanScreen = ({ navigation }) => {
  const route = useRoute();
  const { id } = route.params ?? {};

  const [save, setSave] = useState(false);
  const [editable, setEditable] = useState(id ? false : true);
  const [deletePlan, setDeletePlan] = useState(false);
  const [planName, setPlanName] = useState('');
  const [expenditure, setExpenditure] = useState('');
  const [clicks, setClicks] = useState('');
  const [impressions, setImpressions] = useState('');
  const [planId, setPlanId] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      if (id) {
        // Read the plan data from the database
        readDataById(id)
          .then((plan) => {
            if (plan) {
              setPlanName(plan.name);
              setExpenditure(plan.expenditure.toString());
              setClicks(plan.clicks.toString());
              setImpressions(plan.impressions.toString());
              setPlanId(plan.id);
            }
          })
          .catch((error) => {
            console.log('Error reading plan data:', error);
          });

      }

      if (deletePlan) {
        // Delete the plan from the database
        deleteData(planId)
          .then(() => {
            navigation.navigate(RouteName.PLAN_LIST_SCREEN);
          })
          .catch((error) => {
            console.log('Error deleting data:', error);
          });
      }

      if (save) {
        handleSave();
      }
    }, [id, deletePlan, save])
  );


  const handleSave = () => {
    updateData(planId, planName, parseInt(expenditure), parseInt(clicks), parseInt(impressions))
      .then(() => {
        ToastAndroid.show('Plan Updated', ToastAndroid.SHORT);
        navigation.navigate(RouteName.PLAN_LIST_SCREEN);
      })
      .catch((error) => {
        console.log('Error updating plan:', error);
      });
  };
  

  const handleAdd = () => {
    createData(planName, expenditure, clicks, impressions);
    navigation.navigate(RouteName.PLAN_LIST_SCREEN);
  };

  const handleKeyboardDone = () => {
    Keyboard.dismiss();
  };

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.gradient}>
      <Header
        title={id ? 'Edit Plan' : 'Add Plan'}
        navigation={navigation}
        setSave={setSave}
        save={save}
        editable={editable}
        setEditable={setEditable}
        setDeletePlan={setDeletePlan}
        isNew={id ? false : true}
        handleAdd={handleAdd}
      />
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.inputContainer}>
          {planName ? <Text style={styles.label}>Enter plan name</Text> : null}
          <TextInput
            style={styles.textInput}
            value={planName}
            onChangeText={setPlanName}
            placeholder="Plan name here"
            placeholderTextColor={colors.primary}
            keyboardType="default"
            returnKeyType="done"
            onSubmitEditing={handleKeyboardDone}
            editable={editable}
          />
        </View>

        <View style={styles.inputContainer}>
          {planName ? <Text style={styles.label}>Enter ad expenditure</Text> : null}
          <TextInput
            style={styles.textInput}
            value={expenditure}
            onChangeText={setExpenditure}
            placeholder="Ad expenditure here"
            placeholderTextColor={colors.primary}
            keyboardType="numeric"
            returnKeyType="done"
            onSubmitEditing={handleKeyboardDone}
            editable={editable}
          />
        </View>

        <View style={styles.inputContainer}>
          {planName ? <Text style={styles.label}>Enter ad clicks</Text> : null}
          <TextInput
            style={styles.textInput}
            value={clicks}
            onChangeText={setClicks}
            placeholder="Ad clicks here"
            placeholderTextColor={colors.primary}
            keyboardType="numeric"
            returnKeyType="done"
            onSubmitEditing={handleKeyboardDone}
            editable={editable}
          />
        </View>

        <View style={styles.inputContainer}>
          {planName ? <Text style={styles.label}>Enter ad impressions</Text> : null}
          <TextInput
            style={styles.textInput}
            value={impressions}
            onChangeText={setImpressions}
            placeholder="Ad impressions here"
            placeholderTextColor={colors.primary}
            keyboardType="numeric"
            returnKeyType="done"
            onSubmitEditing={handleKeyboardDone}
            editable={editable}
          />
        </View>
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
    alignSelf: 'center',
    fontWeight: 'bold'
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
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    fontSize: 16,
    marginBottom: 10,
  },
  addButton: {
    fontSize: 16,
    color: colors.primary,
    textDecorationLine: 'underline',
  },
});
