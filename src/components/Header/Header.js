import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header>
      <ul>
        <div className="left">
          <li><Link to="/">Каса</Link></li>
          <li><Link to="">Съобщения</Link></li>
          <li><Link to="">Анкети</Link></li>
        </div>
        <div className="right">
          <li><Link to="" id="greeting">Здравей, Иван Иванов</Link></li>
          <li><Link to="/login" id="loginBtn">вход</Link></li>
          <li><Link to="/register" id="registerBtn">регистрация</Link></li>
          <li><Link to="" id="logoutBtn">изход</Link></li>
        </div>
      </ul>
    </header >
  )
}

export default Header;