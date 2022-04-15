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
const TableHead_1 = __importDefault(require("@mui/material/TableHead"));
const TableRow_1 = __importDefault(require("@mui/material/TableRow"));
const TableCell_1 = __importDefault(require("@mui/material/TableCell"));
const Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
class TodoTableHead extends react_1.Component {
    render() {
        const { handleSelectAllClick, schedules, selected } = this.props;
        return (<TableHead_1.default>
        <TableRow_1.default>
          <TableCell_1.default>
            <Checkbox_1.default checked={schedules.length > 0 && schedules.length === selected.length} onChange={handleSelectAllClick}/>
          </TableCell_1.default>
          <TableCell_1.default>내용</TableCell_1.default>
          <TableCell_1.default align="center">날짜</TableCell_1.default>
        </TableRow_1.default>
      </TableHead_1.default>);
    }
}
exports.default = TodoTableHead;
