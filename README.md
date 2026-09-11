# Fitlog: Fitness Activity Tracker App
## Activity 2: FitLog Continued with Workout Counter
Overview: For this activity, you will refactor the single-file FitLog application from Activity 1 into modular, single-responsibility components (such as NewWorkout, WorkoutForm, WorkoutList, WorkoutItem, and WorkoutFilter) by completing Chapter 3. You will practice lifting state up and passing callback functions down through props for child-to-parent communication. To build upon these skills, you will extend the application by adding a WorkoutSummary component that calculates and displays derived state without adding redundant state variables.

## Activity Steps
### Step 1: Refactor FitLog and Add Filter Functionality
- [x] Work through the remaining sections of Chapter 3 to break down your monolithic App.jsx file into modular components.
- [x] Implement state lifting so form submission data flows from WorkoutForm up to App.jsx.
- [x] Add the WorkoutFilter component, managing the selected filter year in state and deriving a filtered workouts array prior to rendering.

### Step 2: Create the WorkoutSummary Component
- [x] Create a new file named WorkoutSummary.jsx inside your components directory.
- [x] Build a WorkoutSummary component that receives the current array of filtered (or total) workouts as a prop.
- [x] Inside the component, compute derived values using standard JavaScript (i.e., items.length for total count and .reduce() or a loop to sum total workout minutes). 
  - [x] Do not create extra state variables for these counts.
- [x] Return JSX that presents a clean badge or message bar displaying the current count and total minutes (i.e., "Showing 3 workouts (120 total minutes)").

### Step 3: Integrate and Verify Summary Component
- [x] Import WorkoutSummary into WorkoutList.jsx or App.jsx and place it directly above the mapped list of workouts.
- [x] Pass the appropriate workout array as a prop into WorkoutSummary.
- [x] Verify in your browser that adding a new workout or changing the year filter automatically updates the counts displayed in your summary banner.

### Step 4: Push to GitHub & Submit Your Link
- [x] Commit your code updates and push your completed project to your GitHub repository.
- [ ] Copy your public repository URL (i.e., https://github.com/your-username/fit-log).
- [ ] Navigate to the class LMS assignment portal for Activity 2, paste your URL, and submit.


# Submission Checklist
Before submitting, make sure:

- [x] The application is fully decomposed into child components with state lifted to App.jsx.
- [x] The filter dynamically controls which workout entries are rendered.
- [x] Your new WorkoutSummary component displays dynamic totals based on derived values rather than duplicate state.
- [ ] Your GitHub repository is public and accessible.