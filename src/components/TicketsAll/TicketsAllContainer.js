import React from 'react';
import TicketsAllCard from './TicketsAllCard';

function TicketsAllContainer({tickets}) {
    const ticketsAllCards = tickets.map((ticket) => (
        <TicketsAllCard
            key={ticket.id}
            ticket_overview={ticket}
        />
    ));

    return (
        <section>
            <h2>Current Tickets</h2>
            {ticketsAllCards}
        </section>
    );
}

export default TicketsAllContainer;