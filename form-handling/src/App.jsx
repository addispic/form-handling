import React from 'react'
import {Routes,Route} from 'react-router-dom'

// components
import Header from './components/Header'
import LeftSideNav from './components/LeftSideNav'
import RightSideNav from './components/RightSideNav'

// pages
import Home from './pages/Home'

const App = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden flex flex-col">
      <Header />

      {/* container */}
      <div className="flex gap-x-5 flex-grow">
        <LeftSideNav />
        <div className='flex-grow mt-5'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
        <RightSideNav />
      </div>
    </div>
  );
}

export default App
