import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import getSortFunction from '../utils/sort'
import SortForm from '../components/SortForm'
import Votes from '../components/Votes'

class PostList extends Component {
  render() {
    const {
      match,
      posts,
      ui,
      sortForm,
      onInputChange,
      addPostStart,
      editPostStart,
      deletePostStart,
      votePost,
    } = this.props
    return (
      <div>
        <div className="row">
          <div className="col-lg-8">
            Showing {posts.length} of {posts.length} {posts.length === 1 ? 'post' : 'posts'}
            <SortForm
              form={sortForm}
              handleInputChange={onInputChange.bind(this, 'sort')}
            />
          </div>
          <div className="col-lg-4 text-right">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => addPostStart(match.params.category)}
            >
              Add post
            </button>
          </div>
        </div>
        <hr />
        <ol className="posts">
          { posts.sort(getSortFunction(sortForm)).map((post) => (
            <li key={post.id} className="post">
              <Votes
                id={post.id}
                score={post.voteScore}
                onVote={votePost}
              />
              <div className="info">
                <strong className="title">
                  <Link to={`/${post.category}/${post.id}/`}>
                    {post.title}
                  </Link>
                </strong>
                <p className="details">
                  posted by {post.author} to <Link to={`/${post.category}/`}>{post.category} </Link> on {moment(post.timestamp).format('llll')}
                  &nbsp;
                  <Link
                    to={`/${post.category}/${post.id}/`}
                  >
                    {post.comments} {post.comments !== 1 ? 'comments' : 'comment'}
                  </Link>
                  &nbsp;
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => editPostStart(post)}
                  >
                    Edit
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => deletePostStart(post.id)}
                  >
                    Delete
                  </button>
                </p>
              </div>
            </li>
          ))}
        </ol>
        { ui.loadingPostsError === true && (
          <div className="alert alert-danger" role="alert">
            There was an error loading the posts.
          </div>
        )}
      </div>
    )
  }

}

export default PostList;
