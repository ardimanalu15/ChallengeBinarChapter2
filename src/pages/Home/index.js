import { StyleSheet, Image, View, ImageBackground, Dimensions, Text, ScrollView } from 'react-native';
import React from 'react';
import { ImageHeader, orang} from '../../assets';
import { DaftarMobilPilihan, ButtonIcon, SewaMobil } from '../../components';



const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={ImageHeader} style={styles.header} >
        <View style={styles.hello}>
          <Text style={styles.selamat}> Hi, Ardi Manalu</Text>
          <Text style={styles.username}> Bandar Lampung</Text>
          <Image source={orang} style={styles.foto}></Image>          
        </View>
      </ImageBackground>     
      <SewaMobil />
      
        <View style={styles.layanan}>        
          <View style={styles.iconlayanan}>
          <ButtonIcon title="Sewa Mobil" type="layanan" />
          <ButtonIcon title="Oleh-Oleh" type="layanan" />
          <ButtonIcon title="Penginapan" type="layanan" />
          <ButtonIcon title="Wisata" type="layanan" />          
          </View>
          </View>

          <View style={styles.mobilpilihan}>
            <Text style={styles.label}>Daftar Mobil Pilihan</Text>
            <DaftarMobilPilihan title="Daihatsu Xenia" status="Rp 230.000"/>                        
            <DaftarMobilPilihan title="Daihatsu Xenia" status="Rp 230.000 "/>
            <DaftarMobilPilihan title="Daihatsu Xenia" status="Rp 230.000 "/> 
            <DaftarMobilPilihan title="Daihatsu Xenia" status="Rp 230.000 "/>
          </View>
      
          </ScrollView>
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight= Dimensions.get('window').height;


const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'white',
  },
  header:{
    width: windowWidth,
    height: windowHeight * 0.28,
    paddingHorizontal: 30,
    paddingTop: 10,       
  },  
  hello: {
    marginTop: windowHeight * 0.025,
    flexDirection: 'row',  
  },
  selamat: {
    fontSize:12,
    fontFamily: 'Helvetica',  
  },
  username: {    
    fontSize: 14,
    fontFamily: 'Helvetica',
    fontWeight: '900',
    marginTop: 20,
    marginLeft: -85,
    width: 270,   
  },
  foto: {
    width: 38,
    height: 38,
  },
  layanan: {
    paddingLeft:30,
  },
  label:{
    fontSize:18,
    fontFamily: 'Helvetica',
    fontWeight: '900',
  },
  iconlayanan:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:10,
    flexWrap: 'wrap',
  },
  mobilpilihan: {
    paddingHorizontal: 30,
    backgroundColor: 'white',
    flex:1,
    borderTopRightRadius:20,
    borderTopLeftRadius: 20,
  }
});
