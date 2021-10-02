import React from 'react';
import TicketOverviewCard from './TicketOverviewCard';

function TicketOverviewContainer({tickets}) {
    const ticketOverviewCards = tickets.map((ticket) => (
        <TicketOverviewCard
            key={ticket.id}
            indTicket={ticket}
        />
    ));

    return (
        <section>
            <h2>Current Tickets</h2>
            <table>
            {ticketOverviewCards}
            </table>
        </section>
    );
}

export default TicketOverviewContainer;