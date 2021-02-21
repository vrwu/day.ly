import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import * as Font from 'expo-font';
import { List, Button } from 'react-native-paper';
import { Provider as PaperProvider , Text , BottomNavigation} from 'react-native-paper';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';


state = {
  fontsLoaded: false,
}


export default function SessionDetails({navigation, route}) {
  let [fontsLoaded] = useFonts({
    'OpenSansSemiBold': require('../assets/fonts/OpenSans-SemiBold.ttf'),
    'OpenSansRegular': require('../assets/fonts/OpenSans-Regular.ttf'),
    'OpenSansBold': require('../assets/fonts/OpenSans-Bold.ttf'),
    'ProximaNovaRegular': require('../assets/fonts/ProximaNova-Regular.otf'),
    'ProximaNovaBold': require('../assets/fonts/ProximaNova-Bold.otf'),
  });
  const name = route.params.name.trim()
  const start = route.params.starTime.trim()
  const duration = String(route.params.dur) + " min"
  
  const [work,rest] =  route.params.type
  const breakDown = String(work) + " min study " + String(rest) + " min break"
//   const MusicRoute = () => {
//     navigation.navigate('SessionDetails');
//     return null;
// }

// //   const AlbumsRoute = () => <Text></Text>;
//   const AlbumsRoute = () => {
//       navigation.navigate('HomePage');
//       return null;
//   }
//   // const AlbumsRoute = () => navigation.navigate('HomePage');

//   const RecentsRoute = () => {
//     navigation.navigate('CreationScreen');
//     return null;
// }

//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'music', title: 'Welcome', icon: 'mail'},
//     { key: 'albums', title: 'Home', icon: 'home'},
//     { key: 'recents', title: 'Create', icon: 'history'},
//   ]);

//   const renderScene = BottomNavigation.SceneMap({
//       music: MusicRoute,
//       albums: AlbumsRoute,
//       recents: RecentsRoute,
//   });

  if(!fontsLoaded) {
    return null;
  }
    return (

        <LinearGradient colors={['#00c6ff', '#0072ff']} style={styles.container}>

            <PaperProvider >
            <Text style={styles.heading}>session{"\n"}details</Text>
            <View style={styles.box}>
            <List.Item style={styles.list}
                title="Subject"
                titleStyle={{
                    fontFamily: 'ProximaNovaBold',
                    fontSize: 25,
                }}
                description={name}
                descriptionStyle={{
                    fontFamily: 'ProximaNovaRegular',
                    fontSize: 20,
                    paddingLeft: "2.5%"
                }}
                />
            <List.Item style={styles.list}
                title="Start Time"
                titleStyle={{
                    fontFamily: 'ProximaNovaBold',
                    fontSize: 25,
                }}
                description={start}
                descriptionStyle={{
                    fontFamily: 'ProximaNovaRegular',
                    fontSize: 20,
                    paddingLeft: "2.5%"
                }}
                />
            <List.Item style={styles.list}
                title="Duration"
                titleStyle={{
                    fontFamily: 'ProximaNovaBold',
                    fontSize: 25,
                }}
                description={duration}
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
                description={breakDown}
                descriptionStyle={{
                    fontFamily: 'ProximaNovaRegular',
                    fontSize: 20,
                    paddingLeft: "2.5%"
                }}
                /></View>
            {/* <Text style={styles.heading}> text</Text> */}
            {/* <View style={[{margin:10, width:"40%"}]}>
            <StatusBar style="auto" />
            </View> */}
            <View style={{width: "50%", alignSelf: 'center', borderRadius: 10}}>
            <Button mode="contained" onPress={() => navigation.navigate('TimerPage')} style={{backgroundColor: '#c21f1f', borderRadius: 10}}>
                        START SESSION
                    </Button></View>
            <View style={{height:"14%"}}/>
                {/* <BottomNavigation
                        navigationState={{ index, routes }}
                        onIndexChange={setIndex}
                        renderScene={renderScene}
                        // onTabPress={() => navigation.navigate('Welcome')}
                        barStyle={{ backgroundColor: 'transparent' }}
                /> */}

            
                </PaperProvider>
           </LinearGradient>
        
        );
    }
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#499ab8',
        },
        heading: {
          fontFamily: 'OpenSansBold',
          fontSize: 40,
          marginTop: '40%',
          textAlign: "center",
          marginBottom: '5%',
          color: "#ffffff"
        },
        details: {
            fontFamily: 'OpenSansRegular',
            fontSize: 20,
          },
        list: {
            fontFamily: 'OpenSansRegular',
            fontSize: 100,
            color: "#ffffff",
            paddingLeft: "12%",
            paddingRight: "12%"
            
        },
        box: {
            backgroundColor: "#f2f2f2",
            width: "80%",
            marginLeft: "10%",
            borderRadius: 4,
            margin: 20,
            borderRadius: 15,
            paddingTop: "5%",
            paddingBottom: "5%"
        }
      });