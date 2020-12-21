//カレンダー全体を構成
import React from 'react';
import { 
  GridList,
  Typography
} from "@material-ui/core";
import styles from "./style.module.css";
// import dayjs from "dayjs";
// import "dayjs/locale/ja";
import CalendarElement from "../CalendarElement";
// import { createCalendar } from "../../logic/calendar";

// const calendar = createCalendar();
const days = ["日","月","火","水","木","金","土",]

const CalendarBoard = ({calendar,month}) => {
  // console.log(calendar);
  return (
    <div className={styles.container}>
      <GridList 
        className={styles.grid}
        cols={7} 
        spacing={0} 
        cellHeight="auto">
          {days.map( day => (
            <li key={day}>
            <Typography
              className={styles.days}
              color="textSecondary"
              align="center"
              variant="caption"
              component="div"
            >
              {day}
            </Typography>
            </li>
          ))}
          {calendar.map((c)=>{
            return(
              <li key={c.toISOString()}>
                <CalendarElement day={c} month={month}/>
              </li>
            )
          })}
      </GridList>
    </div>
  );
};

export default CalendarBoard;