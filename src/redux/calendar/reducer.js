import dayjs from "dayjs";
import { CALENDAR_SET_MONTH } from "./actions";
import { formatMonth } from "../../logic/calendar";
const day = dayjs();

//reduxで所有する日付の初期値
const init = formatMonth(day);

const calendarReducer = ( state = init , action ) => {
  const {type , payload} = action;
  switch(type){
    case CALENDAR_SET_MONTH:
      return payload;
    default :
      return state;
  }
}

export default calendarReducer;