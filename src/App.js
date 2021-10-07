import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tabs, Tab} from "react-bootstrap";
import Header from './components/Header/Header.js';
import TicketOverviewPage from './components/TicketOverview/TicketOverviewPage';
import TicketCreatePage from './components/TicketCreate/TicketCreatePage';
import TicketDetailsPage from './components/TicketDetails/TicketDetailsPage';
import HomePage from './components/HomePage';

function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Tabs fill defaultActiveKey="home" fullwidth="true" indicatorcolor="secondary" centered="true">
          <Tab eventKey="home" title="Home">
            <HomePage />
          </Tab>
          <Tab eventKey="TicketOverview" title="Ticket Overview">
            <TicketOverviewPage />
          </Tab>
          <Tab eventKey="TicketCreate" title="New Ticket">
            <TicketCreatePage />
          </Tab>
          <Tab eventKey="TicketDetails" title="Ticket Details">
            <TicketDetailsPage />
          </Tab>
        </Tabs>
      </main>
    </>
  );
}

export default App;
