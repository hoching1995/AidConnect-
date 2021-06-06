import React from 'react'
import {View, Text,Image, StyleSheet,Dimensions} from 'react-native'
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
const windowWidth = Dimensions.get("window").width;
const windowHight = Dimensions.get("window").height;
const Project = ({navigation, route}) => {

    return(
    <View style={styles.container}>
       <TouchableOpacity onPress={() =>
        navigation.navigate("Home")
      }>
         <View><Text>Back</Text></View>
       </TouchableOpacity>
      <View style={{justifyContent: 'center',
    alignItems: 'center',paddingTop:10, }}>
        <Text style={{fontSize:20}}>{route.params.item.name}</Text>
        <Text style={{ fontSize:12}}>Educational ORG</Text>
        <View style={{paddingTop:20}}>
        <Image 
        style={{ height: 120,
          width: 300,   resizeMode:'contain',
          }}
        source={route.params.item.image}></Image>
        </View>
        <Text style={{padding:20}}>Western was established as the Northwest Normal School, a teachers' school predominantly for women although men also enrolled, by Phoebe Judson in Lynden, Washington, in 1886.[10] Eventually the school moved to Bellingham (then "New Whatcom"), and through the efforts of William R. Moultray and George Judson (Phoebe's son).[11] Governor John McGraw signed legislation establishing the New Whatcom Normal School on February 24, 1893. In November 1895, construction began on a permanent school building, now known as Old Main, the current administration building. Designed by prominent Seattle architects Warren Skillings & James Corner, it was completed by early 1897 but could not be opened to students until funds could be secured to install heating, lighting, and to do general grounds maintenance, which were not included in the original contract.[12] The first official class entered in 1899, composed of 88 students.

The institution that is now Western Washington University underwent several name changes. In 1901, the school's name was changed to State Normal School at Whatcom to reflect New Whatcom's name change. In 1904, the name was changed to Washington State Normal School at Bellingham when the townships of Whatcom and Fairhaven joined, and again in 1937, to Western Washington College of Education when it became a four-year college. Twenty-four years later it became Western Washington State College and finally, in 1977, the institution gained university status and changed to its present name.</Text>
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={() =>
        navigation.navigate("Apply")}>
            <Text style={{alignItems:'center',paddingTop:10,}}>Apply</Text>
          </TouchableOpacity>
    </View>
  );
}

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9ba599",
    alignItems: "center",
    paddingTop:'10%',
    
  },
    home_company_list: {
        height: 500,
        elevation: 5,
        backgroundColor: "#FFF",
        marginBottom: 5,
        width: windowWidth - 30,
      },
 
  image: {
    marginBottom: 40,
    height: 120,
    width: 300,
    bottom: 0,
    resizeMode:'contain',
    position: 'absolute',
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
    backgroundColor: "#22282b",
        borderRadius: 30,
        width: windowWidth/2,
        height: 45,
        marginBottom: 20,
     
        alignItems: "center",
  },
});
export default Project;