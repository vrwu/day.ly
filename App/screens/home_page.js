import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, FlatList, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
 
export default function HomePage({navigation}) {
 
    //temp place holder for data
    //startTime should an int, so its easier to use with an clock/time api idk
    //I just left it as a string so we can output am/pm 
    const [sess, setSess] = useState([
      {name: "math", starTime: "3pm", time: 2, sessName: "Pomodorox2", key: 1},
      {name: "bio", starTime: "3pm", time: 2, sessName: "Pomodorox2", key: 2},
      {name: "paper", starTime: "4pm", time: 2, sessName: "Day-ly grind", key: 3},  
      {name: "exam", starTime: "5pm", time: 2, sessName: "52-17", key: 4},
    ]);
 
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
    const createNew = () => {
      navigation.navigate('CreationScreen')
    };
 
    //Case for empty list of sessions 
    if (sess.length == 0){
      return (
        <View style={styles.container}>
          <Text style={styles.heading}> 
              Welcome, Theodore
          </Text>
          <Text style ={styles.subHeading}> Here are your day.ly tasks for {dayOfTheWeek}:)</Text>
          <Text style = {{fontSize: 20, textAlign:'center'}}>There are no sessions for today. :(</Text>
          <Text style = {{fontSize: 20, textAlign:'center'}}>Please feel free to add a session for today</Text>
          <Text style = {{fontSize: 20, textAlign:'center'}}>or swipe right to see a week.ly view</Text>
 
          <TouchableOpacity onPress={() => createNew()}>
            <Text style = {styles.createButton}>HELLO WORLD</Text>
          </TouchableOpacity>
        </View>
      );
    }
    //If there is not an empty list
    else{
      return (
        <View style={styles.container}>
          <Text style={styles.heading}> 
              Welcome, Theodore
          </Text>
          <Text style ={styles.subHeading}> Here are your day.ly tasks for {dayOfTheWeek}:)</Text>
        
          {/* List of Sessions*/}
          <FlatList
            keyExtractor={item => item.key.toString()}
            data={sess}
            renderItem={({ item }) => (
              <TouchableOpacity onLongPress={() => handleEdit(item)} onPress={() => navigation.navigate('SessionDetails', {item})}>
                <Text style={styles.item}>{item.name + " - " + item.starTime}</Text>
              </TouchableOpacity>
            )}
          />
          {/*add new button}*/}
          <View style={{width: "50%", marginLeft: "50%", marginBottom: "15%"}}>
                    <Button mode="contained" onPress={() => navigation.navigate('CreationScreen')} style={{backgroundColor: "#ab3535"}}>
                        New Session
                    </Button></View>
        </View>
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
  
  scrollView:{
    marginHorizontal: 20,
    marginVertical: 50,
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
});
