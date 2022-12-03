import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import AboutPage from './pages/About';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactPage from './pages/Contact';
import LoginPage from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </Router>
      
    </div>

  );
}

export default App;
