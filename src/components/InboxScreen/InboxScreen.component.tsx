import React from 'react'
import TaskList from '../TaskList'

interface InboxScreenProps {
  error: any
}

const Error = (
  <div className="page lists-show">
    <div className="wrapper-message">
      <span className="icon-face-sad" />
      <div className="title-message">Oh no!</div>
      <div className="subtitle-message">Something went wrong</div>
    </div>
  </div>
)

const InboxScreenComponent: React.FC<InboxScreenProps> = ({ error }) => {
  if (error) return Error

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList />
    </div>
  )
}

export default InboxScreenComponent

