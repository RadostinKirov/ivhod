import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <body>
       
    <Header />

        <div className="home-page">
          
            <section className="table">
              <table>
                <tr>
                  <th>Ап</th>
                  <th>Семейство</th>
                  <th>брой живущи</th>
                  <th>такса</th>
                  <th>Януари</th>
                </tr>
                <tr>
                  <td>89</td>
                  <td>Иванови</td>
                  <td>3</td>
                  <td>24</td>
                  <td>платено</td>
                </tr>
                <tr>
                  <td>89</td>
                  <td>Иванови</td>
                  <td>3</td>
                  <td>24</td>
                  <td>платено</td>
                </tr>
                <tr>
                  <td>89</td>
                  <td>Иванови</td>
                  <td>3</td>
                  <td>24</td>
                  <td>платено</td>
                </tr>
                <tr>
                  <td>89</td>
                  <td>Иванови</td>
                  <td>3</td>
                  <td>24</td>
                  <td>платено</td>
                </tr>

              </table>
            </section>
          

          <aside>

            <section className="prihodi">
              <h2>Приходи</h2>
              <p>100лв</p>
            </section>

            <section className="razhodi">
              <h2>Разходи</h2>
              <p>100лв</p>
            </section>

            <section className="nalichnost">
              <h2>Текуща наличност</h2>
              <p>100лв</p>
            </section>
          </aside>

        </div>


        <section className="register-page">
          <form action="">

            <div className="email-input">
              <label>E-mail:</label>
              <input type="text" />
            </div>

            <div className="name-input">
              <label>Име:</label>
              <input type="text" />
            </div>

            <div className="last-name-input">
              <label>Фамилия:</label>
              <input type="text" />
            </div>

            <div className="apartment-input">
              <label>Живущ в апартамент: </label>
              <input type="text" />
            </div>

            <div className="password">
              <label>Парола:</label>
              <input type="password" />
            </div>

            <div className="re-pass">
              <label>Повтори паролата:</label>
              <input type="password" />
            </div>

            <input className="submit-btn" type="submit" value="Създай профил" />

          </form>
        </section>

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
