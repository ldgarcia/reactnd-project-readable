import React from 'react'

import getSortFunction from '../utils/sort'
import Comment from './Comment'
import SortForm from './SortForm'

const CommentList = props => {
  const {
    parentId,
    comments,
    sortForm,
    openAddCommentModal,
    openEditCommentModal,
    formInputChange,
    deleteComment
  } = props
  return (
    <div className="comments">
      <div className="row">
        <div className="col-lg-8">
          Showing { comments.length } of { comments.length } { comments.length === 1 ? 'comment' : 'comments' }
          <SortForm
            form={ sortForm }
            handleInputChange={ formInputChange.bind(this, 'sort') }
          />
        </div>
        <div className="col-lg-4 text-right">
          <button
            className="btn btn-primary"
            type="button"
            onClick={ e => openAddCommentModal(parentId) }
          >
            Add comment
          </button>
        </div>
      </div>
      <hr />
      { comments.sort(getSortFunction(sortForm)).map(comment => (
        <Comment
          key={ comment.id }
          comment={ comment }
          editComment={ openEditCommentModal }
          deleteComment={ deleteComment }
        />
      ))}
    </div>
  )
}

export default CommentList
