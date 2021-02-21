import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, ScrollView, FlatList, TouchableHighlight, TouchableOpacity} from 'react-native';

import { useFonts } from 'expo-font';

state = {
  fontsLoaded: false,
}

export default function StudySessions({navigation}) {
  
  let [fontsLoaded] = useFonts({
    'OpenSansSemiBold': require('../assets/fonts/OpenSans-SemiBold.ttf'),
    'OpenSansRegular': require('../assets/fonts/OpenSans-Regular.ttf'),
    'OpenSansBold': require('../assets/fonts/OpenSans-Bold.ttf'),
    'ProximaNovaRegular': require('../assets/fonts/ProximaNova-Regular.otf'),
    'ProximaNovaBold': require('../assets/fonts/ProximaNova-Bold.otf'),
  });

    const [sess, setSess] = useState([
      {name: "math", starTime: "3pm", time: 2, sessName: "Pomodorox2", key: 1},
      {name: "bio", starTime: "3pm", time: 2, sessName: "Pomodorox2", key: 2},
      {name: "paper", starTime: "4pm", time: 2, sessName: "Day-ly grind", key: 3},
      {name: "exam", starTime: "5pm", time: 2, sessName: "52-17", key: 4},
    ]);


    //Function handles
    const handleEdit = (item) => {
      Alert.alert(
        "Do you want to remove ", 
        item.name,
        [
          { 
            text: "No",
            style: "cancel"
          },
          {
            text: "Yes",
            onPress: () => handleRemove(item.key),
          },
          
        ]
      )
    };
    const handleRemove = (key) => {
      setSess((prevSess) => {
        return prevSess.filter(ses => ses.key != key)
      })
    };
    const handleTimer = (item) => {
      navigation.navigate('TimerPage')
    };

  
    if(!fontsLoaded) {
      return null;
    }
      return (
        <View style={styles.container}>
          <Text style={styles.heading}> 
              your study sessions
          </Text>
          <Text style ={styles.subHeading}> find your upcoming sessions here</Text>
          
          {/* List of Sessions*/}
          <Text style={styles.day}>Monday</Text>
          <FlatList
            keyExtractor={item => item.key.toString()}
            data={sess}
            renderItem={({ item }) => (
              <TouchableOpacity onLongPress={() => handleEdit(item)} onPress={() => handleTimer(item)}>
                <Text style={styles.item}>{item.name + " - " + item.starTime}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        );
}
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#499ab8',
    paddingHorizontal: 35,
    paddingTop: 50,
  },
  container2: {
  },
  heading: {
    fontFamily: 'OpenSansBold',
    fontSize: 40,
    marginTop: '15%',
    textAlign: "center",
    marginBottom: '5%',
    color: "#ffffff"
  },
  subHeading: {
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 20,
    fontFamily: 'ProximaNovaRegular',
    color: "#ffffff"
    
  },
  item: {
    marginTop: 25,
    padding: 30,
    backgroundColor: '#f2f2f2',
    fontSize: 24,
    borderRadius: 20,
    color: "black",
    fontFamily: 'ProximaNovaRegular'
  },
  scrollView:{
    marginHorizontal: 20,
    marginVertical: 50,
  },
  day: {
    textAlign: "left",
    fontSize: 20,
    fontFamily: 'ProximaNovaBold',
    color: "#ffffff"
  },
  cards: {
    width: "95%",
    height: "10%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: '#f2f2f2',
    alignSelf: "center",
    margin: "5%"
  },
  card_text: {
    fontSize: 24,
    color: "black",
    fontFamily: 'ProximaNovaRegular'
  }
});