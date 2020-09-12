export type TaskState = 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED'

export interface TaskModel {
  id: string
  title: string
  state: TaskState
  updatedAt: Date
}

export const createTaskModel = (args: Omit<TaskModel, 'updatedAt'>): TaskModel => {
  return {
    ...args,
    updatedAt: new Date()
  }
}