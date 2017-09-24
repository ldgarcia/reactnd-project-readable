import React from 'react'

function Votes({ id, score, onVote }) {
  return (
    <div className="votes">
      <button
        className="control up"
        onClick={() => { onVote(id, 'upVote') }}
      >
        ▲
      </button>
      <strong className="score">{score}</strong>
      <button
        className="control down"
        onClick={() => { onVote(id, 'downVote') }}
      >
        ▼
      </button>
    </div>
  )
}

export default Votes
