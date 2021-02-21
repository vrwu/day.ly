import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EnterName from './screens/enter_name';
import CreationScreen from './screens/creation';
import HomePage from './screens/home_page';
import StudySessionsSettings from './screens/study_sessions';
import SessionDetails from './screens/session_details';
import TimerPage from './screens/timer.js'


const Stack = createStackNavigator();

function Welcome({ navigation }) {
  return (
  <View style={styles.container}>
    <Text style={styles.heading}> welcome to {"\n"} day.ly!</Text>
    <Text>find your productivity</Text>
    <View style={[{margin:10, width:"40%"}]}>
    <Button
      onPress={() => navigation.navigate('EnterName')}
      title="Get Started"
      color="#ab3535"
      accessibilityLabel="Learn more about this purple button"
    />
    <Button
      onPress={() => navigation.navigate('HomePage')}
      title="HomePage"
      color="#ab3535"
      accessibilityLabel="Learn more about this purple button"
    />
    <Button
      onPress={() => navigation.navigate('CreationScreen')}
      title="Ween's Page"
      color="#ab3535"
      accessibilityLabel="Learn more about this purple button"
    />
    <Button
      onPress={() => navigation.navigate('StudySessionsSettings')}
      title="Explosive Page"
      color="#ab3535"
      accessibilityLabel="Learn more about this purple button"
    />
    <Button
      onPress={() => navigation.navigate('SessionDetails')}
      title="Session Details"
      color="#ab3535"
      accessibilityLabel="Learn more about this purple button"
    />
    <StatusBar style="auto" />
    </View>
  </View>
  );
}

export default function App() {
  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33b5e5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 40,
    textAlign: 'center',
  },
});
