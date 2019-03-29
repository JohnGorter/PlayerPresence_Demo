import React, { Component } from 'react';
import { View, FlatList, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import ViewCell from './ViewCell';

export default class MainScreen extends Component {
    constructor(props){
        super(props);
        
//        this.socket = new WebSocket("ws://localhost:5000/");

        this.state = {
            playerlist: []
        }
    }
    componentDidMount(){
       // let socket = new WebSocket("ws://localhost:5000/");

       // this.socket.onopen = () => this.socket.send("hello");
       // this.socket.onmessage = ({data}) => console.log(data);

        console.log("mounted");
        fetch("http://localhost:5000/players.json")
        .then(resp => resp.json())
        .then(playerdata => {
            this.setState({playerlist:playerdata});
        });
    }
    _onselected(item){
       //  this.socket.send("JOHN CHANGED: " + JSON.stringify(item));
    }

    render() {
        return (
           <View style={{backgroundColor:'yellow', flex:1, ...this.props.style}}>
                <View style={{backgroundColor:'red', justifyContent:'flex-end',alignItems:'center',height:80}}>
                    <Text style={{marginBottom:10}}>Deelnemers</Text>
                </View>
                <FlatList style={{ flex: 1, marginTop:60 }} contentContainerStyle={{ flexGrow: 1 }}  data={this.state.playerlist} renderItem={({item}) => (
                    <ViewCell onselected={this._onselected.bind(this)} data={item}></ViewCell>
                )}>
                </FlatList>
            </View>
        )
    }
}