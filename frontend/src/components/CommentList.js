import React from 'react'

import getSortFunction from '../utils/sort'
import Comment from './Comment'
import SortForm from './SortForm'

function CommentList(props) {
  const {
    parentId,
    comments,
    sortForm,
    onInputChange,
    addCommentStart,
    editCommentStart,
    voteComment,
    deleteComment,
  } = props
  return (
    <div className="comments">
      <div className="row">
        <div className="col-lg-8">
          Showing {comments.length} of {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
          <SortForm
            form={sortForm}
            handleInputChange={onInputChange.bind(this, 'sort')}
          />
        </div>
        <div className="col-lg-4 text-right">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => addCommentStart(parentId)}
          >
            Add comment
          </button>
        </div>
      </div>
      <hr />
      { comments.sort(getSortFunction(sortForm)).map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
          deleteComment={deleteComment}
          voteComment={voteComment}
          editCommentStart={editCommentStart}
        />
      ))}
    </div>
  )
}

export default CommentList
