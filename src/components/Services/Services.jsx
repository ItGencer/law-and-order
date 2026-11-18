import { useEffect, useState } from 'react';
import { areas } from '../../data/areas.js';
// eslint-disable-next-line no-unused-vars
import ServicesCard from '../ServicesCard/ServicesCard.jsx';
import './Services.scss';

function Services() {
  const [effectsEnabled, setEffectsEnabled] = useState(false);

  // Вмикаємо курсорний ефект лише для точного вказівника без reduced motion.
  useEffect(() => {
    const finePointer = window.matchMedia(
      '(hover: hover) and (pointer: fine)',
    );
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );

    function updateEffects() {
      setEffectsEnabled(finePointer.matches && !reducedMotion.matches);
    }

    updateEffects();
    finePointer.addEventListener('change', updateEffects);
    reducedMotion.addEventListener('change', updateEffects);

    return () => {
      finePointer.removeEventListener('change', updateEffects);
      reducedMotion.removeEventListener('change', updateEffects);
    };
  }, []);

  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="services__container">
        <h2 className="services__title" id="services-title">
          Наші послуги
        </h2>
        <p className="services__subtitle">
          Допомагаємо захистити Ваші права та знайти правове рішення.
        </p>
        <div className="services__grid">
          {areas.map((area) => (
            <ServicesCard
              key={area.name}
              area={area}
              effectsEnabled={effectsEnabled}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
