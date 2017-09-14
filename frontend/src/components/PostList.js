import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import getSortFunction from '../utils/sort'
import SortForm from '../components/SortForm'
import PostVotes from '../containers/PostVotes'

class PostList extends Component {
  render() {
    const { posts, ui, sortForm, formInputChange, deletePost, openAddPostModal, openEditPostModal } = this.props
    return (
      <div>
        <div className="row">
          <div className="col-lg-8">
            Showing { posts.length } of { posts.length } { posts.length === 1 ? 'post' : 'posts' }
            <SortForm
              form={ sortForm }
              handleInputChange={ formInputChange.bind(this, 'sort') }
            />
          </div>
          <div className="col-lg-4 text-right">
            <button className="btn btn-primary" type="button" onClick={ openAddPostModal }>
              Add post
            </button>
          </div>
        </div>
        <hr />
        <ol className="posts">
          { posts.sort(getSortFunction(sortForm)).map((post, index) => (
            <li key={index} className="post">
              <PostVotes post={ post } />
              <div className="info">
                <span className="rank">{ index+1 }.</span>
                <strong className="title">
                  <Link to={`/${post.category}/${post.id}/`}>
                    {post.title}
                  </Link>
                </strong>
                <p className="details">
                  posted by { post.author } to <Link to={ `/${post.category}/` }>{ post.category } </Link> on { moment(post.timestamp).format('llll') }
                  &nbsp;<Link to={`/${post.category}/${post.id}/`}>{ post.comments || 0} comments</Link>
                  &nbsp;<button className="btn btn-sm btn-default" onClick={ e => openEditPostModal(post) }>
                    Edit
                  </button>&nbsp;
                  <button className="btn btn-sm btn-default" onClick={ e => deletePost(post.id) }>
                    Delete
                  </button>
                </p>
              </div>
            </li>
          ))}
        </ol>
        { ui.loadingPostsError === true && (
          <div className="alert alert-primary" role="alert">
            There was an error loading the posts.
          </div>
        )}
      </div>
    )
  }

}

export default PostList;
