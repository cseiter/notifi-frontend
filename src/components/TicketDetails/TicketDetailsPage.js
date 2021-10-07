import React, {useEffect, useState} from 'react';
import './TicketDetails.css';
import TicketDetailsContainer from './TicketDetailsContainer';

function TicketDetailsPage(onCompleteTicket) {
  const [tickets,setTickets] = useState([]);

  useEffect(() => {
    fetch('https://ancient-retreat-67722.herokuapp.com/tickets')
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