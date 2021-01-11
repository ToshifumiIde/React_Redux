import {
  ADD_SCHEDULE_SET_VALUE,
  ADD_SCHEDULE_OPEN_DIALOG,
  ADD_SCHEDULE_CLOSE_DIALOG,
} from "./actions";
import dayjs from "dayjs";


//個々の予定の初期値（空の予定を設定）
const init = {
  form:{
    title:"",
    description:"",
    date:dayjs(),
    location:"",
  },
  isDialogOpen:false,
};

const addScheduleReducer = ( state = init , action ) => {
  const { type , payload } = action;

  switch(type){
    case ADD_SCHEDULE_SET_VALUE:
      return {...state , form:{...state.form, ...payload}};
      //過去に入力された予定を分割代入（展開）し、新しいformを追加する。
      //また新しいformの中でも、現在のformに対して「新しいデータ」を展開して追加する
    case ADD_SCHEDULE_OPEN_DIALOG:
      return {...state , isDialogOpen:true };
      //過去に入力された予定を分割代入（展開）し、
    case ADD_SCHEDULE_CLOSE_DIALOG:
      return init;
    default :
      return state;
  }
};

export default addScheduleReducer;