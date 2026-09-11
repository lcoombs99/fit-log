import WorkoutForm from './WorkoutForm';

// Wrapper for WorkoutForm
function NewWorkout(props) {
  // props: onAddWorkout
  const saveWorkoutDataHandler = (enteredWorkoutData) => {
    const workoutData = {
      ...enteredWorkoutData,
      id: Math.random().toString() // add unique id to workout
    };
    // callback function to pass data back up the chain
    props.onAddWorkout(workoutData);
  };

  return (
    <div>
      <WorkoutForm onSaveWorkoutData={saveWorkoutDataHandler}/>
    </div>
  );
}

export default NewWorkout;