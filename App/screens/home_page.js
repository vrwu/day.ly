import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, FlatList, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

import {delSess} from '../actions/action';
import { useDispatch, useSelector } from 'react-redux';


state = {
  fontsLoaded: false,
}
const HomePage = ({navigation}) =>{
  
  
  let [fontsLoaded] = useFonts({
    'OpenSansSemiBold': require('../assets/fonts/OpenSans-SemiBold.ttf'),
    'OpenSansRegular': require('../assets/fonts/OpenSans-Regular.ttf'),
    'OpenSansBold': require('../assets/fonts/OpenSans-Bold.ttf'),
    'ProximaNovaRegular': require('../assets/fonts/ProximaNova-Regular.otf'),
    'ProximaNovaBold': require('../assets/fonts/ProximaNova-Bold.otf'),
  });
 
    //temp place holder for data
    //startTime should an int, so its easier to use with an clock/time api idk
    //I just left it as a string so we can output am/pm 
    
    const session = useSelector(state => state.session);
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var dayOfTheWeek = weekday[d.getDay()];
    const todaySess = []
    for (i = 0; i < session.length; i++){
      if (session[i].day == dayOfTheWeek.toLowerCase()){
        todaySess.push(session[i])
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
    const handleView = (item) => {
      console.log(item.name)
      navigation.navigate("SessionDetails", {
        name: item.name,
        starTime: item.starTime,
        dur: item.time,
        type: [item.lenWork,item.lenRest],
      })
    }
    
    

    //Connecting global 
    const dispatch = useDispatch();

    const del = (sess) => dispatch(delSess(sess))

    const createNew = () => {
      navigation.navigate('CreationScreen')
    };

    const totalWeek = () => {
      navigation.navigate('StudySessionsSettings')
    };
 
    //Case for empty list of sessions 
    if (todaySess.length == 0){

      if(!fontsLoaded) {
        return null;
      }
      return (
        
        <LinearGradient colors={['#00c6ff', '#0072ff']} style={styles.container}>
        <Button mode="contained" onPress={() => totalWeek()} style={styles.calendar} icon="calendar-month"> 
        </Button>
           <Text style={styles.heading}> 
              welcome, johnathan
          </Text>
          <Text style = {styles.subHeading}>There are no sessions for today :( {"\n"} 
          Please feel free to create a session {"\n"}
           or check out other day.ly tasks</Text>
          <View style={{width: "50%", alignSelf: "center", marginBottom: "15%", marginTop: "5%"}}>
                    <Button mode="contained" onPress={() => createNew()} style={{backgroundColor: '#c21f1f', borderRadius: 10}}>
                        New Session
                    </Button></View>
        </LinearGradient>
      );
    }
    //If there is not an empty list
    else{
      if(!fontsLoaded) {
        return null;
      }
      return (
        <LinearGradient colors={['#00c6ff', '#0072ff']} style={styles.container}>
            <Button mode="contained" onPress={() => totalWeek()} style={styles.calendar} icon="calendar-month"> 

            </Button>
          <Text style={styles.heading}> 
              welcome, johnathan
          </Text>
          <Text style ={styles.subHeading}> Here are your day.ly tasks for {dayOfTheWeek} :)</Text>
          {/* List of Sessions*/}
          <FlatList
            keyExtractor={item => item.key.toString()}
            data={todaySess}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.itemContainer} onLongPress={() => handleEdit(item)} onPress={() => handleView(item)}>
                <Text style={styles.item}>{item.name + " - " + item.starTime}</Text>
              </TouchableOpacity>
            )}
          />
          {/*add new button}*/}
          <View style={{width: "50%", marginLeft: "50%", marginBottom: "15%"}}>
                    <Button mode="contained" onPress={() => createNew()} style={{backgroundColor: '#c21f1f', borderRadius: 10}}>
                        New Session
                    </Button></View>
        </LinearGradient>
        );
    }
}
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#499ab8',
    paddingHorizontal: 35,
    paddingTop: 50,
  },
  heading: {
    fontFamily: 'OpenSansBold',
    fontSize: 40,
    marginTop: '10%',
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
  
  scrollView:{
    marginHorizontal: 20,
    marginVertical: 50,
  },
  itemContainer: {
    marginTop: 25,
    padding: 30,
    backgroundColor: '#f2f2f2',
    fontSize: 24,
    borderRadius: 20,
    fontFamily: 'ProximaNovaRegular'
  },
  item: {
    color: "black",
    fontSize: 24,
    fontFamily: 'ProximaNovaRegular',
  },
  calendar: {
    // marginBottom: 10,
    paddingLeft:10,
    marginLeft: '95%',
    borderRadius: 10,
    backgroundColor: '#c21f1f',
    // width: '20%',
  }
});

export default HomePage;
