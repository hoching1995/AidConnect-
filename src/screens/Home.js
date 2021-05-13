import * as React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
    initialRegion={{
      latitude: 48.7519,
      longitude: -122.4787,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
  <Marker
    coordinate={
      {
        latitude: 48.7519,
        longitude: -122.4787,
      }
      
    }
    pinColor="black"
    >
      <Image source={require('../images/pin.png')} style={{height: 50, width:35 }} />
      <Callout style={{height: 80, width:100 }} >
        
        <Image source={require('../images/wwu.png')}style={{height: 75, width:80  }} />
        <Text>WWU</Text>
        </Callout>
    </Marker>
    </MapView>

    </View>
  );
  
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});