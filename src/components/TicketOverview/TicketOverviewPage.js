import React, {useEffect, useState} from 'react';
import TicketOverviewContainer from './TicketOverviewContainer';

function TicketOverviewPage() {
  const [tickets,setTickets] = useState([]);

  useEffect(() => {
    fetch('https://ancient-retreat-67722.herokuapp.com/tickets')
    .then((r) => r.json())
    .then(setTickets);
  },[]);

  return (
    <main>
      <TicketOverviewContainer
      tickets={tickets}
      />
    </main>
);
}

export default TicketOverviewPage;