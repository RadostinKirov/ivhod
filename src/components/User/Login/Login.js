import './Login.css';

const Login = () => {

    return (
        
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

    )
}

export default Login;