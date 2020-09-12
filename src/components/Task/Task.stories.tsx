import React from 'react'
import { TaskModel } from '../../models/task.model'
import { createStory } from '../../story.utils'

import Task from '.'

export default {
  component: Task,
  title: 'Task'
}

type TaskArgs = { task: TaskModel }

const createTaskStory = createStory((args: TaskArgs) => {
  const props = args as any
  return <Task {...props} />
})

export const Default = createTaskStory({
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date()
  }
})

export const Pinned = createTaskStory({
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED'
  }
})

export const Archived = createTaskStory({
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED'
  }
})