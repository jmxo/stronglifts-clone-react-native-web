import { RootStore } from "./RootStore";
declare type WorkoutDay = "a" | "b";
export interface CurrentExercise {
    weight: number;
    reps: number;
    numSets: number;
    exercise: string;
    sets: string[];
}
interface WorkoutHistory {
    [key: string]: CurrentExercise[];
}
export declare class WorkoutStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore);
    currentSquat: number;
    currentBenchPress: number;
    currentOverheadPress: number;
    currentDeadlift: number;
    currentBarbellRow: number;
    lastWorkoutType: WorkoutDay;
    currentExercises: CurrentExercise[];
    history: WorkoutHistory;
}
export {};
