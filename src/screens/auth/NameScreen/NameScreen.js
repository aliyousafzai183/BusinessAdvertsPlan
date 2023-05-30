import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ToastAndroid, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../utils/colors';
import RouteName from '../../../routes/RouteName';
import Icon from 'react-native-vector-icons/FontAwesome';

const NameScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [nameFocused, setNameFocused] = useState(false);

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleSubmit = () => {
    if (name.length < 3) {
      ToastAndroid.show('Name should be at least 3 characters', ToastAndroid.SHORT);
    } else {
      navigation.navigate(RouteName.BUSINESS_NAME_SCREEN, {name: name});
    }
  };

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Icon name="user" size={colors.width * 0.2} color={colors.primary} style={styles.icon} />
        {nameFocused && <Text style={styles.title}>Enter Your Name</Text>}
        <View style={styles.textInputContainer}>
          <TextInput
            style={[styles.input, nameFocused && styles.inputFocused]}
            placeholder={nameFocused ? '' : 'Your name here'}
            placeholderTextColor={colors.secondary}
            value={name}
            onChangeText={handleNameChange}
            onFocus={() => setNameFocused(true)}
            onBlur={() => setNameFocused(false)}
          />
          <TouchableOpacity
            style={[styles.button, name.length === 0 && styles.disabledButton]}
            onPress={handleSubmit}
            disabled={name.length === 0}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default NameScreen;

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
    fontWeight: 'bold',
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
    borderRadius: colors.height * 0.025,
    paddingHorizontal: colors.width * 0.03,
    fontSize: colors.height * 0.015,
    color: colors.primary,
    alignSelf: 'center',
    textAlign: 'center',
    borderWidth:1
  },

  inputFocused: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  button: {
    width: colors.width * 0.25,
    height: colors.height * 0.04,
    backgroundColor: colors.linear2,
    borderTopLeftRadius: colors.height * 0.025,
    borderBottomLeftRadius: colors.height * 0.025,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: colors.height * 0.1
  },
  buttonText: {
    fontSize: colors.height * 0.015,
    fontWeight: 'bold',
    color: colors.primary,
  },
  disabledButton: {
    opacity: 0.5,
  },
});
