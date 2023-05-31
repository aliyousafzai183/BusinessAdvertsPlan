import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../utils/colors';
import RouteName from '../../../routes/RouteName';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import { useRoute } from '@react-navigation/native';

const ContinueScreen = ({ navigation }) => {
  const route = useRoute();
  const { name, businessName } = route.params;
  const [isAgreed, setIsAgreed] = useState(false);

  const handleAgreementToggle = () => {
    setIsAgreed(!isAgreed);
  };

  const handleNext = () => {
    if (isAgreed) {
      navigation.replace(RouteName.MAIN_HOME_SCREEN);
    } else {
      // Show error message or toast indicating that the user needs to agree to the terms
    }
  };

  const handlePrevious = () => {
    navigation.goBack();
  };

  const openTermsAndConditions = () => {
    Linking.openURL('https://oblador.github.io/react-native-vector-icons/');
  };

  const openPrivacyPolicy = () => {
    Linking.openURL('https://oblador.github.io/react-native-vector-icons/');
  };

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Icon1 name={isAgreed ? "smileo" : "frowno"} size={colors.width * 0.2} color={colors.primary} style={styles.icon} />
        <View style={styles.textContainer}>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity style={styles.checkboxButton} onPress={handleAgreementToggle}>
              {isAgreed && <Icon name="check-box" size={20} color={colors.primary} />}
              {!isAgreed && <Icon name="check-box-outline-blank" size={20} color={colors.secondary} />}
              <Text style={styles.checkboxText}>I have read and agreed to the </Text>
              <TouchableOpacity onPress={openTermsAndConditions}>
                <Text style={styles.title}>Terms and Conditions</Text>
              </TouchableOpacity>
              <Text style={styles.checkboxText}> and </Text>
              <TouchableOpacity onPress={openPrivacyPolicy}>
                <Text style={styles.title}>Privacy Policy</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.previousButton} onPress={handlePrevious}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, !isAgreed && styles.disabledButton]}
            onPress={handleNext}
            disabled={!isAgreed}
          >
            <Text style={styles.buttonText}>Finish</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ContinueScreen;

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
  textContainer: {
    // width: '80%',
    marginBottom: colors.height * 0.03,
  },
  title: {
    // fontSize: colors.height * 0.02,
    fontWeight: 'bold',
    color: colors.primary,
    // marginTop: colors.height * 0.03,
    // marginBottom: colors.height * 0.015,
    textDecorationLine: 'underline',
  },
  text: {
    fontSize: colors.height * 0.015,
    color: colors.primary,
    marginBottom: colors.height * 0.03,
  },
  checkboxContainer: {
    alignItems: 'flex-start',
    marginBottom: colors.height * 0.03,
    flexWrap: 'wrap',
    width: '80%',
  },
  checkboxButton: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  checkboxText: {
    fontSize: colors.height * 0.015,
    color: colors.primary,
    marginLeft: colors.width * 0.02,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: colors.height * 0.1,
    width: '100%'
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
