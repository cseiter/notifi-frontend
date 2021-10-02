import React, {useEffect, useState} from 'react';
import TicketCreateForm from './TicketCreateForm';

function TicketCreatePage() {
  const [tickets,setTickets] = useState([]);

  function handleCreateTicket(newTicket) {
    setTickets([...categories, newTicket]);
  }

return (
    <main>
      <header>
        <h1>New Ticket</h1>
      </header>
      <CategoryForm onCreateTicket={handleCreateTicket}/>
    </main>
);
}

export default TicketCreatePage;
