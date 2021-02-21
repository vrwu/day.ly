import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { useState } from 'react';
import {StyleSheet, View,  } from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
// import { Fonts } from 'expo-font';
import * as Font from 'expo-font';

export default class EnterName extends Component {

    state = {
        text: '',
        fontsLoaded: false,
    };
    async loadFonts() {
        await Font.loadAsync({
            'OpenSansRegular': {
            uri: require('../assets/fonts/OpenSans-Regular.ttf'),
            },
            'ProximaNovaRegular': {
                uri: require('../assets/fonts/ProximaNova-Regular.otf'),
                },
    });
    this.setState({ fontsLoaded: true });
}
    // componentDidMount() {
    //     Font.loadAsync({
    //       'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    //     });
    //     this.setState({ fontsLoaded: true });
    //   }

      componentDidMount() {
          this.loadFonts();
      }


    render() {
        if(this.state.fontsLoaded) {
            return (
                <LinearGradient colors={['#00c6ff', '#0072ff']} style={{flex: 1}}>
                    <View style={{flex:0.3}}>
                    </View>
                    <View style={{ flex: 0.5, padding: "15%"}}>
                    <Text style={{fontSize: 25, fontFamily: "ProximaNovaRegular", color: "#ffffff"}}> What can we call you? {"\n"}</Text>
                    <TextInput style={{backgroundColor: "transparent",height: 60, color: 'white'}} theme={{ colors: { primary: '#ffffff'}}}
                    mode = "flat" label="Name" value={this.state.text} selectionColor='white'
                    onChangeText={text => this.setState({text})} placeholder="e.g John"/>
                    <View style={{flex: 0.1}}></View>
                    <LinearGradient colors={['#e43a15', '#e65245']} style={{width: "30%", marginLeft: "70%", borderRadius: 10}}>
                    <Button mode="contained" onPress={() => this.props.navigation.navigate('HomePage')} style={{backgroundColor: '#c21f1f', borderRadius: 10}}>
                        Next
                    </Button></LinearGradient>
                    </View>
                </LinearGradient>
            );
        }
        else {
            return null;
        }
    }
}