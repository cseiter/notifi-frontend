import React from 'react';

function TicketWithCommentsCard({indComment,onDeleteComment}) {
    const {id,comment,user_id,created_at} = indComment;

    function handleDeleteClick() {
        fetch(`https://desolate-wave-23214.herokuapp.com/comments/${id}`, {
            method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => {onDeleteComment(indComment);
    });
}

    return (
        <tbody>
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