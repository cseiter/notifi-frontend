import React from 'react';
import './TicketOverview.css';

function TicketOverviewCard({indTicket,onDeleteTicket}) {
    const {id,ticket_title,ticket_number,created_at,updated_at,users_id,devices_id,stations_id,status_id} = indTicket;

    function handleDeleteClick() {
        fetch(`https://ancient-retreat-67722.herokuapp.com/tickets/${id}`, {
            method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => {onDeleteTicket(indTicket);
    });
}

    return (
        <tbody>
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
                <button type="button" className="btn btn-danger" onClick={handleDeleteClick}>X</button>
            </tr>
            </tbody>
        );

    }

export default TicketOverviewCard;