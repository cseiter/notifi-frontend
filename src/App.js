import './App.css';
import Header from './components/Header/Header.js';
import TicketOverviewPage from './components/TicketOverview/TicketOverviewPage';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <TicketOverviewPage />
      </main>
    </div>
  );
}

export default App;
