
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactLogo from './react.svg';

import { getApps } from './utils/helper'

function App() {
  const CurrentApp= getApps();

  return (
    <>
      <div className="logo-container">
        <img src={ReactLogo} alt="React Logo" width={100} />
      </div>
     <Router>
      <CurrentApp />
     </Router>
    </>
  )
}

export default App
