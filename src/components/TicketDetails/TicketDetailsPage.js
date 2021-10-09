import React, {useEffect, useState} from 'react';
import './TicketDetails.css';
import TicketDetailsContainer from './TicketDetailsContainer';

function TicketDetailsPage(onCompleteTicket) {
  const [tickets,setTickets] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/tickets')
    .then((r) => r.json())
    .then(setTickets);
  },[]);

  return (
    <main>
      <TicketDetailsContainer
      tickets={tickets}
      onCompleteTicket={onCompleteTicket}
      />
    </main>
);
}

export default TicketDetailsPage;