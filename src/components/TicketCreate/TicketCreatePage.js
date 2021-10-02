import React, {useState} from 'react';
import TicketCreateForm from './TicketCreateForm';

function TicketCreatePage() {
  const [tickets,setTickets] = useState([]);

  function handleCreateTicket(newTicket) {
    setTickets([...tickets, newTicket]);
  }

return (
    <main>
      <header>
        <h2><center>New Ticket</center></h2>
      </header>
      <TicketCreateForm onCreateTicket={handleCreateTicket}/>
    </main>
);
}

export default TicketCreatePage;
