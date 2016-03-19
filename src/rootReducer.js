import { createReducer } from 'redux-create-reducer'
import mirrorCreator from 'mirror-creator'

export const actionTypes = mirrorCreator([
  'SET_GREETING'
])

const initialState = {greeting: 'Hello'}

export default createReducer(initialState, {
  [actionTypes.SET_GREETING] (state, action) {
    const greeting = action.payload
    return {greeting}
  }
})
