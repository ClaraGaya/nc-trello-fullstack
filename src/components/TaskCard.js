import React from 'react';


const TaskCard = function (props) {
  return (
    <article>
      <p>{props.body}</p>
    </article>
  );
};

export default TaskCard;