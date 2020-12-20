//「reduxからのstate」と「reduxにdispatchする関数」をpropsとして提供するコンポーネント

import { connect } from "react-redux";
import { createCalendar } from "../../logic/calendar";
import CalendarBoard from "./presentation";

//
const mapStateToProps = state => (
  {calendar:state.calendar}
);

//
const mergeProps = stateProps => (
  {calendar:createCalendar(stateProps.calendar)}
)

//
export default connect(mapStateToProps ,null ,mergeProps)(CalendarBoard);