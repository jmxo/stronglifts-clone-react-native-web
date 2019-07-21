import * as React from "react";
import { CurrentExercise } from "../stores/WorkoutStore";
interface Props {
    header: string;
    currentExercises: CurrentExercise[];
    onPress: () => void;
}
export declare const HistoryCard: React.FC<Props>;
export {};
