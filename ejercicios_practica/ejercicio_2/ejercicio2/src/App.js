import './App.css';
import { BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'

function Nav() {
  return (
  <header>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">Acerca de</NavLink>
          <NavLink to="/contact">Contacto</NavLink>
        </li>
      </ul>
    </nav>
  </header>
  )
}


function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
