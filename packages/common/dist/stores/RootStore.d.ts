/// <reference types="react" />
import { RouterStore } from "./RouterStore";
import { WorkoutStore } from "./WorkoutStore";
import { WorkoutTimerStore } from "./WorkoutTimerStore";
export declare class RootStore {
    routerStore: RouterStore;
    workoutStore: WorkoutStore;
    workoutTimerStore: WorkoutTimerStore;
}
export declare const RootStoreContext: import("react").Context<RootStore>;
