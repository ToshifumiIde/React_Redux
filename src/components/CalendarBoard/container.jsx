//「reduxからのstate」と「reduxにdispatchする関数」をpropsとして提供するコンポーネント
import { connect } from "react-redux";
import { createCalendar } from "../../logic/calendar";
import CalendarBoard from "./presentation";
import { 
  addScheduleOpenDialog,
  addScheduleSetValue,
} from "../../redux/addSchedule/actions";

//storeから必要な状態を選択し、propsの形に再成型する関数
const mapStateToProps = state => (
  {calendar:state.calendar}
);

//dialogを開くためのdispatch関数
const mapDispatchToProps = dispatch =>({
  openAddScheduleDialog:(d) => {
    dispatch(addScheduleOpenDialog());
    dispatch(addScheduleSetValue({date:d}));
  },
});

//
const mergeProps = (stateProps,dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  month:stateProps.calendar,
  calendar:createCalendar(stateProps.calendar),
});

//reduxとpresentationを接続する
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CalendarBoard);