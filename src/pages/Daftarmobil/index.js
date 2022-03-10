import {StyleSheet, View, Dimensions, Text, ScrollView } from 'react-native';
import React from 'react';
import {DaftarMobilPilihan} from '../../components';

const DaftarMobil = () => {
  return (
    <View style={styles.components}>
      <ScrollView>
        <View style={styles.layanan}>
          <View style={styles.label}>
            <Text style={styles.tekslabel}>Daftar Mobil Pilihan</Text>
          </View>
          <View style={styles.mobilpilihan}>          
            <DaftarMobilPilihan title="Daihatsu Xenia" status="Rp 230.000" />
            <DaftarMobilPilihan title="Daihatsu Xenia" status="Rp 230.000 " />
            <DaftarMobilPilihan title="Daihatsu Xenia" status="Rp 230.000 " />
            <DaftarMobilPilihan title="Daihatsu Xenia" status="Rp 230.000 " />
            <DaftarMobilPilihan title="Daihatsu Xenia" status="Rp 230.000 " />
            <DaftarMobilPilihan title="Daihatsu Xenia" status="Rp 230.000 " />
            <DaftarMobilPilihan title="Daihatsu Xenia" status="Rp 230.000 " />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DaftarMobil;

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
  iconlayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  mobilpilihan: {
    paddingHorizontal: 30,
    backgroundColor: 'white',  
  },
});
