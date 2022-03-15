import React, { Component } from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';

interface State {
  schedules: Array<string>;
  selected: Array<number>;
  handleSelectAllClick: React.ChangeEventHandler<HTMLInputElement>;
}
export default class TodoTableHead extends Component<State> {
  render() {
    const { handleSelectAllClick, schedules, selected } = this.props;
    return (
      <TableHead>
        <TableRow>
          <TableCell>
            <Checkbox
              checked={
                schedules.length > 0 && schedules.length === selected.length
              }
              onChange={handleSelectAllClick}
            />
          </TableCell>
          <TableCell>내용</TableCell>
          <TableCell align="center">날짜</TableCell>
        </TableRow>
      </TableHead>
    );
  }
}
