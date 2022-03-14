import React, { Component } from 'react';
import Regbutton from './Regbutton';
import Reglist from './Reglist';
import TodoTableHead from './TodoTableHead';

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import { format } from 'date-fns';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';

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
  add: { position: 'fixed!important', right: 20, bottom: 20 },
};

class Todolist extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      schedules: [],
      scheduleInput: '',
      dateInput: format(new Date(), 'yyyy/MM/dd'),

      selected: [],
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleDateChange = newValue => {
    this.setState({ dateInput: format(newValue, 'yyyy/MM/dd') });
  };

  handleScheduleChange = e => {
    this.setState({ scheduleInput: e.target.value });
  };

  addSchedule = e => {
    e.preventDefault();
    this.setState({
      schedules: [...this.state.schedules, this.state.scheduleInput],
      scheduleInput: '',
    });
    this.handleClose();
  };

  handleSelectAllClick = e => {
    if (e.target.checked) {
      this.setState({
        selected: [...Array(this.state.schedules.length).keys()],
      });
      return;
    }
    this.setState({ selected: [] });
  };
  handleClick = (e, i) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(i);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, i);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    this.setState({ selected: newSelected });
  };

  handleDelete = () => {
    const { schedules, selected } = this.state;
    let newSchedules = schedules.filter((e, i) => selected.indexOf(i) === -1);
    this.setState({ schedules: newSchedules });
    this.setState({ selected: [] });
  };

  render() {
    const { classes } = this.props;
    const { open, schedules, scheduleInput, dateInput, selected } = this.state;
    return (
      <main className={classes.container}>
        {schedules.length > 0 ? (
          <TableContainer>
            <Button
              onClick={this.handleDelete}
              variant="outlined"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
            <Table>
              <TodoTableHead
                handleSelectAllClick={this.handleSelectAllClick}
                schedules={schedules}
                selected={selected}
              />
              <TableBody>
                {schedules.map((scheduleInput, idx) => (
                  <TableRow key={idx}>
                    <TableCell>
                      <Checkbox
                        checked={selected.indexOf(idx) !== -1}
                        onChange={e => this.handleClick(e, idx)}
                      />
                    </TableCell>
                    <TableCell>{scheduleInput}</TableCell>
                    <TableCell align="center">{dateInput}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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
            pressEnter={this.pressEnter}
          />
        )}
        <Fab
          className={classes.add}
          onClick={this.handleOpen}
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </main>
    );
  }
}

export default withStyles(Styles)(Todolist);
