import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './TicketOverview.css';

function TicketOverviewCard({indTicket,onDeleteTicket}) {
    const {id,ticket_title,created_at,updated_at,users_id,devices_id,stations_id,statuses_id} = indTicket;

    function handleDeleteClick() {
        fetch(`httplocalhost:3000/tickets/${id}`, {
            method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => {onDeleteTicket(indTicket);
    });
}

    return (
        <tbody>
            <tr className="test">
                <td><Router><Link to={{ pathname: `http://localhost:3000/tickets`}} target="_blank" rel="noopener noreferrer">{id}</Link></Router></td>
                <td>{ticket_title}</td>
                <td>{created_at}</td>
                <td>{updated_at}</td>
                <td>{users_id}</td>
                <td>{devices_id}</td>
                <td>{stations_id}</td>
                <td>{statuses_id}</td>
                <td><button type="button" className="btn btn-danger" onClick={handleDeleteClick}>X</button></td>
            </tr>
            </tbody>
        );

    }

export default TicketOverviewCard;