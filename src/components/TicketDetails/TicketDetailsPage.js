import React, {useEffect, useState} from 'react';
import TicketDetailsCard from './TicketDetailsCard';

function TicketDetailsPage() {
    const [tickets,setTickets] = useState([]);
  
    useEffect(() => {
      fetch('https://ancient-retreat-67722.herokuapp.com/tickets/1')
      .then((r) => r.json())
      .then(setTickets);
    },[]);
  
    return (
      <main>
        <TicketDetailsCard
        ticket={tickets}
        />
      </main>
  );
  }
  
  export default TicketDetailsPage;
