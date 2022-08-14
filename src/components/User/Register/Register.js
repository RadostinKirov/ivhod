import { useState } from 'react';
import './Register.css';

const Register = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [appratment, setAppartment] = useState('');
  const [password, setPassword] = useState('');
  const [rePass, setRePass] = useState('');
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [validation, setValidation] = useState(true);


  const onChangeEmailHandler = (e) => {
    let emailInput = e.target.value;
    setEmail(emailInput);
  }

  const onChangeNameHandler = (e) => {
    let nameInput = e.target.value;
    setName(nameInput);
  }

  const onChangeLastNameHandler = (e) => {
    let lastNameInput = e.target.value;
    setLastName(lastNameInput);
  }

  const onChangeAppartmentHandler = (e) => {
    let appartmentInput = e.target.value;
    setAppartment(appartmentInput);
  }

  const onPasswordHandler = (e) => {
    let passwordInput = e.target.value;
    setPassword(passwordInput);
  }

  const onRePassHandler = (e) => {
    let rePassInput = e.target.value;
    setRePass(rePassInput);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (email) {
      setEmailEmpty(false);
      setValidation(true);
    } else {
      setEmailEmpty(true);
      setValidation(false);
    }
  }

  return (

    <section className="register-page">
      <form action="" onSubmit={onSubmitHandler} className={validation ? "form-valid" : "form-invalid"}>

        <div className="email-input" onChange={onChangeEmailHandler}>
          <label>E-mail:</label>
          <input type="text" />
          {emailEmpty ? <p>Моля попълни email!</p> : ''}

        </div>

        <div className="name-input" onChange={onChangeNameHandler}>
          <label>Име:</label>
          <input type="text" />
        </div>

        <div className="last-name-input" onChange={onChangeLastNameHandler}>
          <label>Фамилия:</label>
          <input type="text" />
        </div>

        <div className="apartment-input" onChange={onChangeAppartmentHandler} >
          <label>Живущ в апартамент: </label>
          <input type="text" />
        </div>

        <div className="password-input" onChange={onPasswordHandler} >
          <label>Парола:</label>
          <input type="password" />
        </div>

        <div className="re-pass" onChange={onRePassHandler}>
          <label>Повтори паролата:</label>
          <input type="password" />
        </div>

        <input className="submit-btn" type="submit" value="Създай профил" />

      </form>
    </section>

  )
}

export default Register;