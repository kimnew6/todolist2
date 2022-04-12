import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

import Regbutton from './Regbutton';
import Reglist from './Reglist';
import TodoTableHead from './TodoTableHead';

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';
import { format } from 'date-fns';

import { connect, MapDispatchToProps } from 'react-redux';
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
  selectLoginSucceed,
  logoutRequest,
} from '../modules';

interface State {
  scheduleInput: string;
  dateInput: string;
  selected: Array<number>;
}
export interface ReduxProps {
  openRedux: boolean;
  schedulesRedux: Array<any>;
  loginSuccess: boolean;
}
interface DispatchProps {
  addToDo: typeof addToDo;
  deleteToDo: typeof deleteToDo;
  openModal: typeof openModal;
  closeModal: typeof closeModal;
  logoutRequest: typeof logoutRequest;
}
type Props = ReduxProps & DispatchProps;
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

  handleLogout = () => {
    const { logoutRequest } = this.props;
    logoutRequest();
  };

  handleDateChange = (newValue: any) => {
    this.setState({ dateInput: format(newValue, 'yyyy/MM/dd') });
  };

  handleScheduleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ scheduleInput: e.target.value });
  };

  addSchedule = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { scheduleInput, dateInput } = this.state;
    const { addToDo } = this.props;

    const payload = { text: scheduleInput, date: dateInput };
    e.preventDefault();
    addToDo(payload);
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
    const { openRedux, schedulesRedux, loginSuccess } = this.props;
    if (loginSuccess === false) {
      return <Navigate to="/" replace={true} />;
    }
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
                    <TableCell>{schedule.text}</TableCell>
                    <TableCell align="center">{schedule.date}</TableCell>
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
        <Button
          onClick={this.handleLogout}
          style={{ position: 'fixed', top: 70, right: 10 }}
          variant="contained"
        >
          로그아웃
        </Button>
      </main>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    openRedux: selectOpenModal(state),
    schedulesRedux: selectSchedules(state),
    dateInputRedux: selectDateInput(state),
    loginSuccess: selectLoginSucceed(state),
  };
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal()),
  addToDo: payload => dispatch(addToDo(payload)),
  addDate: (date: any) => dispatch(addDate(date)),
  deleteToDo: newSchedules => dispatch(deleteToDo(newSchedules)),
  logoutRequest: () => dispatch(logoutRequest()),
});

export const Todolist = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodolistComponent);
