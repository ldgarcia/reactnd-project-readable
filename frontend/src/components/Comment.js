import React from 'react'
import moment from 'moment'

import CommentVotes from '../containers/CommentVotes'

const Comment = ({ comment, editComment, deleteComment }) => (
  <div className="comment">
    <CommentVotes comment={ comment } />
    <p className="info">
      { comment.body }
      <br/>
      <span className="text-muted">
        by { comment.author } on { moment(comment.timestamp).format('llll') }
      </span>
      &nbsp;
      <button
        className="btn btn-sm btn-secondary"
        onClick={ e => editComment(comment) }
      >
        Edit
      </button>
      &nbsp;
      <button
        className="btn btn-sm btn-secondary"
        onClick={ e => deleteComment(comment.id) }
      >
        Delete
      </button>
    </p>
  </div>
)

export default Comment
