import { StatusBar } from 'expo-status-bar';
// import React, {Component} from 'react';
// import {useState, Component, React } from 'react';
import React, { useState } from 'react';
import DropDown from 'react-native-paper-dropdown';
// import App from '././App';
// import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import {StyleSheet, SafeAreaView, View, FlatList, ScrollView } from 'react-native';
import {Provider as PaperProvider , Appbar, Text, BottomNavigation, TextInput, Button, HelperText} from 'react-native-paper';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

import {addSess} from '../actions/action';
import { useDispatch } from 'react-redux';

state = {
  fontsLoaded: false,
}

const CreationScreen = ({navigation}) =>{
    let cycle = [0,0];
    let numCycles = 0;
    let totalDuration = 0;

    const dispatch = useDispatch();
    const submitSess = (sess) => dispatch(addSess(sess))

    const handleSubmit = () => {
        submitSess({name: text, starTime: text5, time: totalDuration, cycle: numCycles, lenWork: cycle[0], lenRest: cycle[1], day: text6})
        navigation.navigate("HomePage")
    }
    const issue = false;
    //text name
    //text2 number of cycles
    //text3 custom workcycle
    //text4 custom restcycle
    //text5 start time 8:00 pm
    //text6 duration time
    const [text, setText] = React.useState('');

    const [text2, setText2] = React.useState('');

    const onChangeText2 = text2 => setText2(text2);

    const onChangeText3 = text3 => setText3(text3);

    const onChangeText4 = text4 => setText4(text4);

    const onChangeText5 = text5 => setText5(text5);
    const onChangeText6 = text6 => setText6(text6);

    const hasTimeErrors = (textt) => {
        // console.log(cycle[0] + ", " + cycle[1]);

        if(textt == ""||textt.includes(":") && (textt.includes("AM") || textt.includes("PM")  || textt.includes("pm")  || textt.includes("am"))){
            return false;
        }
        return true;
    };


    const hasErrors = (textt) => {
        

        if(Number(textt) || textt=="" || Number(textt) == 0){
            // issue = false;
            return false;
        }
        // issue = true;
        return true;

        // return !text2.includes('@');
    };

    const [text3, setText3] = React.useState('');

    const [text4, setText4] = React.useState('');

    const [text5, setText5] = React.useState('');

    const [text6, setText6] = React.useState('');

    // function customize (gen) {
    //     if(gen == "Custom"){
    //         return(
    //             <View>
    //                 <Text>Tester</Text>
    //             </View>
    //         );
    //     }
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



    const [showDropDown, setShowDropDown] = useState(false);
    const [gender, setGender] = useState();
       
    // const genderList = [
    //     { label: '25 Minute Work : 5 Minute Break', value: [25, 5] },
    //     { label: '52 Minute Work : 17 Minute Break', value: [52, 17] },
    //     { label: '90 Minute Work : 30 Minute Break', value: [90,30] },
    //     // { label: 'Custom', value: 'Custom' },
    // ];

    const genderList = [
        { label: '25 Minute Work : 5 Minute Break', value: "Pomodoro"},
        { label: '52 Minute Work : 17 Minute Break', value: "52/17" },
        { label: '90 Minute Work : 30 Minute Break', value: "PomoX" },
        { label: 'Custom', value: 'Custom' },
    ];

    let [fontsLoaded] = useFonts({
        'OpenSansSemiBold': require('../assets/fonts/OpenSans-SemiBold.ttf'),
        'OpenSansRegular': require('../assets/fonts/OpenSans-Regular.ttf'),
        'OpenSansBold': require('../assets/fonts/OpenSans-Bold.ttf'),
        'ProximaNovaRegular': require('../assets/fonts/ProximaNova-Regular.otf'),
        'ProximaNovaBold': require('../assets/fonts/ProximaNova-Bold.otf'),
    });

    if(gender == "Pomodoro"){
        cycle = [25, 5]
    } else if(gender == "52/17"){
        cycle = [52, 17]
    } else if(gender == "PomoX"){
        cycle = [90,30]
    } else {
        cycle = [Number(text3), Number(text4)]
    }

    numCycles = Number(text2);
    totalDuration = numCycles * (cycle[0] + cycle[1]);


    
    if(gender == "Custom"){
        if(!fontsLoaded) {
            return null;
        }
        return (
        
        <PaperProvider>
            
            {/* <View>

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

            
            </View> */}
            <LinearGradient colors={['#00c6ff', '#0072ff']} style={styles.compress}>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}style={{height:"100%"}}>

                <View style={{padding:5}}>
                    <Text style={styles.heading }>create a study session</Text>
                </View>
                <View style={{paddingLeft:20}}>
                    <Text style={{fontFamily: 'ProximaNovaBold', fontSize: 25, color: 'white'}}>Subject:</Text>
                </View>


                <View style={{padding:20, paddingTop:5}}>
                    <TextInput
                        label="What will you be doing?"
                        value={text}
                        onChangeText={text => {setText(text)
                            console.log(text)}}
                        mode = "flat"
                        style={{backgroundColor: "transparent",height: 60, color: 'white'}}
                        theme={{ colors: { primary: '#ffffff'}}}  
                        placeholder="Math Homework"
                        
                        
                        
                    />
                </View>




                <View style={{paddingLeft:20}}>
                    <Text style={{fontFamily: 'ProximaNovaBold', fontSize: 25, color: 'white'}}>Start Time:</Text>
                </View>

                <View style={{padding:20, paddingTop:5}}>
                    <TextInput
                        label="What time will you start?"
                        value={text5}
                        // onChangeText={text2 => {setText2(text2)
                        //     console.log(text2)}}
                        onChangeText={onChangeText5}
                        mode = "flat"
                        style={{backgroundColor: "transparent",height: 60, color: 'white'}}
                            theme={{ colors: { primary: '#ffffff'}}}  
                        placeholder="3:00 pm"
                        />

                            <HelperText type="error" visible={hasTimeErrors(text5)}>
                                Incorrect time format!
                            </HelperText>      
                </View>

                <View style={{paddingLeft:20}}>
                    <Text style={{fontFamily: 'ProximaNovaBold', fontSize: 25, color: 'white'}}>Work and Break Cycle</Text>
                </View>




                <View style={{padding:20}}>
                    <DropDown
                        label={'Working Minutes : Resting Minutes'}
                        mode={'flat'}
                        theme={{ colors: { primary: 'black'}}}  
                        value={gender}
                        setValue={setGender}
                        list={genderList}
                        visible={showDropDown}
                        showDropDown={() => setShowDropDown(true)}
                        onDismiss={() => {setShowDropDown(false)}}
                        inputProps={{
                            right: <TextInput.Icon name={'menu-down'} />,
                        }}
                        
                    />

                </View>

                <View style={{paddingLeft:20}}>
                    <Text style={{fontFamily: 'ProximaNovaBold', fontSize: 25, color: 'white'}}>Working Cycle:</Text>
                </View>


                <View style={{padding:20, paddingTop:5}}>
                    <TextInput
                        label="How many minutes will one work cycle be?"
                        value={text3}
                        // onChangeText={text3 => {setText3(text3)
                        //     console.log(text3)}}
                        onChangeText={onChangeText3}
                        mode = "flat"
                        style={{backgroundColor: "transparent",height: 60, color: 'white'}}
                        theme={{ colors: { primary: '#ffffff'}}}  
                        placeholder="90"
                    />
                    <HelperText type="error" visible={hasErrors(text3)}>
                                Only input numbers!
                    </HelperText>
                </View>

                <View style={{paddingLeft:20}}>
                    <Text style={{fontFamily: 'ProximaNovaBold', fontSize: 25, color: 'white'}}>Resting Cycle:</Text>
                </View>


                <View style={{padding:20, paddingTop:5}}>
                    <TextInput
                        label="How many minutes will one rest cycle be?"
                        value={text4}
                        // onChangeText={text4 => {setText4(text4)
                        //     console.log(text4)}}
                        onChangeText={onChangeText4}
                        mode = "flat"
                        style={{backgroundColor: "transparent",height: 60, color: 'white'}}
                        theme={{ colors: { primary: '#ffffff'}}}  
                        placeholder="90"  
                    />
                    <HelperText type="error" visible={hasErrors(text4)}>
                        Only input numbers!
                    </HelperText>
                </View>


                <View style={{paddingLeft:20}}>
                    <Text style={{fontFamily: 'ProximaNovaBold', fontSize: 25, color: 'white'}}>Number of Cycles:</Text>
                </View>


                <View style={{padding:20, paddingTop:5}}>
                    <TextInput
                        label="How many cycles do you want to complete?"
                        value={text2}
                        // onChangeText={text2 => {setText2(text2)
                        //     console.log(text2)}}
                        onChangeText={onChangeText2}
                        mode = "flat"
                        style={{backgroundColor: "transparent",height: 60, color: 'white'}}
                            theme={{ colors: { primary: '#ffffff'}}}  
                        placeholder="3"
                        />

                            <HelperText type="error" visible={hasErrors(text2)}>
                                Only input numbers!
                            </HelperText>      
                </View>

                <View style={{paddingLeft:20}}>
                    <Text style={{fontFamily: 'ProximaNovaBold', fontSize: 25, color: 'white'}}>Repeating Days</Text>
                </View>


                <View style={{padding:20, paddingTop:5}}>
                    <TextInput
                        label="Which days of the week do you want to repeat this study session?"
                        value={text6}
                        onChangeText={text6 => {setText6(text6)}}
                        mode = "flat"
                        style={{backgroundColor: "transparent",height: 60, color: 'white'}}
                        theme={{ colors: { primary: '#ffffff'}}}  
                        placeholder="'None' or 'monday tuesday friday'"
                        
                        
                        
                    />
                </View>

                <View style={{height: 25}}/>
    
                    <View style={styles.buttonContainer}>
                        <Button mode="contained" onPress={() => handleSubmit()} style={{width: "90%", backgroundColor: '#c21f1f', borderRadius: 10}}>
                            <Text style={styles.textations}>Submit</Text>
                        </Button>
                    </View>

                {/* <View style={styles.buttonContainer}>
                    <Button mode="contained" onPress={() => console.log(gender)} style={{padding:10}}>
                        <Text style={styles.textations}>gender test</Text>
                    </Button>
                </View> */}




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
                </LinearGradient>
            </PaperProvider>

            );
        } else {
            if(!fontsLoaded) {
                return null;
            }
            return(
                <PaperProvider>
                    <LinearGradient colors={['#00c6ff', '#0072ff']} style={styles.compress}>
                {/* <View style={{backgroundColor:"#6200ee"}}>
  
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
                </View> */}

                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{height:"100%"} }>
                
                    <View style={{padding:5}}>
                        <Text style={styles.heading }>create a study session</Text>
                    </View>
                    <View style={{paddingLeft:20}}>
                        <Text style={{fontFamily: 'ProximaNovaBold', fontSize: 25, color: 'white'}}>Subject:</Text>
                    </View>
    
    
                    <View style={{padding:20, paddingTop:5}}>
                        <TextInput
                            label="What will you be doing?"
                            value={text}
                            onChangeText={text => {setText(text)
                                console.log(text)}}
                            mode = "flat"
                            placeholder="Math Homework"
                            style={{backgroundColor: "transparent",height: 60, color: 'white'}}
                            theme={{ colors: { primary: '#ffffff'}}}  
                        />
                    </View>
    


                    <View style={{paddingLeft:20}}>
                    <Text style={{fontFamily: 'ProximaNovaBold', fontSize: 25, color: 'white'}}>Start Time:</Text>
                </View>

                <View style={{padding:20, paddingTop:5}}>
                    <TextInput
                        label="What time will you start?"
                        value={text5}
                        // onChangeText={text2 => {setText2(text2)
                        //     console.log(text2)}}
                        onChangeText={onChangeText5}
                        mode = "flat"
                        style={{backgroundColor: "transparent",height: 60, color: 'white'}}
                            theme={{ colors: { primary: '#ffffff'}}}  
                        placeholder="3:00 pm"
                        />

                            <HelperText type="error" visible={hasTimeErrors(text5)}>
                                Incorrect time format!
                            </HelperText>      
                </View>

                    <View style={{paddingLeft:20}}>
                        <Text style={{fontFamily: 'ProximaNovaBold', fontSize: 25, color: 'white'}}>Work and Break Cycle</Text>
                    </View>

                    <View style={{padding:20}}>
                        <DropDown
                            label={'Working Minutes : Resting Minutes'}
                            mode={'flat'}
                            theme={{ colors: { primary: 'black'}}}  
                            value={gender}
                            setValue={setGender}
                            list={genderList}
                            visible={showDropDown}
                            showDropDown={() => setShowDropDown(true)}
                            onDismiss={() => {setShowDropDown(false)}}
                            inputProps={{
                                right: <TextInput.Icon name={'menu-down'} />,
                            }}
                        />
                    </View>

                    <View style={{paddingLeft:20}}>
                        <Text style={{fontFamily: 'ProximaNovaBold', fontSize: 25, color: 'white'}}>Number of Cycles</Text>
                    </View>

                    
    
    
                    <View style={{padding:20, paddingTop:5}}>
                    <TextInput
                        label="How many cycles do you want to complete?"
                        value={text2}
                        // onChangeText={text2 => {setText2(text2)
                        //     console.log(text2)}}
                        onChangeText={onChangeText2
                    }
                        mode = "flat"
                        placeholder="3"
                        style={{backgroundColor: "transparent",height: 60, color: 'white'}}
                            theme={{ colors: { primary: '#ffffff'}}}  
                        />

                            <HelperText type="error" visible={hasErrors(text2)}>
                                Only input numbers!
                            </HelperText>
                    </View>

                    <View style={{paddingLeft:20}}>
                    <Text style={{fontFamily: 'ProximaNovaBold', fontSize: 25, color: 'white'}}>Repeating Days</Text>
                </View>


                <View style={{padding:20, paddingTop:5}}>
                    <TextInput
                        label="Which days do you want to repeat this study session?"
                        value={text6}
                        onChangeText={text6 => {setText6(text6)}}
                        mode = "flat"
                        style={{backgroundColor: "transparent",height: 60, color: 'white'}}
                        theme={{ colors: { primary: '#ffffff'}}}  
                        placeholder="'None' or 'monday tuesday friday'"
                        
                        
                        
                    />
                </View>

    
                    <View style={{height: 25}}/>
                    {/*SUBMIT*/}
                    <View style={styles.buttonContainer}>
                        <Button mode="contained" onPress={() => handleSubmit()} style={{width: "90%", backgroundColor: '#c21f1f', borderRadius: 10}}>
                            <Text style={styles.textations}>Submit</Text>
                        </Button>
                    </View>
    
                    {/* <View style={styles.buttonContainer}>
                        <Button mode="contained" onPress={() => console.log(gender)} style={{padding:10}}>
                            <Text style={styles.textations}>gender test</Text>
                        </Button>
                    </View> */}
    
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
                    
                    
                    </LinearGradient>
                </PaperProvider>
            );
        }
    }

    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    compress: {
        paddingLeft: "5%",
        paddingRight: "5%"
    },
    heading: {
        fontFamily: 'OpenSansBold',
        fontSize: 40,
        marginTop: '30%',
        textAlign: "center",
        marginBottom: '5%',
        color: "#ffffff"
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

export default CreationScreen;