import './Intro.scss';

function Intro() {
  return (
    <section className="intro" id="home" aria-labelledby="intro-title">
      <div className="intro__content">
        <p className="intro__eyebrow">LAW &amp; ORDER — правова підтримка</p>
        <h1 className="intro__title" id="intro-title">
          Наша допомога — <span>це Ваш успіх</span>
        </h1>
        <p className="intro__text">
          Вітаємо на сайті адвокатського об’єднання LAW &amp; ORDER. Ми
          захищаємо Ваші інтереси, допомагаємо знайти впевнене рішення та
          супроводжуємо на кожному кроці.
        </p>
      </div>
    </section>
  );
}

export default Intro;
