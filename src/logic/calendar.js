import dayjs from "dayjs";

export const createCalendar = ()=>{
  const firstDay = dayjs().startOf("month");
  const firstDayIndex = firstDay.day();

  return Array(35)
    .fill(0)
    .map(( _ , index ) => {
      const diffFormFirstDay = index - firstDayIndex;
      const day = firstDay.add(diffFormFirstDay, "day");
      return day;
    })
}