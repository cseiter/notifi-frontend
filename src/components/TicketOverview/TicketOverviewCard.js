import React from 'react';
import './TicketOverview.css';

function TicketOverviewCard({indTicket,onDeleteTicket}) {
    const {id,ticket_title,created_at,updated_at,devices_id,stations_id,statuses_id} = indTicket;

    function handleDeleteClick() {
        fetch(`https://desolate-wave-23214.herokuapp.com/tickets/${id}`, {
            method: "DELETE",
    })
    .then(() => {onDeleteTicket(indTicket);
    });
}

    return (
        <tbody>
            <tr className="test">
                <td>{id}</td>
                <td>{ticket_title}</td>
                <td>{created_at}</td>
                <td>{updated_at}</td>
                <td>{devices_id}</td>
                <td>{stations_id}</td>
                <td>{statuses_id}</td>
                <td><button type="button" className="btn btn-danger" onClick={handleDeleteClick}>X</button></td>
            </tr>
            </tbody>
        );

    }

export default TicketOverviewCard;