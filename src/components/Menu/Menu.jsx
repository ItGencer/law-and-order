import './Menu.scss';

function Menu({ className = '', onNavigate }) {
  return (
    <ul
      aria-label="Основна навігація"
      className={`menu ${className}`}
    >
      <li><a className="menu__item" href="#home" onClick={onNavigate}>Головна</a></li>
      <li><a className="menu__item" href="#about" onClick={onNavigate}>Про нас</a></li>
      <li><a className="menu__item" href="#services" onClick={onNavigate}>Послуги</a></li>
      <li><a className="menu__item" href="#team" onClick={onNavigate}>Наша команда</a></li>
      <li><a className="menu__item" href="#contact" onClick={onNavigate}>Форма зворотного зв'язку</a></li>
    </ul>
  )
}

export default Menu;