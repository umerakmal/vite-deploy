// import './App.css';
import Header from './Header';
// import Body from './Body';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Career from './pages/Career';
import Contact from './pages/Contact';
import History from './pages/History';

function App() {
  return (
    <>
      {/* <Body /> */}

      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/History' element={<History />}/>
          <Route path='/Career' element={<Career />}/>
          <Route path='/Contact' element={<Contact />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
