import React from 'react';

const EditExpensePage = (props) => {
  console.log(props)
  return (
    <div>
      Editing item {props.match.params.id}
    </div>
  )
};

export default EditExpensePage;