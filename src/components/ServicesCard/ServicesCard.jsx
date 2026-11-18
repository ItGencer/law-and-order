import { useRef } from 'react';
import './ServicesCard.scss';

export default function ServicesCard({ area, effectsEnabled }) {
  const cardRef = useRef(null);

  // Рахуємо координати курсора й перетворюємо їх на позицію блиску та нахил.
  function handleMouseMove(event) {
    const card = cardRef.current;
    if (!card) return;

    const bounds = card.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;
    const rotateY = ((x - 50) / 50) * 8;
    const rotateX = ((50 - y) / 50) * 8;

    card.style.setProperty('--mx', `${x}%`);
    card.style.setProperty('--my', `${y}%`);
    card.style.setProperty('--rx', `${rotateX}deg`);
    card.style.setProperty('--ry', `${rotateY}deg`);
  }

  // Повертаємо картку в початковий стан, коли курсор залишає її.
  function handleMouseLeave() {
    const card = cardRef.current;
    if (!card) return;

    card.style.setProperty('--mx', '50%');
    card.style.setProperty('--my', '50%');
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  }

  return (
    <div className="services__item">
      <article
        className={`services-card${area.recommended ? ' services-card--recommended' : ''}`}
        ref={cardRef}
        onMouseMove={effectsEnabled ? handleMouseMove : undefined}
        onMouseLeave={effectsEnabled ? handleMouseLeave : undefined}
      >
        {area.recommended && (
          <span className="services-card__badge">Рекомендую</span>
        )}
        <span className="services-card__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d={area.icon}
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
            />
          </svg>
        </span>
        <h3 className="services-card__title">{area.name}</h3>
        <p className="services-card__text">{area.description}</p>
        <span className="services-card__line" aria-hidden="true" />
        <p className="services-card__price">
          {area.price.toLocaleString('uk-UA')} грн
        </p>
      </article>
    </div>
  );
}
