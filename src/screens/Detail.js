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
        onPress={() => navigation.navigate('Request')}
     />
     </View>

   );
   
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#9ba599",
      alignItems: "center",
      justifyContent: "center",
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
  });
export default Detail;