import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Support from './components/Support';
import Contact from './components/Contact';
import Employee from './components/Employee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Namaste from './components/Namaste';
import Hello from './components/Hello'

function App() {
  /// for git tesing
  return (
    <div className="App">
     <>
     <BrowserRouter>
     <Header/>

     <Routes>
      <Route path="home" element={<Home/>}/>
     
      <Route path="about" element={<About/>}/>
     
      <Route path="support" element={<Support/>}/>
      
      <Route path="contact" element={<Contact/>}/>
     
      <Route path="employee" element={<Employee/>}/>


      <Route path ="namaste" element={<Namaste/>}/>

      <Route path="hello" element={<Hello/>}/>


      </Routes>
      </BrowserRouter>
     </>
    </div>
  );
}

export default App;
//https://github.com/itzkashyap/React-EmployeeProject.git