import React from 'react'

import getSortFunction from '../utils/sort'
import Comment from './Comment'
import SortForm from './SortForm'

const CommentList = ({ comments, sortForm, formInputChange, deleteComment }) => (
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
      <button className="btn btn-primary" type="button" onClick={ null }>
        Add comment
      </button>
    </div>
  </div>
  <hr />
  { comments.sort(getSortFunction(sortForm)).map(comment => (
    <Comment key={ comment.id } comment={ comment } deleteComment={ deleteComment } />
  ))}
</div>
)

export default CommentList
