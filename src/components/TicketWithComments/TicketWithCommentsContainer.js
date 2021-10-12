import React from 'react';
import TicketWithCommentsCard from './TicketWithCommentsCard';

function TicketWithCommentsContainer({comments,onDeleteComment}) {
    const ticketWithCommentsCards = comments.map((comment) => (
        <TicketWithCommentsCard
            key={comment.id}
            indComment={comment}
            onDeleteComment={onDeleteComment}
        />
    ));

    return (
        <section>
            <h2><center>Ticket Comments</center></h2>
            <table>
                {ticketWithCommentsCards}
            </table>
        </section>
    );
}

export default TicketWithCommentsContainer;