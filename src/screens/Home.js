import  React,{Component} from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
import { StyleSheet, Text, View, Dimensions,Image,Alert, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
 //import {Gelocation} from '@react-native-community/geolocation'
//import {PERMISSIONS, request} from 'react-native-permissions'

const App = ({navigation}) => {
  // console.log("fix")
  // locationCurrentPostion =()=> { 
  //   Gelocation.getCurrentPosition(
  //     position=>{
  //       console.log(JSON.stringify(position));
  //     }
  //   )
  // }
  // Component(()=>(){
  //   requestLocationPermission();
  // })
  // componentDidMount = () => {
    
  // }

  // requestLocationPermission = async () => {
  //   if(Platform ==='ios'){
  //     var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
  //     console.log('iphone'+ response);

  //     if(response === 'granted'){
  //       locationCurrentPostion();
  //     }else {
  //       var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
  //     console.log('iphone'+ response);

  //     if(response === 'granted'){
  //       locationCurrentPostion();
  //     }
  //   }
  // }
//}

state = {
  markers: [],
  coordinates: [
    { name: 'Bellingham Food Bank', type:'Community ORG',latitude: 48.75533881391072, longitude: -122.47153346668237,  image: require('../images/logo_bfb.png') },
    { name: 'Habitat for Humanity in Whatcom County', type:'Community ORG', latitude: 48.755123532054434, longitude: -122.47572655214361, image: require('../images/WhatcomCounty.png') },
    { name: 'Western Washington University', type:'Educational ORG', latitude: 48.734365517589175,longitude: -122.48668540371054,  image: require('../images/wwu.png')  },
    { name: 'Bellingham Vet Center', type:'Gov ORG', latitude: 48.73396954510261, longitude: -122.46544124658645,  image: require('../images/VA.png') },
    { name: 'BECU credit union',type:'Bank ORG',latitude: 48.755328677915685, longitude: -122.47619861903614,    image: require('../images/BECU.png') },
    { name: 'Young Life-Bellingham', type:'Community ORG', latitude: 48.75099338782577, longitude: -122.48043141000632,  image: require('../images/YL.png') },
    { name: 'Camp 210', type:'Housing ORG', latitude: 48.747, longitude: -122.47704312,  image: require('../images/lighthouse.png') },
    { name: 'LightHouse Missions', type:'Housing ORG', latitude: 48.755060, longitude: -122.487250,  image: require('../images/lighthouse.png') },
    { name: 'Sea-Mar Community Services ', type:'Community ORG', latitude: 48.801520, longitude: -122.496920,  image: require('../images/seamar.png') },
    { name: 'Northwest Youth Services', type:'Community ORG', latitude: 48.752310, longitude: -122.480640,  image: require('../images/nwys.png') },
    { name: 'The Opportunity Council', type:'Community ORG', latitude: 48.767350, longitude: -122.477350,  image: require('../images/oppc.jpeg') },
    { name: 'Lydia Place', type:'Community ORG', latitude: 48.749080, longitude: -122.468390,  image: require('../images/lydiap.png') }

  ]
}

onCarouselItemChange = (index) => {
  let location = state.coordinates[index];
  var latitude = location.latitude;
  var longitude = location.longitude;
  console.log(index);
  if(index!=undefined){
    index = index; 
  }
  _map.animateToRegion({
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.09,
    longitudeDelta: 0.035
  })

  state.markers[index].showCallout()
}

onMarkerPressed = (location, index) => {
  
  _map.animateToRegion({
    latitude: location.latitude,
    longitude: location.longitude,
    latitudeDelta: 0.09,
    longitudeDelta: 0.035
  });

  _carousel.snapToItem(index);
}
renderCarouselItem = ({ item }) =>
<View>
  <TouchableOpacity onPress={() =>
  navigation.navigate("Project",{item})
  }>
    <View style={styles.cardContainer}>  
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Image style={styles.cardImage} source={item.image} />
    </View>
  </TouchableOpacity>
</View>
    
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
       ref={map => _map = map}
    initialRegion={{
      latitude: 48.7519,
      longitude: -122.4787,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >


{
            state.coordinates.map((marker, index) => (
              <Marker
                key={marker.name}
                ref={ref => state.markers[index] = ref}
                onPress={() => onMarkerPressed(marker, index)}
                coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
              >
                <Callout>
                  <Text>{marker.name}</Text>
                </Callout>

              </Marker>
            ))
          }

   

    </MapView>
  
  
    <Carousel
          ref={(c) => { _carousel = c; }}
          data={state.coordinates}
          containerCustomStyle={styles.carousel}
          renderItem={renderCarouselItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={300}
          removeClippedSubviews={false}
          onSnapToItem={(index) => onCarouselItemChange(index)}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
    </View>
  );
  
};

const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;
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
  },carousel: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 48
  },
  cardContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: 200,
    width: 300,
    padding: 24,
    borderRadius: 24
  },
  cardImage: {
    height: 120,
    width: 300,
    bottom: 0,
    resizeMode:'contain',
    position: 'absolute',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    backgroundColor:'gray',
  },
  cardTitle: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center',
    textAlign:'center'
  },
  slide: {
    width: itemWidth,
    height: itemHeight,
    paddingHorizontal: horizontalMargin
    // other styles for the item container
}, slideInnerContainer: {
  width: slideWidth,
  flex: 1
  // other styles for the inner container
}
});
export default App;