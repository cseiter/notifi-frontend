import React from 'react';
import './TicketDetails.css';
import TicketDetailsCard from './TicketDetailsCard';

function TicketDetailsContainer({tickets, onCompleteTicket, onProgressTicket, onResponseTicket}) {
    const ticketDetailsCards = tickets.map((ticket) => (
        <TicketDetailsCard
            key={ticket.id}
            indTicket={ticket}
            onCompleteTicket={onCompleteTicket}
            onProgressTicket={onProgressTicket}
            onResponseTicket={onResponseTicket}
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