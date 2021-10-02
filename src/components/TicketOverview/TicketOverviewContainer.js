import React from 'react';
import TicketOverviewCard from './TicketOverviewCard';

function TicketOverviewContainer({ticket}) {
    const ticketOverviewCards = ticket.map((ticket) => (
        <TicketOverviewCard
            key={ticket.id}
            ticket_overview={ticket}
        />
    ));

    return (
        <section>
            <h2>Current Tickets</h2>
            {ticketOverviewCards}
        </section>
    );
}

export default TicketOverviewContainer;