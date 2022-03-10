import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import React from 'react';
import {  IconSewaMobil, IconOlehOleh, IconPenginapan, IconWisata,} from '../../assets';


const ButtonIcon = ({title, type}) => {
    const Icon = () => {        
        if(title === "Sewa Mobil") return <IconSewaMobil/>

        if(title === "Oleh-Oleh") return <IconOlehOleh/>

        if(title === "Penginapan") return <IconPenginapan/>

        if(title === "Wisata") return <IconWisata/>
       
        return <IconSewaMobil />
    }

  return (
    <TouchableOpacity style={styles.container(type)}>
        <View style={styles.button(type)}>
        <Icon />
        </View>
        <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;
//const windowWidth = Dimensions.get('window').width;
//const windowHeight= Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: (type) => ({        
        marginBottom : type === "layanan" ? 50 : 0, 
        marginRight : type === "layanan" ? 2 : 0 ,
        marginLeft : type === "layanan" ? -20 : 0 ,        
        justifyContent: 'flex-end',
    }),
    button: (type) => ({
        
        padding: type === "layanan" ? 12 : 7,
        borderRadius: 10
    }),
    text: (type) =>({
        fontSize: type === "layanan" ? 14 : 10 ,
        fontFamily: 'Helvetica',
        textAlign: 'center',        
    }),

});
