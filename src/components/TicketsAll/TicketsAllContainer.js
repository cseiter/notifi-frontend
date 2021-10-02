import React from 'react';
import TicketsAllCard from './TicketsAllCard';

function TicketsAllContainer( {tickets}) {
    const TicketsAllCards = tickets.map((ticket) => (
        <TicketsAllCard
            key={ticket.id}
            indTicketTitle={ticket_title}
            indTicketNumber={ticket_number}
            indTicketCreate={created_at}
            indTicketUpdate={updated_at}
            indTicketOwner={users_id}
            indTicketDevice={devices_id}
            indTicketStation={stations_id}
            indTicketStatus={status_id}
        />
    ));

    return (
        <section>
            <h2>Current Tickets</h2>
            {TicketsAllCards}
        </section>
    );
}

export default TicketsAllContainer;