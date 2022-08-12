import './App.css';
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom'
import Contact from './components/Contact';
function App() {
  return (
    <div className="App darkmood">
     <div className="routes">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
     </div>
    </div>
  );
}

export default App;
