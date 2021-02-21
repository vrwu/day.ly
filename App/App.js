import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EnterName from './screens/enter_name';
import CreationScreen from './screens/creation';
import HomePage from './screens/home_page';
import StudySessionsSettings from './screens/study_sessions';
import SessionDetails from './screens/session_details';
import TimerPage from './screens/timer.js';

import {Provider} from 'react-redux';
import sessReducer from './reducers/reducer';
import { createStore } from 'redux';
import { render } from 'react-dom';

const Stack = createStackNavigator();

const Store = () => createStore(sessReducer);

state = {
  fontsLoaded: false,
}

function Welcome({ navigation }) {

  let [fontsLoaded] = useFonts({
    'OpenSansSemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
    'OpenSansRegular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSansBold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'ProximaNovaRegular': require('./assets/fonts/ProximaNova-Regular.otf'),
    'ProximaNovaBold': require('./assets/fonts/ProximaNova-Bold.otf'),
  });

  if(!fontsLoaded) {
    return null;
  }
  return (
    <LinearGradient colors={['#00c6ff', '#0072ff']} style={styles.container}>
    <Text style={styles.heading}> welcome to {"\n"} day.ly!</Text>
    <Text style={styles.text}>find your productivity</Text>
    <View style={[{margin:10, width:"40%"}]}>

    <Button 
    mode="contained" 
    onPress={() => navigation.navigate('EnterName')} 
    style={{backgroundColor: '#c21f1f', borderRadius: 10}}>Get Started</Button>
    {/* <Button 
    mode="contained" 
    onPress={() => navigation.navigate('HomePage')} 
    style={{backgroundColor: '#c21f1f', borderRadius: 10}}>HomePage</Button> */}
    {/* <Button 
    mode="contained" 
    onPress={() => navigation.navigate('CreationScreen')} 
    style={{backgroundColor: '#c21f1f', borderRadius: 10}}>Ween's Page</Button> */}
    {/* <Button 
    mode="contained" 
    onPress={() => navigation.navigate('StudySessionsSettings')} 
    style={{backgroundColor: '#c21f1f', borderRadius: 10}}>Explosive Page</Button>
    <Button 
    mode="contained" 
    onPress={() => navigation.navigate('TimerPage')} 
    style={{backgroundColor: '#c21f1f', borderRadius: 10}}>Timer page</Button> */}
    
    <StatusBar style="auto" />
    </View>
  </LinearGradient>
  );
}

export default class App extends Component{
  render(){
  return (
    <Provider store = {Store()}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={Welcome}/>
          <Stack.Screen name="EnterName" component={EnterName}/>
          <Stack.Screen name="CreationScreen" component={CreationScreen}/>
          <Stack.Screen name="HomePage" component={HomePage}/>
          <Stack.Screen name="StudySessionsSettings" component={StudySessionsSettings}/>
          <Stack.Screen name="SessionDetails" component={SessionDetails}/>
          <Stack.Screen name="TimerPage" component={TimerPage}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33b5e5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontFamily: 'OpenSansBold',
    fontSize: 40,
    marginTop: '15%',
    textAlign: "center",
    marginBottom: '5%',
    color: "#ffffff"
  },
  text: {
    fontFamily: 'ProximaNovaRegular',
    fontSize: 15,
    textAlign: 'center',
    color: '#ffffff'
  }
});
