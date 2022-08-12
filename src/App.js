import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <header>
          <ul>
            <div className="left">
              <li><a Link="">Каса</a></li>
              <li><a Link="">Съобщения</a></li>
              <li><a Link="">Анкети</a></li>
            </div>
            <div className="right">
              <li><a id="greeting" Link="">Здравей, Иван Иванов</a></li>
              <li><a id="loginBtn" Link="">вход</a></li>
              <li><a id="registerBtn" Link="">регистрация</a></li>
              <li><a id="logoutBtn" Link="">изход</a></li>
            </div>
          </ul>
        </header>

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
      
      <footer>
      <p className="footer-name">designed and buit by <span>Radostin Kirov</span></p>
      <p className="footer-email">radostin.kirov@gmail.com</p>
      <p className="footer-phone">+359 883 354 018</p>
      </footer>
        
      </body>
    </div>
  );
}

export default App;
