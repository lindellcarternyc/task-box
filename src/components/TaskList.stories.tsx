import React from 'react'

import { TaskListComponent as TaskList } from './TaskList'
import * as TaskStories from './Task.stories'
import { TaskModel } from '../models/task.model'
import { createStory } from '../story.utils'

export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [
    (story: Function) => (
      <div style={{ padding: '3rem' }}>
        {story()}
      </div>
    )
  ]
}

type TaskListStoryArgs = { 
  loading?: boolean
  tasks: TaskModel[]
}

const createTaskListStory = createStory((args: TaskListStoryArgs) => {
  return (
    <TaskList { ...args as any }/>
  )
})

export const Default = createTaskListStory({
  tasks: [
    { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
    { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
    { ...TaskStories.Default.args.task, id: '3', title: 'Task 3 '},
    { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
    { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
    { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' }
  ]
})

export const WithPinnedTasks = createTaskListStory({
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { ...Default.args.tasks[5], title: 'Task 6 (pinned)', state: 'TASK_PINNED' }
  ]
})

export const Loading = createTaskListStory({
  tasks: [],
  loading: true
})

export const Empty = createTaskListStory({
  ...Loading.args,
  loading: false
})