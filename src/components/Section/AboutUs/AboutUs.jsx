import './about.scss';

import teamPhoto from '../../../assets/images/team.jpg';
import { areas } from '../../../data/areas.js';
import Labels from '../../Label/Label.jsx';

const steps = [
  {
    modifier: 'peace',
    title: 'Крок 1. Мирне рішення',
    text: 'Переговори, медіація, досудове врегулювання. Швидше й дешевше для Вас.',
  },
  {
    modifier: 'court',
    title: 'Крок 2. Захист у суді',
    text: 'Якщо суду не уникнути, ми готуємо сильну позицію і відстоюємо її до результату.',
  },
];

const stats = [
  { number: '4', label: 'напрями права' },
  { number: '4', label: 'адвокати' },
  { number: '5+', label: 'років досвіду' },
  { number: '100+', label: 'вирішених справ' }, // TODO: уточнити реальну кількість справ
];

function AboutUs() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about__container">
        <figure className="about__photo">
          <img
            src={teamPhoto}
            alt="Команда адвокатів"
            loading="lazy"
          />
        </figure>

        <div>
          <Labels label="Про нас" />
          <h2 className="about__title" id="about-title">
            Миритимемо, де можна. Переможемо, де потрібно.
          </h2>
          <p>
            Ми — спілка адвокатів, яка працює вже понад 5 років. Наша команда
            спершу шукає мирне рішення, щоб заощадити Ваш час і нерви. Якщо
            справа доходить до суду, ми працюємо наполегливо і впевнено, бо
            знаємо, як вигравати.
          </p>
        </div>

        <div>
          <h3 className="about__subheading">Два кроки до рішення</h3>
          <ul className="about__steps">
            {steps.map((step) => (
              <li
                className={`about__step about__step--${step.modifier}`}
                key={step.modifier}
              >
                <h4 className="about__step-title">{step.title}</h4>
                <p className="about__step-text">{step.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <ul className="about__stats" aria-label="Про нашу команду в цифрах">
          {stats.map((stat) => (
            <li className="about__stat" key={stat.label}>
              <span className="about__number">{stat.number}</span>
              <span className="about__stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>

        <div>
          <h3 className="about__subheading">Напрями роботи</h3>
          <ul className="about__areas">
            {areas.map((area) => (
              <li className="about__area" key={area.name}>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d={area.icon}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                  />
                </svg>
                <span>{area.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
