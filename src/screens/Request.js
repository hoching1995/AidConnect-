import * as React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown'



const Request = () => {
    const [heading, setHeading] = useState("");
    const [description, setDescription] = useState("");
    const [zipCode, setZipCode] = useState("");


    return(

      
    <View style={styles.container}>
      <Button style={styles.backButton}
      title="Aid Request"
      color="#c15f71"
      />
      <Text style={styles.header}>Fill out all required sections to fulfill Aid Request</Text>

    
            <TextInput
              style={styles.TextInput}
              placeholder="Heading * 0/140"
              placeholderTextColor="grey"
              secureTextEntry={true}
              onChangeText={(heading) => setHeading(heading)}
            />
            <TextInput
              style={styles.descriptionInput}
              placeholder="Description*"
              placeholderTextColor="grey"
              secureTextEntry={true}
              onChangeText={(description) => setDescription(description)}
            />
            <TextInput
              style={styles.TextInput}
              placeholder="Zipcode"
              placeholderTextColor="grey"
              secureTextEntry={true}
              onChangeText={(zipCode) => setZipCode(zipCode)}
            />
           

           <ModalDropdown options={['Venmo', 'Paypal', 'Cashapp']} 
              style={styles.TextInput}
              defaultValue="Select Payment Method..."
              onSelect={(paymentMethod) => setPayment(String(options[value]))}
          
           />
           <ModalDropdown options={['Low', 'Medium', 'High']} 
              style={styles.TextInput}
              defaultValue="Select Urgency Scale..."
              dropdownStyle=""
           />

            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>Complete</Text>
            </TouchableOpacity>
            

    </View>
  );
}


const styles = StyleSheet.create({
    backButton: {
      alignSelf: "stretch"
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
        marginBottom: 90,
        backgroundColor: "#c15f71",
      },
});

export default Request;