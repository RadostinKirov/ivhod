import { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationFail, setValidationFail] = useState(false);
  const [emailValidation, setEmailValidation] = useState(true);
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [passEmpty, setPassEmpty] = useState(false);

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
      setValidationFail(true);
      setEmailEmpty(true);
    } else {
      let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!email.match(validRegex)) {
        console.log('Моля въведи валиден email!');
        setValidationFail(true);
        setEmailValidation(false);
        setEmailEmpty(false);

      } else {
        setValidationFail(false);
        setEmailValidation(true);
      }
    }

    if (!password) {
      console.log('Моля въведи парола!');
      setValidationFail(true);
      setPassEmpty(true);

    } else {
      setPassEmpty(false);
    }
  }

  return (

    <section className="login-page">
      <form action="" onSubmit={onSubmitHandler} className={validationFail ? 'form-invalid' : 'form-valid'}>

        <div className="email-input">
          <label>E-mail:</label>
          <input onChange={onChangeEmailHandler} value={email} type="text" />
          {emailEmpty ? <p>Моля попълни email!</p> : ''}
          {!emailValidation ? <p>Невалиден email!</p> : ''}


        </div>

        <div className="password-input">
          <label>Парола:</label>
          <input onChange={onChangePasswordHandler} value={password} type="password" />
          {passEmpty ? <p>Моля попълни парола</p> : ''}

        </div>

        <input className="submit-btn" type="submit" value="Създай профил" />

        <div className="key-picture">
          <img src="./images/key2.png" alt="" />
        </div>
      </form>

    </section>

  )
}

export default Login;