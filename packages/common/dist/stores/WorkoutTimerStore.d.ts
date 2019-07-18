import dayjs from "dayjs";
import { RootStore } from "./RootStore";
export declare class WorkoutTimerStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore);
    startTime: dayjs.Dayjs;
    isRunning: boolean;
    seconds: number;
    measure(): void;
    startTimer(): void;
    stopTimer(): void;
    readonly display: string;
    readonly percent: string;
}
