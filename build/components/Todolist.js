"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Regbutton_1 = __importDefault(require("./Regbutton"));
const Reglist_1 = __importDefault(require("./Reglist"));
const TodoTableHead_1 = __importDefault(require("./TodoTableHead"));
const Add_1 = __importDefault(require("@mui/icons-material/Add"));
const Fab_1 = __importDefault(require("@mui/material/Fab"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const Delete_1 = __importDefault(require("@mui/icons-material/Delete"));
const date_fns_1 = require("date-fns");
const TableContainer_1 = __importDefault(require("@mui/material/TableContainer"));
const Table_1 = __importDefault(require("@mui/material/Table"));
const TableBody_1 = __importDefault(require("@mui/material/TableBody"));
const TableRow_1 = __importDefault(require("@mui/material/TableRow"));
const TableCell_1 = __importDefault(require("@mui/material/TableCell"));
const Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
const styles_1 = require("@mui/styles");
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
class Todolist extends react_1.Component {
    constructor() {
        super();
        this.handleOpen = () => {
            this.setState({ open: true });
        };
        this.handleClose = () => {
            this.setState({ open: false });
        };
        this.handleDateChange = newValue => {
            this.setState({ dateInput: (0, date_fns_1.format)(newValue, 'yyyy/MM/dd') });
        };
        this.handleScheduleChange = e => {
            this.setState({ scheduleInput: e.target.value });
        };
        this.addSchedule = e => {
            e.preventDefault();
            this.setState({
                schedules: [...this.state.schedules, this.state.scheduleInput],
                scheduleInput: '',
            });
            this.handleClose();
        };
        this.handleSelectAllClick = e => {
            if (e.target.checked) {
                this.setState({
                    selected: [...Array(this.state.schedules.length).keys()],
                });
                return;
            }
            this.setState({ selected: [] });
        };
        this.handleClick = (e, i) => {
            const { selected } = this.state;
            const selectedIndex = selected.indexOf(i);
            let newSelected = [];
            if (selectedIndex === -1) {
                newSelected = newSelected.concat(selected, i);
            }
            else if (selectedIndex === 0) {
                newSelected = newSelected.concat(selected.slice(1));
            }
            else if (selectedIndex === selected.length - 1) {
                newSelected = newSelected.concat(selected.slice(0, -1));
            }
            else if (selectedIndex > 0) {
                newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
            }
            this.setState({ selected: newSelected });
        };
        this.handleDelete = () => {
            const { schedules, selected } = this.state;
            let newSchedules = schedules.filter((e, i) => selected.indexOf(i) === -1);
            this.setState({ schedules: newSchedules });
            this.setState({ selected: [] });
        };
        this.state = {
            open: false,
            schedules: [],
            scheduleInput: '',
            dateInput: (0, date_fns_1.format)(new Date(), 'yyyy/MM/dd'),
            selected: [],
        };
    }
    render() {
        const { classes } = this.props;
        const { open, schedules, scheduleInput, dateInput, selected } = this.state;
        return (<main className={classes.container}>
        {schedules.length > 0 ? (<TableContainer_1.default>
            <Button_1.default onClick={this.handleDelete} variant="outlined" disabled={selected.length === 0} startIcon={<Delete_1.default />}>
              Delete
            </Button_1.default>
            <Table_1.default>
              <TodoTableHead_1.default handleSelectAllClick={this.handleSelectAllClick} schedules={schedules} selected={selected}/>
              <TableBody_1.default>
                {schedules.map((scheduleInput, idx) => (<TableRow_1.default key={idx}>
                    <TableCell_1.default>
                      <Checkbox_1.default checked={selected.indexOf(idx) !== -1} onChange={e => this.handleClick(e, idx)}/>
                    </TableCell_1.default>
                    <TableCell_1.default>{scheduleInput}</TableCell_1.default>
                    <TableCell_1.default align="center">{dateInput}</TableCell_1.default>
                  </TableRow_1.default>))}
              </TableBody_1.default>
            </Table_1.default>
          </TableContainer_1.default>) : (<>
            <div>Todolist</div>
            <div onClick={this.handleOpen}>
              <Regbutton_1.default />
            </div>
          </>)}
        {open && (<Reglist_1.default handleClose={this.handleClose} handleDateChange={this.handleDateChange} handleScheduleChange={this.handleScheduleChange} addSchedule={this.addSchedule} schedules={schedules} scheduleInput={scheduleInput} dateInput={dateInput} pressEnter={this.pressEnter}/>)}
        <Fab_1.default className={classes.add} onClick={this.handleOpen} color="primary" aria-label="add">
          <Add_1.default />
        </Fab_1.default>
      </main>);
    }
}
exports.default = (0, styles_1.withStyles)(Styles)(Todolist);
