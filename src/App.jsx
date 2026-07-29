import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/Homepage/Homepage';
import Aboutpage from './Pages/Aboutpage/Aboutpage';
import Servicepage from './Pages/Servicepage/Servicepage';
import Contactpage from './Pages/Contactpage/Contactpage';


function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/expertise" element={<Servicepage />} />
      <Route path="/contact" element={<Contactpage />} />
    </Routes>
  )
}

export default App;
