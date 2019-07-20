import {observable} from "mobx";
import {persist} from "mobx-persist";
import {RootStore} from "./RootStore";

type WorkoutDay = "a" | "b";

interface WorkoutHistory {
  [key: string]: Array<{
    exercise: string;
    value: number;
  }>;
}

interface CurrentExercise {
  weight: number;
  reps: number;
  numSets: number;
  exercise: string;
  sets: string[];
}

export class WorkoutStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @persist @observable currentSquat: number;
  @persist @observable currentBenchPress: number;
  @persist @observable currentOverheadPress: number;
  @persist @observable currentDeadlift: number;
  @persist @observable currentBarbellRow: number;

  @persist @observable lastWorkoutType: WorkoutDay;

  @persist("list") @observable currentExercises: CurrentExercise[] = [];

  @persist("list") @observable history: WorkoutHistory;
}
