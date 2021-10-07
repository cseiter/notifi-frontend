import React from 'react';
import './TicketDetails.css';

function TicketDetailsCard({indTicket}) {
    const {id,ticket_title,ticket_details,created_at,updated_at,users_id,devices_id,stations_id,status_id} = indTicket;

    return (
        <tbody>
            <tr>
                <td>{id}</td>
                <td>{ticket_title}</td>
            </tr>
            <tr>
                <td>{devices_id}<br />
                {stations_id}</td>
                <td rowspan="3" colspan="2">{ticket_details}</td>
            </tr>
            <tr>
                <td>{created_at}< br/>
                {updated_at}</td>
            </tr>
            <tr>
                <td>{users_id}<br />
                {status_id}</td>
            </tr>
        </tbody>
        );
    }

export default TicketDetailsCard;