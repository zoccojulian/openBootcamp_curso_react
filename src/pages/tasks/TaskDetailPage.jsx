import React from 'react';
import { useParams } from 'react-router-dom';

export default function TaskDetailPage( { tasks } ) {

    const {id} = useParams();
    const task = tasks[id-1];
    console.log(task);

  return (
    <div>
      <h1>Task Detail - { id }</h1>
      <h2>{ task.name }</h2>
      <h2>{ task.description }</h2>
    </div>
  )
}
