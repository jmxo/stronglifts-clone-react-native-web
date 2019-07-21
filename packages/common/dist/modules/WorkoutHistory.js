"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_lite_1 = require("mobx-react-lite");
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var RootStore_1 = require("../stores/RootStore");
var Fab_1 = require("../ui/Fab");
var HistoryCard_1 = require("../ui/HistoryCard");
var styles = react_native_1.StyleSheet.create({
    row: {
        flexDirection: "row",
    },
    cardContainer: {
        flex: 1,
        padding: 10,
    },
    container: {
        flex: 1,
    },
});
exports.WorkoutHistory = mobx_react_lite_1.observer(function (_a) {
    var history = _a.history;
    var rootStore = React.useContext(RootStore_1.RootStoreContext);
    var rows = [];
    Object.entries(rootStore.workoutStore.history).forEach(function (_a, i) {
        var date = _a[0], exercises = _a[1];
        if (i % 3 === 0) {
            rows.push([
                {
                    date: date,
                    exercises: exercises,
                },
            ]);
        }
        else {
            rows[rows.length - 1].push({
                date: date,
                exercises: exercises,
            });
        }
    });
    return (React.createElement(react_native_1.View, { style: styles.container },
        React.createElement(react_native_1.FlatList, { renderItem: function (_a) {
                var item = _a.item;
                return (React.createElement(react_native_1.View, { style: styles.row },
                    item.map(function (_a) {
                        var date = _a.date, exercises = _a.exercises;
                        return (React.createElement(react_native_1.View, { key: date, style: styles.cardContainer },
                            React.createElement(HistoryCard_1.HistoryCard, { onPress: function () {
                                    var parts = date.split("-");
                                    history.push("/workout/" + parts[0] + "/" + parts[1] + "/" + parts[2]);
                                }, header: date, currentExercises: exercises })));
                    }),
                    item.length < 3 ? React.createElement(react_native_1.View, { style: styles.cardContainer }) : null,
                    item.length < 2 ? React.createElement(react_native_1.View, { style: styles.cardContainer }) : null));
            }, data: rows, keyExtractor: function (item) { return item.reduce(function (pv, cv) { return pv + " " + cv.date; }, ""); } }),
        React.createElement(Fab_1.Fab, { onPress: function () {
                if (!rootStore.workoutStore.hasCurrentWorkout) {
                    var _a = rootStore.workoutStore, currentBarbellRow = _a.currentBarbellRow, currentBenchPress = _a.currentBenchPress, currentDeadlift = _a.currentDeadlift, currentSquat = _a.currentSquat, currentOverheadPress = _a.currentOverheadPress;
                    var emptySets = ["", "", "", "", ""];
                    if (rootStore.workoutStore.lastWorkoutType === "b") {
                        rootStore.workoutStore.currentExercises.push({
                            exercise: "Squat",
                            numSets: 5,
                            reps: 5,
                            sets: emptySets.slice(),
                            weight: currentSquat,
                        }, {
                            exercise: "Bench Press",
                            numSets: 5,
                            reps: 5,
                            sets: emptySets.slice(),
                            weight: currentBenchPress,
                        }, {
                            exercise: "Deadlift",
                            numSets: 1,
                            reps: 5,
                            sets: ["", "x", "x", "x", "x"],
                            weight: currentDeadlift,
                        });
                        rootStore.workoutStore.currentSquat += 5;
                        rootStore.workoutStore.currentBenchPress += 5;
                        rootStore.workoutStore.currentDeadlift += 5;
                    }
                    else {
                        rootStore.workoutStore.currentExercises.push({
                            exercise: "Squat",
                            numSets: 5,
                            reps: 5,
                            sets: emptySets.slice(),
                            weight: currentSquat,
                        }, {
                            exercise: "Overhead Press",
                            numSets: 5,
                            reps: 5,
                            sets: emptySets.slice(),
                            weight: currentOverheadPress,
                        }, {
                            exercise: "Barbell Row",
                            numSets: 5,
                            reps: 5,
                            sets: emptySets.slice(),
                            weight: currentBarbellRow,
                        });
                        rootStore.workoutStore.currentSquat += 5;
                        rootStore.workoutStore.currentOverheadPress += 5;
                        rootStore.workoutStore.currentBarbellRow += 5;
                    }
                    rootStore.workoutStore.lastWorkoutType =
                        rootStore.workoutStore.lastWorkoutType === "a" ? "b" : "a";
                }
                history.push("/current-workout");
            } })));
});
