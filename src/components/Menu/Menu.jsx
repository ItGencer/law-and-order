import './Menu.scss';

function Menu({ className = '' }) {
  return (
    <ul
      aria-label="Основна навігація"
      className={`menu ${className}`}
    >
      <li className="menu__item">Головна</li>
      <li className="menu__item">Про нас</li>
      <li className="menu__item">Послуги</li>
      <li className="menu__item">Наша команда</li>
      <li className="menu__item">
        Форма зворотньго зв'язку
      </li>
    </ul>
  )
}

export default Menu;