import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import  Footer from './components/Footer/Footer'
//eslint-disable-next-line
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Products from './Pages/Products/Products';
import Services from './Pages/Services/Services'
import Signup from './Pages/SignUp/Signup'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/Products' element= {<Products />} />
          <Route path='/Services' element= {<Services />} />
          <Route path='/Signup' element= {<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
