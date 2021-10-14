import React from 'react';

function TicketWithCommentsCard({indComment,onDeleteComment, onCompleteTicket, onProgressTicket, onResponseTicket}) {
    const {id,comment,user_id,created_at,ticket} = indComment;

    function handleCompletedClick() {
        console.log(`marking ticket ${ticket.id} as completed.`)
        const updateObj = {statuses_id: indComment.ticket.statuses_id = "2"};
        console.log(updateObj)
        fetch(`https://desolate-wave-23214.herokuapp.com/tickets/${ticket.id}`, {
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
        console.log(`marking ticket ${ticket.id} as awaiting response.`)
        const updateObj = {statuses_id: indComment.ticket.statuses_id = "3"};
        fetch(`https://desolate-wave-23214.herokuapp.com/tickets/${ticket.id}`, {
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
        console.log(`marking ticket ${ticket.id} as in progress.`)
        const updateObj = {statuses_id: indComment.ticket.statuses_id = "1"};
        fetch(`https://desolate-wave-23214.herokuapp.com/tickets/${ticket.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateObj),
        })
        .then(onProgressTicket);
        window.location.reload(true);
    }

    function handleDeleteClick() {
        fetch(`https://desolate-wave-23214.herokuapp.com/tickets/${id}/comments`, {
            method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => {onDeleteComment(indComment);
    });
}

    return (
        <tbody>
            <tr className="title">
                <td className="title">Ticket ID: {ticket.id}</td>
                <td className="title">{ticket.ticket_title}</td>
            </tr>
            <tr>
                <td className="section">Device Affected ID: {ticket.devices_id}<br />
                Station Affected ID: {ticket.stations_id}</td>
                <td rowSpan="3">{ticket.ticket_details}</td>
            </tr>
{/*             <tr>
                <td className="section">Created At: {moment({ticket.created_at}).format("ll")}< br/>
                Last Updated At: {moment({ticket.updated_at}).format("ll")}</td>
            </tr> */}
            <tr>
                <td className="section">{/* Ticket Owner ID: {users_id}<br /> */}
                Ticket Status ID: {ticket.statuses_id}</td>
            </tr>
            <tr>
                <td  className="section">
                Ticket Controls<br />
                <button onClick={handleProgressClick}>Mark as in progress (1)</button><br />
                <button onClick={handleCompletedClick}>Mark as completed (2)</button><br />
                <button onClick={handleResponseClick}>Mark as awaiting response (3)</button>
                </td>
            </tr>
            <tr>
                <td>Written by: {user_id} at {created_at}:</td>
                <td><button type="button" className="btn btn-danger" onClick={handleDeleteClick}>X</button></td>
            </tr>
            <tr>
                <td>{comment}</td>
            </tr>
            </tbody>
        );

    }

export default TicketWithCommentsCard;