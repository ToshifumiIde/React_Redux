import AddScheduleDialog from "./presentation";
import { connect } from "react-redux";
import {
  addScheduleCloseDialog,
  addScheduleSetValue,
} from "../../redux/addSchedule/actions";
import { schedulesAddItem } from "../../redux/schedules/actions";
// import { pushSchedule } from "../../config/firebase"; //追加

//stateからscheduleだけ受け取っている
const mapStateToProps = (state) => ({ schedule: state.addSchedule });

//dispatch関数
const mapDispatchToProps = (dispatch) => ({
  //dialogを閉じる
  closeDialog: () => {
    dispatch(addScheduleCloseDialog());
  },
  //scheduleをセットする
  setSchedule: (value) => {
    dispatch(addScheduleSetValue(value));
  },
  //scheduleの情報を保存する
  saveSchedule: (schedule) => {
    dispatch(schedulesAddItem(schedule));
    dispatch(addScheduleCloseDialog());
    // pushSchedule(schedule.items); //追加
  },
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  saveSchedule: () => {
    const {
      schedule: { form: schedule },
    } = stateProps;
    dispatchProps.saveSchedule(schedule);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AddScheduleDialog);
