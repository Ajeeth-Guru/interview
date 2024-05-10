import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer';
import Sign from './Components/Sign';
import{Routes,Route} from 'react-router-dom'
import Nav from './Components/Nav';
import Login from './Components/Login';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/about' element={<About/>}/> 
        <Route path='/login' element={<Login/>}/> 
        <Route path='/sign' element={<Sign/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
