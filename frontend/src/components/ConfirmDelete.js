import React from 'react'
import Modal from 'react-modal'

function ConfirmDelete(props) {
  const {
    form,
    handleFormSubmit,
    handleModalClose,
    modalIsOpen,
    submitButtonIsEnabled,
  } = props
  return (
    <Modal
      className="modal-dialog"
      overlayClassName="overlay"
      contentLabel="Confirm deletion"
      isOpen={modalIsOpen}
      onRequestClose={handleModalClose}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Confirm deletion</h5>
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={handleModalClose}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form
          onSubmit={handleFormSubmit}
          onReset={handleModalClose}
        >
          <div className="modal-body">
            <input
              name="id"
              type="hidden"
              value={form.id}
            />
            <p>Do you want to delete this item?</p>
          </div>
          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-danger"
              disabled={!submitButtonIsEnabled}
            >
              Delete
            </button>
            <button
              type="reset"
              className="btn btn-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default ConfirmDelete
