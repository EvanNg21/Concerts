import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Contact from './contact';
import Signup from './signup';
import Login from './login';
function App() {
  
  return (
    <BrowserRouter>

    <nav className='navbar'>
      <div className='navbar-container'>
        <a href="/" className='navbar-logo'>
          concerts 
        </a>
        <div className='menu-icon'>

        </div>
        <u1>
          <li className='nav-item'>
            <a href="/" className="nav-links">
              Home 
            </a>
          </li>
          <li className='nav-item'>
            <a href='/login' className='nav-links'>
              Login 
            </a>
          </li>
          <li className='nav-item'>
            <a href="/signup" className='nav-links'>
              Signup
            </a>
          </li>
          <li className='nav-item'>
            <a href="/contact" className='nav-links'>
              Contact
            </a>
          </li>
        </u1>
      </div>
    </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
  );
}




function Home() {
  return (

      <div className="home-container">
      <h1>
        Welcome to concerts!
      </h1>
  
      </div>

  );
}



export default App;
