import React,{useState}  from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown'
import {Image} from 'react-native'




const SignUp3 = ({navigation}) => {

    const [password, setPassword] = useState("")
    const [email, setEmailAddress] = useState("")
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const [isPickerShow, setIsPickerShow] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));

    const onChange = (event, value) => {
      setDate(value);
      if (Platform.OS === 'android') {
        setIsPickerShow(false);
      }
    };
  


    return(
 
    <View style={styles.container}>
      <TouchableOpacity style={{backgroundColor: '#22282b', width: 400, height: 40}}
        onPress = {() => navigation.navigate('Home')}
        >
    
            <Text style={{color: 'white', fontSize: 20, textAlign: 'center', top:7}}>
                Create Account 
            </Text>
            <Image
                source={require("../../assets/backIcon.png")}
                style={{
                    width: 35,
                    height: 35,
                    top: -22
                }}
                />
        </TouchableOpacity>

       <Image
                source={require("../../assets/SignUp3.png")}
                style={{top: 25}}
            />
      
      
      <TouchableOpacity style={styles.paymentVenmo}
      >
              <Text style={styles.loginText}
              >Add Venmo</Text>
            </TouchableOpacity> 

       <TouchableOpacity style={styles.paymentCashApp}
            >
              <Text style={styles.loginText}
              backgroundColor="#64d2ff">
                  Add CashApp</Text>
            </TouchableOpacity>      

        <TouchableOpacity style={styles.paymentPayPal}
            >
              <Text style={styles.loginText}>Add PayPal</Text>
            </TouchableOpacity>      

        <TouchableOpacity style={styles.paymentCard}
            >
              <Text style={styles.loginText}>Add Credit/Debit Card</Text>
            </TouchableOpacity>   

     

          
            <TouchableOpacity style={styles.loginBtn}
            onPress={() => navigation.navigate('Home')}
            >
                <TextInput editable={false}>
                    <Text style={{color: 'white', fontSize: 20}}>Finish Up!</Text>

                </TextInput>
              <Image
                source={require("../../assets/nextIcon.png")}
                style={{position: 'absolute', right: 70}}
              />
            </TouchableOpacity> 

    </View>
  );
}


const styles = StyleSheet.create({
    backButton: {
      marginTop: 40,
      minWidth: 500
    },
    formControl: {
      minWidth: 350
    },
    container: {
        flex: 1,
        backgroundColor: "#9ba599",
        alignItems: 'center',
        justifyContent: "center",
      },
    horizontalContainer: {
        alignItems: 'center'
    },
      pickedDateContainer: {
        padding: 20,
        backgroundColor: '#eee',
        borderRadius: 10,
      },
      pickedDate: {
        fontSize: 18,
        color: 'black',
      },
      header:{
          flex: 1,
          height: 50,
          padding: 10,
          marginTop:70,
          marginLeft: 25,
          alignItems: 'center',
          fontWeight: 'bold',
          fontSize: 18,
      },
      TextInput: {
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 20,
        borderWidth: 1,
        margin:2,
        width:350,
        justifyContent: 'center'
      },
      descriptionInput: {
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 20,
        borderWidth: 1,
        margin:2,
        width:350,
        height: 120,
        justifyContent: 'center'
      },
      inputView: {
        backgroundColor: "white",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      btnContainer: {
        padding: 30,
      },
      paymentVenmo: {
        width: "80%",
        height: 50,
        alignItems: "center",
        borderRadius: 25,
        justifyContent: "center",
        backgroundColor: "#64d2ff",
        marginTop: 40,
        marginBottom: 0,
      },

      paymentCashApp: {
        width: "80%",
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#30d158",
        marginTop: 40,
        marginBottom: 0,
      },
      paymentPayPal: {
        width: "80%",
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#325fad",
        marginTop: 40,
        marginBottom: 0,
      },
      paymentCard: {
        width: "80%",
        height: 50,
        alignItems: "center",
        borderRadius: 25,
        justifyContent: "center",
        backgroundColor: "#adb9c7",
        marginTop: 40,
        marginBottom: 0,
      },
      loginBtn: {
        width: "80%",
        height: 50,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        marginBottom: 200,
        backgroundColor: "#c15f71",
      },
});

export default SignUp3;