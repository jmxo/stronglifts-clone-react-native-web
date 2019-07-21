"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var Card_1 = require("./Card");
var exerciseShortName = {
    Squat: "SQ",
    Deadlift: "DL",
    "Bench Press": "BP",
    "Overhead Press": "OHP",
    "Barbell Row": "ROW",
};
exports.HistoryCard = function (_a) {
    var header = _a.header, currentExercises = _a.currentExercises, onPress = _a.onPress;
    return (React.createElement(Card_1.Card, { onPress: onPress },
        React.createElement(react_native_1.Text, null, header),
        currentExercises.map(function (ce) { return (React.createElement(react_native_1.Text, { key: ce.exercise }, exerciseShortName[ce.exercise] + " " + ce.numSets + "x" + ce.reps + " " + ce.weight)); })));
};
