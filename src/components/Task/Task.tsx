import React from 'react'
import { TaskModel } from '../models/task.model'

interface TaskProps {
  task: TaskModel
  onArchiveTask(id: string): void
  onPinTask(id: string): void
}

const Task: React.FC<TaskProps> = ({ task: { title, id, state }, onArchiveTask, onPinTask }) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input 
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)}/>
      </label>
      <div className="title">
        <input  type="text" value={title} readOnly={true} placeholder="Input title" />
      </div>
      <div className="actions" onClick={evt => evt.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`}/>
          </a>
        )}
      </div>
    </div>
  )
}

export default Task