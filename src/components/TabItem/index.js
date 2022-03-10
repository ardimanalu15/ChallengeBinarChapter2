import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { IconAkun, IconAkunActive, IconDaftarMobil, IconDaftarMobilActive, IconHome, IconHomeActive } from '../../assets';



const TabItem = ({isFocused, onPress, onLongPress, label }) => {
    const Icon = () => {
        if(label === "Home") return isFocused ? <IconHomeActive/> : <IconHome/>

        if(label === "DaftarMobil") return isFocused ? <IconDaftarMobilActive/> : <IconDaftarMobil/>

        if(label === "Akun") return isFocused ? <IconAkunActive/> : <IconAkun/>

        return <IconHome/>
    }
  return (
      <TouchableOpacity    
        onPress={onPress}
        onLongPress={onLongPress}         
        style={styles.container}>
        <Icon/>
        <Text style={styles.text(isFocused)}>{label}</Text>
       </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: (isFocused) => ({
        fontSize: 13,       
        marginTop: 8,
        color: isFocused ? "#0D28A6" : "#C8C8C8",
    }),

});
