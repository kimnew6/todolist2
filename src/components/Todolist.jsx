import React, { Component } from 'react';
import Regbutton from './Regbutton';
import Reglist from './Reglist';

import { withStyles } from '@mui/styles';

const Styles = {
  container: {
    height: '100vh',
    position: 'relative',
    top: '100px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
};

class Todolist extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      schedules: [],
      scheduleInput: '',
      dateInput: new Date(),
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleDateChange = newValue => {
    this.setState({ dateInput: newValue });
  };

  handleScheduleChange = e => {
    this.setState({ scheduleInput: e.target.value });
  };

  addSchedule = e => {
    e.preventDefault();
    this.setState({
      schedules: [
        ...this.state.schedules,
        this.state.scheduleInput + this.state.dateInput,
      ],
      scheduleInput: '',
    });
    this.handleClose();
  };

  render() {
    const { classes } = this.props;
    const { open, schedules, scheduleInput, dateInput } = this.state;
    return (
      <main className={classes.container}>
        {schedules.length > 0 ? (
          <ul>
            {schedules.map((scheduleInput, dateInput, idx) => {
              return (
                <li key={idx}>
                  <span>{dateInput}</span>
                  <span>{scheduleInput}</span>
                </li>
              );
            })}
          </ul>
        ) : (
          <>
            <div>Todolist</div>
            <div onClick={this.handleOpen}>
              <Regbutton />
            </div>
          </>
        )}
        {open && (
          <Reglist
            handleClose={this.handleClose}
            handleDateChange={this.handleDateChange}
            handleScheduleChange={this.handleScheduleChange}
            addSchedule={this.addSchedule}
            schedules={schedules}
            scheduleInput={scheduleInput}
            dateInput={dateInput}
          />
        )}
      </main>
    );
  }
}

export default withStyles(Styles)(Todolist);
