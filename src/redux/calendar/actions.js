//constantsを定義
export const CALENDAR_SET_MONTH = "CALENDAR_SET_MONTH";

//actionsを定義
export const calendarSetMonth = ( payload ) => ({
  type:CALENDAR_SET_MONTH,
  payload
});