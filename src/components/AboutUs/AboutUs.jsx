import './about.scss';

import teamPhoto from '../../assets/images/team.jpg';

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

const areas = [
  {
    name: 'Кримінальне право',
    icon: 'M12 3 4 6v5c0 5.2 3.4 8.7 8 10 4.6-1.3 8-4.8 8-10V6l-8-3Zm-3 9 2 2 4-4',
  },
  {
    name: 'Цивільне право',
    icon: 'M5 4h14v16H5zM8 8h8M8 12h8M8 16h5',
  },
  {
    name: 'Сімейні справи',
    icon: 'M12 20s-8-4.5-8-10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.5-8 10-8 10Z',
  },
  {
    name: 'Майнові спори',
    icon: 'M3 10 12 4l9 6M5 10v9m4-9v9m6-9v9m4-9v9M3 20h18',
  },
];

function AboutUs() {
  return (
    <section className="about" aria-labelledby="about-title">
      <div className="about__container">
        <figure className="about__photo">
          <img
            src={teamPhoto}
            alt="Команда адвокатів"
            loading="lazy"
          />
        </figure>

        <div className="about__intro">
          <p className="about__label">Про нас</p>
          <h2 className="about__title" id="about-title">
            Миритимемо, де можна. Переможемо, де потрібно.
          </h2>
          <p className="about__text">
            Ми — спілка адвокатів, яка працює вже понад 5 років. Наша команда
            спершу шукає мирне рішення, щоб заощадити Ваш час і нерви. Якщо
            справа доходить до суду, ми працюємо наполегливо і впевнено, бо
            знаємо, як вигравати.
          </p>
        </div>

        <div className="about__steps-section">
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

        <div className="about__areas-section">
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
