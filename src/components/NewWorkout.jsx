import WorkoutForm from "./WorkoutForm";

// Wrapper for WorkoutForm
function NewWorkout(props) {
  // process workout data, add id, add to props
  const saveWorkoutDataHandler = (enteredWorkoutData) => {
    const workoutData = {
      ...enteredWorkoutData,
      // add unique id
      id: Math.random().toString()
    };
    props.onAddWorkout(workoutData);
  };

  return (
    <div>
      <WorkoutForm onSaveWorkoutData={saveWorkoutDataHandler} />
    </div>
  );
}

export default NewWorkout;