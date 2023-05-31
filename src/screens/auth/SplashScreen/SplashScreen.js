import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, Image, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../utils/colors';
import RouteName from '../../../routes/RouteName';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {
  const [showText, setShowText] = useState(false);
  const [typedText, setTypedText] = useState('');

  const textToType = 'Business Adverts Plan';

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const checkNameProvided = async () => {
    const nameProvided = await AsyncStorage.getItem('nameProvided');

    if (nameProvided) {
      navigation.navigate(RouteName.MAIN_HOME_SCREEN);
    }else{
      navigation.replace(RouteName.NAME_SCREEN);
    }
  };

  useEffect(() => {
    let typingTimer;
    let currentIndex = 0;

    if (showText) {
      typingTimer = setInterval(() => {
        if (currentIndex < textToType.length) {
          const nextChar = textToType[currentIndex];
          setTypedText(prevText => prevText + nextChar);
          currentIndex++;
        } else {
          clearInterval(typingTimer);
          setTimeout(() => {
            checkNameProvided();
          }, 2000);
        }
      }, 100);
    }

    return () => {
      clearInterval(typingTimer);
    };
  }, [showText, navigation]);

  return (
    <LinearGradient
      colors={[colors.linear2, colors.linear1]}
      style={styles.gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
      />
      <Image
        source={require('../../../images/Icon.png')}
        style={styles.image}
        resizeMode='contain'
      />
      {showText && (
        <Text style={styles.typingText}>{typedText}</Text>
      )
      }
    </LinearGradient>
  )
}

export default SplashScreen;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    paddingHorizontal: colors.width * 0.05,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
    height: colors.height * 0.2,
    marginTop: colors.height * 0.35
  },
  typingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: colors.height * 0.05,
    color: colors.primary
  }
});
