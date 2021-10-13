import React, {useEffect, useState} from 'react';
import TicketWithCommentsContainer from './TicketWithCommentsContainer';

function TicketWithCommentsPage() {
  const [comments,setComments] = useState([]);

  useEffect(() => {
    fetch('https://desolate-wave-23214.herokuapp.com/tickets/1/comments')
    .then((r) => r.json())
    .then(setComments);
  },[]);

  function handleDeleteComment(commentToDelete) {
    const updatedComments = comments.filter((comment) => comment.id !== commentToDelete.id);
    setComments(updatedComments);
  }

  return (
    <main>
      <TicketWithCommentsContainer
      comments={comments}
      onDeleteComments={handleDeleteComment}
      />
    </main>
);
}

export default TicketWithCommentsPage;