import { Document } from 'mongoose'

import { comment, tests, meta } from 'types/main'

export default interface IProject extends Document {
  id: string
  userid: string
  isPublic: boolean
  meta: meta
  config: object
  initialState: number
  states: object[]
  transitions: object[]
  comments: comment[]
  tests: tests
}