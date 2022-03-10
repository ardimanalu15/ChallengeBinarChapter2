import { StyleSheet, Text, View,Dimensions, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { park } from '../../assets';

const Akun = () => {
  return (
    <View style={styles.components}>
      <View style={styles.label}>
      <Text style={styles.tekslabel}> Akun</Text>
      </View>
      <View style={styles.prakcom}>
          <Image source={park} style={styles.imgpark}/>
          <Text style={styles.textpark}>Upss kamu belum memiliki akun. Mulai buat akun agar transaksi di  BCR lebih mudah</Text>
          <TouchableOpacity style={styles.container}>
            <View>
            <Text style={styles.textRegister}>Register</Text>
            </View>
          </TouchableOpacity>
      </View>                 
    </View>
  );
};

export default Akun;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  components: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'white',
  },
  label: {
    backgroundColor: 'white',
    width: windowWidth ,
    height: 56,           
    elevation: 2,   
  },
  tekslabel: {
    fontSize:18,
    fontFamily: 'Helvetica',
    fontWeight: '900',
    marginTop:10,
    marginLeft: 10,
  },
  prakcom: {
    marginTop: windowHeight * 0.2,
    alignItems: 'center',
  }, 
  textpark:{
    width: windowWidth * 0.8,
    fontSize: 14,
    marginTop: 10,
  },
  textRegister:{
    fontWeight: '700',
    fontSize: 14,
    color: 'white',
  },
  container: {
    backgroundColor: '#5CB85F',
    padding: 18,    
    alignItems: 'center',
    width: windowWidth * 0.4,   
    borderRadius: 10,   
    elevation: 7,
    marginVertical: windowHeight*0.015,    
}, 
});
