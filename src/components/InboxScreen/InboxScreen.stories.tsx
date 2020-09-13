import React from 'react'
import { Provider } from 'react-redux'
import { action } from '@storybook/addon-actions'
import * as TaskListStories from '../TaskList/TaskList.stories'


import { createStory } from '../../story.utils'

import InboxScreenComponent from './InboxScreen.component'

// Mock store
const store = {
  getState() {
    return {
      tasks: TaskListStories.Default.args.tasks
    }
  },
  subscribe() { },
  dispatch: action('dispatch')
}

export default {
  component: InboxScreenComponent,
  title: 'InboxScreen',
  decorators: [
    (story: Function): JSX.Element => (
      <Provider store={store as any}>
        {story()}
      </Provider>
    )
  ]
}

const createInboxScreenStory = createStory((args: { error?: string }) => {
  return (
    <InboxScreenComponent error={args.error} />
  )
})

export const Default = createInboxScreenStory({})

export const Error = createInboxScreenStory({
  error: 'Something'
})