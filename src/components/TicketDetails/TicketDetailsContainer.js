import React from 'react';
import './TicketDetails.css';
import TicketDetailsCard from './TicketDetailsCard';

function TicketDetailsContainer({tickets, onUpdateTicket}) {
    const ticketDetailsCards = tickets.map((ticket) => (
        <TicketDetailsCard
            key={ticket.id}
            indTicket={ticket}
            onUpdateTicket={onUpdateTicket}
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