
import React from 'react';
import { BrowserRouter,Router, Route, Routes } from 'react-router-dom';
import TrackPage from './components/TrackPage';
import GetBurnPage from './components/GetBurnPage';
import Signup from './components/Signup';
import Signin from './components/Signin';
import GoalPage from './components/GoalPage';
import WorkoutTracker from './components/WorkoutTracker';
import WorkoutSchedule from './components/WorkoutSchedule';

const App = () => {
  return (
    <BrowserRouter>
      <div className=' bg-slate-300'>
        <Routes>
          <Route path="/" element={<TrackPage/>} />
          <Route path="/get-burn" element={<GetBurnPage/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/goal" element={<GoalPage/>} />
          <Route path="/workout-tracker" element={<WorkoutTracker/>} />
          <Route path="/workout-schedule" element={<WorkoutSchedule/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


