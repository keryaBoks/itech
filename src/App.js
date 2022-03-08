import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Profile } from './Pages/Profile';
import { Alert } from './components/Alert';
import { AlertState } from './context/Alert/AlertState';
import { GitHubState } from './context/gitHub/gitHubState';

function App() {

  return (
    <GitHubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container ">
            <Alert alert={{ text: 'test' }} />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/profile/:name' element={<Profile />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </AlertState>
    </GitHubState>
  );
}

export default App;
