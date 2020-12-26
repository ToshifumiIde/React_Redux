export const ADD_SCHEDULE_SET_VALUE = "ADD_SCHEDULE_SET_VALUE";
export const ADD_SCHEDULE_OPEN_DIALOG = "ADD_SCHEDULE_OPEN_DIALOG";
export const ADD_SCHEDULE_CLOSE_DIALOG = "ADD_SCHEDULE_CLOSE_DIALOG";

//formの値を更新するaction
export const addScheduleSetValue = payload =>({
  type:ADD_SCHEDULE_SET_VALUE,
  payload
});
//dialogを開くaction
export const addScheduleOpenDialog = payload =>({
  type:ADD_SCHEDULE_OPEN_DIALOG,
  payload
});
////dialogを閉じるaction
export const addScheduleCloseDialog = payload =>({
  type:ADD_SCHEDULE_CLOSE_DIALOG,
  payload
});