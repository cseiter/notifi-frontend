import React from 'react';
import './TicketDetails.css';
import moment from 'moment';

function TicketDetailsCard({indTicket, onCompleteTicket}) {
    const {id,ticket_title,ticket_details,created_at,updated_at,users_id,devices_id,stations_id,statuses_id} = indTicket;

    function handleCompletedClick() {
        console.log(`marking ticket ${id} as completed.`)
        const updateObj = {status: indTicket.status_id = "2"
        };
        fetch(`http:localhost/tickets/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateObj),
        })
        .then((r) => r.json())
        .then(onCompleteTicket);
    }

    return (
        <tbody>
            <tr className="title">
                <td className="title">Ticket ID: {id}</td>
                <td className="title">{ticket_title}</td>
            </tr>
            <tr>
                <td className="section">Device Affected ID: {devices_id}<br />
                Station Affected ID: {stations_id}</td>
                <td rowSpan="4">{ticket_details}</td>
            </tr>
            <tr>
                <td className="section">Created At: {moment({created_at}).format("ll")}< br/>
                Last Updated At: {moment({updated_at}).format("ll")}</td>
            </tr>
            <tr>
                <td className="section">Ticket Owner ID: {users_id}<br />
                Ticket Status ID: {statuses_id}</td>
            </tr>
            <tr>
                <td  className="section">
                Ticket Controls<br />
                <button onClick={handleCompletedClick}>Mark as completed</button>
                </td>
            </tr>
        </tbody>
        );
    }

export default TicketDetailsCard;