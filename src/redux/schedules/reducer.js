import { SCHEDULES_ADD_ITEM } from "./actions";

//予定の初期値
const init = {
  items:[],
  isLoading:false,
};

const schedulesReducer = ( state = init , action ) => {
  const { type , payload } = action;
  switch (type){
    case SCHEDULE_ADD_ITEM:
      return {
        ...state,
        items:[
          ...state.items,
          { ...payload,
            id:state.items.length + 1,
          }
        ],
      };
      default :
      return state;
  }
};

export default schedulesReducer;