import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';


const INITIAL_WORK_MIN = '25';
const INITIAL_BREAK_MIN = '05';
const INITIAL_SEC = '00';
const WORK_LABEL = 'work';
const BREAK_LABEL = 'break';
const START_LABEL = 'Start';
const STOP_LABEL = 'Stop';

let interval = 0;



export default class App extends React.Component {

    state = {
        text: '',
        fontsLoaded: false,
    }

    async loadFonts() {
        await Font.loadAsync({
            'OpenSansRegular': {
            uri: require('../assets/fonts/OpenSans-Regular.ttf'),
            },
            'ProximaNovaRegular': {
                uri: require('../assets/fonts/ProximaNova-Regular.otf'),
                },
    });
    this.setState({ fontsLoaded: true });
}
    // componentDidMount() {
    //     Font.loadAsync({
    //       'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    //     });
    //     this.setState({ fontsLoaded: true });
    //   }

      componentDidMount() {
          this.loadFonts();
      }


  constructor(props) {
    super(props);

    this.state = {
      minutes: INITIAL_WORK_MIN,
      seconds: INITIAL_SEC,
      session: WORK_LABEL,
      buttonLabel: START_LABEL,
      workInputValue: INITIAL_WORK_MIN,
      breakInputValue: INITIAL_BREAK_MIN,
    };

    this.secondsRemaining;
    this.isRunning = false;
  }

  startStopTimer = workSession => {
    // Stop/pause timer
    if (this.isRunning) {
      return this.pauseTimer();
    }

    // Start/Continue timer
    this.setState(previousState => ({
      buttonLabel: STOP_LABEL,
    }));

    if (!this.secondsRemaining) {
      this.secondsRemaining = this.state.minutes
        ? this.state.minutes * 60
        : INITIAL_WORK_MIN * 60;
    }

    this.isRunning = true;

    this.setupInteval();
  };

  setupInteval = () => {
    clearInterval(interval);

    interval = setInterval(() => this.onTick(), 1000);
  };

  onTick = () => {
    let minutes = Math.floor(this.secondsRemaining / 60);
    let seconds = this.secondsRemaining - minutes * 60;

    minutes = this.normalizeDigits(minutes);
    seconds = this.normalizeDigits(seconds);

    this.setState(previousState => ({
      minutes: minutes,
      seconds: seconds,
    }));

    this.secondsRemaining--;

    if (minutes == 0 && seconds == 0) {
      
      if (this.state.session == WORK_LABEL) {
        this.startBreak();
      } else {
        this.startWork();
      }
    }
  };

  pauseTimer = () => {
    clearInterval(interval);

    this.isRunning = false;

    this.setState(previousState => ({
      buttonLabel: START_LABEL,
    }));
  };

  startWork = () => {
    const that = this;

    this.setState(previousState => ({
      minutes: that.normalizeDigits(this.state.workInputValue),
      seconds: INITIAL_SEC,
      session: WORK_LABEL,
      buttonLabel: STOP_LABEL,
    }));

    this.secondsRemaining = this.state.workInputValue * 60;

    this.setupInteval();
  };

  startBreak = () => {
    const that = this;

    this.setState(previousState => ({
      minutes: that.normalizeDigits(this.state.breakInputValue),
      seconds: INITIAL_SEC,
      session: BREAK_LABEL,
      buttonLabel: STOP_LABEL,
    }));

    this.secondsRemaining = this.state.breakInputValue * 60;

    this.setupInteval();
  };

  resetTimer = () => {
    const that = this;

    this.isRunning = false;
    this.secondsRemaining = 0;

    clearInterval(interval);

    this.setState(previousState => ({
      session: WORK_LABEL,
      buttonLabel: START_LABEL,
      seconds: INITIAL_SEC,
      minutes: that.normalizeDigits(previousState.workInputValue),
    }));
  };

  onWorkInputChange = workMin => {
    const that = this;

    this.setState(previousState => ({
      workInputValue: workMin,
      minutes: that.normalizeDigits(workMin),
    }));

    this.resetTimer();
  };

  onBreakInputChange = breakMin => {
    const that = this;

    this.setState(previousState => ({
      breakInputValue: breakMin,
      minutes: that.normalizeDigits(this.state.workInputValue),
    }));

    this.resetTimer();
  };

  normalizeDigits = value => {
    if (value.toString().length < 2) {
      return '0' + value;
    }

    return value;
  };

  
  render() {
    if(this.state.fontsLoaded) {
    return (
        <LinearGradient colors={['#4568DC', '#B06AB3']} style={styles.container}>
        <View>
          <Text style={styles.session}>{this.state.session}</Text>
          <Text style={styles.timer}>
            {this.state.minutes}:{this.state.seconds}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Work Mins:</Text>
          <TextInput
            defaultValue={`${this.state.workInputValue}`}
            maxLength={3}
            style={styles.input}
            keyboardType="numeric"
            onChangeText={this.onWorkInputChange}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Break Mins:</Text>
          <TextInput
            defaultValue={`${this.state.breakInputValue}`}
            maxLength={3}
            style={styles.input}
            keyboardType="numeric"
            onChangeText={this.onBreakInputChange}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.startStopBtn}
            onPress={() => this.startStopTimer()}>
            <Text style={styles.startStopBtnText}>
              {this.state.buttonLabel}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.resetBtn}
            onPress={() => this.resetTimer()}>
            <Text style={styles.resetBtnText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
  else {
    return null;
}
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  session: {
    fontSize: 35,
    textAlign: 'center',
    color: 'white',
    fontFamily: "OpenSansBold",
    marginTop: "30%"
  },
  timer: {
    fontSize: 90,
    color: 'white',
    padding: 10,
  },
  startStopBtn: {
    paddingTop: 10,
    paddingRight: 30,
    paddingBottom: 10,
    paddingLeft: 30,
    marginRight: 15,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
  },
  resetBtn: {
    paddingTop: 10,
    paddingRight: 30,
    paddingBottom: 10,
    paddingLeft: 30,
    marginRight: 15,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  startStopBtnText: {
    color: 'white',
    fontSize: 25,
    fontFamily: "ProximaNovaRegular"
  },
  resetBtnText: {
    color: 'white',
    fontSize: 25,
    fontFamily: "ProximaNovaRegular"
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    height: 50
  },
  inputLabel: {
    fontSize: 18,
    color: 'white',
    paddingRight: 10,
    paddingTop: 5,
    fontWeight: 'bold',
    fontFamily: "ProximaNovaRegular"
  },
  input: {
    color: 'white',
    fontSize: 30,
    padding: 5,
    textAlign: 'center',
    marginLeft: 5,
    maxWidth: 60,
    minWidth: 40,
    marginBottom: 8,
    fontFamily: "ProximaNovaBold"
  },
});
