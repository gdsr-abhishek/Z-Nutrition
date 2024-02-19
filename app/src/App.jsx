import { Suspense, useState} from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
function App() {
 return (
<>

     <BrowserRouter>
      <Routes>
       <Route path="/" element={<Suspense fallback="....loading"> <LandingPage /> </Suspense>} />    
      </Routes>
     </BrowserRouter>

</>
 );
}

export default App
