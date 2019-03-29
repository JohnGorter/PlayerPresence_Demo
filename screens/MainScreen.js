import React, { Component } from 'react';
import { View, FlatList, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import ViewCell from './ViewCell';

export default class MainScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            playerlist: [
                { key:"1", name:"john", lastname:"gorter", present:true},
                { key:"2", name:"john", lastname:"gorter", present:true},
                { key:"3", name:"john", lastname:"gorter", present:true},
                { key:"4", name:"john", lastname:"gorter", present:false},
                { key:"5", name:"john", lastname:"gorter", present:false},
                { key:"6", name:"john", lastname:"gorter", present:false},
                { key:"7", name:"john", lastname:"gorter", present:false},
                { key:"8", name:"john", lastname:"gorter", present:false},
                { key:"9", name:"john", lastname:"gorter", present:false},
                { key:"10", name:"john", lastname:"gorter", present:false},
                { key:"11", name:"john", lastname:"gorter", present:false}
            ]
        }
    }
    render() {
        return (
           <View style={{backgroundColor:'yellow', flex:1, ...this.props.style}}>
                <View style={{backgroundColor:'red', justifyContent:'flex-end',alignItems:'center',height:80}}>
                    <Text style={{marginBottom:10}}>Deelnemers</Text>
                </View>
                <FlatList style={{ flex: 1, marginTop:60 }} contentContainerStyle={{ flexGrow: 1 }}  data={this.state.playerlist} renderItem={({item}) => (
                    <ViewCell data={item}></ViewCell>
                )}>
                </FlatList>
            </View>
        )
    }
}