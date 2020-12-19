//カレンダー全体を構成
import React from 'react';
import { GridList } from "@material-ui/core";
import styles from "./style.module.css";
// import dayjs from "dayjs";
// import "dayjs/locale/ja";
import CalendarElement from "../CalendarElement";
import { createCalendar } from "../../logic/calendar";

// dayjs.locale("ja");

// const createCalendar =() => {
//   const firstDay = dayjs().startOf("month");
//   const firstDayIndex = firstDay.day();
//   return Array(35)
//     .fill(0)
//     .map((_ , index) => { 
//       //使いたい値はindex。第一引数は"_"で仮置き
//       const diffFromFirstDay = index - firstDayIndex ;
//       const day = firstDay.add(diffFromFirstDay, "day");
//       return day;
//     });
// };
const calendar = createCalendar();

const CalendarBoard = () => {
  console.log(calendar);
  return (
    <div className={styles.container}>
      <GridList 
        className={styles.grid}
        cols={7} 
        spacing={0} 
        cellHeight="auto">
          {calendar.map((c)=>{
            return(
              <li key={c.toISOString()}>
                <CalendarElement>
                {c.format("D")}
                </CalendarElement>
                </li>
            )
          })}
      </GridList>
    </div>
  );
};

export default CalendarBoard;