import {ADD_SESS, DEL_SESS} from '../actions/types'

const initialState = {
  session: [
      //Example
      //  {name: "math", starTime: "3:00 pm", time: totalDuration,  cycle: numCycles, lenWork: 25, lenRest: 5, day: monday tuesday}
  ]
}

const sessReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_SESS:
      console.log("it woking");
      return{
        ...state,
        session: state.session.concat({
          name: action.data.name,
          starTime: action.data.starTime,
          time: action.data.time,
          cycle: action.data.cycle,
          lenWork: action.data.lenWork,
          lenRest: action.data.lenRest,
          day: action.data.day.toLowerCase().split(" "),
          key: Math.random(),
          //to be determined
        })
      }
    case DEL_SESS:
      console.log("del woking")
      return {
        ...state,
        session: state.session.filter(ses => ses.key != action.data.key)
      }
    default:
      return state;

  }
};

export default sessReducer;