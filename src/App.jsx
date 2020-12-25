import React from 'react'
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";
import CalendarBoard from "./components/CalendarBoard/container";
import HeaderNavigation from './components/HeaderNavigation/container';
import AddScheduleDialog from "./components/addScheduleDialog/container";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
dayjs.locale("ja");

//reduxで生成されたreducerをまとめてstoreに格納
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={DayjsUtils}>
      <HeaderNavigation />
      <CalendarBoard />
      <AddScheduleDialog />
      </MuiPickersUtilsProvider>
    </Provider>
  )
}

export default App;