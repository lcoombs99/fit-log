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
  const [workouts, setWorkouts] = useState(INITIAL_WORKOUTS);

  const addWorkoutHandler = (workout) => {
    // new workout PREPENDS existing --
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
