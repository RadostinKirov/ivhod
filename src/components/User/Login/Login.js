import { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationFail, setValidationFail] = useState(false)

  const onChangeEmailHandler = (e) => {
    let emailInput = e.target.value;
    setEmail(emailInput);
  }

  const onChangePasswordHandler = (e) => {
    let passwordInput = e.target.value;
    setPassword(passwordInput);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!email) {
      console.log('Моля въведи email!');
      setValidationFail = true;
    } else {
      let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!email.match(validRegex)) {
        console.log('Моля въведи валиден email!');
        setValidationFail = true;

      }
    }

    if (!password) {
      console.log('Моля въведи парола!');
      setValidationFail = true;

    }
  }

  return (

    <section className="login-page">
      <form action="" onSubmit={onSubmitHandler} className={validationFail ? 'form-invalid' : 'form-valid'}>

        <div className="email-input">
          <label>E-mail:</label>
          <input onChange={onChangeEmailHandler} value={email} type="text" />
        </div>

        <div className="password">
          <label>Парола:</label>
          <input onChange={onChangePasswordHandler} value={password} type="password" />
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