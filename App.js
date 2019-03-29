import React, { Component } from 'react';
import { AppRegistry, TouchableOpacity, Dimensions, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import LoginScreen  from './screens/LoginScreen';
import MainScreen  from './screens/MainScreen';
import ActionBar from './screens/ActionBar';

var device_width = Dimensions.get('window').width;

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = { page: 0 }
  }

  _navigate(p){
    this.setState({page:p})
  }
  _scrollEnd(e){
    page =  (e.nativeEvent.targetContentOffset.x > 100) ? 1: 0;
    this.setState({page:page})
  }

  render() {
    let scrollOffset = { x: this.state.page * device_width, y:0};
   
    return (
        <View style={{flex:1}}>
          <View style={{flex:8}}>
            <ScrollView onScrollEndDrag={this._scrollEnd.bind(this)} contentOffset={scrollOffset} horizontal={true} pagingEnabled={true} bounces={false}>
              <LoginScreen style={{width:device_width}}></LoginScreen>
              <MainScreen style={{width:device_width}}></MainScreen>
            </ScrollView>
          </View>
          <View style={{flex:1}}>
            <ActionBar page={this.state.page} navigate={this._navigate.bind(this)}></ActionBar>
          </View>
        </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => App);
