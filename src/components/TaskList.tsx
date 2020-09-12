import React from 'react'
import { connect } from 'react-redux'
import { AppAction, AppState, archiveTask, pinTask } from '../lib/redux'

import { TaskModel } from '../models/task.model'
import Task from './Task'


interface TaskListProps {
  loading: boolean
  tasks: TaskModel[]
  onPinTask(id: string): void
  onArchiveTask(id: string): void
}

const LoadingRow = (
  <div className="loading-item">
    <span className="glow-checkbox" />
    <span className="glow-text">
      <span>Loading</span> <span>cool</span> <span>state</span>
    </span>
  </div>
);

const Loading = (
  <div className="list-items">
    {LoadingRow}
    {LoadingRow}
    {LoadingRow}
    {LoadingRow}
    {LoadingRow}
    {LoadingRow}
  </div>
)

const Empty = (
  <div className="list-items">
    <div className="wrapper-message">
      <span className="icon-check" />
      <div className="title-message">You have no tasks</div>
      <div className="subtitle-message">Sit back and relax</div>
    </div>
  </div>
)

export const TaskListComponent: React.FC<TaskListProps> = ({ loading, tasks, onArchiveTask, onPinTask }) => {
  const events = {
    onPinTask,
    onArchiveTask
  }

  if (loading) return Loading

  if (tasks.length === 0) return Empty

  const tasksInOrder = [
    ...tasks.filter(t => t.state === 'TASK_PINNED'),
    ...tasks.filter(t => t.state !== 'TASK_PINNED')
  ]

  return (
    <div className="list-items">
      {tasksInOrder.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  )
}

const TaskList = connect(
  ({ tasks, loading }: AppState ): Pick<AppState, 'tasks' | 'loading'> => ({
    tasks: tasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'),
    loading
  }),
  (disaptch: React.Dispatch<AppAction>) => ({
    onArchiveTask: (id: string) => disaptch(archiveTask(id)),
    onPinTask: (id: string) => disaptch(pinTask(id))
  })
)(TaskListComponent)

export default TaskList