function WorkoutSummary(props) {
  // props: filtered workouts
  const workoutText = props.filteredWorkouts.length === 1 ? 'workout' : 'workouts';

  const workoutMinutes = props.filteredWorkouts.reduce((totalTime, workout) => {
    // duration is a string. convert to number to perform addition rather than string concat.
    return totalTime + Number(workout.duration);
  }, 0);

  return (
    <div className="workoutSummary">
      <div>Showing {props.filteredWorkouts.length} {workoutText} ({(workoutMinutes)} total minutes)</div>
    </div>
  );
}

export default WorkoutSummary;