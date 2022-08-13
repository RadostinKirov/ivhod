import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Register from './components/User/Register/Register';


function App() {
  return (
    <div className="App">
      <body>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>


        <section className="login-page">
          <form action="">

            <div className="email-input">
              <label>E-mail:</label>
              <input type="text" />
            </div>

            <div className="password">
              <label>Парола:</label>
              <input type="password" />
            </div>

            <input className="submit-btn" type="submit" value="Създай профил" />

            <div class="key-picture">
              <img src="./images/key2.png" alt="" />
            </div>
          </form>

        </section>

        <Footer />

      </body>
    </div>
  );
}

export default App;
