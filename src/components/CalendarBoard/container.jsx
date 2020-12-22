//「reduxからのstate」と「reduxにdispatchする関数」をpropsとして提供するコンポーネント
import { connect } from "react-redux";
import { createCalendar } from "../../logic/calendar";
import CalendarBoard from "./presentation";

//storeから必要な状態を選択し、propsの形に再成型する関数
const mapStateToProps = state => (
  {calendar:state.calendar}
);

//
const mergeProps = (stateProps,dispatchProps) => ({
  month:stateProps.calendar,
  calendar:createCalendar(stateProps.calendar),
})

//
export default connect(mapStateToProps ,null ,mergeProps)(CalendarBoard);