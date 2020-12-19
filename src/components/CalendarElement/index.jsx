//カレンダーの日付の部分を構成
import React from 'react'
import styles from "./style.module.css";

const CalendarElement = ({children}) => {
  return (
    <div className={styles.element}>
      <div className={styles.date}>
      {children}
      </div>
    </div>
  )
}

export default CalendarElement;