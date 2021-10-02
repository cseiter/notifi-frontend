import React from 'react';
import './TicketOverview.css';

function TicketOverviewCard({indTicket}) {
    const {id,ticket_title,ticket_number,created_at,updated_at,users_id,devices_id,stations_id,status_id} = indTicket;

    return (
        <div className="ticketRow">
            {id}
            {ticket_title}
            {ticket_number}
            {created_at}
            {updated_at}
            {users_id}
            {devices_id}
            {stations_id}
            {status_id}
        </div>
        );

    }

export default TicketOverviewCard;