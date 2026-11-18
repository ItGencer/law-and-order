import { } from 'react';
import './App.scss';
// JSX references are not detected by ESLint's core no-unused-vars rule.
// eslint-disable-next-line no-unused-vars
import Header from './components/Header/Header.jsx';
// eslint-disable-next-line no-unused-vars
import Intro from './components/Section/Intro/Intro.jsx';
// eslint-disable-next-line no-unused-vars
import AboutUs from './components/Section/AboutUs/AboutUs.jsx';
// eslint-disable-next-line no-unused-vars
import Services from './components/Section/Services/Services.jsx';
// eslint-disable-next-line no-unused-vars
import Team from './components/Section/Team/Team.jsx';
// eslint-disable-next-line no-unused-vars
import ContactForm from './components/Section/ContactForm/ContactForm.jsx';
// eslint-disable-next-line no-unused-vars
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <AboutUs />
        <Services />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App
