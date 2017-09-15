import React from 'react'
import Modal from 'react-modal'

const CommentForm = props => {
  const {
    action,
    form,
    submitButtonIsEnabled,
    handleFormSubmit,
    handleInputChange,
    handleModalClose,
    modalIsOpen } = props
  const title = action === 'edit' ? 'Edit comment' : 'Add comment'
  return (
    <Modal
      className="modal-dialog"
      overlayClassName="overlay"
      contentLabel={ title }
      isOpen={ modalIsOpen }
      onRequestClose={ handleModalClose }
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{ title }</h5>
          <button type="button" className="close" aria-label="Close" onClick={ handleModalClose }>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form onSubmit={ handleFormSubmit } onReset={ handleModalClose }>
          <div className="modal-body">
            { action === 'add' && (
              <div className="form-group">
                <label>Author</label>
                <input name="author" type="text" className="form-control" value={ form.author } onChange={ handleInputChange } required />
              </div>
            )}
            <div className="form-group">
              <label>Body</label>
              <textarea
                className="form-control"
                name="body"
                rows="4"
                value={ form.body }
                onChange={ handleInputChange }
                required
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-primary" disabled={ !submitButtonIsEnabled }>Submit</button>
            <button type="reset" className="btn btn-secondary">Close</button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default CommentForm
