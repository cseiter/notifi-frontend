import React from 'react';
import './TicketDetails.css';
import moment from 'moment';

function TicketDetailsCard({indTicket}) {
    const {id,ticket_title,ticket_details,created_at,updated_at,users_id,devices_id,stations_id,status_id} = indTicket;

    return (
        <tbody>
            <tr className="title">
                <td className="title">Ticket ID: {id}</td>
                <td className="title">{ticket_title}</td>
            </tr>
            <tr>
                <td className="section">Device Affected ID: {devices_id}<br />
                Station Affected ID: {stations_id}</td>
                <td rowspan="3" colspan="2">{ticket_details}</td>
            </tr>
            <tr>
                <td className="section">Created At: {moment({created_at}).format("ll")}< br/>
                Last Updated At: {moment({updated_at}).format("ll")}</td>
            </tr>
            <tr>
                <td className="section">Ticket Owner ID: {users_id}<br />
                Ticket Status ID: {status_id}</td>
            </tr>
        </tbody>
        );
    }

export default TicketDetailsCard;