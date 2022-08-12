import './Header.css'

const Header = () => {

    return (
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
    )
}

export default Header;