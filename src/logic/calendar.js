import dayjs from "dayjs";

//カレンダー生成のロジック
export const createCalendar = (month)=>{
  // const firstDay = dayjs().startOf("month");
  const firstDay = getMonth(month);
  const firstDayIndex = firstDay.day();
  return Array(35)
    .fill(0)
    .map(( _ , index ) => {
      const diffFormFirstDay = index - firstDayIndex;
      const day = firstDay.add(diffFormFirstDay, "day");
      return day;
    })
};

//
export const getMonth = ({year , month}) =>{
  return dayjs(`${year} - ${month}`);
}


//本日の日付を取得
export const isSameDay = ( d1 , d2 ) =>{
  const format = "YYYYMMDD";
  return d1.format(format) === d2.format(format);
};

//今月の判定
export const isSameMonth = ( m1 , m2 ) => {
  const format = "YYYYMM";
  return m1.format(format) === m2.format(format);
}

export const isFirstDay = day => day.date() === 1;