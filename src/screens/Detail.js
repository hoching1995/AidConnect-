import React from 'react'
import {View, Text,Image, StyleSheet,Dimensions} from 'react-native'
import SwiperComponent from '../components/SwiperComponent'
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
const windowWidth = Dimensions.get("window").width;
const windowHight = Dimensions.get("window").height;
const Detail = ({navigation}) => {
  state = {
    markers: [],
    coordinates: [
      { name: 'Bellingham Food Bank', type:'Community ORG',latitude: 48.75533881391072, longitude: -122.47153346668237,  image: require('../images/logo_bfb.png') },
      { name: 'Habitat for Humanity in Whatcom County', type:'Community ORG', latitude: 48.755123532054434, longitude: -122.47572655214361, image: require('../images/WhatcomCounty.png') },
      { name: 'Western Washington University', type:'Educational ORG', latitude: 48.734365517589175,longitude: -122.48668540371054,  image: require('../images/wwu.png')  },
      { name: 'Bellingham Vet Center', type:'Gov ORG', latitude: 48.73396954510261, longitude: -122.46544124658645,  image: require('../images/VA.png') },
      { name: 'BECU credit union',type:'Bank ORG',latitude: 48.755328677915685, longitude: -122.47619861903614,    image: require('../images/BECU.png') },
      { name: 'Young Life-Bellingham', type:'Community ORG', latitude: 48.75099338782577, longitude: -122.48043141000632,  image: require('../images/YL.png') },
  
    ]
  }
    return(
     <View style={styles.container}>
      
        <View style={styles.searchbar}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#b1e5d3"
            style={styles.home_input}
            onChangeText={(text) => onChangeText(text)}
          />

          <Image
            source={require("../images/3.png")}
            style={{ height: 20, width: 20, }}
          />
        </View>
        <ScrollView
      vertical
      showsHorizontalScrollIndicator={false}
      style={{ paddingTop:20 }}
    >
      {
            state.coordinates.map((item, index) => (
              
      <TouchableOpacity
      key={index}
      onPress={() =>
        navigation.navigate("Project",{item})
      }>
      <View style={styles.home_company_list}>
        <View style={{margin:10,flexDirection: "row",}}>
        <Image 
        style={{height: 75, width:80,resizeMode:'contain',backgroundColor:'lightgrey'}}
        source={item.image}></Image>
        <View style={{ paddingLeft:10}}>
        <Text style={{ fontSize:18,}}>{item.name}</Text>
        <Text style={{ fontSize:10,}}>{item.org}</Text>
        <Text style={{ fontSize:13, paddingTop:5, width:windowWidth-30-90}}>This is the text for discription what is their fund about, how is it gonna work what ever it is gonna be here</Text>
        </View>
        </View>        
        <View>      
        </View>
      </View>
      </TouchableOpacity>
       ))
      }

      
    </ScrollView>
     </View>
   );
   
}
const styles = StyleSheet.create({
  searchbar:{
    backgroundColor: "#FFF",
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 25,
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  home_company_list: {
    height: 100,
    elevation: 5,
    backgroundColor: "#FFF",
    marginBottom: 5,
    width: windowWidth - 30,
  },
  card: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
    container: {
      flex: 1,
      backgroundColor: "#9ba599",
      alignItems: "center",
      paddingTop:20,

    },
   
    image: {
      marginBottom: 40,
      width:"70%",
      height:"20%"
    },
   
    inputView: {
      backgroundColor: "#22282b",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
   
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#c15f71",
    },
    home_input: {
      fontWeight: "bold",
      fontSize: 19,
      width: 300,
    },
    home_company_text: {
      fontWeight: "bold",
      fontSize: 15,
      width: "80%",
      color: "#000000",
    },
  });
export default Detail;