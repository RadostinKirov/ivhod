import './Register.css';

const Register = () => {

    return (

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

            <div className="password-input">
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

    )
}

export default Register;