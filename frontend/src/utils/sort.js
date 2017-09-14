const getSortFunction = ({ by, order }) => {
  const multiplier = order === 'DESC' ? 1 : -1;
  switch(by) {
    case 'SORT_BY_DATE':
      return (a, b) => multiplier * (b.timestamp - a.timestamp)
    default:
      return (a, b) => multiplier * (b.voteScore - a.voteScore)
  }
}

export default getSortFunction
