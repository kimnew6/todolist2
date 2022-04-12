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
const styles_1 = require("@mui/styles");
const Box_1 = __importDefault(require("@mui/material/Box"));
const TextField_1 = __importDefault(require("@mui/material/TextField"));
const AdapterDateFns_1 = __importDefault(require("@mui/lab/AdapterDateFns"));
const LocalizationProvider_1 = __importDefault(require("@mui/lab/LocalizationProvider"));
const DesktopDatePicker_1 = __importDefault(require("@mui/lab/DesktopDatePicker"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const HighlightOff_1 = __importDefault(require("@mui/icons-material/HighlightOff"));
const Styles = {
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
class Reglist extends react_1.Component {
    constructor() {
        super();
        // this.props = { schedules: [], scheduleInput: '', dateInput: new Date() };
    }
    // handleDateChange = newValue => {
    //   this.setState({ dateInput: newValue });
    // };
    // handleScheduleChange = e => {
    //   this.setState({ scheduleInput: e.target.value });
    // };
    // addSchedule = e => {
    //   e.preventDefault();
    //   this.setState({
    //     schedules: [...this.props.scheduleInput, this.props.scheduleInput],
    //     scheduleInput: '',
    //   });
    // };
    render() {
        const { classes } = this.props;
        const { handleClose, scheduleInput, dateInput, handleDateChange, handleScheduleChange, addSchedule, } = this.props;
        return (<div className={classes.modalBackground}>
        <div className={classes.modal}>
          <HighlightOff_1.default className={classes.cancel} onClick={handleClose}/>
          <LocalizationProvider_1.default dateAdapter={AdapterDateFns_1.default}>
            <DesktopDatePicker_1.default label="날짜 선택" minDate={new Date()} inputFormat="MM/dd/yyyy" value={dateInput} onChange={newValue => handleDateChange(newValue)} renderInput={params => <TextField_1.default {...params}/>}/>
          </LocalizationProvider_1.default>
          <Box_1.default component="form" sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }} noValidate autoComplete="off">
            <TextField_1.default id="standard-basic" label="일정을 입력하세요" variant="standard" onChange={handleScheduleChange} value={scheduleInput}/>
          </Box_1.default>
          <Button_1.default onClick={addSchedule} style={{ marginTop: '30px' }} variant="contained">
            등록하기
          </Button_1.default>
        </div>
      </div>);
    }
}
exports.default = (0, styles_1.withStyles)(Styles)(Reglist);
