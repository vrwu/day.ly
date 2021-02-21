import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, ScrollView, FlatList, TouchableHighlight, TouchableOpacity} from 'react-native';

export default function TimerPage(item) {

    return (
    <View style={styles.container}>
      <Text style={styles.heading}> 
          item.name
      </Text>
      <Text style ={styles.subHeading}> Here are your day.ly tasks :)</Text>

      {/* List of Sessions*/}
    </View>
    );
}
    
const styles = StyleSheet.create({
  
});