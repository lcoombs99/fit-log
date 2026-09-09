import { useState } from "react";

function WorkoutForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDuration, setEnteredDuration] = useState("");
  const [enteredType, setEnteredType] = useState("Cardio");


  const submitHandler = (event) => {
    // prevent browser reload upon submit (default behavior)
    event.preventDefault();

    // collecting entered data
    const workoutData = {
      title: enteredTitle,
      duration: enteredDuration,
      type: enteredType
    };

    // call parent: New Workout
    props.onSaveWorkoutData(workoutData);

    // reset input state variables.
    setEnteredTitle("");
    setEnteredDuration("");
    setEnteredType("Cardio");
  };

  return (
    <form className="card">
      <div className="form-control">
        <label>Title</label>
        <input
          type="text"
          onChange={(e) => setEnteredTitle(e.target.value)}
          value={enteredTitle}
        />
      </div>
      <div className="form-control">
        <label>Duration</label>
        <input
          type="number"
          min="1"
          step="1"
          onChange={(e) => setEnteredDuration(e.target.value)}
          value={enteredDuration}
        />
      </div>
      <div className="form-control">
        <label>Type</label>
        <select onChange={(e) => setEnteredType(e.target.value)} value={enteredType}>
          <option value="Cardio">Cardio</option>
          <option value="Strength">Strength</option>
          <option value="Flexibility">Flexibility</option>
        </select>
      </div>
      <button type="submit" onClick={submitHandler}>Submit</button>
    </form>
  );
}

export default WorkoutForm;