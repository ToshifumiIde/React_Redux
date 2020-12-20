import React from 'react'
import rootReducer from "./redux/rootReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CalendarBoard from "./components/CalendarBoard/container";
import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");


const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <CalendarBoard />
    </Provider>
  )
}

export default App;