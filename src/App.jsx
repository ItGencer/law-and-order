import { } from 'react';
import './App.scss';
// JSX references are not detected by ESLint's core no-unused-vars rule.
// eslint-disable-next-line no-unused-vars
import Header from './components/Header/Header.jsx';
// eslint-disable-next-line no-unused-vars
import Intro from './components/Intro/Intro.jsx';
// eslint-disable-next-line no-unused-vars
import AboutUs from './components/AboutUs/AboutUs.jsx';
// eslint-disable-next-line no-unused-vars
import Services from './components/Services/Services.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <AboutUs />
        <Services />
      </main>
      <footer>
      </footer>
    </>
  );
}

export default App
