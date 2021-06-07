import * as React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Image} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown'



const FulfillRequest = (props) => {
    const [name, setName] = useState("");
    const [information, setInformation] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [fulfillment, setFulfillment] = useState("");
    const [availability, setAvailability] = useState("");

    const fulfillmentOptions = ['Venmo', 'Paypal', 'Cashapp']
    const urgencyOptions = ['Low', 'Medium', 'High']


    return(
 
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'baseline', paddingTop: 30}}>
      <TouchableOpacity onPress = {() => props.navigation.navigate('Home')}>
        <Image
          source={require("../../assets/backIcon.png")}
          style={{
              width: 35,
              height: 35,
              top: -22
          }}
        />
        </TouchableOpacity>
        <Button style={styles.backButton}
          title="Aid Request"
          color="#c15f71"
        />

      </View>
      
      <Text style={styles.header}>Fill out all required sections to fulfill Aid Request</Text>

      <TextInput
              style={styles.TextInput}
              placeholder="Full Name [First Last] *"
              placeholderTextColor="grey"
              secureTextEntry={true}
              onChangeText={(name) => setName(name)}
            />
            <TextInput
              style={styles.descriptionInput}
              placeholder="Information / Custom Message"
              placeholderTextColor="grey"
              secureTextEntry={true}
              onChangeText={(information) => setInformation(information)}
            />
            <TextInput
              style={styles.TextInput}
              placeholder="Phone (555) 555-5555"
              placeholderTextColor="grey"
              secureTextEntry={true}
              onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
            />
           

           <ModalDropdown options={fulfillmentOptions} 
              style={styles.TextInput}
              defaultValue="Type of Fulfillment..."
              onSelect={(fulfillment) => setFulfillment(String(fulfillmentOptions[fulfillment]))}
           />

            <ModalDropdown options={['Now', 'Later']} 
              style={styles.TextInput}
              defaultValue="Availability..."
              //onSelect={(availability) => setFulfillment(String(fulfillmentOptions[availability]))}
           />   

            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>Complete</Text>
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
      loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        marginBottom: 100,
        backgroundColor: "#c15f71",
      },
});

export default FulfillRequest;