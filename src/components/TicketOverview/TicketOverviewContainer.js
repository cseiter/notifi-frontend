import React from 'react';
import './TicketOverview.css';
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
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Number</th>
                    <th>Created</th>
                    <th>Updated</th>
                    <th>Owner</th>
                    <th>Device Type</th>
                    <th>Station Location</th>
                    <th>Status</th>
                </tr>
                {ticketOverviewCards}
            </table>
        </section>
    );
}

export default TicketOverviewContainer;