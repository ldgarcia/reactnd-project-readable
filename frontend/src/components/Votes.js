import React from 'react'

const Votes = ({ score, vote }) => (
  <div className="votes">
    <button className="control up" onClick={ (e) => { e.preventDefault(); vote("upVote") } }>▲</button>
    <b className="score">{ score }</b>
    <button className="control down" href="#" onClick={ (e) => { e.preventDefault(); vote("downVote") } }>▼</button>
  </div>
)

export default Votes
