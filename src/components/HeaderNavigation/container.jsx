import HeaderNavigation from "./presentation";
import { connect } from "react-redux";
import { getNextMonth, getPreviousMonth } from "../../logic/calendar";
import { calendarSetMonth } from "../../redux/calendar/actions";


const mapStateToProps = state =>({calendar:state.calendar});

const mapDispatchToProps = dispatch => ({
  setMonth: month => {
    dispatch(calendarSetMonth(month));
  }
});




const mergeProps = (stateProps , dispatchProps) => ({
  // month:getMonth(stateProps.calendar),
  setNextMonth:() => {
    const nextMonth = getNextMonth(stateProps.calendar);
    dispatchProps.setMonth(nextMonth);
  },
  setPreviousMonth:() => {
    const previousMonth = getPreviousMonth(stateProps.calendar);
    dispatchProps.setMonth(previousMonth);
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(HeaderNavigation);