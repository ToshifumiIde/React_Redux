import AddScheduleDialog from "./presentation";
import { connect } from "react-redux";
import { 
  addScheduleCloseDialog,
  addScheduleSetValue,
} from "../../redux/addSchedule/actions";

//stateからscheduleだけ受け取っている
const mapStateToProps = state =>({ schedule:state.addSchedule });

//dispatch関数
const mapDispatchToProps = (dispatch) =>({
  //dialogを閉じる
  closeDialog:() => {
    dispatch(addScheduleCloseDialog());
  },
  //scheduleをセットする
  setSchedule:(value) => {
    dispatch(addScheduleSetValue(value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddScheduleDialog);