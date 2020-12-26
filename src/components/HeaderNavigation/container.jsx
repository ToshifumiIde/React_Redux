import HeaderNavigation from "./presentation";
import { connect } from "react-redux";
import { 
  getNextMonth,
  getPreviousMonth,
  getMonth,
  formatMonth,
} from "../../logic/calendar";
import { calendarSetMonth } from "../../redux/calendar/actions";
// import { 
//   addScheduleOpenDialog,
//   addScheduleSetValue,
// } from "../../redux/addSchedule/actions";

//storeから必要な情報を選択し、propsの形に再形成する関数
const mapStateToProps = state => (
  {calendar:state.calendar}
);

const mapDispatchToProps = dispatch => ({
  setMonth: month => {
    dispatch(calendarSetMonth(month));
  },
  // openAddScheduleDialog:(d) => {
  //   dispatch(addScheduleOpenDialog());
  //   dispatch(addScheduleSetValue({date:d}));
  // },
});

const mergeProps = (stateProps , dispatchProps) => ({
  //reduxのstate => dayjs
  month:getMonth(stateProps.calendar),
  setNextMonth:() => {
    const nextMonth = getNextMonth(stateProps.calendar);
    dispatchProps.setMonth(nextMonth);
  },
  setPreviousMonth:() => {
    const previousMonth = getPreviousMonth(stateProps.calendar);
    dispatchProps.setMonth(previousMonth);
  },
  setMonth:dayObj => {
    //dayjs => reduxのstate
    const month = formatMonth(dayObj);
    dispatchProps.setMonth(month);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(HeaderNavigation);