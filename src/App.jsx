import "./App.css";
import { useState } from "react";
import NewWorkout from "./components/NewWorkout.jsx";
import WorkoutList from "./components/WorkoutList.jsx";

// DUMMY DATA
const INITIAL_WORKOUTS = [
  {id: "w1", title: "Morning Run", duration: 30, type: "Cardio"},
  {id: "w2", title: "Weight Training", duration: 45, type: "Strength"},
];

function App() {
  // STATE HOOKS
  const [workouts, setWorkouts] = useState(INITIAL_WORKOUTS);

  // new workout PREPENDS existing -- [workout, ...prevWorkouts]
  const addWorkoutHandler = (workout) => {
    // execute a functional update using setWorkouts hoook
    setWorkouts((prevWorkouts) => [workout, ...prevWorkouts]);
  };

  return (
    <div>
      <h1>FitLog - Fitness Activity Tracker</h1>
      <NewWorkout onAddWorkout={addWorkoutHandler}/>
      {/*  DISPLAY LIST: Workout List  */}
      <WorkoutList items={workouts}/>
    </div>
  );
}

export default App;
