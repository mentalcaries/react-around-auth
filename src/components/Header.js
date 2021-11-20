import headerLogo from '../images/header-logo.svg';

function Header() {
  return (
    <header className="header">
      <img src={headerLogo} alt="Around the US text" className="header__logo" />
    </header>
  )
}

export default Header