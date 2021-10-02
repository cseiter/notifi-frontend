import React from 'react';
import './TicketOverview.css';

function TicketOverviewCard({indTicket}) {
    const {id,ticket_title,ticket_number,created_at,updated_at,users_id,devices_id,stations_id,status_id} = indTicket;

    return (
        <div className="ticketRow">
            <tr>
                <td>{id}</td>
                <td>{ticket_title}</td>
                <td>{ticket_number}</td>
                <td>{created_at}</td>
                <td>{updated_at}</td>
                <td>{users_id}</td>
                <td>{devices_id}</td>
                <td>{stations_id}</td>
                <td>{status_id}</td>
            </tr>
        </div>
        );

    }

export default TicketOverviewCard;