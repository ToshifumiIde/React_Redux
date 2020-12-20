import { CALENDAR_SET_MONTH } from "./actions";
import dayjs from "dayjs";
const day = dayjs();

//reduxで所有するサンプルの初期値
const init = {
  year:day.year(),
  month:day.month() + 1,
}

const calendarReducer = ( state = init , action )=>{
  const {type , payload} = action;
  switch(type){
    case CALENDAR_SET_MONTH:
      return payload;
    default :
      return state;
  }
}

export default calendarReducer;