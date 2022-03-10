import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import {  imgcar } from '../../assets';


const SewaMobil = () => {
   
  return (
    <View style={styles.container}>
     <View style={styles.informasi}>
        <View style={styles.text}>
            <Text style={styles.labelText} >Sewa Mobil Berkualitas Dikawasanmu</Text>            
        </View>
        <View>
          <TouchableOpacity style={styles.Register}>
            <View>
            <Text style={styles.textRegister}>Sewa Mobil</Text>
            </View>
          </TouchableOpacity>
          </View>
     </View>
     <View style={styles.buttonAksi}>
     <Image source={imgcar} style={styles.img}>
     </Image>
     </View>
    </View>
  );
};

export default SewaMobil;


const windowWidth = Dimensions.get('window').width;
const windowHeight= Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#091B6F',        
        width: 328,
        height: 140,
        marginHorizontal: 30,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginTop: -windowHeight * 0.12,
        flexDirection: 'row',
        marginLeft: 16,                 
    },    
    labelText: {
        color: 'white',
        fontSize:16,
        fontFamily: 'Helvetica',
        lineHeight: 24,
        width: 170,
        height: 48,
        marginTop: 18,
        marginLeft: 15,

    },       
    buttonAksi: {
        flex: 1,
        flexDirection: 'row',   
        justifyContent: 'flex-end',        
    },
    img: {
        width: 178,
        height: 103,
        marginTop: 35,        
    },
    textRegister:{
        fontWeight: '700',
        fontSize: 16,
        color: 'white',
      },
    Register: {
        backgroundColor: '#5CB85F',
        padding: 5,    
        alignItems: 'center',
        width: windowWidth * 0.33,   
        borderRadius: 5,   
        elevation: 7,
        marginVertical: windowHeight*0.02, 
        marginLeft: windowWidth * 0.03, 
    }, 

});
 //selain caara ini bisa menggunakan modal, Modal sendiri pada sebuah aplikasi biasa digunakan untuk memberi informasi kepada user tentang sesuatu hal yang terjadi pada aplikasi yang dibuat. 