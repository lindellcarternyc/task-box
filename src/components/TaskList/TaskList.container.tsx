import { connect } from 'react-redux'

import { AppDispatch, AppState, archiveTask, pinTask } from '../../lib/redux'

const mapAppStateToProps = ({ tasks, loading }: AppState) => ({ 
  tasks: tasks.filter(task => task.state !== 'TASK_ARCHIVED'),
  loading
})

const mapAppDispatchToProps = (dispatch: AppDispatch) => ({
  onArchiveTask: (id: string) => dispatch(archiveTask(id)),
  onPinTask: (id: string) => dispatch(pinTask(id))
})

const TaskListContainer = connect(
  mapAppStateToProps,
  mapAppDispatchToProps
)

export default TaskListContainer