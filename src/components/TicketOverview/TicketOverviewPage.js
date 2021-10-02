import React, {useEffect, useState} from 'react';
import TicketOverviewContainer from './TicketOverviewContainer';

function TicketOverviewPage() {
  const [ticketsAll,setTicketsAll] = useState([]);

  useEffect(() => {
    fetch('https://ancient-retreat-67722.herokuapp.com/tickets')
    .then((r) => r.json())
    .then(setTicketsAll);
  },[]);

  return (
    <main>
      <header>
        <h1>Tickets</h1>
      </header>
      <TicketOverviewContainer
      ticketsAll={ticketsAll}
      />
    </main>
);
}

export default TicketOVerviewPage;