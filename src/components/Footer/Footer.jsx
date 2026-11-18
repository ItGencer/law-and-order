import './Footer.scss';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <a className="footer__logo" href="#home" aria-label="Law & Order — на головну">
            LAW &amp; ORDER
          </a>
          <p className="footer__tagline">
            Професійна правова допомога.<br />
            Ваші права захищені.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Навігація у підвалі">
          <h2 className="footer__heading">Навігація</h2>
          <ul className="footer__list">
            <li><a href="#about">Про нас</a></li>
            <li><a href="#services">Послуги</a></li>
            <li><a href="#team">Наша команда</a></li>
            <li><a href="#contact">Зворотний зв'язок</a></li>
          </ul>
        </nav>

        <address className="footer__contacts">
          <h2 className="footer__heading">Контакти</h2>
          <a href="tel:+380000000000">+380 (00) 000-00-00</a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
        </address>
      </div>

      <div className="footer__bottom">
        <p>&copy; {currentYear} LAW &amp; ORDER. Усі права захищено.</p>
        <a href="#home">На початок ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
