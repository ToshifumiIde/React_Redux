import React from 'react'
import CalendarBoard from "./components/CalendarBoard/index";
import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");

const App = () => {
  return (
    <>
      <CalendarBoard />
    </>
  )
}

export default App;