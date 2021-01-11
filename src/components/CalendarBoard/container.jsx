//「reduxからのstate」と「reduxにdispatchする関数」をpropsとして提供するコンポーネント
import { connect } from "react-redux";
import { createCalendar } from "../../logic/calendar";
import CalendarBoard from "./presentation";
import {
  addScheduleOpenDialog,
  addScheduleSetValue,
} from "../../redux/addSchedule/actions";
import {setSchedules} from "../../logic/schedule";

//storeから必要な状態を選択し、propsの形に再成型する関数
const mapStateToProps = (state) => ({
  calendar: state.calendar,
  schedules: state.schedules,
});

//dialogを開くためのdispatch関数
const mapDispatchToProps = (dispatch) => ({
  openAddScheduleDialog: (d) => {
    dispatch(addScheduleOpenDialog());
    dispatch(addScheduleSetValue({ date: d }));
  },
});

//
const mergeProps = (stateProps, dispatchProps) => {
  const {
    calendar:month,
    schedules:{items:schedules}
  } = stateProps;

  const calendar = setSchedules(createCalendar(month), schedules);

  return {
    ...stateProps,
    ...dispatchProps,
    calendar,
    month,
  }
  // ...stateProps,
  // ...dispatchProps,
  // month: stateProps.calendar,
  // calendar: createCalendar(stateProps.calendar),
};

//reduxとpresentationを接続する
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CalendarBoard);
