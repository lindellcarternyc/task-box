// import React from 'react'

type StoryTemplate = (args: any) => JSX.Element
type StoryTemplateArgs<S extends StoryTemplate> = Parameters<S>[0]
type Story<S extends StoryTemplate> = (S & { args: StoryTemplateArgs<S> }) 

export const createStory = <T extends StoryTemplate>(template: T) => (args: StoryTemplateArgs<T>): Story<T> => {
  const story = template.bind({}) as any
  story.args = { ...args }
  return story
}