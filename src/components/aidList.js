import React from 'react';
import { TouchableOpacity, View, Dimensions } from 'react-native';
import AidCard from './aidCard'



const AidList= (props) => {
  var { width } = Dimensions.get("window");
  const {item, navigation} = props;
      return(
        <TouchableOpacity 
        style={{ width: width }}
        onPress={() => 
            navigation.navigate("AidRequest", props, {...item})
        }
        >
            <View style={{ marginLeft: 15, marginRight: 15, 
                backgroundColor: 'transparent'}}
        >
            <AidCard {...item} />
            </View>
        </TouchableOpacity>
    )
}

export default AidList;