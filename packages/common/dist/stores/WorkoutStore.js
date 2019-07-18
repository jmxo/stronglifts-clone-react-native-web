"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var WorkoutStore = /** @class */ (function () {
    function WorkoutStore(rootStore) {
        this.currentExercises = [];
        this.rootStore = rootStore;
    }
    __decorate([
        mobx_1.observable
    ], WorkoutStore.prototype, "currentSquat", void 0);
    __decorate([
        mobx_1.observable
    ], WorkoutStore.prototype, "currentBenchPress", void 0);
    __decorate([
        mobx_1.observable
    ], WorkoutStore.prototype, "currentOverheadPress", void 0);
    __decorate([
        mobx_1.observable
    ], WorkoutStore.prototype, "currentDeadlift", void 0);
    __decorate([
        mobx_1.observable
    ], WorkoutStore.prototype, "currentBarbellRow", void 0);
    __decorate([
        mobx_1.observable
    ], WorkoutStore.prototype, "lastWorkoutType", void 0);
    __decorate([
        mobx_1.observable
    ], WorkoutStore.prototype, "currentExercises", void 0);
    __decorate([
        mobx_1.observable
    ], WorkoutStore.prototype, "history", void 0);
    return WorkoutStore;
}());
exports.WorkoutStore = WorkoutStore;
