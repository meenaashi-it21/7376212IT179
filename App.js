import logo from './logo.svg';
import './App.css';
import Footer from'./components/Footer';
import {Route,Routes} from  'react-router-dom';
import Contact from './components/Contact'
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.js';
import About from './components/About.js';
import Task from './components/Task.js';

function App() {
  const comapnyName="goMart";
  const ownerName="Meenaashi S";
  const rollNo="1";
  const owneremail="meenaashi@gmail.com";
  const accessCode="FKDLjg";
  
  return (
    <div className="App">
      <NavBar/>
      <Routes>
     
         <Route path='/home' element ={<Home/>}></Route>
         <Route path='/about' element={<About/>}></Route>
           <Route path='/contact' element={<Contact/>}></Route>
           <Route path='/task' element ={<Task comapnyName={comapnyName} ownerName={ownerName} rollNo={rollNo} owneremail={owneremail} accessCode={accessCode} />} />
          
           
        
      </Routes>
     
      <Footer/>
    </div>
  );
}

export default App;
