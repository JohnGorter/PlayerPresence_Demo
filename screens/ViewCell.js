import React from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';


export default ViewCell = ({data}) => {
    let present = data.present ? Icons.check : Icons.times;
    let iconstyle = { color: data.present ? 'green' : 'red'}

    return (
            <TouchableOpacity onPress={()=>console.log("item click", data)}>
                <View style={{flexDirection:'row', alignContent:'center'}}>
                <Text style={{ height:45, marginLeft:50, marginRight:50}}>
                        {data.name} {data.lastname}
                </Text>
                <FontAwesome style={iconstyle}>{present}</FontAwesome>
                </View>
            </TouchableOpacity>
            );
}