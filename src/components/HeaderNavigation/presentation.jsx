import React from "react";
import {
  IconButton,
  Toolbar,
  Typography,
  withStyles,
} from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";
import styles from "./style.module.css";
import { DatePicker } from "@material-ui/pickers";

const StyledToolbar = withStyles({
  root:{padding:"0"}
})(Toolbar);

const StyledTypography = withStyles({
  root:{margin:"0 30px 0 10px"}
})(Typography);

const StyledDatePicker = withStyles({
  root:{marginLeft:30}
})(DatePicker);

const HeaderNavigation = ({ setNextMonth , setPreviousMonth,setMonth ,month }) => {
  // const [selectedDate , handleDateChange] = useState(new Date());
  return(
    <StyledToolbar>
      <IconButton>
        <DehazeIcon />
      </IconButton>
      <img 
        src="/images/calendar_icon.png"
        alt="カレンダーのアイコンです"
        className={styles.calendarIcon}
        />
        <StyledTypography
          color="textSecondary"
          variant="h6"
          component="h1"
        >
          カレンダー
        </StyledTypography>
        <IconButton 
          size="small"
          onClick={setPreviousMonth}
        >
          <ArrowBackIos />
        </IconButton>
        <IconButton 
          size="small"
          onClick={setNextMonth}
        >
          <ArrowForwardIos />
        </IconButton>
        <StyledDatePicker 
          value={month}
          // onChange={()=>{openAddScheduleDialog()}}
          onChange={setMonth}
          valiant="inline"
          format="YYYY年M月"
          animateYearScrolling
          disableToolbar
        />
    </StyledToolbar>
  );
};


export default HeaderNavigation;