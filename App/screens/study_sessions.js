import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, ScrollView, FlatList, TouchableHighlight, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import {delSess} from '../actions/action';
import { useFonts } from 'expo-font';
import { useDispatch, useSelector } from 'react-redux';

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

    const session = useSelector(state => state.session)
    const orderSess = [[],[],[],[],[],[],[]];
    //Sunday
    for (i = 0; i < session.length; i++){
      if (session[i].day == 'sunday'){
        orderSess[0].push(session[i])
      }
    }
    //Monday
    for (i = 0; i < session.length; i++){
      if (session[i].day == 'monday'){
        orderSess[1].push(session[i])
      }
    }
    //Tuesday
    for (i = 0; i < session.length; i++){
      if (session[i].day == 'tuesday'){
        orderSess[2].push(session[i])
      }
    }
    //Wednesday
    for (i = 0; i < session.length; i++){
      if (session[i].day == 'wednesday'){
        orderSess[3].push(session[i])
      }
    }
    //Thursday
    for (i = 0; i < session.length; i++){
      if (session[i].day == 'thursday'){
        orderSess[4].push(session[i])
      }
    }
    //Friday
    for (i = 0; i < session.length; i++){
      if (session[i].day == 'friday'){
        orderSess[5].push(session[i])
      }
    }
    //Saturday
    for (i = 0; i < session.length; i++){
      if (session[i].day == 'saturday'){
        orderSess[6].push(session[i])
      }
    }


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
            onPress: () => del(item),
          },
          
        ]
      )
    };
    
    //Connecting global 
    const dispatch = useDispatch();

    const del = (sess) => dispatch(delSess(sess))

    const handleView = (item) => {
      console.log(item.name)
      navigation.navigate("SessionDetails", {
        name: item.name,
        starTime: item.starTime,
        dur: item.time,
        type: [item.lenWork,item.lenRest],
      })
    }
  
    if(!fontsLoaded) {
      return null;
    }
      return (
        <LinearGradient colors={['#00c6ff', '#0072ff']} style={styles.container}>
          <Text style={styles.heading}> 
              your study sessions
          </Text>
          <Text style ={styles.subHeading}> find your upcoming sessions here</Text>
          
          {/* List of Sessions*/}
          <Text style={styles.day}>Sunday</Text>
          <FlatList
            keyExtractor={item => item.key.toString()}
            data={orderSess[0]}
            renderItem={({ item }) => (
              <TouchableOpacity onLongPress={() => handleEdit(item)} onPress={() => handleView(item)}>
                <Text style={styles.item}>{item.name + " - " + item.starTime}</Text>
              </TouchableOpacity>
            )}
          />
          <Text style={styles.day}>Monday</Text>
          <FlatList
            keyExtractor={item => item.key.toString()}
            data={orderSess[1]}
            renderItem={({ item }) => (
              <TouchableOpacity onLongPress={() => handleEdit(item)} onPress={() => handleView(item)}>
                <Text style={styles.item}>{item.name + " - " + item.starTime}</Text>
              </TouchableOpacity>
            )}
          />
          <Text style={styles.day}>Tuesday</Text>
          <FlatList
            keyExtractor={item => item.key.toString()}
            data={orderSess[2]}
            renderItem={({ item }) => (
              <TouchableOpacity onLongPress={() => handleEdit(item)} onPress={() => handleView(item)}>
                <Text style={styles.item}>{item.name + " - " + item.starTime}</Text>
              </TouchableOpacity>
            )}
          />
          <Text style={styles.day}>Wednesday</Text>
          <FlatList
            keyExtractor={item => item.key.toString()}
            data={orderSess[3]}
            renderItem={({ item }) => (
              <TouchableOpacity onLongPress={() => handleEdit(item)} onPress={() => handleView(item)}>
                <Text style={styles.item}>{item.name + " - " + item.starTime}</Text>
              </TouchableOpacity>
            )}
          />
          <Text style={styles.day}>Thursday</Text>
          <FlatList
            keyExtractor={item => item.key.toString()}
            data={orderSess[4]}
            renderItem={({ item }) => (
              <TouchableOpacity onLongPress={() => handleEdit(item)} onPress={() => handleView(item)}>
                <Text style={styles.item}>{item.name + " - " + item.starTime}</Text>
              </TouchableOpacity>
            )}
          />
          <Text style={styles.day}>Friday</Text>
          <FlatList
            keyExtractor={item => item.key.toString()}
            data={orderSess[5]}
            renderItem={({ item }) => (
              <TouchableOpacity onLongPress={() => handleEdit(item)} onPress={() => handleView(item)}>
                <Text style={styles.item}>{item.name + " - " + item.starTime}</Text>
              </TouchableOpacity>
            )}
          />
          <Text style={styles.day}>Saturday</Text>
          <FlatList
            keyExtractor={item => item.key.toString()}
            data={orderSess[6]}
            renderItem={({ item }) => (
              <TouchableOpacity onLongPress={() => handleEdit(item)} onPress={() => handleView(item)}>
                <Text style={styles.item}>{item.name + " - " + item.starTime}</Text>
              </TouchableOpacity>
            )}
          />
        </LinearGradient>
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