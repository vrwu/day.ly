import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';
import * as Font from 'expo-font';
import { List } from 'react-native-paper';
import { Text } from 'react-native-paper';
import { useFonts } from 'expo-font';


state = {
  fontsLoaded: false,
}


export default function SessionDetails() {
  let [fontsLoaded] = useFonts({
    'OpenSansSemiBold': require('../assets/fonts/OpenSans-SemiBold.ttf'),
    'OpenSansRegular': require('../assets/fonts/OpenSans-Regular.ttf'),
    'OpenSansBold': require('../assets/fonts/OpenSans-Bold.ttf'),
    'ProximaNovaRegular': require('../assets/fonts/ProximaNova-Regular.otf'),
    'ProximaNovaBold': require('../assets/fonts/ProximaNova-Bold.otf'),
  });

  if(!fontsLoaded) {
    return null;
  }
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>session{"\n"}details</Text>
            <List.Item style={styles.list}
                title="Subject"
                titleStyle={{
                    fontFamily: 'ProximaNovaBold',
                    fontSize: 25,
                }}
                description="Math"
                descriptionStyle={{
                    fontFamily: 'ProximaNovaRegular',
                    fontSize: 20,
                    paddingLeft: "2.5%"
                }}
                />
            <List.Item style={styles.list}
                title="Time"
                titleStyle={{
                    fontFamily: 'ProximaNovaBold',
                    fontSize: 25,
                }}
                description="from 2pm to 4pm"
                descriptionStyle={{
                    fontFamily: 'ProximaNovaRegular',
                    fontSize: 20,
                    paddingLeft: "2.5%"
                }}
                />
            <List.Item style={styles.list}
                title="Session Type"
                titleStyle={{
                    fontFamily: 'ProximaNovaBold',
                    fontSize: 25,
                }}
                description="Pomodoro"
                descriptionStyle={{
                    fontFamily: 'ProximaNovaRegular',
                    fontSize: 20,
                    paddingLeft: "2.5%"
                }}
                />
            <List.Item style={styles.list}
                title="Time Breakdown"
                titleStyle={{
                    fontFamily: 'ProximaNovaBold',
                    fontSize: 25,
                }}
                description="25 min study 5 min break"
                descriptionStyle={{
                    fontFamily: 'ProximaNovaRegular',
                    fontSize: 20,
                    paddingLeft: "2.5%"
                }}
                />
            {/* <Text style={styles.heading}> text</Text> */}
            <View style={[{margin:10, width:"40%"}]}>
            <StatusBar style="auto" />
            </View>
        </View>
        );
    }
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#33b5e5',
        },
        heading: {
          fontFamily: 'OpenSansBold',
          fontSize: 40,
          marginTop: '40%',
          textAlign: "center",
          marginBottom: '5%',
        },
        details: {
            fontFamily: 'OpenSansRegular',
            fontSize: 20,
          },
        list: {
            fontFamily: 'OpenSansRegular',
            fontSize: 100,
            color: "#ffffff",
            paddingLeft: "20%",
        },
        box: {
            backgroundColor: 'rgba(0,0,0,0.01)',
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: '#000',
            padding: 10,
            margin: 20,
            opacity: 0.6
        }
      });