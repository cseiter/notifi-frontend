import React, {useEffect, useState} from 'react';
import './TicketDetails.css';
import TicketDetailsContainer from './TicketDetailsContainer';

function TicketDetailsPage(onCompleteTicket,onProgressTicket,onResponseTicket) {
  const [tickets,setTickets] = useState([]);

  useEffect(() => {
    fetch('https://desolate-wave-23214.herokuapp.com/tickets')
    .then((r) => r.json())
    .then(setTickets);
  },[]);

  return (
    <main>
      <TicketDetailsContainer
      tickets={tickets}
      onCompleteTicket={onCompleteTicket}
      onResponseTicket={onResponseTicket}
      onProgressTicket={onProgressTicket}
      />
    </main>
);
}

export default TicketDetailsPage;