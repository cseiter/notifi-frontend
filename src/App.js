import './App.css';
import Header from './components/Header/Header.js';
import TicketsAllPage from './components/TicketsAll/TicketsAllPage';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <TicketsAllPage />
      </main>
    </div>
  );
}

export default App;
