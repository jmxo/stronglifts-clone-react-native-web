/// <reference types="react" />
import { WorkoutStore } from "./WorkoutStore";
import { WorkoutTimerStore } from "./WorkoutTimerStore";
export declare class RootStore {
    workoutStore: WorkoutStore;
    workoutTimerStore: WorkoutTimerStore;
    constructor();
}
export declare const RootStoreContext: import("react").Context<RootStore>;
