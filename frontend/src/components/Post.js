import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import CommentList from '../containers/CommentList'
import Votes from './Votes'

function Post(props) {
  const {
    post,
    comments,
    editPostStart,
    deletePostStart,
    votePost,
  } = props
  return (
    <div className="post">
      <div className="card details">
        <div className="card-block">
          <div className="row">
            <div className="col-sm-4 col-lg-1">
              <Votes
                id={post.id}
                score={post.voteScore}
                onVote={votePost}
                />
            </div>
            <div className="col-sm-8 col-lg-11">
              <h4 className="card-title">
                {post.title}
              </h4>
              <h6 className="card-subtitle text-muted">
              posted by { post.author } to&nbsp;
              <Link to={`/${post.category}/`}>
                {post.category}
              </Link>
              &nbsp;on {moment(post.timestamp).format('llll')}
              </h6>
              <p className="card-text body">
                {post.body}
              </p>
              <button
                className="card-link btn btn-sm btn-secondary"
                onClick={() => editPostStart(post)}
              >
                Edit
              </button>
              <button
                className="card-link btn btn-sm btn-secondary"
                onClick={(e) => deletePostStart(post.id, true)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <CommentList
        comments={comments}
        parentId={post.id}
      />
    </div>
  )
}

export default Post;
