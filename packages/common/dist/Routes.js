"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CurrentWorkout_1 = require("./modules/CurrentWorkout");
var WorkoutHistory_1 = require("./modules/WorkoutHistory");
var index_1 = require("./Router/index");
exports.Routes = function () {
    return (react_1.default.createElement(index_1.Router, null,
        react_1.default.createElement(index_1.Switch, null,
            react_1.default.createElement(index_1.Route, { exact: true, path: "/", render: function (props) { return react_1.default.createElement(WorkoutHistory_1.WorkoutHistory, __assign({}, props)); } }),
            react_1.default.createElement(index_1.Route, { path: "/current-workout", render: function () { return react_1.default.createElement(CurrentWorkout_1.CurrentWorkout, null); } }))));
};
