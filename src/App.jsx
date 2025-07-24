import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import MinLogo from "./assets/Logo-LLT.png"

const  App =() => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <nav className=" text-black p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold flex"> <img src={MinLogo} className='rounded-md' style={{height:"30px",width:"30px"}} alt="" srcset="" /> <span className='text-amber-400 ' >LLT</span>TechSolutions</div>
            <div className="space-x-4">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? 'underline font-bold' : 'hover:underline'
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'underline font-bold' : 'hover:underline'
                }
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? 'underline font-bold' : 'hover:underline'
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'underline font-bold' : 'hover:underline'
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </nav>
        <main className="flex-grow bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className=" text-black p-4 text-center">
          &copy; {new Date().getFullYear()} LLTTechSolutions. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
