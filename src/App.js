import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage';
import { Routes, Route } from 'react-router-dom';
import ChooseFile from './Components/ChooseFile';

function App() {
  return (
    <div>
     <Routes>
        <Route path='/' element={<LandingPage/> }/>
        <Route path='/Add-Music'  element={<ChooseFile/>}/>
     </Routes>
    </div>
  );
}

export default App;
