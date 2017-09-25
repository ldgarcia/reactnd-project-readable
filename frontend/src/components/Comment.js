import React from 'react'
import moment from 'moment'

import Votes from './Votes'

function Comment(props) {
  const {
    comment,
    editCommentStart,
    deleteCommentStart,
    voteComment,
  } = props

  return (
    <div className="comment">
      <Votes
        id={comment.id}
        score={comment.voteScore}
        onVote={voteComment}
      />
      <p className="info">
        {comment.body}
        <br/>
        <span className="text-muted">
          by {comment.author} on {moment(comment.timestamp).format('llll')}
        </span>
        &nbsp;
        <button
          className="btn btn-sm btn-secondary"
          onClick={() => editCommentStart(comment)}
        >
          Edit
        </button>
        &nbsp;
        <button
          className="btn btn-sm btn-secondary"
          onClick={() => deleteCommentStart(comment.id)}
        >
          Delete
        </button>
      </p>
    </div>
  )
}

export default Comment
