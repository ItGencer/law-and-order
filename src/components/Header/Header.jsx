import { useState } from 'react';
import './Header.scss';
// ESLint's current config does not count component references inside JSX.
// eslint-disable-next-line no-unused-vars
import Menu from  '../Menu/Menu';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <a className="header__logo" href="#home">
        LAW &amp; ORDER
      </a>

      <button
        className="header__menu"
        type="button"
        aria-label="Відкрити меню"
        aria-haspopup="dialog"
        aria-controls="header-menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(true)}
      >
        <span className="header__menu-icon" aria-hidden="true" />
        <span className="header__menu-icon" aria-hidden="true" />
        <span className="header__menu-icon" aria-hidden="true" />
      </button>

      <Menu className="menu--desktop header__menu-nav header__menu-nav--desktop" />

      {isMenuOpen && (
        <div
          className="header__menu-overlay"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsMenuOpen(false)
            }
          }}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setIsMenuOpen(false)
            }
          }}
        >
          <dialog
            className="header__menu-list"
            id="header-menu"
            aria-label="Навігаційне меню"
            aria-modal="true"
            open
          >
            <button
              className="header__menu-list-close"
              type="button"
              aria-label="Закрити меню"
              autoFocus
              onClick={() => setIsMenuOpen(false)}
            >
              &times;
            </button>
            <Menu
              className="header__menu-nav"
              onNavigate={() => setIsMenuOpen(false)}
            />
          </dialog>
        </div>
      )}
    </header>
  )
}

export default Header;
