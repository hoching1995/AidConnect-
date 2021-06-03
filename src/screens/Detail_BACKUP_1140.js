<<<<<<< HEAD
import * as React from 'react'
import {View, Text,Image, StyleSheet} from 'react-native'
import SwiperComponent from '../components/SwiperComponent'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FAB } from 'react-native-paper'



const Detail = ({navigation}) => {
    return(
     <View style={styles.container}>
       <Text>This is list </Text>

       <FAB 
        style={styles.fab}
        small
        icon="plus"
        onPress={() => navigation.navigate('FulfillRequest')}
     />
=======
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
      <TouchableOpacity
      onPress={() =>
        navigation.navigate("Project")
      }>
      <View style={styles.home_company_list}>
        <View style={{margin:10,flexDirection: "row",}}>
        <Image 
        style={{height: 75, width:80}}
        source={require('../images/wwu.png')}></Image>
        <View style={{ paddingLeft:10}}>
        <Text style={{ fontSize:18,}}>Western Washington University</Text>
        <Text style={{ fontSize:10,}}>Educational ORG</Text>
        <Text style={{ fontSize:13, paddingTop:5, width:windowWidth-30-90}}>This is the text for discription what is their fund about, how is it gonna work what ever it is gonna be here</Text>
        </View>
        </View>        
        <View>      
        </View>
      </View>
      </TouchableOpacity>
      <View style={styles.home_company_list}>
        <View style={{margin:10,flexDirection: "row",}}>
        <Image 
        style={{height: 75, width:80}}
        source={require('../images/wwu.png')}></Image>
        <View style={{ paddingLeft:10}}>
        <Text style={{ fontSize:18,}}>Western Washington University</Text>
        <Text style={{ fontSize:10,}}>Educational ORG</Text>
        <Text style={{ fontSize:13, paddingTop:5, width:windowWidth-30-90}}>This is the text for discription what is their fund about, how is it gonna work what ever it is gonna be here</Text>
        </View>
        </View>        
        <View>      
        </View>
      </View>
      <View style={styles.home_company_list}>
        <View style={{margin:10,flexDirection: "row",}}>
        <Image 
        style={{height: 75, width:80}}
        source={require('../images/wwu.png')}></Image>
        <View style={{ paddingLeft:10}}>
        <Text style={{ fontSize:18,}}>Western Washington University</Text>
        <Text style={{ fontSize:10,}}>Educational ORG</Text>
        <Text style={{ fontSize:13, paddingTop:5, width:windowWidth-30-90}}>This is the text for discription what is their fund about, how is it gonna work what ever it is gonna be here</Text>
        </View>
        </View>        
        <View>      
        </View>
      </View>
      <View style={styles.home_company_list}>
        <View style={{margin:10,flexDirection: "row",}}>
        <Image 
        style={{height: 75, width:80}}
        source={require('../images/wwu.png')}></Image>
        <View style={{ paddingLeft:10}}>
        <Text style={{ fontSize:18,}}>Western Washington University</Text>
        <Text style={{ fontSize:10,}}>Educational ORG</Text>
        <Text style={{ fontSize:13, paddingTop:5, width:windowWidth-30-90}}>This is the text for discription what is their fund about, how is it gonna work what ever it is gonna be here</Text>
        </View>
        </View>        
        <View>      
        </View>
      </View>
      <View style={styles.home_company_list}>
        <View style={{margin:10,flexDirection: "row",}}>
        <Image 
        style={{height: 75, width:80}}
        source={require('../images/wwu.png')}></Image>
        <View style={{ paddingLeft:10}}>
        <Text style={{ fontSize:18,}}>Western Washington University</Text>
        <Text style={{ fontSize:10,}}>Educational ORG</Text>
        <Text style={{ fontSize:13, paddingTop:5, width:windowWidth-30-90}}>This is the text for discription what is their fund about, how is it gonna work what ever it is gonna be here</Text>
        </View>
        </View>        
        <View>      
        </View>
      </View>
      <View style={styles.home_company_list}>
        <View style={{margin:10,flexDirection: "row",}}>
        <Image 
        style={{height: 75, width:80}}
        source={require('../images/wwu.png')}></Image>
        <View style={{ paddingLeft:10}}>
        <Text style={{ fontSize:18,}}>Western Washington University</Text>
        <Text style={{ fontSize:10,}}>Educational ORG</Text>
        <Text style={{ fontSize:13, paddingTop:5, width:windowWidth-30-90}}>This is the text for discription what is their fund about, how is it gonna work what ever it is gonna be here</Text>
        </View>
        </View>        
        <View>      
        </View>
      </View>
      <View style={styles.home_company_list}>
        <View style={{margin:10,flexDirection: "row",}}>
        <Image 
        style={{height: 75, width:80}}
        source={require('../images/wwu.png')}></Image>
        <View style={{ paddingLeft:10}}>
        <Text style={{ fontSize:18,}}>Western Washington University</Text>
        <Text style={{ fontSize:10,}}>Educational ORG</Text>
        <Text style={{ fontSize:13, paddingTop:5, width:windowWidth-30-90}}>This is the text for discription what is their fund about, how is it gonna work what ever it is gonna be here</Text>
        </View>
        </View>        
        <View>      
        </View>
      </View>
      <View style={styles.home_company_list}>
        <View style={{margin:10,flexDirection: "row",}}>
        <Image 
        style={{height: 75, width:80}}
        source={require('../images/wwu.png')}></Image>
        <View style={{ paddingLeft:10}}>
        <Text style={{ fontSize:18,}}>Western Washington University</Text>
        <Text style={{ fontSize:10,}}>Educational ORG</Text>
        <Text style={{ fontSize:13, paddingTop:5, width:windowWidth-30-90}}>This is the text for discription what is their fund about, how is it gonna work what ever it is gonna be here</Text>
        </View>
        </View>        
        <View>      
        </View>
      </View>
    </ScrollView>
>>>>>>> 462a5aeacfb3631652cd3a6f4d6715158b40f06e
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

    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
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