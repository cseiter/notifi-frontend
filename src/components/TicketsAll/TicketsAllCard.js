import React from 'react';
import './TicketsAll.css';

function TicketsAllCard({indTicketsAll}) {
    const {id,ticket_title,ticket_number, created_at,updated_at,users_id,devices_id,stations_id,status_id} = indTicketsAll;

    return (
        <div className="ticketRow">
            {id}{ticket_title}{ticket_number}{created_at}{updated_at}{users_id}{devices_id}{stations_id}{status_id}
        </div>
        );

    }

export default TicketsAllCard;