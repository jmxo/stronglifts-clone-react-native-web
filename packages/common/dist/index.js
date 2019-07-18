"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Router_1 = require("./Router");
exports.App = mobx_react_lite_1.observer(function () {
    return (react_1.default.createElement(react_native_1.View, { "data-id": "container", style: styles.container },
        react_1.default.createElement(react_native_1.View, { style: styles.wrapper },
            react_1.default.createElement(Router_1.Router, null))));
});
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        width: 425,
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});
