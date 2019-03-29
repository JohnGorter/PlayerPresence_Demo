
import React, { Component } from 'react';
import { Text, View, TextInput, Button, Platform } from 'react-native';

export default class LoginScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {username: '', password:'', success:null};
      // this.checkPasswordAndUsername = this.checkPasswordAndUsername.bind(this)
    }
  
    checkPasswordAndUsername = () => {
      if (this.state.username == "john" && this.state.password == "secret"){
        this.setState({success:true});
      } else {
        this.setState({success:false});
      }
    }
  
    render() {
      let message = <Text>{this.state.success == true ? "welkom Johnny":"Ongeldige combinatie"}</Text>
      let child;
      if (this.state.success != null) child = message;
  
      return (
        <View style={{justifyContent:'center', backgroundColor:'red', ...this.props.style}}>
          <View style={{flex:3, justifyContent:'center', alignItems:'center', backgroundColor:'green'}}>
                <View style={{width:150, height:150, backgroundColor:'red'}}></View>
          </View>
          <View style={{flex:4, backgroundColor:'yellow'}}>
            <View style={{alignItems:'center'}}>
              <Text>{Platform.OS == "ios" ? " IOS RULES!!" : "ANDROID RULES!"} {Platform.Version} </Text>
              <Text>Username:</Text><TextInput style={{height: 40, width: 200, backgroundColor:'white'}} placeholder="Username:" 
                      onChangeText={(username) => this.setState({username})} />
              <Text>Password:</Text><TextInput secureTextEntry style={{height: 40, width: 200, backgroundColor:'white'}}      placeholder="Password:"  onChangeText={(password) => this.setState({password})} />
              <Button onPress={this.checkPasswordAndUsername} title="Press Me" />
          
            </View>
             <View style={{alignItems:'center'}}>{child}</View> 
            </View>
         
        </View>
      );
    }
  }