import './ContactForm.scss';
import { useState } from 'react';
import Labels from '../../Label/Label.jsx';

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__container">
        <div>
          <Labels label="Зв'язок із адвокатами" />
          <h2 className="contact__title" id="contact-title">
            Зворотний зв'язок
          </h2>
          <p className="contact__text">
            Опишіть свою ситуацію, і ми запропонуємо найближчий варіант
            правової допомоги.
          </p>

          <address className="contact__details">
            <a className="contact__detail" href="tel:+380000000000">
              <span className="contact__icon" aria-hidden="true">☎</span>
              <span>
                <small>Телефон</small>
                +380 (00) 000-00-00
              </span>
            </a>
            <a className="contact__detail" href="https://facebook.com/" target="_blank" rel="noreferrer">
              <span className="contact__icon" aria-hidden="true">f</span>
              <span>
                <small>Facebook</small>
                facebook.com/lawandorder
              </span>
            </a>
            <a className="contact__detail" href="https://instagram.com/" target="_blank" rel="noreferrer">
              <span className="contact__icon" aria-hidden="true">◎</span>
              <span>
                <small>Instagram</small>
                @law.and.order
              </span>
            </a>
          </address>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__field">
            <label htmlFor="contact-name">Ім'я</label>
            <input id="contact-name" name="name" type="text" placeholder="Як до Вас звертатись?" required />
          </div>
          <div className="contact__field">
            <label htmlFor="contact-phone">Телефон</label>
            <input id="contact-phone" name="phone" type="tel" placeholder="+380..." required />
          </div>
          <div className="contact__field">
            <label htmlFor="contact-email">E-mail</label>
            <input id="contact-email" name="email" type="email" placeholder="example@email.com" />
          </div>
          <div className="contact__field contact__field--wide">
            <label htmlFor="contact-message">Повідомлення</label>
            <textarea id="contact-message" name="message" rows="5" placeholder="Коротко опишіть Ваше питання" required />
          </div>
          <button className="contact__submit" type="submit">
            Надіслати запит
          </button>
          <p className="contact__status" role="status" aria-live="polite">
            {submitted ? 'Дякуємо! Ваш запит прийнято.' : ''}
          </p>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
