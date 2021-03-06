import React from 'react';
import './TicketDetails.css';
import moment from 'moment';

function TicketDetailsCard({indTicket, onCompleteTicket, onProgressTicket, onResponseTicket}) {
    const {id,ticket_title,ticket_details,created_at,updated_at,devices_id,stations_id,statuses_id} = indTicket;
    //const arrStatus = {0:"none",1:"Work In Progress",2:"Completed",3:"Awaiting Correspondence"}

    function handleCompletedClick() {
        console.log(`marking ticket ${id} as completed.`)
        const updateObj = {statuses_id: indTicket.statuses_id = "2"};
        console.log(updateObj)
        fetch(`https://desolate-wave-23214.herokuapp.com/tickets/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateObj),
        })
        .then(onCompleteTicket);
        window.location.reload(true);
    }

    function handleResponseClick() {
        console.log(`marking ticket ${id} as awaiting response.`)
        const updateObj = {statuses_id: indTicket.statuses_id = "3"};
        fetch(`https://desolate-wave-23214.herokuapp.com/tickets/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateObj),
        })
        .then(onResponseTicket);
        window.location.reload(true);
    }

    function handleProgressClick() {
        console.log(`marking ticket ${id} as in progress.`)
        const updateObj = {statuses_id: indTicket.statuses_id = "1"};
        fetch(`https://desolate-wave-23214.herokuapp.com/tickets/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateObj),
        })
        .then(onProgressTicket);
        window.location.reload(true);
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
                <td className="section">{/* Ticket Owner ID: {users_id}<br /> */}
                Ticket Status ID: {statuses_id}</td>
            </tr>
            <tr>
                <td  className="section">
                Ticket Controls<br />
                <button onClick={handleProgressClick}>Mark as in progress (1)</button><br />
                <button onClick={handleCompletedClick}>Mark as completed (2)</button><br />
                <button onClick={handleResponseClick}>Mark as awaiting response (3)</button>
                </td>
            </tr>
        </tbody>
        );
    }

export default TicketDetailsCard;