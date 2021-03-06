import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import TaskState from '../task/subs/TaskState';

const TasksPublished = (props) => {
  const onViewAllBtn = () => {
    props.history.push('/mytasks');
  };
  if (!props.published_tasks || props.published_tasks.tasks_data.length === 0) {
    return <React.Fragment></React.Fragment>;
  }
  return (
    <div className='card card-body mb-2'>
      <div className='tasks-heading'>
        Tasks You Posted
        <button onClick={onViewAllBtn} className='btn notification-btn fl-r'>
          View All
        </button>
      </div>
      <div className='redeem-text' className='notif-list'>
        {props.published_tasks.tasks_data.map((task, id) => {
          return (
            <div key={id}>
              <Link className='clear-a' to={`/t/${task._id}`}>
                <div className='notification-item'>
                  <div className='sm-task-top'>I want someone to</div>
                  <TaskState state={task.state} />
                  <div className='notif-text'>{task.headline}</div>
                  <div className='dt-added-on sm-task-footer'>
                    Updated {moment(task.updatedAt).fromNow()} •{' '}
                    {task.taskpoints} pts
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TasksPublished;
