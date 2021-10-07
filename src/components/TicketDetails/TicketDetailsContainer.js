import React from 'react';
import './TicketDetails.css';
import TicketDetailsCard from './TicketDetailsCard';

function TicketDetailsContainer({tickets}) {
    const ticketDetailsCards = tickets.map((ticket) => (
        <TicketDetailsCard
            key={ticket.id}
            indTicket={ticket}
        />
    ));

    return (
        <section>
            <table>
                {ticketDetailsCards}
            </table>
        </section>
    );
}

export default TicketDetailsContainer;