import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../utils/colors';
import RouteName from '../../routes/RouteName';

const ResultScreen = ({ navigation, route }) => {
  const { impressions, clicks, users, estimatedBudget } = route.params.data;

  return (
    <LinearGradient colors={[colors.linear1, colors.linear2]} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.resultContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.resultText}>Impressions:</Text>
            <Text style={styles.resultText}>{impressions}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.resultText}>Clicks:</Text>
            <Text style={styles.resultText}>{clicks}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.resultText}>Users:</Text>
            <Text style={styles.resultText}>{users}</Text>
          </View>
          <View style={styles.textContainer1}>
            <Text style={styles.resultText}>Estimated Budget</Text>
            <Text style={styles.resultText1}>${estimatedBudget}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}>
          <Text style={styles.buttonText}>Continue to App</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    flexGrow: 1,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  resultContainer: {
    alignItems: 'center',
    marginBottom: 40,
    // backgroundColor: colors.linear2,
    // paddingHorizontal: colors.width * 0.1,
    // paddingVertical: colors.height * 0.1,
    width: colors.width * 0.8,
    height: colors.height * 0.38,
    borderRadius: colors.height * 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.primary
  },

  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: colors.width * 0.5,
  },
  textContainer1: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: colors.width * 0.5,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.primary,
  },
  resultText1: {
    fontSize: 23,
    fontWeight: 'bold',
    color: colors.primary,
  },
  button: {
    // backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 8,
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
