import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Register from './components/User/Register/Register';
import Login from './components/User/Login/Login';


function App() {
  return (
    <div className="App">


      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>


      <Footer />


    </div>
  );
}

export default App;
