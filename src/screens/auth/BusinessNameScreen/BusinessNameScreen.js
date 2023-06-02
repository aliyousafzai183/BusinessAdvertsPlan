import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../utils/colors';
import RouteName from '../../../routes/RouteName';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRoute } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const BusinessNameScreen = ({ navigation }) => {
  const route = useRoute();
  const { name } = route.params;
  const [businessName, setBusinessName] = useState('');
  const [businessNameFocused, setBusinessNameFocused] = useState(false);

  const handleBusinessNameChange = (text) => {
    setBusinessName(text);
  };

  const handleSubmit = () => {
    if (businessName.length < 3) {
      Toast.show({
        type: 'error',
        text1: 'Provide valid business name',
        visibilityTime: 2000,
      });
    } else {
      navigation.navigate(RouteName.CONTINUE_SCREEN, { businessName: businessName, name: name });
    }
  };

  const handlePrevious = () => {
    navigation.goBack();
  };

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Icon name="business-center" size={colors.width * 0.2} color={colors.primary} style={styles.icon} />
        {businessNameFocused && <Text style={styles.title}>Enter Your Business Name</Text>}
        <View style={styles.textInputContainer}>
          <TextInput
            style={[styles.input, businessNameFocused && styles.inputFocused]}
            placeholder={businessNameFocused ? '' : 'Business name here'}
            placeholderTextColor={colors.primary}
            value={businessName}
            onChangeText={handleBusinessNameChange}
            onFocus={() => setBusinessNameFocused(true)}
            onBlur={() => setBusinessNameFocused(false)}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.previousButton} onPress={handlePrevious}>
              <Text style={styles.buttonText}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, businessName.length === 0 && styles.disabledButton]}
              onPress={handleSubmit}
              disabled={businessName.length === 0}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default BusinessNameScreen;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    paddingBottom: 20, // Add padding to ensure the button is not covered by the keyboard
  },
  icon: {
    marginBottom: colors.height * 0.05,
  },
  title: {
    fontSize: colors.height * 0.015,
    // fontWeight: 'bold',
    color: colors.primary,
    marginBottom: colors.height * 0.03,
  },
  textInputContainer: {
    width: '100%',
    marginBottom: colors.height * 0.03,
  },
  input: {
    width: '100%',
    height: colors.height * 0.05,
    width: colors.width * 0.5,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: colors.height * 0.025,
    paddingHorizontal: colors.width * 0.03,
    fontSize: colors.height * 0.015,
    color: colors.primary,
    alignSelf: 'center',
    textAlign: 'center',
  },
  inputFocused: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: colors.height * 0.1,
  },
  button: {
    width: colors.width * 0.25,
    height: colors.height * 0.04,
    backgroundColor: colors.linear2,
    borderTopLeftRadius: colors.height * 0.025,
    borderBottomLeftRadius: colors.height * 0.025,
    alignItems: 'center',
    justifyContent: 'center',
  },
  previousButton: {
    width: colors.width * 0.25,
    height: colors.height * 0.04,
    backgroundColor: colors.linear2,
    borderTopRightRadius: colors.height * 0.025,
    borderBottomRightRadius: colors.height * 0.025,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: colors.height * 0.015,
    // fontWeight: 'bold',
    color: colors.primary,
  },
  disabledButton: {
    opacity: 0.5,
  },
});
