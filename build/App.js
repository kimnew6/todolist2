"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Appbar_1 = __importDefault(require("./components/Appbar"));
const Todolist_1 = __importDefault(require("./components/Todolist"));
class App extends react_1.default.Component {
    render() {
        return (<div>
        <Appbar_1.default />
        <Todolist_1.default />
      </div>);
    }
}
exports.default = App;
