import { StatusBar } from 'expo-status-bar';
// import React, {Component} from 'react';
// import {useState, Component, React } from 'react';
import * as React from 'react';
import DropDown from 'react-native-paper-dropdown';
// import App from '././App';
// import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import {StyleSheet, SafeAreaView, View, FlatList, ScrollView } from 'react-native';
import {Provider as PaperProvider , Appbar, Text, BottomNavigation, TextInput, Button} from 'react-native-paper';
// import { useFonts } from 'expo-font';


export default function CreationScreen({navigation}) {


    // let [fontsLoaded] = useFonts({
    //     'OpenSansBold': React.require('../assets/fonts/OpenSans-Bold.ttf'),
    // });
    
    //   if(!fontsLoaded) {
    //     return null;
    // }



    const [text, setText] = React.useState('');

    const [text2, setText2] = React.useState('');

    const [text3, setText3] = React.useState('');

    const [text4, setText4] = React.useState('');

    // const goHomeScreen = () => {

    // }



    const MusicRoute = () => <Text></Text>;

    const AlbumsRoute = () => <Text></Text>;
    // const AlbumsRoute = () => navigation.navigate('HomePage');
    const RecentsRoute = () => <Text></Text>;

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'music', title: 'Music', icon: 'queue-music'},
      { key: 'albums', title: 'Albums', icon: 'album'},
      { key: 'recents', title: 'Recents', icon: 'history'},
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
    });



    const [showDropDown, setShowDropDown] = React.useState(false);
    const [gender, setGender] = React.useState();
       
    const genderList = [
        { label: '25 Minute Work : 5 Minute Break', value: 'Pomodoro' },
        { label: '52 Minute Work : 17 Minute Break', value: '52/17' },
        { label: '90 Minute Work : 30 Minute Break', value: 'PomodoroX' },
        { label: 'Custom', value: 'Custom' },
    ];








    return (

        <PaperProvider >


            

            <View style={{backgroundColor:"#6200ee"}}>
            

            <SafeAreaView>
                <Appbar>
                <Appbar.Action
                    icon="archive"
                    onPress={() => console.log('Pressed archive')}
                    />
                    <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
                    <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
                    <Appbar.Action
                    icon="delete"
                    onPress={() => console.log('Pressed delete')}
                    />
                </Appbar>
            </SafeAreaView>

            
            </View>
            <ScrollView style={{height:"67%"}}>
            
                <View style={{padding:20, paddingTop:20}}>
                    <Text style={styles.heading }>Create a Study Session</Text>
                </View>
                <View style={{paddingLeft:20}}>
                    <Text style={{fontSize:30}}>Subject:</Text>
                </View>


                <View style={{padding:20, paddingTop:5}}>
                    <TextInput
                        label="What will you be doing?"
                        value={text}
                        onChangeText={text => {setText(text)
                            console.log(text)}}
                        mode = "outlined"
                        placeholder="Math Homework"
                        
                        
                        
                    />
                </View>

                <View style={{paddingLeft:20}}>
                    <Text style={{fontSize:30}}>Task Duration:</Text>
                </View>


                <View style={{padding:20, paddingTop:5}}>
                    <TextInput
                        label="How long will your task take?"
                        value={text2}
                        onChangeText={text2 => {setText2(text2)
                            console.log(text2)}}
                        mode = "outlined"
                        placeholder="90"
                        
                        
                        
                    />
                </View>

                <View style={{paddingLeft:20}}>
                    <Text style={{fontSize:30}}>Work and Break Cycle</Text>
                </View>




                <View style={{padding:20}}>
                    <DropDown
                        label={'Working Minutes : Resting Minutes'}
                        mode={'outlined'}
                        setValue={setGender}
                        list={genderList}
                        value={gender}
                        visible={showDropDown}
                        showDropDown={() => setShowDropDown(true)}
                        onDismiss={() => {setShowDropDown(false)
                            console.log(gender)}
                        }
                        inputProps={{
                            right: <TextInput.Icon name={'menu-down'} />,
                        }}
                        
                    />

                </View>

                <View style={{paddingLeft:20}}>
                    <Text style={{fontSize:30}}>Working Cycle:</Text>
                </View>


                <View style={{padding:20, paddingTop:5}}>
                    <TextInput
                        label="How long will you be working for?"
                        value={text3}
                        onChangeText={text3 => {setText3(text3)
                            console.log(text3)}}
                        mode = "outlined"
                        placeholder="90"
                        
                        
                        
                    />
                </View>

                <View style={{paddingLeft:20}}>
                    <Text style={{fontSize:30}}>Resting Cycle:</Text>
                </View>


                <View style={{padding:20, paddingTop:5}}>
                    <TextInput
                        label="How long will you be resting for?"
                        value={text4}
                        onChangeText={text4 => {setText4(text4)
                            console.log(text4)}}
                        mode = "outlined"
                        placeholder="90"
                        
                        
                        
                    />
                </View>

                <View style={{height:75}}/>

                <View style={styles.buttonContainer}>
                    <Button mode="contained" onPress={() => navigation.navigate('HomePage')} style={{padding:10}}>
                        <Text style={styles.textations}>Submit</Text>
                    </Button>
                </View>
                <View style={{height:300}}>

                </View>

            </ScrollView>


                <BottomNavigation style={{}}
                    navigationState={{ index, routes }}
                    onIndexChange={setIndex}
                    renderScene={renderScene}
                    // onTabPress={() => navigation.navigate('Welcome')}
                    // barStyle={{ backgroundColor: '#449DD1' }}
                />

            






            
        </PaperProvider>

        

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
            padding: 20,
            fontSize: 60,
            textAlign: 'center',
            //fontFamily: 'OpenSansBold',
        },
        input: {
            padding: 20,
            fontSize: 60,
            textAlign: 'center',
        },
        containerStyle: {
            flex: 1,
            marginHorizontal: 20,
            justifyContent: 'center',
          },
          textations: {
              fontSize:25,
              color:"#fff"
          },
          buttonContainer: {
              alignItems: 'center',

          },
      });

      