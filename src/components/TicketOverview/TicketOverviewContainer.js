import React from 'react';
import './TicketOverview.css';
import TicketOverviewCard from './TicketOverviewCard';

function TicketOverviewContainer({tickets,onDeleteTicket}) {
    const ticketOverviewCards = tickets.map((ticket) => (
        <TicketOverviewCard
            key={ticket.id}
            indTicket={ticket}
            onDeleteTicket={onDeleteTicket}
        />
    ));

    return (
        <section>
            <h2><center>Current Tickets</center></h2>
            <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Created</th>
                    <th>Updated</th>
                    <th>Owner</th>
                    <th>Device Type</th>
                    <th>Station Location</th>
                    <th>Status</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                {ticketOverviewCards}
            </table>
        </section>
    );
}

export default TicketOverviewContainer;