function WorkoutSummary(props) {
  // props: filtered workouts
  // compute derived values reduce, items.count
  const workoutText = props.filteredWorkouts.length === 1 ? "workout" : "workouts";
  return (
    <div className="workoutSummary">
      <div>Showing {props.filteredWorkouts.length} {workoutText} ({"120 total minutes"})</div>
    </div>
  );
}

export default WorkoutSummary;