import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/taskForm';
import TaskFormik from '../pure/forms/taskFormik';



const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Description1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Description2', false, LEVELS.URGENTE);
    const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.BLOCKING);

    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setTimeout(() => {
            setLoading(false);
        }, 2000)
        return () => {
            console.log('TaskList component is going to unmount...')
        };
    }, [tasks]);

    const completeTask = (task) => {
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed;
        //We update the state of the component with the new list of tasks and it will update the
        //iteration of the tasks in order to show the task updtae
        setTasks(tempTask);
    };

    const deleteTask = (task) => {
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        setTasks(tempTask)
    }

    const addTask = (task) => {
        const tempTask = [...tasks];
        tempTask.push(task);
        setTasks(tempTask);
    };

    //es un componente
    const Table = () => {
        return (
            <table>
                        <thead>
                            <tr>
                                <th scope='col'>Title</th>
                                <th scope='col'>Description</th>
                                <th scope='col'>Priority</th>
                                <th scope='col'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task,index) => {
                                return (
                                    <TaskComponent 
                                        key={index}
                                        task={task}
                                        complete={completeTask}
                                        remove={deleteTask}>
                                    </TaskComponent>
                                )
                            })}
                        </tbody>
                    </table>
        )
    }

    let tasksTable = <Table></Table>;

    if(tasks.length > 0){
        tasksTable = <Table></Table>;
    }else{
        tasksTable = (
            <div>
                <h3>There are no tasks to show</h3>
                <h4>Please, create one </h4>
            </div>
        
        );
    }

    const loadingStyle ={
        color: 'grey',
        fontSize: '30px',
        fontWeigth: 'bold'
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                {/* CardeHeader (title) */}
                    <div className='card-header p-3'>
                        <h5>
                        Your Task:
                        </h5>
                    </div>
                </div>
                {/*Card Body (content) */}
                <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'}}>
                {/*TODO: Add Loading Spinner */}
                    {loading ? (<p style={loadingStyle}>Loading Task...</p>) : tasksTable}
                </div>
            </div>
            <TaskForm add={addTask} length={tasks.length}></TaskForm>
            {/* <TaskFormik add={ addTask}></TaskFormik> */}
        </div>
    );
};


export default TaskListComponent;
