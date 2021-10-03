import React, {useState, useEffect} from 'react';
import TicketCreateForm from './TicketCreateForm';

function TicketCreatePage() {
  const [tickets,setTickets] = useState([]);

  useEffect(() => {
    fetch('https://ancient-retreat-67722.herokuapp.com/tickets')
    .then((r) => r.json())
    .then(setTickets);
  },[]);

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
