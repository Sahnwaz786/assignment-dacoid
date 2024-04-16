import React from 'react'
import TrackPage from './components/TrackPage'
import GetBurnPage from './components/GetBurnPage'
import Signup from './components/Signup'
import Signin from './components/Signin'

const App = () => {
  return (
    <div className='bg-slate-300' >
      <TrackPage/>
      <GetBurnPage/>
      <Signup/>
      <Signin/>
    </div>
  )
}

export default App