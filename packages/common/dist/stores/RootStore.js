"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var RouterStore_1 = require("./RouterStore");
var WorkoutStore_1 = require("./WorkoutStore");
var WorkoutTimerStore_1 = require("./WorkoutTimerStore");
var RootStore = /** @class */ (function () {
    function RootStore() {
        this.routerStore = new RouterStore_1.RouterStore(this);
        this.workoutStore = new WorkoutStore_1.WorkoutStore(this);
        this.workoutTimerStore = new WorkoutTimerStore_1.WorkoutTimerStore(this);
    }
    return RootStore;
}());
exports.RootStore = RootStore;
exports.RootStoreContext = react_1.createContext(new RootStore());
