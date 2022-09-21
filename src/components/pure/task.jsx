import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

//models
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

//importamos la hoja de estilos de task.scss

import '../../styles/task.scss';



const TaskComponent = ({ task , complete, remove }) => {

    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        };
    }, [task]);

    
    
    /**
     * Function that returns a Badge
     * depending on the level o the task
     */
    const taskLevelBadge = () => {
        switch (task.level){
            case LEVELS.NORMAL:
                return(<h6 className='mb-0'><span className='badge bg-primary'>{task.level}</span></h6>);
            case LEVELS.URGENTE:
                return(<h6 className='mb-0'><span className='badge bg-warning'>{task.level}</span></h6>);
            case LEVELS.BLOCKING:
                return(<h6 className='mb-0'><span className='badge bg-danger'>{task.level}</span></h6>);
            default:
                break;
        
            }
    }

    /**
     * 
     * Function that returns icon depending on completion of the task
     */

    const taskCompletedIcon = () => {
        if(task.completed){
            return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={ {color: 'green'}}></i>)
        }else{
            return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={ {color: 'grey'}}></i>);
        }
    }

    const taskCompleted = {
        color: 'gray',
        textDecoration: 'line-through',
        fontWeight: 'bold'
    };


    const taskPending = {
        color: 'tomato',
        fontWeight: 'bold'
    };

    return (

        <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending}>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {/*  Execution of funtion to return badge element */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {/*  Execution of function to return icon dependig on completion */}
                {taskCompletedIcon()}
                <i className='bi-trash task-action' style={ {color: 'tomato'}} onClick={() => remove(task)} ></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
