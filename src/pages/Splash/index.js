import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import React, {useEffect} from 'react';
import { SplashBackground } from '../../assets';

const Splash = ({navigation}) => {

  useEffect(() => {
    setTimeout( () => {
            navigation.replace('MainApp');
        }, 5000)
    }, [navigation]);
  return (
    <ImageBackground source={SplashBackground} style={styles.background}>     
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },    
});
