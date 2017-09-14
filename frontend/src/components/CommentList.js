import React from 'react'

import Comment from './Comment'
import SortForm from './SortForm'

const CommentList = ({ comments }) => (
<div>
  <div className="row">
    <div className="col-lg-8">
      Showing { comments.length } of { comments.length } { comments.length === 1 ? 'comment' : 'comments' }
      <SortForm
        form={ {by: 'SORT_BY_DATE', order: 'DESC'} }
        handleInputChange={ null }
      />
    </div>
    <div className="col-lg-4 text-right">
      <button className="btn btn-primary" type="button" onClick={ null }>
        Add comment
      </button>
    </div>
  </div>
  <hr />
  { comments.map(comment => (
    <Comment key={ comment.id } comment={ comment } />
  ))}
</div>
)

export default CommentList
