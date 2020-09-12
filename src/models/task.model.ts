export type TaskState = 'TASK_INBOX' | 'TASK_PINNED' | 'TASK_ARCHIVED'

export interface TaskModel {
  id: string
  title: string
  state: TaskState
  updatedAt: Date
}