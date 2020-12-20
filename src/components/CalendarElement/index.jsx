//カレンダーの日付の部分を構成
import React from 'react'
import styles from "./style.module.css";
import {Typography} from "@material-ui/core";
import dayjs from "dayjs";
import {isSameDay, isSameMonth , isFirstDay} from "../../logic/calendar";


const CalendarElement = ({day}) => {
  const today = dayjs();
  const format = isFirstDay(day) ?"M月D日" :"D";

  const isToday = isSameDay( day , today );

  const isCurrentMonth = isSameMonth(day,today);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary" ; 

  return (
    <div className={styles.element}>
      <Typography 
        align="center"
        className={styles.date}
        color={textColor}
        variant="caption"
        component="div"
        >
          <span className={isToday ? styles.today : ""}>
      {day.format(format)}
          </span>
      </Typography>
    </div>
  )
}

export default CalendarElement;