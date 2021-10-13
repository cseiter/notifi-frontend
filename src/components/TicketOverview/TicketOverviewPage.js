import React, {useEffect, useState} from 'react';
import './TicketOverview.css';
import TicketOverviewContainer from './TicketOverviewContainer';

function TicketOverviewPage() {
  const [tickets,setTickets] = useState([]);

  useEffect(() => {
    fetch('https://desolate-wave-23214.herokuapp.com/tickets')
    .then((r) => r.json())
    .then(setTickets);
  },[]);

  function handleDeleteTicket(ticketToDelete) {
    const updatedTickets = tickets.filter((ticket) => ticket.id !== ticketToDelete.id);
    setTickets(updatedTickets);
  }

  return (
    <main>
      <TicketOverviewContainer
      tickets={tickets}
      onDeleteTicket={handleDeleteTicket}
      />
    </main>
);
}

export default TicketOverviewPage;