import React, { Component } from 'react';
import { TouchableOpacity, Dimensions, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';

export default ActionBar = (props) => {
  let styleOne = props.page == 0 ? { backgroundColor:'white'}: {}
  let styleTwo = props.page == 1 ? { backgroundColor:'white'}: {}
  
  return (
    <View style={{flexDirection:'row', height:'100%', backgroundColor:'blue'}}>
      <TouchableOpacity style={{flex:1, ...styleOne}} onPress={() => props.navigate(0)}>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Text>Login</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{flex:1, ...styleTwo}} onPress={() => props.navigate(1)}>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Text>Main</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};