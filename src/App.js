import React from 'react';
import Easyform from './Components/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from './Components/Nav';
import Home from './Components/Home';
import Approval from './Components/ApprovalPage';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/newad' element={<Easyform></Easyform>} />
        <Route path='/candidate' element={<Approval></Approval>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
