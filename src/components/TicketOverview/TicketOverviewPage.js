import React, {useEffect, useState} from 'react';
import TicketOverviewContainer from './TicketOverviewContainer';

function TicketOverviewPage() {
  const [tickets,setTickets] = useState([]);

  useEffect(() => {
    fetch('https://ancient-retreat-67722.herokuapp.com/tickets')
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