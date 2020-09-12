import { connect } from 'react-redux'

import { AppDispatch, AppState } from '../../lib/redux'

const mapAppStateToProps = ({ tasks, loading }: AppState) => ({ 
  tasks: tasks.filter(task => task.state !== 'TASK_ARCHIVED'),
  loading
})

const mapAppDispatchToProps = (dispatch: AppDispatch) => ({
  onArchiveTask: () => {},
  onPinTask: () => {}
})

const TaskListContainer = connect(
  mapAppStateToProps,
  mapAppDispatchToProps
)

export default TaskListContainer