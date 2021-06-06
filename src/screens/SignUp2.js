import React,{useState}  from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown'
import DateTimePicker from '@react-native-community/datetimepicker'
import CheckBox from '@react-native-community/checkbox';
import {Image} from 'react-native'



const SignUp2 = ({navigation}) => {

    const [password, setPassword] = useState("")
    const [email, setEmailAddress] = useState("")
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const [isPickerShow, setIsPickerShow] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));

    const showPicker = () => {
      setIsPickerShow(true);
    };

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
                source={require("../../assets/SignUp2.png")}
                style={{top: 25}}
            />
      
      <Text style={styles.header}></Text>

      <TextInput
              style={styles.TextInput}
              placeholder="Email Address"
              placeholderTextColor="grey"
              onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
            />
             <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="grey"
              secureTextEntry={true}
            />
            <TextInput
              style={styles.TextInput}
              placeholder="Confirm Password"
              placeholderTextColor="grey"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />

            
            <View>

                <TextInput style={styles.memberBox} 
                editable={false}
                 color='black' 
                 placeholder="Member of Community Organization?"
                 />

                <CheckBox
                style={{position: 'absolute', right: 15, top: 10}}
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
        
            </View>
            

            {/* <View
                style={styles.horizontalContainer}
            >
                <Text>Member of Community Organization?</Text>

                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />

            </View> */}

          
            <TouchableOpacity style={styles.loginBtn}
            onPress={() => navigation.navigate('SignUp3')}
            >
              <Image
                source={require("../../assets/nextIcon.png")}

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
        alignItems: 'center',
        justifyContent: "flex-end",
        flexDirection: 'row'
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
        marginBottom: 20,
        marginLeft: 5,
        borderRadius: 7,
        margin:2,
        width:350,
        justifyContent: 'center'
      },
      memberBox: {
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 20,
        marginLeft: 5,
        borderRadius: 7,
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

export default SignUp2;