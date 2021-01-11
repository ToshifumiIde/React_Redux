import { SCHEDULES_ADD_ITEM } from "./actions";
import dayjs from "dayjs";

//予定（複数の配列）の初期値
//dialogで作成した予定を格納する先
const init = {
  items: [
    {
      id: 1,
      title: "test",
      date: dayjs(),
      location: "会議室",
      description: "会議室で実施",
    },
  ],
  isLoading: false,
};

const schedulesReducer = (state = init, action) => {
  const { type, payload } = action; //actionを展開
  switch (type) {
    case SCHEDULES_ADD_ITEM:
      return {
        ...state,
        items: [...state.items, { ...payload, id: state.items.length + 1 }],
      };
    default:
      return state;
  }
};

export default schedulesReducer;
