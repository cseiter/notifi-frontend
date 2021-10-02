import React, {useEffect, useState} from 'react';
import TicketsAllContainer from './TicketsAllContainer';

function TicketsAllPage() {
  const [ticketsAll,setTicketsAll] = useState([]);

  useEffect(() => {
    fetch('https://ancient-retreat-67722.herokuapp.com/tickets')
    .then((r) => r.json())
    .then(setTicketsAll);
  },[]);

  return (
    <main>
      <header>
        <h1>Tickets</h1>
      </header>
      <TicketsAllContainer
      ticketsAll={ticketsAll}
      />
    </main>
);
}

export default TicketsAllPage;