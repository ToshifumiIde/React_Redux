import HeaderNavigation from "./presentation";
import { getNextMonth , getPreviousMonth } from "../../logic/calendar";
import { calendarSetMonth } from "../../redux/calendar/actions";

import { connect } from "react-redux";

const mapStateToProps = state =>({calendar:state.calendar});

const mapDispatchProps = dispatch => ({
  setMonth:month => {
    dispatch(calendarSetMonth(month));
  }
});

const mergeProps = (stateProps , dispatchProps) => ({
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
  mapDispatchProps,
  mergeProps
)(HeaderNavigation);