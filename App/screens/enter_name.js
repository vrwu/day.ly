import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { useState } from 'react';
import {StyleSheet, View,  } from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';
// import { Fonts } from 'expo-font';
import * as Font from 'expo-font';

export default class EnterName extends Component {

    state = {
        text: '',
        fontsLoaded: false,
    }

    async loadFonts() {
        await Font.loadAsync({
            'OpenSansRegular': {
            uri: require('../assets/fonts/OpenSans-Regular.ttf'),
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
                <View style={{flex: 1, backgroundColor: "#499ab8"}}>
                    <View style={{flex:0.3}}>
                    </View>
                    <View style={{ flex: 0.5, padding: "15%"}}>
                    <Text style={{fontSize: 25, fontFamily: "OpenSansRegular", color: "#ffffff"}}> What can we call you? {"\n"}</Text>
                    <TextInput style={{backgroundColor: "#9bc3d1"}} mode="flat" label="Name" value={this.state.text}
                    onChangeText={text => this.setState({text})} placeholder="e.g John"/>
                    <View style={{flex: 0.1}}></View>
                    <View style={{width: "30%", marginLeft: "70%"}}>
                    <Button mode="contained" onPress={() => this.props.navigation.navigate('CreationScreen')} style={{backgroundColor: "#ab3535"}}>
                        Next
                    </Button></View>
                    </View>
                </View>
            );
        }
        else {
            return null;
        }
    }
}