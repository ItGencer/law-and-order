import './Menu.scss';

function Menu({ className = '' }) {
  return (
    <ul
      aria-label="Основна навігація"
      className={`menu ${className}`}
    >
      <li><a className="menu__item" href="#home">Головна</a></li>
      <li><a className="menu__item" href="#about">Про нас</a></li>
      <li><a className="menu__item" href="#services">Послуги</a></li>
      <li><a className="menu__item" href="#team">Наша команда</a></li>
      <li><a className="menu__item" href="#contact">Форма зворотного зв'язку</a></li>
    </ul>
  )
}

export default Menu;