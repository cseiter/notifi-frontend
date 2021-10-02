import './App.css';
import Header from './components/Header/Header.js';
import TicketOverviewPage from './components/TicketOverview/TicketOverviewPage';
import TicketCreatePage from './components/TicketCreate/TicketCreatePage';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <TicketOverviewPage />
        <TicketCreatePage />
      </main>
    </div>
  );
}

export default App;
