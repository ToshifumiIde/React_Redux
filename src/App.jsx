import React from 'react'
import rootReducer from "./redux/rootReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CalendarBoard from "./components/CalendarBoard/container";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import HeaderNavigation from './components/HeaderNavigation/container';
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
      </MuiPickersUtilsProvider>
    </Provider>
  )
}

export default App;