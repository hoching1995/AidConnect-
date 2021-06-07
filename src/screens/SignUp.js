import React,{useState}  from 'react';

import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown'
import DateTimePicker from '@react-native-community/datetimepicker'
import {Image} from 'react-native'



const SignUp = ({navigation}) => {
    const [name, setName] = useState("");
    const [information, setInformation] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [fulfillment, setFulfillment] = useState("");
    const [availability, setAvailability] = useState("");


    const [isPickerShow, setIsPickerShow] = useState(false);
    const [isDateSelected, setIsDateSelected] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));

    const showPicker = () => {
      setIsPickerShow(true);
      setIsDateSelected(true);
    };

    const onChange = (event, value) => {
      setDate(value);
      if (Platform.OS === 'android') {
        setIsPickerShow(false);
      }
    };
  


    return(
 
    <View style={styles.container}>
        <TouchableOpacity style={{backgroundColor: '#22282b', width: 400,  height: 40}}
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
                source={require("../../assets/SignUp1.png")}
                style={{top: 25}}
            />
      <Text style={styles.header}> </Text>

      <TextInput
              style={styles.TextInput}
              placeholder="Full Name [First Last] *"
              placeholderTextColor="grey"
              onChangeText={(name) => setName(name)}
            />
    
            <View styles={{flex:1}}>
            {!isPickerShow && (
                <View style={{zIndex: 1, position: 'absolute', width: 35,
                height: 35,
                top: 8,
                right: 7,}}>
                <TouchableOpacity onPress={(showPicker)}>
                <Image
                source={require("../../assets/calendar.png")}
                style={{
                    width: 35,
                    height: 35
                }
                }
                
             
                />
                </TouchableOpacity>
                </View>
                )}

                {!isDateSelected && (
                    <TextInput 
                    style={styles.TextInput}
                    editable={false}
                    placeholder="Birth Date"
                    />
                    )}

                {isDateSelected && (
                        <TextInput 
                        style={styles.dateInput}
                        editable={false}
                        value = {date.toDateString()}
                        />
                )}
            
        
        </View>


        

        

          {/* The button that used to trigger the date picker */}
          {/* {!isPickerShow && (
            <View style={styles.btnContainer}>
              <Button title="Enter Birthday" color= "#c15f71" onPress={showPicker} />
            </View>
          )} */}

          {/* The date picker */}
          {isPickerShow && (
            <DateTimePicker
              value={date}
              mode={'date'}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              is24Hour={true}
              onChange={onChange}
              style={{opacity: 0 }}
              
            />

          )}
        
            <TextInput
              style={styles.TextInput}
              placeholder="Zipcode"
              placeholderTextColor="grey"
              onChangeText={(zipcode) => setZipcode(zipcode)}
            />
           

            <TouchableOpacity style={styles.loginBtn}
            onPress={() => navigation.navigate('SignUp2')}
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
      pickedDateContainer: {
        padding: 20,
        backgroundColor: '#eee',
        borderRadius: 10,
      },
      dateInput: {
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 5,
        marginBottom:20,
        borderRadius: 7,
        margin:2,
        color: 'black',
        width:350,
        justifyContent: 'center'
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
      horizontalContainer: {
        // alignItems: 'flex-start',
        // justifyContent: "flex-end",
        // flexDirection: 'row'
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
        marginTop: 15,
        marginBottom: 200,
        backgroundColor: "#c15f71",
      },
});

export default SignUp;