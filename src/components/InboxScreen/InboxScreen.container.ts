import { connect } from 'react-redux'
import { AppState } from '../../lib/redux'

const InboxScreenContainer = connect(
  ({ error }: AppState) => ({ error })
)

export default InboxScreenContainer