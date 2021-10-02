import React from 'react';
import TicketsAllCard from './TicketsAllCard';

function TicketsAllContainer({tickets}) {
    const TicketsAllCards = tickets.map((ticket) => (
        <TicketsAllCard
            key={ticket.id}
            indTicketTitle={ticket.ticket_title}
            indTicketNumber={ticket.ticket_number}
            indTicketCreate={ticket.created_at}
            indTicketUpdate={ticket.updated_at}
            indTicketOwner={ticket.users_id}
            indTicketDevice={ticket.devices_id}
            indTicketStation={ticket.stations_id}
            indTicketStatus={ticket.status_id}
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