import React, { useEffect, useState } from 'react'
import {View,StyleSheet, TextInput, Image, ScrollView} from 'react-native'
import baseURL from '../../assets/common/baseUrl'
import AidList from '../components/aidList'
import axios from 'axios'

const Local = (props) => {
  const [aidRequests, setAidRequests] = useState([]);

  useEffect(
    () => {
        axios
        .get(`${baseURL}aidrequests`)
        .then((res)=> {
          setAidRequests(res.data);
        })
        .catch((err)=> {
          console.log(err.message);
        })
    }, []
  )
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
        style={{ paddingTop:10 }}
      >
        <View style={styles.container}>
          {aidRequests.map((item) => {
            return (
              <AidList 
                navigation={props.navigation}
                key={item.name}
                item={item}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

 
const styles = StyleSheet.create({
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
  searchbar:{
    backgroundColor: "#FFF",
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 25,
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  home_input: {
    fontWeight: "bold",
    fontSize: 19,
    width: 300,
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
});
export default Local;