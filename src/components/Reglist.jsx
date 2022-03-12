import React, { Component } from 'react';
import { withStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Button from '@mui/material/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Styles = {
  modal: {
    position: 'relative',
    height: '500px',
    width: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    border: 'solid 1px lightgrey',
    borderRadius: '10px',
  },
  cancel: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: '#1876D1',
    cursor: 'pointer',
  },
};
class Reglist extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
  }
  handleChange = newValue => {
    this.setState({ date: newValue });
  };

  render() {
    const { classes } = this.props;
    const { date } = this.state;
    const { handleClose } = this.props;
    return (
      <div className={classes.modal}>
        <HighlightOffIcon className={classes.cancel} onClick={handleClose} />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="날짜 선택"
            minDate={new Date()}
            inputFormat="MM/dd/yyyy"
            value={date}
            onChange={this.handleChange}
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
          />
        </Box>
        <Button variant="contained">등록하기</Button>
      </div>
    );
  }
}

export default withStyles(Styles)(Reglist);
