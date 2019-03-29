import React from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';


export default ViewCell = ({onselected, data}) => {
    let present = data.present ? Icons.check : Icons.times;
    let iconstyle = { color: data.present ? 'green' : 'red'}

    return (
            <TouchableOpacity onPress={() => onselected(data)}>
                <View style={{flexDirection:'row', alignContent:'center'}}>
                <Text style={{ height:45, marginLeft:50, marginRight:50}}>
                        {data.name} {data.lastname}
                </Text>
                <FontAwesome style={iconstyle}>{present}</FontAwesome>
                </View>
            </TouchableOpacity>
            );
}