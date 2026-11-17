import { } from 'react';
import './App.scss';
// JSX references are not detected by ESLint's core no-unused-vars rule.
// eslint-disable-next-line no-unused-vars
import Header from './components/Header/Header.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
      </main>
      <footer>
      </footer>
    </>
  );
}

export default App
