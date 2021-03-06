import React, { Component } from 'react';
import { withStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Button from '@mui/material/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Styles: any = {
  modalBackground: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0,0,0,0.6)',
  },
  modal: {
    position: 'absolute',
    height: '500px',
    width: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    border: 'solid 1px lightgrey',
    borderRadius: '10px',
    background: 'white',
  },
  cancel: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: '#1876D1',
    cursor: 'pointer',
  },
};

interface Props {
  classes?: any;
  handleClose: () => void;
  scheduleInput: string;
  dateInput: any;
  handleDateChange: React.ChangeEventHandler<HTMLInputElement>;
  handleScheduleChange: React.ChangeEventHandler<HTMLInputElement>;
  addSchedule: any;
}
class Reglist extends Component<Props> {
  render() {
    const { classes } = this.props;
    const {
      handleClose,
      scheduleInput,
      dateInput,
      handleDateChange,
      handleScheduleChange,
      addSchedule,
    } = this.props;
    return (
      <div className={classes.modalBackground}>
        <div className={classes.modal}>
          <HighlightOffIcon className={classes.cancel} onClick={handleClose} />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="날짜 선택"
              minDate={new Date()}
              inputFormat="MM/dd/yyyy"
              value={dateInput}
              onChange={newValue => handleDateChange(newValue)}
              renderInput={params => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="일정을 입력하세요"
              variant="standard"
              onChange={handleScheduleChange}
              value={scheduleInput}
            />
          </Box>
          <Button
            onClick={addSchedule}
            style={{ marginTop: '30px' }}
            variant="contained"
          >
            등록하기
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(Styles)(Reglist);
