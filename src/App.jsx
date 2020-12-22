import React from 'react'
import rootReducer from "./redux/rootReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CalendarBoard from "./components/CalendarBoard/container";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import HeaderNavigation from './components/HeaderNavigation/container';
dayjs.locale("ja");

//reduxで生成されたreducerをまとめてstoreに格納
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <HeaderNavigation />
      <CalendarBoard />
    </Provider>
  )
}

export default App;