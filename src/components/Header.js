import headerLogo from '../images/header-logo.svg';

function Header({children}) {
  return (
    <header className="header">
      <img src={headerLogo} alt="Around the US text" className="header__logo" />
      {children}
    </header>
  )
}

export default Header