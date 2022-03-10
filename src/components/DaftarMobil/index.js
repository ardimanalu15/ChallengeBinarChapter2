import { StyleSheet, Text, TouchableOpacity, View , Dimensions} from 'react-native';
import React from 'react';
import { IconMobilSewa } from '../../assets';
import Icon from 'react-native-vector-icons/Feather'
import { WARNA_DASAR } from '../../utils/constan';


const DaftarMobilPilihan = ({title, status}) => {
    //selain cara ini bisa menggunakan flatlist,React Native Flatlist merupakan komponen-komponen sederhana untuk menampilkan list daftar data, 
  return (
    <TouchableOpacity style={styles.container}>
        <IconMobilSewa style={styles.icon}/>
        <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.iconicon}>
        <Icon name="users" size={20} color="#666262"/>
        <Text style={styles.angka}>4</Text>        
        <Icon name="briefcase" size={20} color="#666262"/>
        <Text style={styles.angka}>2</Text>
        </View>       
        <Text style={styles.status}>{status}</Text>
        </View>
    </TouchableOpacity>
  );
};

export default DaftarMobilPilihan;

const windowWidth = Dimensions.get('window').width;
const windowHeight= Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 17,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginVertical: windowHeight*0.015,
        alignItems: 'center',
    },  
    iconicon: {
        display: 'flex',
        flexDirection: 'row',
    },
    angka: {
        marginLeft: 8,
        marginRight: 17,
    },
    text : {
        marginLeft: windowWidth*0.02,
    },
    title: {
        fontSize: 14,
        fontFamily: 'Helvetica',
        fontWeight: '700',
    },
    status: ( {
        fontSize: 14,
        fontFamily: 'Helvetica',
        color: WARNA_DASAR,
    }),

});
