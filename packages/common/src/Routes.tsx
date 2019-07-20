import React from "react";
import {CurrentWorkout} from "./modules/CurrentWorkout";
import {WorkoutHistory} from "./modules/WorkoutHistory";
import {Route, Router, Switch} from "./Router/index";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={props => <WorkoutHistory {...props} />} />
        <Route path="/current-workout" render={() => <CurrentWorkout />} />
      </Switch>
    </Router>
  );
};
