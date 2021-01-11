//カレンダー全体を構成
import React from "react";
import { GridList, Typography } from "@material-ui/core";
import styles from "./style.module.css";
import CalendarElement from "../CalendarElement";
// import { createCalendar } from "../../logic/calendar";

const days = ["日", "月", "火", "水", "木", "金", "土"];

const CalendarBoard = ({ calendar, month, openAddScheduleDialog }) => {
  //スケジュールのオブジェクトを確認するデバック用console
  console.log(calendar);
  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {days.map((day) => (
          <li key={day}>
            <Typography
              align="center"
              className={styles.days}
              color="textSecondary"
              component="div"
              variant="caption"
            >
              {day}
            </Typography>
          </li>
        ))}
        {calendar.map(({ date, schedules }) => (
          <li
            key={date.toISOString()}
            onClick={() => {
              openAddScheduleDialog(date);
            }}
          >
            <CalendarElement day={date} month={month} schedules={schedules} />
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalendarBoard;
