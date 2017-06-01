import React from 'react';


const TaskCard = function (props) {
  return (
    <li>
      <p>{props.body}</p>
    </li>
  );
};

export default TaskCard;