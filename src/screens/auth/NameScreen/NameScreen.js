import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../utils/colors';
import RouteName from '../../../routes/RouteName';
import Icon from 'react-native-vector-icons/FontAwesome';

const NameScreen = ({navigation}) => {
  const [name, setName] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleSubmit = () => {
    navigation.navigate(RouteName.BUSINESS_NAME_SCREEN);
  };

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.gradient}>
      <View style={styles.container}>
        <Icon name="user" size={30} color={colors.white} style={styles.icon} />
        <Text style={styles.title}>Enter Your Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={handleNameChange}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default NameScreen;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: colors.blue,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },
});