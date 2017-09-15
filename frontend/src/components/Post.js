import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import moment from 'moment'

import PostVotes from '../containers/PostVotes'
import CommentList from '../containers/CommentList'

const Post = ({ post, comments, shouldRedirect, openEditPostModal, deletePost }) => (
  <div className="post">
    <div className="card details">
      <div className="card-block">
        <div className="row">
          <div className="col-sm-4 col-lg-1">
            <PostVotes post={ post } />
          </div>
          <div className="col-sm-8 col-lg-11">
            <h4 className="card-title">
              { post.title }
            </h4>
            <h6 className="card-subtitle text-muted">
            posted by { post.author } to <Link to={ `/${post.category}/` }>{ post.category } </Link> on { moment(post.timestamp).format('llll') }
            </h6>
            <p className="card-text body">
              { post.body }
            </p>
            <button className="card-link btn btn-sm btn-secondary" onClick={ e => openEditPostModal(post) }>
              Edit
            </button>
            <button className="card-link btn btn-sm btn-secondary" onClick={ e => deletePost(post.id) }>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <CommentList comments={ comments } />
  </div>
)

export default Post;
