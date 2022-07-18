
import './App.css';
import Nav1 from './component/NavBar/Nav1';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './component/Pages/About';
import Login from './component/Pages/Login';
import SignUp from './component/Pages/SignUp';
import Contact from './component/Pages/Contact';
import Stories from './component/Pages/Stories';
import Footer from './component/FooterFiles/Footer';
import SignSuccess from './component/Sign/SignSuccess';

function App() {
  return (
    <div>
 
  <Router>
      <Nav1/> 
      <Routes>
        <Route exact path='/' element={<About/>}/>
        <Route  path='contact/' element={<Contact/>}/>
        <Route path='login/' element={<Login/>}/>
        <Route  path='signup/' element={<SignUp/>}/>
        <Route path='/stories/' element={<Stories/>}/>
        <Route path='/success/' element={<SignSuccess/>}/>
      </Routes>
         <Footer/>
       </Router>
 
    </div>
  );
}

export default App;
