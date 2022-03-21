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

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  RootState,
  selectOpenModal,
  selectSchedules,
  selectDateInput,
  openModal,
  closeModal,
  addToDo,
  addDate,
  deleteToDo,
} from '../modules';

export interface ReduxProps {
  openRedux: boolean;
  schedulesRedux: Array<string>;
}

interface State {
  scheduleInput: string;
  dateInput: string;
  selected: Array<number>;
}

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type Props = ReduxProps & StateProps & DispatchProps;
class TodolistComponent extends Component<Props, State> {
  state: State = {
    scheduleInput: '',
    dateInput: format(new Date(), 'yyyy/MM/dd'),
    selected: [],
  };

  handleOpen = () => {
    const { openModal } = this.props;
    openModal();
  };

  handleClose = () => {
    const { closeModal } = this.props;
    closeModal();
  };

  handleDateChange = (newValue: any) => {
    this.setState({ dateInput: format(newValue, 'yyyy/MM/dd') });
  };

  handleScheduleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ scheduleInput: e.target.value });
  };

  addSchedule = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { scheduleInput, dateInput } = this.state;
    const { addToDo, addDate } = this.props;
    e.preventDefault();
    addToDo(scheduleInput);
    addDate(dateInput);
    this.setState({ scheduleInput: '' });
    this.handleClose();
  };

  handleSelectAllClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { schedulesRedux } = this.props;
    if (e.target.checked) {
      this.setState({
        selected: [...Array(schedulesRedux.length).keys()],
      });
      return;
    }
    this.setState({ selected: [] });
  };
  handleClick = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(i);
    let newSelected: Array<number> = [];

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
    const { selected } = this.state;
    const { schedulesRedux, deleteToDo } = this.props;
    let newSchedules = schedulesRedux.filter(
      (e, i) => selected.indexOf(i) === -1
    );
    deleteToDo(newSchedules);
    this.setState({ selected: [] });
  };
  render() {
    const { scheduleInput, dateInput, selected } = this.state;
    const { openRedux, schedulesRedux, dateInputRedux } = this.props;
    return (
      <main
        style={{
          height: '100vh',
          position: 'relative',
          top: '100px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {schedulesRedux.length > 0 ? (
          <TableContainer>
            <Button
              onClick={this.handleDelete}
              variant="outlined"
              disabled={selected.length === 0}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
            <Table>
              <TodoTableHead
                handleSelectAllClick={this.handleSelectAllClick}
                schedules={schedulesRedux}
                selected={selected}
              />
              <TableBody>
                {schedulesRedux.map((schedule, idx) => (
                  <TableRow key={idx}>
                    <TableCell>
                      <Checkbox
                        checked={selected.indexOf(idx) !== -1}
                        onChange={e => this.handleClick(e, idx)}
                      />
                    </TableCell>
                    <TableCell>{schedule}</TableCell>
                    <TableCell align="center">{dateInputRedux}</TableCell>
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
        {openRedux && (
          <Reglist
            handleClose={this.handleClose}
            handleDateChange={this.handleDateChange}
            handleScheduleChange={this.handleScheduleChange}
            addSchedule={this.addSchedule}
            scheduleInput={scheduleInput}
            dateInput={dateInput}
          />
        )}
        <Fab
          style={{ position: 'fixed', right: 20, bottom: 20 }}
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

const mapStateToProps = (state: RootState) => {
  return {
    openRedux: selectOpenModal(state),
    schedulesRedux: selectSchedules(state),
    dateInputRedux: selectDateInput(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
    addToDo: (text: string) => dispatch(addToDo(text)),
    addDate: (date: any) => dispatch(addDate(date)),
    deleteToDo: (newSchedules: any) => dispatch(deleteToDo(newSchedules)),
  };
};

export const Todolist = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodolistComponent);
