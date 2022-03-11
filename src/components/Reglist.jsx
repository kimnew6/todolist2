import React, { Component } from 'react';
import { withStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Button from '@mui/material/Button';

const Styles = {
  modal: {
    height: '500px',
    width: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    border: 'solid 1px lightgrey',
    borderRadius: '10px',
  },
};
class Reglist extends Component {
  constructor() {
    super();
    this.state = {
      value: new Date(),
    };
  }
  handleChange = newValue => {
    this.setState(newValue);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.modal}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/dd/yyyy"
            value={value}
            onChange={() => this.handleChange}
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
