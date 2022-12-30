
import './App.css';
import Navbar from './Navbar';
import Explore from './Explore';
import About from './About';
import Services from './Services';
import { Routes,Route } from 'react-router-dom';
import Dashboard from './Dashboard';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
