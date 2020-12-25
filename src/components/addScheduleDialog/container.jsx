import AddScheduleDialog from "./presentation";
import { connect } from "react-redux";
import {addScheduleCloseDialog} from "../../redux/addSchedule/actions";

//stateからscheduleだけ受け取っている
const mapStateToProps = state =>({ schedule:state.addSchedule });

//dialogを閉じるためのdispatch関数
const mapDispatchToProps = (dispatch) =>({
  closeDialog:() => {
    dispatch(addScheduleCloseDialog());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddScheduleDialog);