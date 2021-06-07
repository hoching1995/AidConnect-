import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

var { width } = Dimensions.get("window");

const AidCard = (props) => {
  const {name, description, priorityRating, category} = props;
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>{category} Request</Text>
        <Text style={styles.text}>{name}</Text>
        <Text>{description}</Text>
        <Text>Priority Rating: {priorityRating}</Text>
        <Text style={{color: 'light-gray'}}>Status: unfulfilled</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width*.9,
    height: width/2.25,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 5,
    marginBottom: 5,
    alignItems: 'center',
    elevation: 8,
    backgroundColor: '#ECECEC'
  },
  card: {
    marginBottom: 10,
    height: width / 2 - 20 - 90,
    backgroundColor: 'transparent',
    width: width*.7
  },
  text: {
    fontSize: 30,
    color: 'black',
  }
});

export default AidCard;