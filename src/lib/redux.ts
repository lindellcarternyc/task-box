import { createStore } from 'redux'
import { createTaskModel, TaskModel, TaskState } from '../models/task.model'

export interface AppState {
  tasks: TaskModel[],
  loading: boolean
}

export const TASK_ACTION_TYPES = {
  ARCHIVE_TASK: 'ARCHIVE_TASK',
  PIN_TASK: 'PIN_TASK'
} as const

export const archiveTask = (id: string) => ({
  type: TASK_ACTION_TYPES.ARCHIVE_TASK,
  payload: { id }
})

export const pinTask = (id: string) => ({
  type: TASK_ACTION_TYPES.PIN_TASK,
  payload: { id }
})

export type AppAction = ReturnType<typeof archiveTask> | ReturnType<typeof pinTask>

const taskStateReducer = (taskState: TaskState) => (appState: AppState, action: AppAction): AppState => {
  return {
    ...appState,
    tasks: appState.tasks.map(task => (
      task.id === action.payload.id ? { ...task, state: taskState } : task
    ))
  }
}

const DEFAULT_TASKS: TaskModel[] = [
  createTaskModel({ id: '1', title: 'Something', state: 'TASK_INBOX' }),
  createTaskModel({ id: '2', title: 'Something more', state: 'TASK_INBOX' }),
  createTaskModel({ id: '3', title: 'Something else', state: 'TASK_INBOX' }),
  createTaskModel({ id: '4', title: 'Something again', state: 'TASK_INBOX' }),
]

const INITIAL_APP_STATE: AppState = {
  tasks: DEFAULT_TASKS,
  loading: false
}

const reducer = (state: AppState = INITIAL_APP_STATE, action: AppAction): AppState => {
  switch (action.type) {
    case TASK_ACTION_TYPES.ARCHIVE_TASK: {
      return taskStateReducer('TASK_ARCHIVED')(state, action)
    }
    case TASK_ACTION_TYPES.PIN_TASK: {
      return taskStateReducer('TASK_PINNED')(state, action)
    }

    default: {
      return state
    }
  }
}



const store = createStore(reducer, INITIAL_APP_STATE)

export default store

export type AppDispatch = React.Dispatch<AppAction>